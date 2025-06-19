# restaking_api

REST API for displaying EigenLayer restaking info including user activity, validator metadata, and rewards. Uses mock data and is ready for future integration with The Graph or EigenLayer subgraphs.

---

## 📦 Features

- Fetches and stores:
  - Users who restaked stETH
  - Validators with total delegated stake, slashing history, and status
  - Reward breakdowns per wallet address
- Built using RESTful architecture with clean modular code
- MongoDB for persistent storage
- Ready for integration with The Graph or EigenLayer subgraphs when available

---

## 🛠️ Tech Stack

- **Node.js** + **Express** – for the API layer
- **MongoDB** – for storing user, validator, and reward data
- **graphql-request** – intended for live subgraph querying (mocked for now)
- **Postman** – for testing API endpoints

---

## 📁 Folder Structure

restaking-api/
├── src/
│ ├── controllers/ # (optional for route logic separation)
│ ├── models/ # Mongoose schemas for User, Validator, Reward
│ ├── routes/ # API route handlers
│ ├── services/ # Data fetchers (mock for now)
│ ├── db.js # MongoDB connection
│ └── index.js # App entry point
├── .env # Environment variables (Mongo URI, PORT)
├── package.json
└── README.md

---

## 🔌 API Endpoints

| Method | Endpoint            | Description                                     |
| ------ | ------------------- | ----------------------------------------------- |
| GET    | `/fetch-all`        | (Dev) Loads mock restakers, validators, rewards |
| GET    | `/restakers`        | Returns list of restakers + validator info      |
| GET    | `/validators`       | Returns validator metadata                      |
| GET    | `/rewards/:address` | Returns reward details for a specific user      |

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd restaking-api

### 2. Install Dependencies

npm install

### 3. Configure .env

Create a .env file in the root:

ini
PORT=5000
MONGO_URI=mongodb://localhost:27017/restaking

### 4. Start MongoDB

Make sure MongoDB is running locally:
mongod

### 5. Start the Server

npm start
Demo Instructions
Go to: http://localhost:5000/fetch-all
→ Loads mock data into MongoDB

Use Postman or browser to test:

GET http://localhost:5000/restakers

GET http://localhost:5000/validators

GET http://localhost:5000/rewards/0xUser1

Check MongoDB (Compass or CLI) to see stored collections:

users

validators

rewards

Assumptions & Notes
Real EigenLayer data isn't public yet, so this demo uses mock restaking data.

The structure of GraphQL queries and models assumes a future real subgraph can easily plug into this backend.

The API logic is modular, so you can replace mock services with real subgraph fetchers later.

Demo Video

Author
Your Name
Email: your.email@example.com
GitHub: @yourusername
