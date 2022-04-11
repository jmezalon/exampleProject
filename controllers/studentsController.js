const express = require("express");
const router = express.Router();
const studentData = require("../studentData.json");

router.get("/", (req, res) => {
  res.json(studentData);
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  const student = studentData.students.filter((s) => s.id === id);

  res.json(student);
});

module.exports = router;
