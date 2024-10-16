const express = require("express");
const {
  createShortUrl,
  redirectUrl,
  getAnalytics,
} = require("../controllers/urlControllers");

const urlRouter = express.Router();

urlRouter.route("/").post(createShortUrl);
urlRouter.route("/:shortId").get(redirectUrl);
urlRouter.route("/analytics/:shortId").get(getAnalytics);

module.exports = urlRouter;
