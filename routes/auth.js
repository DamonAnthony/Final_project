const express = require("express");
const router = express.Router();

// Get Logged in user
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// Auth user and get token
router.get("/", (req, res) => {
  res.send("Login user");
});

module.exports = router;
