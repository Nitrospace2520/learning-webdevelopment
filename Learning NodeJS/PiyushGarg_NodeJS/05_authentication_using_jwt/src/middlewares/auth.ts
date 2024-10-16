import express from "express";
import { getUser } from "../service/authentication";

export const restrictToLoggedInUser = (
  req: express.Request & Record<string, any>,
  res: express.Response,
  next: express.NextFunction
) => {
  // const token = req.cookies.token;
  const token = (req.headers["authorization"] as string)?.split(" ")[1];

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
  req: express.Request & Record<string, any>,
  res: express.Response,
  next: express.NextFunction
) => {
  // const token = req.cookies.token;
  //! OR
  const token = (req.headers["authorization"] as string)?.split(" ")[1];
  // console.log("token", req.headers["authorization"]);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const user = getUser(token);

  req.user = user;
  next();
};
