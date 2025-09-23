// Load environment variables
require("dotenv").config();

// External imports
const express = require("express");
const cors = require("cors");

// Internal imports
const connectDb = require("./config/db");
const ToDoRoutes = require("./routes/ToDORoutes");

// App initialization
const app = express();
const PORT = process.env.PORT || 5000;

// ===== Middlewares =====
app.use(cors({ origin: "*" })); // Allow all origins (you can restrict later)
app.use(express.json());        // Parse JSON body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded body

// ===== Database Connection =====
connectDb();

// ===== Routes =====
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully!");
});

app.use(ToDoRoutes); // All todo related routes

// ===== Server Listen =====
app.listen(PORT, () => {
  console.log(`✅ Server running on port: ${PORT}`);
});
