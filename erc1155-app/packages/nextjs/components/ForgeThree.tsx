"use client";

import { useAccount } from "wagmi";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

export const ForgeThree = ({
  id1,
  id2,
  id3,
  label,
}: {
  id1: number;
  id2: number;
  id3: number;
  label: string;
}) => {
  const { address } = useAccount();

  const { writeContractAsync, isMining } = useScaffoldWriteContract({
    contractName: "Forge",
  });

  const handleForge = async () => {
    try {
      await writeContractAsync({
        functionName: "forgeItem",
        args: [BigInt(id1), BigInt(id2), BigInt(id3)],
      });
      console.log(`✅ Forged Hero’s Armor with ${id1}, ${id2}, ${id3}`);
    } catch (error) {
      console.error("❌ Failed forging Hero's Armor", error);
    }
  };

  return (
    <button
      onClick={handleForge}
      disabled={isMining}
      className="bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-400 hover:to-lime-400 text-white py-2 px-4 rounded-full mt-4 disabled:opacity-50"
    >
      {isMining ? "Forging..." : label}
    </button>
  );
};
