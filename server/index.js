// server/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(morgan("dev")); // Logging requests

// Mount routes
app.use("/api/auth", require("./routes/authRoutes"));

// Protected user routes
app.use("/api/users", require("./routes/userRoutes"));

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
