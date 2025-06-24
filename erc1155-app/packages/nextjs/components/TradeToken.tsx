"use client";

import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

export const TradeButton = ({
  fromId,
  toId,
  label,
}: {
  fromId: number;
  toId: number;
  label: string;
}) => {
  const { writeContractAsync, isMining } = useScaffoldWriteContract({
    contractName: "Mint1155",
  });

  const handleTrade = async () => {
    try {
      await writeContractAsync({
        functionName: "trade", // assumes trade(fromId, toId) exists
        args: [BigInt(fromId), BigInt(toId)],
      });
    } catch (err) {
      console.error("❌ Trade failed", err);
    }
  };

  return (
    <button
      onClick={handleTrade}
      disabled={isMining}
      className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-lg mt-2 disabled:opacity-50"
    >
      {isMining ? "Trading..." : label}
    </button>
  );
};