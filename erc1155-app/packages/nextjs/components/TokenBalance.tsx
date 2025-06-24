"use client";

import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export const TokenBalance = () => {
    const { address } = useAccount();

    const tokenIds = [0, 1, 2, 3, 4, 5, 6];
    
    return (
        <div className="my-6 p-4 bg-[#1f1f3a] rounded-xl shadow-md text-white">
        <h2 className="text-lg font-bold mb-4">🎒 Your Token Inventory</h2>
        <ul className="space-y-2">
          {tokenIds.map(id => {
            const { data: balance } = useScaffoldReadContract({
              contractName: "Mint1155",
              functionName: "balanceOf",
              args: [address, BigInt(id)],
            });
  
            return (
              <li key={id} className="flex justify-between">
                <span>Token ID {id}:</span>
                <span>{balance?.toString() ?? "Loading..."}</span>
              </li>
            );
          })}
        </ul>
      </div>
    )
};