import express from "express";
import {
  createShortUrl,
  redirectToURL,
  getAnalytics,
} from "../controllers/urlControllers";

const urlRouter = express.Router();

urlRouter.route("/").post(createShortUrl);
urlRouter.route("/:shortId").get(redirectToURL);
urlRouter.route("/analytics/:shortId").get(getAnalytics);

export default urlRouter;
