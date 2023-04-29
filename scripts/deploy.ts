import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const GamerhubManager = await ethers.getContractFactory("GamerhubManager"); 
  const gamerhubManager = await GamerhubManager.deploy();

  console.log("contract address:", gamerhubManager.address);
  await gamerhubManager.setPackage(0,1, ethers.utils.parseUnits("10", "ether"))
 
  const mypackage = await gamerhubManager.getPackage(0)
  console.log("package value:",mypackage);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
