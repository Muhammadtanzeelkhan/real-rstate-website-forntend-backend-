const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Import data
const rentals = require("./rental"); // rental.js
const buyProperties = require("./buy"); // buy.js or buy.json

// API Routes
app.get("/api/rent", (req, res) => res.json(rentals));
app.get("/api/buy", (req, res) => res.json(buyProperties));

// Pages
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.get("/rent", (req, res) => res.sendFile(path.join(__dirname, "public", "rent.html")));
app.get("/buy", (req, res) => res.sendFile(path.join(__dirname, "public", "buy.html")));
app.get("/sell", (req, res) => res.sendFile(path.join(__dirname, "public", "sell.html")));
app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "public", "login.html")));

// 404 Page
app.use((req, res) => res.status(404).sendFile(path.join(__dirname, "public", "404.html")));

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`👉 Rent Page: http://localhost:${PORT}/rent`);
  console.log(`👉 Buy Page: http://localhost:${PORT}/buy`);
  console.log(`👉 Sell Page: http://localhost:${PORT}/sell`);
  console.log(`👉 Login Page: http://localhost:${PORT}/login`);
});
