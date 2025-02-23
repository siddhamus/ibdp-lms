// server/index.js
const express = require("express");
const connectDB = require("./config/db");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(morgan("dev")); // Logging requests

// Mount routes
app.use("/api/auth", require("./routes/authRoutes"));

// Other routes can be added similarly

// Error Handling Middleware (should be after routes)
const errorMiddleware = require("./middleware/errorMiddleware");
app.use(errorMiddleware);

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express Server!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
