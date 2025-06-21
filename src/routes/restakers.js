const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users); // <- returns array of users
  } catch (err) {
    console.error("Error fetching restakers:", err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
