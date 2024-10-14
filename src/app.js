const express = require("express");
const wordRoutes = require("./routes/wordRoutes.js");
const dotenv = require("dotenv");
const cors = require("cors"); // Import the CORS middleware

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors()); // Add CORS middleware

// Routes
app.use("/api/words", wordRoutes);

module.exports = app;
