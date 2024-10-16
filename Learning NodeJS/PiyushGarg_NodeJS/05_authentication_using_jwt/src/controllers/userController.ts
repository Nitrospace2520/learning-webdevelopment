import express from "express";
import mongoose from "mongoose";
import User from "../models/userModel";
import { setUser } from "../service/authentication";
// import { UUID, randomUUID } from "crypto";
// import { v4 as randomUUID } from "uuid";

interface User {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  _id: mongoose.Types.ObjectId;
  __v: number;
}

export const createUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = new User(req.body);
    await user.save();

    const token = setUser(user as User);
    // res.cookie("token", token);
    //! Remove the above two lines and replace them with the following line
    // res.header("Authorization", token);
    // req.headers["Authorization"] = token;

    // res.status(201).redirect("/");
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const loginUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).render("login", {
        message: "Invalid email",
      });
    }
    if (user.password !== password) {
      return res.status(401).render("login", {
        message: "Invalid password",
      });
    }

    const token = setUser(user as User);
    // res.cookie("token", token);
    //! Remove the above two lines and replace them with the following line
    // res.header("authorization", token);
    // req.headers["authorization"] = token;

    // res.status(200).redirect("/");
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
