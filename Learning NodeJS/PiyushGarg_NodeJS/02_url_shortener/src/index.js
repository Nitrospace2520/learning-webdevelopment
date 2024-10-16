const dotenv = require("dotenv");
const express = require("express");
const { connectToMongoDb } = require("./config/connectToMongoDb");
const urlRouter = require("./routes/urlRouter");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3500;

//? Connect to MongoDB:=
const MONGO_URL =
  process.env.MONGO_URL || "mongodb://localhost:27017/url-shortener";
connectToMongoDb(MONGO_URL);

//? Middlewares":=
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//? Routes:=
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/url", urlRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
