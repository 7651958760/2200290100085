// q2_backend.js

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/average", (req, res) => {
  const { prices } = req.body;

  if (!Array.isArray(prices) || prices.length === 0) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const total = prices.reduce((sum, p) => sum + p.price, 0);
  const avg = (total / prices.length).toFixed(2);
  res.json({ averagePrice: avg });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Average Service running on http://localhost:5000`);
});
