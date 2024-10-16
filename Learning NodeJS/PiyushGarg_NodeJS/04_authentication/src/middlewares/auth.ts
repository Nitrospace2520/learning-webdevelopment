import express from "express";
import { getUser } from "../service/authentication";

type UserType = {
  name: string;
  email: string;
  password: string;
};

export const restrictToLoggedInUser = (
  req: express.Request & { user: UserType },
  res: express.Response,
  next: express.NextFunction
) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).redirect("/login");
  }
  const user = getUser(token);
  if (!user) {
    return res.status(401).redirect("/login");
  }
  req.user = user;
  next();
};

export const checkAuth = (
  req: express.Request & { user: UserType },
  res: express.Response,
  next: express.NextFunction
) => {
  const token = req.cookies.token;
  const user = getUser(token);

  req.user = user;
  next();
};
