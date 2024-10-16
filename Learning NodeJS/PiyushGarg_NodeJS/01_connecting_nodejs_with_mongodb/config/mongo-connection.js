const mongoose = require("mongoose");

async function connectToMongoDb(url) {
  try {
    console.log("Connected to mongodb");
    return await mongoose.connect(url);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  connectToMongoDb,
};
