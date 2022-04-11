const express = require("express");
const mathController = require("./controllers/mathController");
const studentsController = require("./controllers/studentsController");
const app = express();

app.use("/math", mathController);
app.use("/students", studentsController);

app.get("/", (req, res) => {
  res.send("Welcome to example project!");
});

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`🪨 Listening on port ${PORT} 💎 `);
});

module.exports = app;
