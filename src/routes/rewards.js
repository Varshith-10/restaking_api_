const express = require("express");
const router = express.Router();
const Reward = require("../models/Reward");

router.get("/:address", async (req, res) => {
  const reward = await Reward.findOne({ userAddress: req.params.address });
  if (!reward) return res.status(404).send("No reward found");
  res.json(reward);
});

module.exports = router;
