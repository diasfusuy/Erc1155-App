import { ethers } from "hardhat";

async function main() {
    const Mint1155Factory = await ethers.getContractFactory("Mint1155");
    const baseUri = "https://bafybeicce3jcvicicohkrv5uqsezaeeiavgo7cl7chwg3eg3jhcecdrp5y.ipfs.w3s.link/";
    const mint1155 = await Mint1155Factory.deploy(baseUri);
    await mint1155.waitForDeployment();

    console.log("✅ Contract deployed to:", await mint1155.getAddress());
};

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });