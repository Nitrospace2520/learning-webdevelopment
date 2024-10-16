import express from "express";
const adminRouter = express.Router();

adminRouter.get("/dashboard", (req, res) => {
  res.send("Admin Dashboard");
});
adminRouter.get("/settings", (req, res) => {
  res.send("Admin Settings");
});
adminRouter.get("/users", (req, res) => {
  res.send("Admin Users");
});

export default adminRouter;
