// require("@nomicfoundation/hardhat-toolbox");
// require("@nomicfoundation/hardhat-verify");
// require("dotenv").config();

// module.exports = {
//   solidity: "0.8.24",
//   networks: {
//     amoy: {
//       url: process.env.RPC_URL,
//       accounts: [process.env.PRIVATE_KEY],
//     },
//   },
//   etherscan: {
//     apiKey: {
//       polygonAmoy: process.env.POLYGONSCAN_API_KEY,
//     },
//     customChains: [
//       {
//         network: "polygonAmoy",
//         chainId: 80002,
//         urls: {
//           apiURL: "https://api-amoy.polygonscan.com/api",
//           browserURL: "https://amoy.polygonscan.com",
//         },
//       },
//     ],
//   },
// };

// require("@nomicfoundation/hardhat-toolbox");
// require("@nomicfoundation/hardhat-verify");
// require("dotenv").config();

// module.exports = {
//   solidity: {
//     version: "0.8.24",
//     settings: {
//       evmVersion: "paris",   // 🔥 IMPORTANT FIX
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
//   networks: {
//     amoy: {
//       url: process.env.RPC_URL,
//       accounts: [process.env.PRIVATE_KEY],
//     },
//   },
//   etherscan: {
//     apiKey: {
//       polygonAmoy: process.env.POLYGONSCAN_API_KEY,
//     },
//     customChains: [
//       {
//         network: "polygonAmoy",
//         chainId: 80002,
//         urls: {
//           apiURL: "https://api-amoy.polygonscan.com/api",
//           browserURL: "https://amoy.polygonscan.com",
//         },
//       },
//     ],
//   },
// };

// require("@nomicfoundation/hardhat-toolbox");
// require("@nomicfoundation/hardhat-verify");
// require("dotenv").config();

// module.exports = {
//   solidity: {
//     version: "0.8.24",
//     settings: {
//       evmVersion: "cancun",   // 🔥 THIS IS THE KEY FIX
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
//   networks: {
//     amoy: {
//       url: process.env.RPC_URL,
//       accounts: [process.env.PRIVATE_KEY],
//     },
//   },
//   etherscan: {
//     apiKey: {
//       polygonAmoy: process.env.POLYGONSCAN_API_KEY,
//     },
//   },
// };

require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      evmVersion: "cancun", // 🔥 required for OpenZeppelin v5 (mcopy fix)
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  networks: {
    amoy: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY, // ✅ Etherscan V2 format
  },
};