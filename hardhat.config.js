/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const { PRIVATE_KEY, INFURA_API_KEY, ETHERSCAN_API_KEY } = process.env;

module.exports = {
  solidity: "0.8.18",
  networks: {
    linea: {
      url: `https://linea-goerli.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      linea: ETHERSCAN_API_KEY,
    },
  },
  customChains: [
    {
      network: "linea",
      chainId: 59140,
      urls: {
        apiURL: "https://goerli.lineascan.build/apis#contracts",
        browserURL: "https://goerli.lineascan.build/",
      },
    },
  ],
};
