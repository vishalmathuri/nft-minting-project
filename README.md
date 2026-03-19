# NFT Minting DApp (Polygon Amoy Testnet)

## 📌 Overview

This project implements a full-stack NFT minting system:

* **Smart Contract:** Solidity (ERC-721)
* **Backend:** Node.js + Express (API)
* **Blockchain Interaction:** ethers.js v6
* **Frontend:** React.js (professional UI with MetaMask support)
* **Network:** Polygon Amoy Testnet

Users can mint NFTs via a backend API or directly through the frontend DApp.

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

### 🔹 Frontend DApp (Bonus)

* Connect MetaMask wallet automatically
* Input wallet address manually
* Mint NFTs via UI
* Shows success/failure messages
* Displays Polygonscan transaction link:

```jsx
<a
  href={`https://amoy.polygonscan.com/tx/${txHash}`}
  target="_blank"
  rel="noreferrer"
>
  View on Polygonscan
</a>
```

* Professional UI with gradient background, styled buttons, input, and card layout

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
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── api.js
│   │   └── index.js
│   ├── package.json
├── README.md
├── .env.example
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/vishalmathuri/nft-minting-project.git
cd nft-minting-project
```

---

### 2️⃣ Install dependencies

#### Backend:

```bash
cd backend
npm install
```

#### Smart Contract:

```bash
cd ../contract
npm install
```

#### Frontend:

```bash
cd ../frontend
npm install
```

---

### 3️⃣ Configure environment variables

Create `.env` in `/backend`:

```
RPC_URL=your_polygon_amoy_rpc_url
PRIVATE_KEY=your_wallet_private_key
```

---

## 🚀 Running the Project

### ▶️ Start Backend Server

```bash
cd backend
node server.js
```

Server will run on:

```
http://localhost:5000
```

### ▶️ Start Frontend

```bash
cd frontend
npm start
```

Open in browser:

```
http://localhost:3000
```

---

## 📜 Smart Contract

### 🔹 Contract Address

```
0x846A6137193cb5412BF4eE7267E74Ae8B15A8F4D
```

### 🔹 Network

Polygon Amoy Testnet

### 🔹 Deployment

```bash
cd contract
npx hardhat run scripts/deploy.js --network amoy
```

### 🔹 Run Tests

```bash
npx hardhat test
```

---

## 🔐 Security Practices

* Private keys stored in `.env`
* Wallet address validation in API and frontend
* Reentrancy protection in smart contract
* Owner-only functions protected
* Proper error handling in backend and frontend

---

## 🧪 Testing

Smart contract tests cover:

* Successful mint
* Maximum supply enforcement
* Payment validation
* Owner-only access control
* Mint price updates
* Withdraw functionality

Frontend tests (manual):

* Connect MetaMask
* Mint NFT
* Show transaction on Polygonscan

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

* Solidity Smart Contract
* Hardhat Test Suite
* Node.js Backend API
* React Frontend DApp
* Deployed Contract on Polygon Amoy Testnet

---

## 👨‍💻 Author

**Vishal Mathuri**

---