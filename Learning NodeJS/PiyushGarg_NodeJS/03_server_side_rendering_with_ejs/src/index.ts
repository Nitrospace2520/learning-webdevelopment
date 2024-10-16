import dotenv from "dotenv";
import express from "express";
import path from "path";
import { connectToMongoDb } from "./config/connectToMongoDb";
import Url from "./models/urlModel";
import urlRouter from "./routes/urlRouter";
import staticRouter from "./routes/staticRouter";
// import addContentTypeOptions from "./middlewares/addContentTypeOptions";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3500;

//? Connect to MongoDB:=
const MONGO_URL =
  (process.env.MONGO_URL as string) ||
  "mongodb://localhost:27017/url-shortener";

connectToMongoDb(MONGO_URL);

//? View Engine Setup:=
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

//? Middlewares":=
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//? Routes:=
app.use("/", staticRouter);
app.use("/api/url", urlRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
