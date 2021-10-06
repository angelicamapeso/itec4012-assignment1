const express = require("express");

const app = express();

// Routes
app.get("/", (_req, res) => {
  res.send("IT'S ALIVE!! (Evil laugh)");
});

// Starting server
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`App Listening at http://localhost:${PORT}`);
});
