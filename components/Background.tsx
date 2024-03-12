import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

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

export default Background;