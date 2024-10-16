/*
/// ! Chapter: 01 
const fs = require("fs");
const { log } = require("console");
const http = require("http");
const port = process.env.PORT || 3500;

const userObj = {
  name: "Nir Dhara",
  userAgent: "Mozilla/5.0",
};
const data = fs.readFileSync("./data.json", "utf-8");
const indexHtml = fs.readFileSync("./index.html", "utf-8");
const postHTML = fs.readFileSync("./post.html", "utf-8");

const server = http.createServer((req, res) => {
  log("server stated");
  if (req.url.startsWith("/posts/")) {
    const url = req.url.split("/");
    const id = url[url.length - 1];
    if (id > 0 && id <= 30) {
      const postElementAtId = JSON.parse(data)["posts"][id - 1];
      const tagData = postElementAtId.tags
        .map((ele) => `<li>${ele}</li>`)
        .join("");
      res.setHeader("Content-Type", "text/html");
      res.end(
        postHTML
          .replace("**title**", postElementAtId.title)
          .replace("**body**", postElementAtId.body)
          .replace("**tags**", tagData)
      );
      return;
    }
  }
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(
        indexHtml
          .replace("**mongodb**", "<b>Thapa Technical</b>")
          .replace("**express**", "<u>Coder Dost</u>")
          .replace("**react**", "<i>Chai aur Code</i>")
          .replace("**node**", "<q>Coder Dost</q>")
      );
      return;
    case "/posts":
      res.setHeader("Content-Type", "application/json");
      res.end(data);
      return;
    default:
      res.setHeader("Content-Type", "text/html");
      res.writeHead(404);
      res.end(
        `<body style="background-color: #000;"><h2 style="color: #f00; background-color: #000; padding: 1rem; text-align: center;">Page Not Found!</h2></body>
        `
      );
      return;
  }
});

server.listen(port, () => {
  log(`server running at ${port}`);
});

 */
/* //! Chapter: 02 __EXPRESS__:-
const fs = require("fs");
const express = require("express");
const port = process.env.PORT || 3500;
const posts = fs.readFileSync("./data.json", "utf-8");
const server = express();

/* // $ API-Endpoint or Route:-
server.get("/", (req, res) => {
  /* 
  res.send("Hello Express"); // note: generally response.send() use for sending html content or by default its Content-Type is text/html
  res.sendFile( // note : this method is used to send file to the client but the file path should be absolute and browser will automatically detect its 'Content-Type'
    "D:/Learning Programming/Learning WebDevelopment/Project - 00/Learning NodeJS/CoderDost_NodeJs_Express_MongoDB/Chapter 00/index.html"
  );
  res.sendFile(
    "D:/Learning Programming/Learning WebDevelopment/Project - 00/Learning NodeJS/CoderDost_NodeJs_Express_MongoDB/Chapter 00/data.json"
  );
  res.status(404).json({ username: "Nitro", password: "AtinuS" });
  res.json(JSON.parse(posts)); 
  ****

  res.json({ type: "GET" });
});
server.get("/", (req, res) => res.json({ type: "GET2" })); // note: if there is multiple endpoints or route for same path and same METHOD then always the first one get the chance

server.post("/", (req, res) => res.json({ type: "POST" }));
server.put("/", (req, res) => res.json({ type: "PUT" }));
server.patch("/", (req, res) => res.json({ type: "PATCH" }));
server.delete("/", (req, res) => res.json({ type: "DELETE" }));
 **

/// $ __Midddlewares__:- (types: Application Level Middleware, Router-level Middleware, Error-handling Middleware, Built-in Middleware, Third-party Middleware)

///* Example of _Application level Middleware_ as it is run on every path or route,
/// note: this is a middleware you can say LOGGER
server.use((req, res, next) => {
  console.log(
    // req.get("accept"),
    // "\n",
    // req.get("user-agent"),
    // "\n"
    // req.headers
    " "
  );
  next();
});
//* Example of _Router-Level Middleware_
server.use(express.json());
const auth = (req, res, next) => {
  console.log(req.query, req); // 'undefined' for body...
  if (req.query.username === "nitro" || req.username === "nitro") {
    next();
  } else {
    res.sendStatus(401);
  }
};
// server.use(auth); // -> for this it would act like _application-level middleware_
server.get("/user", auth, (req, res) =>
  res.json({ type: "GET", username: "nitro", password: "AtinuS" })
);
server.post("/user", auth, (req, res) =>
  res.json({ type: "POST", username: "nitro", password: "AtinuS" })
);
server.put("/user", auth, (req, res) =>
  res.json({ type: "PUT", username: "nitro", password: "AtinuS" })
);

server.listen(port, () => console.log(`server running at ${port}`));
 */
/* //! Chapter: 03 __MiDDLEWARE__
const express = require("express");
const port = process.env.PORT || 3500;
const server = express();

//* __APPLICATION LEVEL MIDDLEWARE__
server.use(
  "/",
  (req, res, next) => {
    console.log("middleware");
    next();
  },
  (req, res, next) => {
    res.json({ type: req.method });
    next();
  }
);

//* Router-level Middleware__
server.use(
  "/user",
  (req, res, next) => {
    if (req.query.username === "nitro") {
      next();
    } else {
      res.sendStatus(401);
    }
  },
  (req, res, next) => {
    if (req.query.password === "Atinus") {
      res.send("Welcome back Nitro");
    } else {
      next("route");
    }
  }
);
server.use("/user", (req, res, next) => {
  res.send("please a valid password");
  next();
});

const router = express.Router();
router.use((res, req, next) => {
  if (!req.headers["x-auth"]) {
    return next("router");
  }
  next();
});
router.get("/user/:id", (req, res) => {
  res.send("hello, user!");
});
server.use("/admin", router, (req, res) => {
  res.sendStatus(401);
});

//* In-built Middleware:-
server.use(express.json());
server.use((req, res, next) => {
  if (Object.keys(req.body).length >= 1) {
    res.json({ type: req.method, ...req.body });
  } else {
    res.send("Please enter ");
  }
});

//* Third party middleware:-
const morgan = require("morgan");
server.use(morgan("dev"));

server.use((req, res, next) => {
  res.json({ type: req.method });
});

server.listen(port, () => {
  console.log(`server running at ${port}`);
});
 */
//! Chapter: 04 __ROUTING__:-
const express = require("express");
const port = process.env.PORT || 3500;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.send("Hello Express");
});
server.use("/recipes", require("./routes/recipes"));

server.listen(port, () => {
  console.log(`server running at ${port}`);
});
