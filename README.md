# NFT Minting API (Polygon Amoy Testnet)

## 📌 Overview

This project implements a minimal NFT minting system using:

* Solidity (ERC-721)
* Hardhat (development & testing)
* Node.js + Express (backend API)
* ethers.js (blockchain interaction)
* Polygon Amoy Testnet (deployment)

The system allows minting NFTs via an API endpoint that interacts with a deployed smart contract.

---

## 🚀 Features

### 🔹 Smart Contract

* ERC-721 compliant NFT
* Maximum supply: **5 NFTs**
* Configurable mint price (default: **1 MATIC**)
* Base URI support for metadata
* Owner-only functions:

  * Update mint price
  * Withdraw contract balance
* Security:

  * Reentrancy protection
  * Access control (Ownable)
  * Input validation

---

### 🔹 Backend API

#### Endpoint: `POST /mint`

Mint an NFT to a specified wallet address.

**Request Body:**

```json
{
  "walletAddress": "0x..."
}
```

**Response:**

```json
{
  "success": true,
  "txHash": "0x...",
  "tokenId": "1"
}
```

---

## 🏗️ Project Structure

```
nft-minting-project/
├── contract/        # Hardhat project (smart contract + tests)
├── backend/
│   ├── services/
│   │   ├── abi.json
│   │   └── blockchain.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── README.md
├── .env.example
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone <your-repo-url>
cd nft-minting-project
```

---

### 2️⃣ Install dependencies

#### Backend:

```
cd backend
npm install
```

#### Smart Contract:

```
cd contract
npm install
```

---

### 3️⃣ Configure environment variables

Create a `.env` file inside `/backend`:

```
RPC_URL=your_polygon_amoy_rpc_url
PRIVATE_KEY=your_wallet_private_key
```

---

## 🚀 Running the Project

### ▶️ Start Backend Server

```
cd backend
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

### ▶️ Test API

**Using curl:**

```
curl -X POST http://localhost:5000/mint -H "Content-Type: application/json" -d "{\"walletAddress\":\"0xYourWalletAddress\"}"
```

---

## 📜 Smart Contract

### 🔹 Contract Address

```
0x846A6137193cb5412BF4eE7267E74Ae8B15A8F4D
```

### 🔹 Network

Polygon Amoy Testnet

---

### 🔹 Deployment

```
npx hardhat run scripts/deploy.js --network amoy
```

---

### 🔹 Run Tests

```
npx hardhat test
```

---

## 🔐 Security Practices

* Private keys stored securely in `.env`
* Input validation for wallet addresses
* Reentrancy protection in contract
* Owner-only access control for sensitive operations
* Proper error handling in API

---

## 🧪 Testing

Smart contract tests include:

* Successful minting
* Maximum supply enforcement
* Payment validation
* Owner-only access control
* Mint price update validation
* Withdraw functionality

---

## 🌐 Blockchain Details

* Network: Polygon Amoy Testnet
* Token Standard: ERC-721
* Library: ethers.js v6

---

## 📎 Example Transaction

Successful mint transaction:

```
0x42c4b787faba7bf51f028517a515581d62e7f96c5136814732be80b75533a5bd
```

---

## 📦 Deliverables

* Smart Contract (Solidity)
* Hardhat Test Suite
* Node.js Backend API
* Deployed Contract on Polygon Testnet
* API-based NFT Minting

---

## 👨‍💻 Author

Vishal Mathuri
