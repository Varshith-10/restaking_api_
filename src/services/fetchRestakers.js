const { ethers } = require("ethers");
const User = require("../models/User");
require("dotenv").config();

const stETH_ABI = [
  "function balanceOf(address account) view returns (uint256)",
];

const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_RPC_URL);
const contract = new ethers.Contract(
  "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
  stETH_ABI,
  provider
);

const addresses = [
  "0xcbd5a74d02d4cf0124b439a49b2ee10a7d6fd409", // whale
  "0x00192fb10df37c9fb26829eb2cc623cd1bf599e8", // Curve
  "0x73ec8ac3b6babe4ec2e1b3285a8079c2325b4d49", // Lido vault
];

const fetchAndStoreRestakers = async () => {
  try {
    for (const address of addresses) {
      const balance = await contract.balanceOf(address);

      await User.updateOne(
        { address },
        {
          address,
          validator: "stETH-Lido",
          restakedAmount: parseFloat(ethers.formatEther(balance)),
        },
        { upsert: true }
      );

      console.log(
        `✅ Stored: ${address} with ${ethers.formatEther(balance)} stETH`
      );
    }

    console.log("✅ Live stETH balances fetched and stored.");
  } catch (err) {
    console.error("❌ Error fetching from stETH contract:", err);
  }
};

module.exports = fetchAndStoreRestakers;
