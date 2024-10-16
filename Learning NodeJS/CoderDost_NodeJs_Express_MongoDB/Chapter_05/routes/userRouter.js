const {
  createUser,
  getAllUsers,
  getuser,
  replaceUser,
  updateUser,
  deleteUser,
} = require("../controller/users.js");
const express = require("express");
const userRouter = express.Router();

userRouter
  //$ CREATE api:-
  .post("/", createUser)
  //$ READ api:-
  .get("/", getAllUsers)
  .get("/:id", getuser)
  //$ UPDATE api:-
  .put("/:id", replaceUser)
  .patch("/:id", updateUser)
  //$ DELETE api:-
  .delete("/:id", deleteUser);

exports.userRouter = userRouter;
