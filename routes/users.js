const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  res.send("REGISTER A USER");
});

module.exports = router;
