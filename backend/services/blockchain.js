const { ethers } = require("ethers");
require("dotenv").config();

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const contractAddress = "0x846A6137193cb5412BF4eE7267E74Ae8B15A8F4D";
const abi = require("./abi.json");

const contract = new ethers.Contract(contractAddress, abi, wallet);

async function mintNFT(walletAddress) {
  try {
    // validation
    if (!ethers.isAddress(walletAddress)) {
      throw new Error("Invalid wallet address");
    }

    const mintPrice = await contract.mintPrice();

    const tx = await contract.mint(walletAddress, {
      value: mintPrice,
    });

    const receipt = await tx.wait();

    let tokenId = null;

    for (const log of receipt.logs) {
      try {
        const parsed = contract.interface.parseLog(log);
        if (parsed.name === "Minted") {
          tokenId = parsed.args.tokenId.toString();
        }
      } catch (e) {}
    }

    return {
      success: true,
      txHash: tx.hash,
      tokenId,
    };

  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { mintNFT };