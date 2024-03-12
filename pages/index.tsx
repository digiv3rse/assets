import localFont from "@next/font/local";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  DOCUMENTATION_URL,
  TWITTER_URL,
  CONTRACTS_BOOK_URL,
  SDK_DOCUMENTATION_URL,
  GITHUB_URL,
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

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);

  return (
    <div className="bg-black">
      <div className="relative h-[80vh] sm:h-[95vh]">
        <Background />
        <Header />
        <Hero />
      </div>
      <AppSection />
      <DevSection />
      <Footer />
    </div>
  );
};

const Background = () => {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useCallback((ref: HTMLVideoElement) => {
    const handler = async () => {
      try {
        await ref.play();
        setLoaded(true);
      } catch (err) {
        setLoaded(false);
      }
    };
    handler();
  }, []);

  return (
    <div className="absolute h-full w-full">
      <Image
        className={`object-cover h-full sm:hidden absolute top-0 ${
          loaded ? "hidden" : "sm:visible "
        }`}
        src="/backgrounds/background-preview.png"
        width={400}
        height={400}
        alt="background"
      />
      <video
        ref={videoRef}
        className={`object-cover h-full w-full ${
          loaded ? "visible" : "invisible sm:visible"
        }`}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      >
        <source src="https://ik.imagekit.io/digiv3rse/FullSizeRender.MOV?updatedAt=1710228857278" />
      </video>
    </div>
  );
};

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

const Hero = () => {
  return (
    <div className={"absolute z-20 bottom-10 left-5 sm:left-10"}>
      <div className={migra.className + " text-white text-6xl sm:text-7xl "}>
        Own the <br className="sm:hidden" />links between yourself and your community.
      </div>
      <div
        className={
          montreal.className + " text-xl sm:text-2xl mt-6 text-white opacity-80"
        }
      >
        DiGiV3rse is forming a fully composable,
        <br className="sm:hidden" /> decentralized
        <br className="hidden sm:block" /> social network connection.
      </div>
    </div>
  );
};

const AppSection = () => {
  return (
    <div className="bg-black h-[90vh]">
      <div className="flex items-center justify-around h-full">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="mr-0 sm:mr-20 w-1/2 flex items-center justify-around">
            <Image
              className="w-40 sm:w-80"
              src={"/icons/app-logo.svg"}
              alt="App Icon"
              width={300}
              height={300}
            />
          </div>
          <div className="mt-20 sm:w-[60vw] sm:mt-0 text-center sm:text-left">
            <div
              className={
                monument.className +
                " text-2xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#E7F1BC] to-[#1990B3]"
              }
            >
              Explore the app
            </div>
            <div className="text-md sm:text-2xl text-white mt-6 px-8 sm:px-0">
              It is designed to empower creators to own the links between themselves and their community, forming a fully composable, user-owned social graph.
            </div>
            <div className="mt-20 sm:mt-12 flex flex-col sm:flex-row px-8 sm:px-0">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black cursor-pointer text-xs md:text-md flex items-center justify-around font-bold rounded-md h-8 w-full sm:w-52 bg-gradient-to-r from-[#E7F1BC] to-[#1990B3]"
              >
                Launch App
              </a>
              <a
                href={DOCUMENTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 cursor-pointer text-xs md:text-md flex items-center justify-around mt-4 sm:mt-0 sm:ml-4 font-bold rounded-md h-8 w-full sm:w-52 border border-gray300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
