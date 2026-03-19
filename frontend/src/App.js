import { useState } from "react";
import { mintNFT } from "./api";

function App() {
  const [address, setAddress] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask");
        return;
      }

      const [account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAddress(account);
    } catch (err) {
      console.error(err);
    }
  };

  const handleMint = async () => {
    try {
      setLoading(true);
      const data = await mintNFT(address);
      setResult(data);
    } catch (err) {
      setResult({
        success: false,
        message: err.response?.data?.message || err.message,
      });
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🚀 NFT Minting DApp</h1>

        <button style={styles.connectBtn} onClick={connectWallet}>
          🔗 Connect Wallet
        </button>

        <input
          type="text"
          placeholder="Enter wallet address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={styles.input}
        />

        <button style={styles.mintBtn} onClick={handleMint} disabled={loading}>
          {loading ? "⏳ Minting..." : "Mint NFT"}
        </button>

        {result && (
          <div style={styles.resultBox}>
            {result.success ? (
              <>
                <p style={styles.success}>✅ NFT Minted Successfully</p>
                <p><strong>Token ID:</strong> {result.tokenId}</p>

                <a
                  href={`https://amoy.polygonscan.com/tx/${result.txHash}`}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.link}
                >
                  🔍 View Transaction
                </a>
              </>
            ) : (
              <p style={styles.error}>❌ {result.message}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "400px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  title: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  mintBtn: {
    width: "100%",
    padding: "12px",
    background: "#667eea",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  },
  connectBtn: {
    width: "100%",
    padding: "10px",
    background: "#f6851b",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  resultBox: {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "8px",
    background: "#f4f4f4",
  },
  success: {
    color: "green",
  },
  error: {
    color: "red",
  },
  link: {
    display: "block",
    marginTop: "10px",
    color: "#667eea",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default App;