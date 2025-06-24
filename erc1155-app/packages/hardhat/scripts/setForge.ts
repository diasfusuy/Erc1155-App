const hre = require("hardhat");

async function main() {
    const Mint1155Address = "0x68F625EE5F2d85CD8e9dD4F3069a33b1764f8a7b";
    const forgeAddress = "0xF16C65eB389650C212f817A9b901628ce9C5e790";

    const mint1155 = await hre.ethers.getContractAt("Mint1155", Mint1155Address);
    const tx = await mint1155.setForgeContract(forgeAddress);
    await tx.wait();

    console.log("✅ Forge contract set successfully!");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
