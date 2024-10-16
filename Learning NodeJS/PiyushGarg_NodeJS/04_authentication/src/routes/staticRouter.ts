import express from "express";
import {
  handleHomePage,
  handleLoginPage,
  handleSignupPage,
} from "../controllers/staticControllers";

const staticRouter = express.Router();

staticRouter.get("/", handleHomePage);
staticRouter.get("/signup", handleSignupPage);
staticRouter.get("/login", handleLoginPage);

export default staticRouter;
