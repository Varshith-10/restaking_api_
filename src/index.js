const express = require("express");
const connectDB = require("./db");
const dotenv = require("dotenv");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes will be added here later
// After app.use(express.json())
const restakersRoute = require("./routes/restakers");
const validatorsRoute = require("./routes/validators");
const rewardsRoute = require("./routes/rewards");

app.use("/restakers", restakersRoute);
app.use("/validators", validatorsRoute);
app.use("/rewards", rewardsRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

const fetchRestakers = require("./services/fetchRestakers");
const fetchValidators = require("./services/fetchValidators");
const fetchRewards = require("./services/fetchRewards");

app.get("/fetch-all", async (req, res) => {
  await fetchRestakers();
  await fetchValidators();
  await fetchRewards();
  res.send("All data fetched and stored!");
});
