import axios from "axios";

const API = "http://localhost:5000";

export const mintNFT = async (walletAddress) => {
  const res = await axios.post(`${API}/mint`, { walletAddress });
  return res.data;
};