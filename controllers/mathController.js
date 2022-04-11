const express = require("express");
const sumOfMultiples = require("../utils/sumOfMultiples");
const router = express.Router();

router.get("/:n/:m", (req, res) => {
  const n = Number(req.params.n);
  const m = Number(req.params.m);
  const mults = sumOfMultiples(n, m);

  res.send(`N is ${n} and M is ${m} and result is ${mults}`);
});

module.exports = router;
