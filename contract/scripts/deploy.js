const hre = require("hardhat");

async function main() {
  const MyNFT = await hre.ethers.getContractFactory("MyNFT");

  const baseURI = "https://your-metadata-link/"; // 👈 change this

  const contract = await MyNFT.deploy(baseURI);

  await contract.waitForDeployment();

  console.log("MyNFT deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});