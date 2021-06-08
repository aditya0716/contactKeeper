const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET LOGGED IN USER");
});

router.post("/", (req, res) => {
  res.send("LOGIN USER");
});

module.exports = router;
