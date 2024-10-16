const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const connectToMongoDb = async (MONGO_URL) => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = { connectToMongoDb };
