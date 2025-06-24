"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { MintButton } from "~~/components/MintButton";
import { ForgeButton } from "~~/components/ForgeButton";
import { ForgeThree } from "~~/components/ForgeThree";
import { TradeButton } from "~~/components/TradeToken";
import { TokenBalance } from "~~/components/TokenBalance";


const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 bg-gradient-to-r from-[#3a3a90] to-[#51519a] text-white shadow-lg backdrop-blur-md border-purple-200 z-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-3xl font-bold ">Welcome to Mint & Forge</span>
            <span className="block text-2xl font-light italic">Craft your own tokens, combine them, and bring your creativity on-chain.</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
          <div className="flex justify-center mt-7">
          <TradeButton fromId={0} toId={1} label="Trade tokens" />
           </div> 
           <div> <TokenBalance/> </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 mb-4">
          <div className="flex justify-center items-center gap-12 flex-col md:flex-row ">  
            <div className="w-full h-full min-h-[250px] mt-16 p-6 bg-[#262654]/60 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform flex flex-col justify-between">
              <div className="text-3xl mb-4">🔨</div>
                <h2 className="text-xl font-semibold mb-2 text-white">Mint Tokens</h2>
                <p className="text-white/80 mb-4">Create your custom tokens and deploy them on-chain.</p>
                <div className="flex flex-col md:flex-column justify-center gap-8 mt-4">
                    <MintButton id={0} label="Mint Sword 🗡️" />
                    <MintButton id={1} label="Mint Shield 🛡️" />
                    <MintButton id={2} label="Mint Potion 🧪" />
                </div>
            </div>
             <div className="w-full h-full min-h-[250px] mt-16 p-6 bg-[#262654]/60 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform flex flex-col justify-between">
                 <div className="text-3xl mb-4">⚒️</div>
                  <h2 className="text-xl font-semibold mb-2 text-white">Forge Tokens</h2>
                  <p className="text-white/80 mb-4">Combine tokens to craft powerful new assets.</p>
                 <ForgeButton id1={0} id2={1} label="Forge 🔥 0 + 1" />
                 <ForgeButton id1={1} id2={2} label="Forge 🔥 1 + 2" />
                 <ForgeButton id1={0} id2={2} label="Forge 🔥 0 + 2" />
                 <ForgeThree id1={0} id2={1} id3={2} label="Forge 🛡 Hero’s Armor" />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
