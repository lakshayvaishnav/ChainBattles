const hre = require("hardhat");
const main = async () => {
  try {
    const nftContractFactory = await hre.ethers.getContractFactory(
      "ChainBattles"
    );

    const nftContract = await nftContractFactory.deploy({
      gasLimit: 5000000,
      gasPrice: hre.ethers.parseUnits("10", "gwei"),
    });
    await nftContract.waitForDeployment();

    console.log("contract deployed to : ", nftContract.target);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

main();
