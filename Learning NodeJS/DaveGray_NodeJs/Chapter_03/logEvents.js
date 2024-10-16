const fs = require("fs");
const path = require("path");
const { v4: id } = require("uuid");
const { format } = require("date-fns");

const logEvents = async (message) => {
  const timeLog = `${format(new Date(), "yyyy-MM-dd\thh-mm-ss")}`;
  const randomID = id();
  const eventLog = `${randomID}\t${timeLog}\t${message}\n`;
  console.log(eventLog);
  try {
    if (!fs.existsSync(path.join(__dirname, "logs")))
      await fs.mkdir(path.join(__dirname, "logs"), (err) => {
        if (err) console.log(err);
      });

    await fs.promises.appendFile(
      path.join(__dirname, "logs", "log-events.txt"),
      eventLog
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = { logEvents };
