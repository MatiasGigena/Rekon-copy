"use client";
import { useEffect, useState } from "react";
import AboutCEO from "./components/sections/AboutCeo";
import AboutUs from "./components/sections/AboutUs";
import Calendar from "./components/sections/Calendar";
import Companies from "./components/sections/Companies";
import FAQs from "./components/sections/Faqs";
import FreeAudit from "./components/sections/FreeAudit";
import Hero from "./components/sections/Hero";
import WhatDoWeOffer from "./components/sections/WhatDoWeOffer";
import HeroShape from "./components/svg/HeroShape";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";
import { useWindowDimensions } from "./hooks/useWindowDimensions";

export default function Home() {
  const { width } = useWindowDimensions();
  const [locomotiveScroll, setLocomotiveScroll] = useState<any>(null);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScrollInstance = new LocomotiveScroll({
        lenisOptions: {
          duration: 2,
          smoothTouch: false,
          lerp: 0.01,
        },
      });
      setLocomotiveScroll(locomotiveScrollInstance);
    })();
  }, []);

  return (
    <main className={` relative `}>
      <Navbar locomotiveScroll={locomotiveScroll} />
      {width && width <= 640 && <HeroShape />}
      <Hero locomotiveScroll={locomotiveScroll} />
      <div className="max-w-[1920px] min-h-screen mx-auto bg-[#6300ff]  z-40 relative ">
        <div
          className={`w-full min-h-screen absolute mt-[10rem] sm:mt-[13rem] md:mt-[15rem] lg:mt-[18rem] xl:mt-[23rem] 1/2xl:mt-[20rem] 2xl:mt-28 fondo z-[-60]`}></div>
        <Companies />
        <AboutUs />
        <WhatDoWeOffer />
        <FreeAudit />
        <div className="bg-[#0D0D0D]">
          <FAQs />
          <Calendar />
          <AboutCEO />
        </div>
      </div>
      <Footer locomotiveScroll={locomotiveScroll} />
    </main>
  );
}
