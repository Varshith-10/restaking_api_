const express = require("express");
const router = express.Router();
const Validator = require("../models/Validator");

router.get("/", async (req, res) => {
  const validators = await Validator.find();
  res.json(validators);
});

module.exports = router;
