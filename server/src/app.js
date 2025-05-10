const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // For handling cross-origin requests
require("dotenv").config(); // To manage environment variables
const connectDB = require("./database/db");


const app = express();
const PORT = process.env.PORT || 6000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB()
// Routes
// app.use("/api/v1/results", resultRoutes);
// app.use("/api/v1/student", studentRoutes);
// app.use("/api/v1", authRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
