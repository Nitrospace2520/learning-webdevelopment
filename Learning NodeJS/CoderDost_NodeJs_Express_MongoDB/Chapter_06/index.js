require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const port = process.env.PORT || 3500;
const server = express();
const { userRouter } = require("./routes/userRouter");
const { quoteRouter } = require("./routes/quoteRouter");
const mongoose = require("mongoose");

// NOTE: Connect to MongoDB Server using mongoose
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("Connected to MongoDB");
}
main().catch((error) => console.log(error));

server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(process.env.PUBLIC_DIR));

server.use("/api/users", userRouter);
server.use("/api/quotes", quoteRouter);
server.use("/api/products", require("./routes/productRouter"));

server.listen(port, () => {
  console.log(`server running at ${port}`);
});
