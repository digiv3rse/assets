import localFont from "@next/font/local";
import Image from "next/image";
const monument = localFont({
  src: "../public/fonts/MonumentExtended-Bold.ttf",
});
const migra = localFont({ src: "../public/fonts/Migra-Regular.ttf" });
const montreal = localFont({
  src: "../public/fonts/NeueMontreal-Regular.ttf",
});

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

export default Hero;