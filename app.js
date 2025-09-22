require("dotenv").config();
const express = require("express");
const connectDb = require("./config/db");
const app = express();
const PORT = process.env.PORT;
const ToDoRoutes = require("./routes/ToDORoutes");

// middleware
app.use(express.json());
app.use(express.urlencoded());

//  connectDb
connectDb();

// routes
app.use(ToDoRoutes);

app.get("/", (req, res) => {
  res.send("my server runnigfgbfhfhgtgggjg");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
