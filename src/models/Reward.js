const mongoose = require("mongoose");

const rewardSchema = new mongoose.Schema({
  userAddress: String,
  totalReward: Number,
  rewardsPerValidator: [Object],
  timestamps: [Date],
});

module.exports = mongoose.model("Reward", rewardSchema);
