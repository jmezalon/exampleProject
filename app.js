const express = require("express");
const mathController = require("./controllers/mathController");
const studentsController = require("./controllers/studentsController");
const app = express();

app.use("/math", mathController);
app.use("/students", studentsController);

app.get("/", (req, res) => {
  res.send("Welcome to example project!");
});

app.listen(3003, () => {
  console.log("running in port localhost:3003");
});

module.exports = app;
