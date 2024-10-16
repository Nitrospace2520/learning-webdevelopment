import express from "express";
import { createUser, loginUser } from "../controllers/userController";

const userRouter = express.Router();
userRouter.route("/signup").post(createUser);
userRouter.route("/login").post(loginUser);

export default userRouter;
