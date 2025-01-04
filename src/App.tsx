import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import BannerComponent from "./components/banner";
import HeaderComponent from "./components/header";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t: number): number => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#440C3F]">
      <HeaderComponent />
      <BannerComponent />
      <div className="min-h-screen bg-[#440C3F]"></div>
    </div>
  );
}

export default App;