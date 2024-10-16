const express = require("express");
const router = express.Router();
const path = require("path");
const fsPromises = require("fs").promises;

router.route("/products").get();

module.exports = router;
