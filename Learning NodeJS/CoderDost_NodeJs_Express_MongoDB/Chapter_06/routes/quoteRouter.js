const {
  createQuote,
  getAllQuotes,
  getQuote,
  replaceQuote,
  updateQuote,
  deleteQuote,
} = require("../controller/quotes.js");
const express = require("express");
const quoteRouter = express.Router();

quoteRouter
  //$ CREATE api:-
  .post("/", createQuote)
  //$ READ api:-
  .get("/", getAllQuotes)
  .get("/:id", getQuote)
  //$ UPDATE api:-
  .put("/:id", replaceQuote)
  .patch("/:id", updateQuote)
  //$ DELETE api:-
  .delete("/:id", deleteQuote);

exports.quoteRouter = quoteRouter;
