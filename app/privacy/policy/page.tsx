"use client"
import { useEffect, useState } from "react";
import Navbar from "../../components/navigation/Navbar";
import HeroShape from "../../components/svg/HeroShape";
import HeroPolicy from "./components/sections/HeroPolicy";
import PrivacyText from './components/sections/PrivacyText';
import Footer from "../../components/footer/Footer";

export default function PrivacyPolicy() {
  const [locomotiveScroll, setLocomotiveScroll] = useState<any>(null);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScrollInstance = new LocomotiveScroll({
        lenisOptions: {
          duration: 2,
          smoothTouch: false,
        },
      });
      setLocomotiveScroll(locomotiveScrollInstance);
    })();
  }, []);
  return (
    <main className={` relative `}>
      <Navbar locomotiveScroll={locomotiveScroll}/>
      <div className="relative max-w-[2080px] mx-auto ">
        <HeroShape/>
      </div>
      <div className="max-w-[1920px] min-h-screen mx-auto  z-40 relative ">
        <HeroPolicy/> 
        <PrivacyText/>      
      </div>
     <Footer locomotiveScroll={locomotiveScroll}/>
    </main>
  )
}
