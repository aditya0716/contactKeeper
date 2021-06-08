const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET CONTACTS");
});

router.post("/", (req, res) => {
  res.send("CREATE CONTACT");
});

router.put("/:id", (req, res) => {
  res.send("UPDATE CONTACT");
});

router.delete("/:id", (req, res) => {
  res.send("DELETE CONTACT");
});

module.exports = router;
