const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const { errorHandler, requestLogger } = require("./middleware/index.js");
const PORT = process.env.PORT || 3500;

// REVISIT: middlewares:-
//? Custom Middleware:-
app.use(requestLogger);

//? Third Party Middleware:-
const whiteList = [
  "http://localhost:3500",
  "http://127.0.0.1:5500",
  "https://www.yourdomain.com",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin)
      callback(null, true); //* callback(error, eligibleForCors)
    else callback(new Error("Not allowed by CORS"));
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions)); //* cors => Cross Origin Resource Sharing

//? Built-in Middleware:-
app.use(express.urlencoded({ extended: false })); //* content-type: application/x-www-form-urlencoded
app.use(express.json()); //* for json
app.use(express.static(path.join(__dirname, "/public")));

// REVISIT: Routing:-
app.get("^/$|/index(.html)?", (req, res) => {
  // res.sendFile("./views/index.html", { root: __dirname }); //? OR
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});
app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page");
});
app.get("/subdir/$|/subdir/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "subdir", "index.html"));
});

//? Routing Handlers:-
app.get(
  "/express",
  (req, res, next) => {
    console.log("Welcome to Express");
    next();
  },
  (req, res) => {
    res.send("You are good to go");
  }
);
//* Chaining of Routing handlers:-
const one = (req, res, next) => {
  console.log("One");
  next();
};
const two = (req, res, next) => {
  console.log("Two");
  next();
};
const three = (req, res) => {
  console.log("Three");
  res.send("Finished!");
};
app.get("/number(.html)?", one, two, three); //? OR
app.get("/chain(.html)?", [one, two, three]);

// note: it works like default of switch:-
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type(".txt").send("4040 Not Found");
  }
});
// note: if there is any kind of error left:-
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

/* //! NOT Necessary:-
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
}); */
