import mongoose from "mongoose";

export const connectToMongoDb = async (MONGO_URL: string) => {
  try {
    // console.log("MONGO_URL:", MONGO_URL);
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
