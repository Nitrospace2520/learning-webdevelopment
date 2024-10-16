import express from "express";
import Url from "../models/urlModel";

type UserType = {
  name: string;
  email: string;
  password: string;
  _id: string;
};
export const handleHomePage = async (
  req: express.Request & { user: UserType },
  res: express.Response
) => {
  if (!req?.user?._id) {
    return res.redirect("/login");
  }
  const allUrls = await Url.find({ createdBy: req.user._id }).sort({
    createdAt: -1,
  });
  res.render("home", {
    urls: allUrls,
  });
};

export const handleSignupPage = async (
  req: express.Request,
  res: express.Response
) => {
  res.render("signup");
};

export const handleLoginPage = async (
  req: express.Request,
  res: express.Response
) => {
  res.render("login");
};
