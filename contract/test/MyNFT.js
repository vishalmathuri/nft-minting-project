const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyNFT", function () {
  let contract, owner, user;

  beforeEach(async () => {
    [owner, user] = await ethers.getSigners();

    const NFT = await ethers.getContractFactory("MyNFT");
    contract = await NFT.deploy("https://example.com/");
    await contract.waitForDeployment();
  });

  it("Should mint successfully", async () => {
    await contract.connect(user).mint(user.address, {
      value: ethers.parseEther("1"),
    });

    expect(await contract.totalMinted()).to.equal(1);
  });

  it("Should fail if max supply exceeded", async () => {
    for (let i = 0; i < 5; i++) {
      await contract.mint(owner.address, {
        value: ethers.parseEther("1"),
      });
    }

    await expect(
      contract.mint(owner.address, { value: ethers.parseEther("1") })
    ).to.be.revertedWith("Max supply reached");
  });

  it("Should fail for wrong payment", async () => {
    await expect(
      contract.mint(owner.address, { value: 0 })
    ).to.be.revertedWith("Incorrect MATIC");
  });

  it("Only owner can withdraw", async () => {
    await expect(
      contract.connect(user).withdraw()
    ).to.be.reverted;
  });

  it("Only owner can set mint price", async () => {
    await expect(
      contract.connect(user).setMintPrice(ethers.parseEther("2"))
    ).to.be.reverted;

    await contract.setMintPrice(ethers.parseEther("2"));

    expect(await contract.mintPrice()).to.equal(
      ethers.parseEther("2")
    );
  });

  it("Owner can withdraw funds", async () => {
    // mint to add balance
    await contract.mint(owner.address, {
      value: ethers.parseEther("1"),
    });

    const initialBalance = await ethers.provider.getBalance(owner.address);

    const tx = await contract.withdraw();
    const receipt = await tx.wait();

    const gasUsed = receipt.gasUsed * receipt.gasPrice;

    const finalBalance = await ethers.provider.getBalance(owner.address);

    expect(finalBalance).to.be.gt(initialBalance - gasUsed);
  });
});