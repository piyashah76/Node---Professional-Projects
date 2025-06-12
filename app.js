const express = require("express");
const app = express();

// Custom Logging Middleware
function loggerMiddleware(req, res, next) {
  const method = req.method;
  const url = req.originalUrl;
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}] ${method} ${url}`);
  next(); // Proceed to next middleware or route
}

// Apply middleware globally
app.use(loggerMiddleware);

// Sample routes
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.post("/contact", (req, res) => {
  res.send("Contact form submitted");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
