import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployForge: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, get } = deployments;
  const { deployer } = await getNamedAccounts();

  const mint1155 = await get("Mint1155");

  await deploy("Forge", {
    from: deployer,
    args: [mint1155.address], 
    log: true,
  });
};

export default deployForge;
deployForge.tags = ["Forge"];

  