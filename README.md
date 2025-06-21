🔁 Project Overview
This backend project fetches real Ethereum mainnet data using the stETH contract from Lido, stores it in MongoDB, and exposes it through RESTful APIs. It demonstrates end-to-end integration of blockchain smart contract reads with a persistent backend system.
📦 Features

- Connects to Ethereum mainnet using ethers.js and Alchemy
- Reads real wallet balances from the stETH contract
- Stores the data in MongoDB
- Exposes RESTful endpoints for retrieval and testing via Postman
  🛠️ Tech Stack
- Node.js + Express – API layer
- MongoDB + Mongoose – Data storage
- ethers.js – Ethereum blockchain interaction
- Alchemy – Ethereum mainnet RPC provider
- Postman – API testing tool
  📁 Folder Structure
  restaking-api/
  ├── src/
  │ ├── models/ # User schema
  │ ├── routes/ # REST API routes
  │ ├── services/ # Blockchain fetchers
  │ ├── db.js # MongoDB connection logic
  │ └── index.js # Main server entry point
  ├── .env # Environment config
  ├── package.json # Project metadata
  └── README.md
  🔌 API Endpoints
  GET /fetch-all → Fetches stETH balances from blockchain and stores in DB
  GET /restakers → Returns all stored restakers and balances
  ⚙️ Setup Instructions

1. Clone the Repository:
   git clone https://github.com/YOUR_USERNAME/restaking-api.git
   cd restaking-api

2. Install Dependencies:
   npm install

3. Setup Environment Variables in `.env`:
   ALCHEMY_RPC_URL=https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY
   MONGO_URI=mongodb://localhost:27017/restaking

4. Start MongoDB:
   mongod

5. Run the Server:
   npm start
