const express = require("express");
const { connectToMongoDb } = require("./config/mongo-connection");
const { logFile } = require("./middlewares/logfile");
const userRouter = require("./routes/userRouter");
const indexRouter = require("./routes/indexRouter");

const app = express();
const port = 3500;

//? Connect with mongoose:=
const MONGO_URL = "mongodb://localhost:27017/pg-users";
connectToMongoDb(MONGO_URL);

//? middleware:=
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", logFile);

app.get("/", indexRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`The app is live at http://localhost:${port}`);
});
