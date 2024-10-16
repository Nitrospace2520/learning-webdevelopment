const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  fs.readFile(
    path.join(__dirname, "..", "/views", "/index.html"),
    "utf-8",
    (err, data) => {
      res.send(data);
    }
  );
});

module.exports = router;
