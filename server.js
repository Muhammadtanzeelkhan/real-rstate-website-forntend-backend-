const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const rentals = [
  { id: 1, title: "2 BHK Apartment", price: 25000, location: "Karachi", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Luxury Villa", price: 75000, location: "Lahore", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Studio Flat", price: 15000, location: "Islamabad", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

app.get("/api/v1/rent", (req, res) => res.json(rentals));
app.get("/rent", (req, res) => res.sendFile(path.join(__dirname, "public", "rent.html")));
app.use((req,res) => res.status(404).sendFile(path.join(__dirname,"public","404.html")));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));


// Serve static files from "pages" instead of "public"
app.use(express.static(path.join(__dirname, "pages")));

// Rent Page route
app.get("/rent", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "rent.html"));
});

// 404 handling
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "pages", "404.html"));
});
