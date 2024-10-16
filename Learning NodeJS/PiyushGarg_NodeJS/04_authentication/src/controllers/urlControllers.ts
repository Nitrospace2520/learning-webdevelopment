import express from "express";
import shortid from "shortid";
import Url from "../models/urlModel";

type UserType = {
  name: string;
  email: string;
  password: string;
  _id: string;
};

export async function createShortUrl(
  req: express.Request & Record<string, any>,
  res: express.Response
) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ message: "URL is required" });

  //* Check if the URL already exists
  const url = await Url.findOne({ redirectUrl: body.url });
  if (url) {
    url.visitHistory.push({ timestamp: Date.now() });
    await url.save();

    const allUrls = await Url.find().sort({ createdAt: -1 });
    return res.render("home", {
      id: url.shortId,
      urls: allUrls,
    });
  }

  const shortId = shortid.generate();
  await Url.create({
    shortId,
    redirectUrl: body.url,
    visitHistory: [],
    createdBy: req.user?._id,
  });

  const allUrls = await Url.find({ createdBy: req.user._id }).sort({
    createdAt: -1,
  });
  res.render("home", {
    id: shortId,
    urls: allUrls,
  });
}

export async function redirectToURL(
  req: express.Request,
  res: express.Response
) {
  const shortId = req.params.shortId;
  const url = await Url.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  if (!url) return res.status(404).json({ message: "URL not found" });

  return res.redirect(url.redirectUrl);
}

export async function getAnalytics(
  req: express.Request,
  res: express.Response
) {
  const shortId = req.params.shortId;
  const url = await Url.findOne({ shortId });
  if (!url) return res.status(404).json({ message: "URL not found" });

  res.json({
    clickCounts: url.visitHistory.length,
    visitHistory: url.visitHistory,
  });
}
