require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { mintNFT } = require("./services/blockchain");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("NFT Minting API is running 🚀");
});

// ✅ Mint API
app.post("/mint", async (req, res) => {
  try {
    const { walletAddress } = req.body;

    // Basic validation
    if (!walletAddress) {
      return res.status(400).json({
        success: false,
        message: "Wallet address is required",
      });
    }

    const result = await mintNFT(walletAddress);

    res.json({
      success: true,
      txHash: result.txHash,
      tokenId: result.tokenId,
    });
  } catch (error) {
    console.error("Mint error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
});

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});