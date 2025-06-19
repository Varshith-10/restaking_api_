const User = require("../models/User");

const mockRestakers = [
  {
    address: "0xUser1",
    restakedAmount: 150,
    validator: "0xValidator1",
  },
  {
    address: "0xUser2",
    restakedAmount: 300,
    validator: "0xValidator2",
  },
];

const fetchAndStoreRestakers = async () => {
  try {
    for (const user of mockRestakers) {
      await User.updateOne({ address: user.address }, user, { upsert: true });
    }
    console.log("✅ Mock restakers inserted.");
  } catch (err) {
    console.error("❌ Error inserting mock restakers:", err);
  }
};

module.exports = fetchAndStoreRestakers;
