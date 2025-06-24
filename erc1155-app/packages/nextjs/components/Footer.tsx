import React from "react";
import Link from "next/link";
import { hardhat } from "viem/chains";
import { CurrencyDollarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { SwitchTheme } from "~~/components/SwitchTheme";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { Faucet } from "~~/components/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { useGlobalState } from "~~/services/store/store";

const OPENSEA_BASE_URL = "https://testnets.opensea.io/assets/matic";
const CONTRACT_ADDRESS = "0x742f82A0704dB5F0442F6Cfaf3A4d937A79ec1c9";
/**
 * Site footer
 */
export const Footer = () => {
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);
  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.id === hardhat.id;

  return (
    <div className="sticky top-0 navbar bg-gradient-to-r from-[#24245a] to-[#3b3b65] text-white shadow-lg backdrop-blur-md border-purple-200 z-10">
      <div>
        <div className="fixed flex justify-between items-center w-full z-10 p-4 bottom-0 left-0 pointer-events-none">
          <div className="flex flex-col md:flex-row gap-2 pointer-events-auto">
            {nativeCurrencyPrice > 0 && (
              <div>
                <div className="btn btn-primary btn-sm font-normal gap-1 cursor-auto bg-gradient-to-r from-[#5a68ff] to-[#3b3b65]">
                  <CurrencyDollarIcon className="h-4 w-4" />
                  <span>{nativeCurrencyPrice.toFixed(2)}</span>
                </div>
              </div>
            )}
            {isLocalNetwork && (
              <>
                <Faucet />
                <Link href="/blockexplorer" passHref className="btn btn-primary btn-sm font-normal gap-1 bg-gradient-to-r from-[#5a68ff] to-[#3b3b65]">
                  <MagnifyingGlassIcon className="h-4 w-4" />
                  <span>Block Explorer</span>
                </Link>
                
              </>
            )}
          </div>
          {/* <SwitchTheme className={`pointer-events-auto ${isLocalNetwork ? "self-end md:self-auto" : ""}`} /> */}
        </div>
      </div>
      <div className="w-full">
        <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-sm w-full">
            <div className="text-center">
              {/* Could be changed after uploaded to portfolio */}
              <a href="https://github.com/diasfusuy/Metana-Solidity-Bootcamp/tree/main/module-3/erc1155-app" target="_blank" rel="noreferrer" className="link"> 
                Fork me
              </a>
            </div>
            <span>·</span>
            <div className="flex justify-center items-center gap-2">
              <p className="m-0 text-center">
                Made with ❤️ by
              </p>
                <a
            href="https://github.com/diasfusuy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-purple-400"
          >
                
                <span className="link">diasfusuy</span>
              </a>
            </div>
            <span>·</span>
            <div className="text-center">

              <Link href={`${OPENSEA_BASE_URL}/${CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text underline hover:text-blue-200">
                <span>Check on Opensea</span>
          </Link>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
