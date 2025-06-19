const mongoose = require("mongoose");

const validatorSchema = new mongoose.Schema({
  operatorId: String,
  totalStake: Number,
  slashHistory: [Object],
  status: String,
});

module.exports = mongoose.model("Validator", validatorSchema);
