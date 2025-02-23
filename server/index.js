const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
