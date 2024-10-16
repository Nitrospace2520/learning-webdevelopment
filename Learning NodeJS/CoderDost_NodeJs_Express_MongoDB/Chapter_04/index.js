// review: LESSON:= REST APIs AND CRUD (CREATE, READ, UPDATE, DELETE)

const express = require("express");
const port = process.env.PORT || 3500;
const server = express();
const fs = require("fs");
const morgan = require("morgan");
server.use(morgan("dev"));
server.use(express.json());

// ? files:-
const usersData = fs.readFileSync("./users.json", "utf-8");
const users = JSON.parse(usersData)["users"];

// ! CREATE APIs:- (post)
server.post("/users", (req, res) => {
  const id = users[users.length - 1].id + 1 || 1;
  const user = { id: id, ...req.body };
  users.push(user);
  // res.send("Insert");
  res.json(users).sendStatus(201);
});

// ! READ APIs:- (get)
server.get("/users", (req, res) => {
  res.json(users);
});
server.get("/users/:id", (req, res) => {
  if (req.params.id > 30 || req.params.id <= 0) {
    res.sendStatus(403);
  } else {
    const user = users.find((user) => user.id === +req.params.id);
    res.json(user);
  }
});

// ! UPDATE APIs:- (put, patch)
// note: put use for modifying the whole dataset means clear whole dateset at :id and the insert the new dataset at :id
server.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const userIndex = users.findIndex((user) => user.id === +id);
  users.splice(userIndex, 1, { id: id, ...data });
  res.json({ id: id, ...data });
});

// note: patch use for modifying the only given dataset
server.patch("/users/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const userIndex = users.findIndex((user) => user.id === +id);
  users.splice(userIndex, 1, { ...users[userIndex], ...data });
  res.json({ ...users[userIndex], ...data }).sendStatus(201);
});

// ! DELETE APIs:- (delete)
server.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const userIdx = users.findIndex((user) => user.id === +id);
  const deleteUser = users[userIdx];
  users.splice(userIdx, 1);
  res.json(deleteUser);
});

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
