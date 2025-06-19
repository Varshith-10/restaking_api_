// src/services/fetchRestakingData.js
const axios = require("axios");
const User = require("../models/User");

async function fetchAndSaveUsers() {
  const response = await axios.post(
    "https://api.thegraph.com/subgraphs/name/eigenlayer/restaking",
    {
      query: `{ users { id stakedAmount validator } }`,
    }
  );

  const users = response.data.data.users;
  for (const u of users) {
    await User.updateOne(
      { address: u.id },
      { restakedAmount: u.stakedAmount, validator: u.validator },
      { upsert: true }
    );
  }
}
