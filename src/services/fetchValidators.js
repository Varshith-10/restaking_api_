const Validator = require("../models/Validator");

const mockValidators = [
  {
    operatorId: "0xValidator1",
    totalStake: 1000,
    slashHistory: [{ timestamp: Date.now(), amount: 100, reason: "Downtime" }],
    status: "active",
  },
  {
    operatorId: "0xValidator2",
    totalStake: 2000,
    slashHistory: [],
    status: "slashed",
  },
];

const fetchAndStoreValidators = async () => {
  for (const v of mockValidators) {
    await Validator.updateOne({ operatorId: v.operatorId }, v, {
      upsert: true,
    });
  }

  console.log("Mock validators saved.");
};

module.exports = fetchAndStoreValidators;
