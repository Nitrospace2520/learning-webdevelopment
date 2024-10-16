import express from "express";
import Url from "../models/urlModel";

export const handleHomePage = async (
  req: express.Request,
  res: express.Response
) => {
  const allUrls = await Url.find().sort({ createdAt: -1 });
  res.render("home", {
    urls: allUrls,
  });
};
