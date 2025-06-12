const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Home Page");
});

app.post("/contact", (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ error: "Name and message are required" });
  }
  res.status(200).json({ success: true, message: "Contact form submitted" });
});

module.exports = app;
