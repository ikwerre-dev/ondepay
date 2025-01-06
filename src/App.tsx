import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import BannerComponent from "./components/banner";
import HeaderComponent from "./components/header";
import FeaturesSection from "./components/features";
import PartnersSection from "./components/partners";
import CardInfo from "./components/cardInfo";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true 
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
    <div className="min-h-screen">
      <div 
        className="absolute w-[70vw] h-full left-[15vw] top-[-255px] bg-[#492a4d] pointer-events-none"
        style={{
          filter: 'blur(120px)',
          opacity: 0.5,
        }}
      />
      <HeaderComponent />
      <BannerComponent />
      <PartnersSection />
      <FeaturesSection />
      <CardInfo />
    </div>
  );
}

export default App;