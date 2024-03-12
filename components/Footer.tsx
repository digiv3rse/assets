import localFont from "@next/font/local";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  DOCUMENTATION_URL,
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

const Footer = () => {
  return (
    <div className="bg-black border-t border-gray-700 sm:h-32 w-full sm:flex justify-around px-6 sm:px-0 py-4 sm:py-0">
      <div className="block sm:flex items-left sm:items-center">
        <a
          href={TWITTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs rounded-md h-8 flex items-center opacity-70 mt-2 sm:mt-0 sm:px-12"
        >
          Twitter
        </a>
        <a
          href={DOCUMENTATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs rounded-md h-8 flex items-center opacity-70 mt-2 sm:mt-0 sm:px-12"
        >
          Docs
        </a>
        <a
          href={CONTRACTS_BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs rounded-md h-8 flex items-center opacity-70 mt-2 sm:mt-0 sm:px-12"
        >
          Contracts Book
        </a>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs rounded-md h-8 flex items-center opacity-70 mt-2 sm:mt-0 sm:px-12"
        >
          App
        </a>
      </div>
    </div>
  );
};

export default Footer;