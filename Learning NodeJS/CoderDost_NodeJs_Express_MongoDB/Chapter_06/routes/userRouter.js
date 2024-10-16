const usersController = require("../controller/usersController");
const express = require("express");
const userRouter = express.Router();

userRouter
  .route("/")
  .post(usersController.createUser)
  .get(usersController.getAllUsers);
userRouter
  .route("/:id")
  .get(usersController.getUser)
  .put(usersController.replaceUser)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

exports.userRouter = userRouter;
