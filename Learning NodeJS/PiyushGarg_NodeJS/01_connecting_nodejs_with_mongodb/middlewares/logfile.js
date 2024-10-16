const fs = require("fs");
const path = require("path");

const logFile = (req, res, next) => {
  fs.appendFile(
    path.join(__dirname, "..", "/log.txt"),
    `\n${new Date()} ${req.url}`,
    (err) => {
      if (err) throw new Error(err.message);
    }
  );
  next();
};

module.exports = { logFile };
