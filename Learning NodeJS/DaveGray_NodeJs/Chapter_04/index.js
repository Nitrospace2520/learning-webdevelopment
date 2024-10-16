const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;
const PORT = process.env.PORT || 3500;

const logEvents = require("./logEvents");
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
// note: listen events:-
myEmitter.on("log", (message, fileName) => logEvents(message, fileName));

const serveFile = async (filePath, contentType, response) => {
  try {
    const data = await fsPromises.readFile(
      filePath,
      !contentType.includes("image") ? "utf-8" : ""
    );
    response.writeHead(!filePath.includes("404.html") ? 200 : 404, {
      "Content-Type": contentType,
    });
    response.end(data);
  } catch (error) {
    console.log(error);
    // note: emitting error events:-
    myEmitter.emit("log", `${error.name}: ${error.message}`, "errorLogs.txt");
    response.statusCode = 500;
    response.end();
  }
};

const server = http.createServer((req, res) => {
  /*
    if (req.url === "/" || req.url === "index.html") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    fs.readFile(
      path.join(__dirname, "views", "index.html"),
      "utf-8",
      (err, data) => {
        if (err) console.log(err);
        res.end(data);
      }
    );
  } */
  // note: emitting request events:-
  myEmitter.emit("log", `${req.url}\t${req.method}`, "requestLogs.txt");
  const extension = path.extname(req.url);
  let contentType;
  switch (extension) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".txt":
      contentType = "text/plain";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    case ".jpeg":
      contentType = "image/jpeg";
      break;
    default:
      contentType = "text/html";
      break;
  }
  let filePath =
    contentType === "text/html" && req.url === "/"
      ? path.join(__dirname, "views", "index.html")
      : contentType === "text/html" && req.url.slice(-1) === "/"
      ? path.join(__dirname, "views", req.url, "index.html")
      : contentType === "text/html"
      ? path.join(__dirname, "views", req.url)
      : path.join(__dirname, req.url);

  if (!extension && req.url.slice(-1) !== "/") {
    filePath += ".html";
  }
  const fileExits = fs.existsSync(filePath);
  if (fileExits) {
    serveFile(filePath, contentType, res);
  } else {
    switch (path.parse(filePath).base) {
      case "old-page.html":
        res.writeHead(301, { location: "/new-page.html" });
        res.end();
        break;
      case "www-page.html":
        res.writeHead(301, { location: "/" });
        res.end();
        break;
      default:
        serveFile(path.join(__dirname, "views", "404.html"), "text/html", res);
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost/${PORT}`);
});
