import { useCallback, useEffect, useRef, useState } from "react";

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
}
