const express = require("express");
require("dotenv").config();

const { mintNFT } = require("./services/blockchain");

const app = express();
app.use(express.json());

app.post("/mint", async (req, res) => {
  try {
    const { walletAddress } = req.body;

    if (!walletAddress) {
      return res.status(400).json({
        success: false,
        message: "walletAddress is required",
      });
    }

    const result = await mintNFT(walletAddress);

    res.json(result);

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});