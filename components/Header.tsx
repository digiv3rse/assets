import localFont from "@next/font/local";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  TWITTER_URL,
  CONTRACTS_BOOK_URL,
  APP_URL,
} from "../constants/urls";

// Font files can be colocated inside of `app`
const monument = localFont({
  src: "../public/fonts/MonumentExtended-Bold.ttf",
});
const migra = localFont({ src: "../public/fonts/Migra-Regular.ttf" });
const montreal = localFont({
  src: "../public/fonts/NeueMontreal-Regular.ttf",
});

const Header = () => {
  return (
    <div className="flex items-center justify-between p-6 px-5 sm:px-10">
      <div className="flex items-center">
        <div className={monument.className + " text-white text-xl mr-2 z-20"}>
          DIGIV3RSE
        </div>
      </div>
      <div className="z-20 items-center hidden sm:flex">
        <a
          href={TWITTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-md mr-1 rounded-md h-8 flex items-center opacity-70 px-6"
        >
          Twitter
        </a>
        <a
          href={CONTRACTS_BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-md mr-2 rounded-md h-8 flex items-center opacity-70 px-6"
        >
          Contracts Book
        </a>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-md border border-white rounded-md h-8 flex items-center px-8"
        >
          Launch App
        </a>
      </div>
    </div>
  );
};

export default Header;