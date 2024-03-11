require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9", // Ensure this aligns with your NFTContract.sol version
  networks: {
    hardhat: {}, // Local network for development
  }
};
