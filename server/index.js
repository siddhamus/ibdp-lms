const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB Atlas
connectDB();

// Middleware
app.use(express.json());

// TODO: Import and use your routes here
// Example: app.use('/api/auth', require('./routes/authRoutes'));

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express Server!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
