const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  address: String,
  restakedAmount: Number,
  validator: String,
});

module.exports = mongoose.model("User", userSchema);
