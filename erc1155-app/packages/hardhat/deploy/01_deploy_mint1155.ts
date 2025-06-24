import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployMint1155: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deploy } = hre.deployments;
  const { deployer } = await hre.getNamedAccounts();

  await deploy("Mint1155", {
    from: deployer,
    args: ["https://bafybeicce3jcvicicohkrv5uqsezaeeiavgo7cl7chwg3eg3jhcecdrp5y.ipfs.w3s.link/"], 
    log: true,
  });
};

export default deployMint1155;
deployMint1155.tags = ["Mint1155"];

