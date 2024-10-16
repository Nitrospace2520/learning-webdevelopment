const fs = require("fs");
const quotesData = fs.readFileSync("./quotes.json", "utf-8");
const quotes = JSON.parse(quotesData)["quotes"];

//* create
exports.createQuote = (req, res) => {
  const id = quotes[quotes.length - 1].id + 1 || 1;
  const quote = { id: id, ...req.body };
  quotes.push(quote);
  res.json(quotes).status(201);
};

//* read
exports.getAllQuotes = (req, res) => {
  res.json(quotes);
};
exports.getQuote = (req, res) => {
  if (req.params.id > 30 || req.params.id <= 0) {
    res.sendStatus(403);
  } else {
    const quote = quotes.find((quote) => quote.id === +req.params.id);
    res.json(quote);
  }
};

//* update
exports.replaceQuote = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const quoteIndex = quotes.findIndex((quote) => quote.id === +id);
  quotes.splice(quoteIndex, 1, { id: id, ...data });
  res.json({ id: id, ...data });
};
exports.updateQuote = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const quoteIndex = quotes.findIndex((quote) => quote.id === +id);
  quotes.splice(quoteIndex, 1, { ...quotes[quoteIndex], ...data });
  res.json({ ...quotes[quoteIndex], ...data }).status(201);
};

//* delete
exports.deleteQuote = (req, res) => {
  const id = req.params.id;
  const quoteIdx = quotes.findIndex((quote) => quote.id === +id);
  const deleteQuote = quotes[quoteIdx];
  quotes.splice(quoteIdx, 1);
  res.json(deleteQuote);
};
