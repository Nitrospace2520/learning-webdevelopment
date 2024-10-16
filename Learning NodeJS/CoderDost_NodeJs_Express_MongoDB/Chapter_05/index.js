//! TODO:  MONGODUMP and MONGORESTORE

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const port = process.env.PORT || 3500;
const server = express();
const { userRouter } = require("./routes/userRouter");
const { quoteRouter } = require("./routes/quoteRouter");

server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(process.env.PUBLIC_DIR));

server.use("/api/users", userRouter);
server.use("/api/quotes", quoteRouter);

server.listen(port, () => {
  console.log(`server running at ${port}`);
});

/* // Perform mongodump
exec("mongodump", (error, stdout, stderr) => {
  if (error) {
    console.error(`mongodump error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`mongodump stderr: ${stderr}`);
    return;
  }
  console.log("mongodump completed successfully");

  // Perform mongorestore
  exec("mongorestore", (error, stdout, stderr) => {
    if (error) {
      console.error(`mongorestore error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`mongorestore stderr: ${stderr}`);
      return;
    }
    console.log("mongorestore completed successfully");

    // Start the server
    server.listen(port, () => {
      console.log(`server running at ${port}`);
    });
  });
}); */
