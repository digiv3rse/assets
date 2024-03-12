import localFont from "@next/font/local";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  DISCORD_URL,
  DOCUMENTATION_URL,
  TWITTER_URL,
  CONTRACTS_BOOK_URL,
  APP_URL,
  INFO_CENTER_URL,
  SDK_DOCUMENTATION_URL,
  GITHUB_URL,
} from "../constants/urls";

// Font files can be colocated inside of `app`
const monument = localFont({
  src: "../public/fonts/MonumentExtended-Bold.ttf",
});
const migra = localFont({ src: "../public/fonts/Migra-Regular.ttf" });
const montreal = localFont({
  src: "../public/fonts/NeueMontreal-Regular.ttf",
});

const DevSection = () => {
  return (
    <div className="bg-black h-[90vh] border-t border-gray-700">
      <div className="flex items-center justify-around h-full">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="mr-0 sm:mr-20 w-1/2 flex items-center justify-around">
            <Image
              className="w-40 sm:w-80"
              src={"/icons/dev-logo.svg"}
              alt="Dev Icon"
              width={300}
              height={300}
            />
          </div>
          <div className="mt-20 sm:mt-0 text-center sm:text-left sm:w-[60vw]">
            <div
              className={
                monument.className +
                " text-2xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FD914C] to-[#b03e19]"
              }
            >
              Build with DiGiV3rse
            </div>
            <div className="text-md sm:text-2xl text-white mt-6 px-8 sm:px-0">
              A composable social network protocol built to be community-owned and ever-evolving. 
              It empowers its users by allowing them to decide how they want their social graph to be built and how they want it to be monetized, if at all.
            </div>
            <div className="mt-20 sm:mt-12 flex flex-col sm:flex-row px-8 sm:px-0">
              <a
                href={DOCUMENTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black cursor-pointer text-xs md:text-md flex items-center justify-around font-bold rounded-md h-8 w-full sm:w-52 bg-gradient-to-r from-[#FD914C] to-[#b03e19]"
              >
                View Docs
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 cursor-pointer text-xs md:text-md flex items-center justify-around mt-4 sm:mt-0 sm:ml-4 font-bold rounded-md h-8 w-full sm:w-52 border border-gray300"
              >
                View Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevSection;