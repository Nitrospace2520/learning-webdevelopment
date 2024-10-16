import express from "express";
import { handleHomePage } from "../controllers/staticControllers";

const staticRouter = express.Router();

staticRouter.get("/", handleHomePage);

export default staticRouter;
