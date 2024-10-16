require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
  res.send("Hello Backend! let's connect backend with frontend");
});

app.listen(port, () => {
  console.log(`We are live at ${port}`);
});
