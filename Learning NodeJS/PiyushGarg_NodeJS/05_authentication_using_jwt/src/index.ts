import dotenv from "dotenv";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import { connectToMongoDb } from "./config/connectToMongoDb";
import urlRoute from "./routes/urlRouter";
import staticRoute from "./routes/staticRouter";
import userRoute from "./routes/userRouter";
import { restrictToLoggedInUser, checkAuth } from "./middlewares/auth";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3500;

//! Connect to MongoDB:=
const MONGO_URL =
  (process.env.MONGO_URL as string) ||
  "mongodb://localhost:27017/url-shortener";

connectToMongoDb(MONGO_URL);

//! View Engine Setup:=
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

//! Middlewares":=
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//! Routes:=
app.use("/", checkAuth, staticRoute);
app.use("/api/user", userRoute);
app.use("/api/url", restrictToLoggedInUser, urlRoute);

//! Listen to the server:=
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
