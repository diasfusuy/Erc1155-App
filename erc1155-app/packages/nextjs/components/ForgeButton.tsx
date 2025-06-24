"use client";

import { useAccount } from "wagmi";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

export const ForgeButton = ({
  id1,
  id2,
  label,
}: {
  id1: number;
  id2: number;
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
        args: [[BigInt(id1), BigInt(id2)]],
      });
      console.log(`✅ Forged tokens ID ${id1} and ${id2}`);
    } catch (error) {
      console.error("❌ Forge failed", error);
    }
  };

  return (
    <button
      onClick={handleForge}
      disabled={isMining}
      className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 text-white py-2 px-4 rounded-full mt-4 disabled:opacity-50"
    >
      {isMining ? "Forging..." : label}
    </button>
  );
};
