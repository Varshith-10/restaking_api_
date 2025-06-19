const Reward = require("../models/Reward");

const mockRewards = [
  {
    userAddress: "0xUser1",
    totalReward: 50,
    rewardsPerValidator: [
      { validatorId: "0xValidator1", amount: 30 },
      { validatorId: "0xValidator2", amount: 20 },
    ],
    timestamps: [new Date()],
  },
];

const fetchAndStoreRewards = async () => {
  for (const reward of mockRewards) {
    await Reward.updateOne({ userAddress: reward.userAddress }, reward, {
      upsert: true,
    });
  }

  console.log("Mock rewards saved.");
};

module.exports = fetchAndStoreRewards;
