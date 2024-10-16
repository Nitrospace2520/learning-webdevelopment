import express from "express";
import { getUser } from "../service/authentication";

export const checkForAuthentication = (
  req: express.Request & Record<string, any>,
  res: express.Response,
  next: express.NextFunction
) => {
  // const bearerToken = req.headers["authorization"] as string; //? OR
  const bearerToken = req.cookies.token;
  req.user = null;
  if (!bearerToken) {
    // || !bearerToken.startsWith("Bearer")
    return next();
  }

  // const token = bearerToken.split(" ")[1]; //? OR
  const token = bearerToken;
  const user = getUser(token);
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  req.user = user;
  next();
};

export const restrictToRole = (roles: string[]) => {
  return (
    req: express.Request & Record<string, any>,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (!req.user) {
      return res.redirect("/login");
    }
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
};

/* 
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
 */
