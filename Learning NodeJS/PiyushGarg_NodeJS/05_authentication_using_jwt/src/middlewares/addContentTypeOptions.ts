import express from "express";

export default function addContentTypeOptions(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  res.setHeader("X-Content-Type-Options", "nosniff");
  next();
}
