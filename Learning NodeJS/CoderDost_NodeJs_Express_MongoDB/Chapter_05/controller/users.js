const fs = require("fs");
const usersData = fs.readFileSync("./users.json", "utf-8");
const users = JSON.parse(usersData)["users"];

//* create
exports.createUser = (req, res) => {
  const id = users[users.length - 1].id + 1 || 1;
  const user = { id: id, ...req.body };
  users.push(user);
  res.json(users).status(201);
};

//* read
exports.getAllUsers = (req, res) => {
  res.json(users);
};
exports.getuser = (req, res) => {
  if (req.params.id > 30 || req.params.id <= 0) {
    res.sendStatus(403);
  } else {
    const user = users.find((user) => user.id === +req.params.id);
    res.json(user);
  }
};

//* update
exports.replaceUser = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const userIndex = users.findIndex((user) => user.id === +id);
  users.splice(userIndex, 1, { id: id, ...data });
  res.json({ id: id, ...data });
};
exports.updateUser = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const userIndex = users.findIndex((user) => user.id === +id);
  users.splice(userIndex, 1, { id: id, ...users[userIndex], ...data });
  res.json({ ...users[userIndex], ...data }).status(201);
};

//* delete
exports.deleteUser = (req, res) => {
  const id = req.params.id;
  const userIdx = users.findIndex((user) => user.id === +id);
  const deleteUser = users[userIdx];
  users.splice(userIdx, 1);
  res.json(deleteUser);
};
