/* const fs = require("fs");
const jsonData = fs.readFileSync("./userdb.json", "utf-8");
// const htmlData = fs.readFileSync("./index.html", "utf-8");
// const textData = fs.readFileSync("./text.txt", "utf-8");
// ?
const express = require("express");

// * creating server:-
const server = express();

// * Running the server:-
// ? Route-API endpoint
server.get("/", (req, res) => {
  // res.send(htmlData); //* send() => use for sending the html data
  // res.sendFile(
  //   // `D:/Learning Programming/Learning WebDevelopment/Project - 00/Learning NodeJS/CoderDost_NodeJs_Express_MongoDB/Chapter 03/text.txt`   //! OR
  //   "D:/Learning Programming/Learning WebDevelopment/Project - 00/Learning NodeJS/CoderDost_NodeJs_Express_MongoDB/Chapter 03/index.html"
  // );
  // res.json(JSON.parse(jsonData));
  res.json({ type: "GET" });
});
server.post("/", (req, res) => {
  res.json({ type: "POST" });
});
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

// * listening the server:-
const port = 8080;
server.listen(port, () => {
  console.log(`Server live at http://127.0.0.1/${port}`);
});
 */

// ! Data: 20.01.2024
const express = require("express");
const server = express();
const port = process.env.PORT || 3500;

const jsonData = require("fs").readFileSync("./userdb.json", "utf-8");

/* // REVISIT: API-Endpoint:-
server.get("/", (req, res) => {
  // res.json({ type: "GET" });
  res.send(`<style>body{background-color: #000}</style>`);
  // res.send(
  //   `<h1 style="text-align: center; background-color:#000; padding: 1rem; color:#f5f5f5">Dhara Industries</h1>`
  // ); // note: mainly use for html files
  // res.sendFile(
  //   "D:/Learning Programming/Learning WebDevelopment/Project - 00/Learning NodeJS/CoderDost_NodeJs_Express_MongoDB/Chapter 03/text.txt",
  //   (err) => console.log(`err`)
  // ); // note: mainly use for plain text files
  // res.sendFile(
  //   "D:/Learning Programming/Learning WebDevelopment/Project - 00/Learning NodeJS/CoderDost_NodeJs_Express_MongoDB/Chapter 03/userdb.json"
  // );
  // res.json(JSON.parse(jsonData));
  // res.status(202).json(JSON.parse(jsonData));
});
server.post("/", (req, res) => res.json({ type: "POST" }));
server.delete("/", (req, res) => res.json({ type: "DELETE" }));
server.put("/", (req, res) => res.json({ type: "PUT" }));
server.patch("/", (req, res) => res.json({ type: "PATCH" })); */

// REVISIT: MIDDLEWARE :=
/* //? Application-level middleware
//* Example: 01
/// note: a middleware function with no mount path. This code is executed for every request to the router
server.use((req, res, next) => {
  console.log("Time : ", Date.now());
  console.log("Request-Type : ", req.method);
  next();
});
server.get("/", (req, res) =>
  res.json({ type: "GET" })
);
server.post("/", (req, res) => res.json({ type: "POST" }));

///* Example: 02 (shows a route and its handler function (middleware system))
server.use("/", (req, res, next) => {
  res.send({ type: req.method, username: "nitro", password: "AtinuS" });
});

///* Example: 03 (loading a series of middleware functions at a mount point, with a mount path)
/// note:  a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
server.use(
  "/user/:id",
  (req, res, next) => {
    console.log(`Request URL: ${req.originalUrl}`);
    next();
  },
  (req, res, next) => {
    res.send(`Request Type: ${req.method}`);
    next();
  }
);
///* Example: 04 (middleware sub-stack that handles GET requests to the /user/:id path)
server.get(
  "/user/:id",
  (req, res, next) => {
    if (req.params.id === "0") {
      next("route");
    } else {
      console.log(`ID : ${req.params.id}`);
      next();
    }
  },
  (req, res, next) => {
    res.send("User Info");
  }
); 
/// note: it will get only if req.params.id=0
server.get("/user/:id", (req, res, next) => {
  res.send(req.params.id);
});
*/
/* //? Router-level Middleware:-
//* Example: 01
const auth = (req, res, next) => {
  if (req.query.username === "nitro") {
    next();
  } else {
    res.sendStatus(401);
  }
};
const auth = (req, res, next) => {
  console.log(req);
  if (req.username) {
    next();
  } else {
    res.sendStatus(401);
  }
};

server.get("/user", auth, (req, res) =>
res.send(`<style>body{background-color: #000}</style>`)
);

//* Example: 02
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
*/
/* // ? Erro-Handling Middleware:-
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something Broke!");
  next();
});

server.get("/", (req, res) => {
  res.json({ type: "GET" });
}); */
/* // ? Built-in Middleware:-
/// note: [express.json(), express.urlencoded(), express.static()]
server.use(express.json());
// server.use(express.static("public"));

const auth = (req, res, next) => {
  // console.log(req);
  if (req.body.username === "nitro") {
    res.send({ type: req.method });
    next();
  } else {
    res.sendStatus(401);
  }
};
server.use(auth); */
// ? Third-party Middleware:-
const morgan = require("morgan");
server.use(morgan("dev"));
server.use(express.static("public"));

server.listen(port, () =>
  console.log(`server runing at port http://localhost:${port}`)
);
