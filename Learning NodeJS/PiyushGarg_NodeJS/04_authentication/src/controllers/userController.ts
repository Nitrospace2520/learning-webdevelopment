import express from "express";
// import { UUID, randomUUID } from "crypto";
import { v4 as randomUUID } from "uuid";
import User from "../models/userModel";
import { setUser } from "../service/authentication";

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
    res.status(201).redirect("/");
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

    const token = randomUUID();
    setUser(token, user);

    res.cookie("token", token, { httpOnly: true });
    // console.log("Logged in", res);
    res.status(200).redirect("/");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
