"use client";

import { useAccount } from "wagmi";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

export const MintButton = ({ id, label }: { id: number, label: string }) => {
  const { address } = useAccount();

  const { writeContractAsync, isMining } = useScaffoldWriteContract({
    contractName: "Mint1155",
  });

  const handleMint = async () => {
    try {
      await writeContractAsync({
        functionName: "mint",
        args: [address, id, 1, "0x"],
      });
      console.log(`✅ Minted token ID ${id}`);
    } catch (err) {
      console.error("❌ Mint failed:", err);
    }
  };

  return (
    <button onClick={handleMint} disabled={isMining} className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white py-2 px-4 rounded-full mt-auto mx-auto">
      {isMining ? "Minting..." : label}
    </button>
  );
};
