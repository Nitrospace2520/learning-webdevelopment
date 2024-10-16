const path = require("path");
const fs = require("fs");
const { v4: id } = require("uuid");
const { format } = require("date-fns");

const logEvents = async (message, fileName) => {
  const logFormat = `${id()}\t${format(
    new Date(),
    "yyyy-MM-dd  hh-mm-ss"
  )}\t${message}\n`;
  console.log(logFormat);
  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs")))
      await fs.mkdir(path.join(__dirname, "..", "logs"), (err) => {
        if (err) console.log(err);
      });

    await fs.promises.appendFile(
      path.join(__dirname, "..", "logs", fileName),
      logFormat
    );
  } catch (error) {
    console.error(error);
  }
};

const requestLogger = (req, res, next) => {
  // console.log(`${new Date().toLocaleString()}\t${req.method} -> ${req.url}`);
  logEvents(
    `${req.method}  ${req.headers.origin}  ${req.url}`,
    "requestLogs.txt"
  );
  next();
};

module.exports = { logEvents, requestLogger };
