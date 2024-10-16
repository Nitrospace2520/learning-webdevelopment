import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
dotenv.config();

interface User {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  _id: mongoose.Types.ObjectId;
  __v: number;
  role: string;
}

const SECRET = process.env.JWT_SECRET || "SECRETKEY";

export const setUser = (user: User) => {
  const payload = {
    _id: user?._id,
    email: user?.email,
    role: user?.role,
  };
  return jwt.sign(payload, SECRET);
};

export const getUser = (token: string) => {
  // console.log("token", token);
  try {
    const user = jwt.verify(token, SECRET);
    return user;
  } catch (error) {
    return null;
  }
};
