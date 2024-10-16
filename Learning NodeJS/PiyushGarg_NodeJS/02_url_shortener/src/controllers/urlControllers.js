// const { nanoid } = require("nanoid"); //! ERROR
const shortid = require("shortid");
const Url = require("../models/urlModel");

async function createShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ message: "URL is required" });

  const shortId = shortid();
  await Url.create({ shortId, redirectUrl: body.url, visitHistory: [] });
  return res.json({ shortId });
}

async function redirectUrl(req, res) {
  const shortId = req.params.shortId;
  const entry = await Url.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  if (!entry) return res.status(404).json({ message: "URL not found" });
  return res.redirect(entry.redirectUrl);
}

async function getAnalytics(req, res) {
  const shortId = req.params.shortId;
  const entry = await Url.findOne({ shortId });
  if (!entry) return res.status(404).json({ message: "URL not found" });

  return res.json({
    totalClicks: entry.visitHistory.length,
    visitHistory: entry.visitHistory,
  });
}
module.exports = { createShortUrl, redirectUrl, getAnalytics };
