import {ethers} from "hardhat";

async function main() {
    const Mint1155Address = "0x68F625EE5F2d85CD8e9dD4F3069a33b1764f8a7b";

    const forge = await ethers.deployContract("Forge", [Mint1155Address]);
    await forge.waitForDeployment();

    console.log("✅ Contract deployed to:", forge.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});