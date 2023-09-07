"use client";

import { BrsonmediaSemibold, montserrat } from "../fonts";
import SlideItem from "../slider/SlideItem";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import Image from "next/image";

const WhatDoWeOffer = () => {
  const { width } = useWindowDimensions();
  const slides = [
    {
      id: 2,
      img: "/market.png",
      text: "90-Day Growth",
      description:
        "<strong>Achieve powerful growth</strong> for your <strong>medium-sized business</strong> in <strong>under 90 days</strong> with us. Our tailored strategy <strong>amplifies organic traffic</strong>, transforming your website into a <strong>hub of engagement</strong>. Enjoy the results <strong>without stress</strong>, and <strong>free up time</strong> for what truly matters to you.",
    },
    {
      id: 3,
      img: "/rocket.png",
      text: "Market Expansion",
      description:
        "We leverage <strong>influencer marketing</strong> to assist <strong>medium to large-sized apps</strong> in tapping into the often-untapped <strong>Hispanic market and beyond</strong>. Transform the <strong>followers of influencers</strong> into your app's <strong>loyal customers</strong>, and make your app a <strong>sensation in new markets</strong>.",
    },
  ];

  return (
    <section
      className="
              xs:mt-14 
              sm:mt-10
              md:mt-12
              lg:mt-20
              xl:mt-12
              2xl:mt-28 
              flex 
              flex-col
              items-center
              gap-8
              justify-center
              overflow-hidden           
      "
      id="services"
      data-listen-section>
      <div
        className="
        py-20
        bg-[#0f0f12]
        w-full
        z-10
        flex
        flex-col
        justify-center
        items-center
        gap-8
        md:px-28
        lg:px-7
        xl:px-[7.5rem]
        xl:py-[11rem]
        2xl:px-[17rem]
        2xl:py-[11rem]
        px-7 
        relative
      ">
        <h3
          className={` 
          ${width && width >= 640 ? BrsonmediaSemibold.className : montserrat.className} 
            leading-6
            text-xl
            font-semibold
            text-[#FFFFFF]
            xs:text-2xl
            sm:text-3xl
            md:text-5xl
            lg:text-7xl
            pb-8
            lg:pb-14
            z-20
            mb-20
            lg:mb-10
            xl:mb-20
            
          `}>
          What do we offer?
        </h3>

        <div className="grid grid-cols-1 items-center md:items-start lg:grid-cols-2 justify-between gap-32 lg:gap-36 !z-20">
          {slides.map((slide) => {
            return (
              <SlideItem
                key={slide.id}
                id={slide.id}
                svg={slide.img}
                text={slide.text}
                description={slide.description}
              />
            );
          })}
        </div>
        {width && width >= 1024 &&
          <>
            <Image className="absolute lg:scale-75 lg:top-[2rem] lg:right-0 xl:top-[8rem] xl:right-[7rem] 1/2xl:top-[8rem] 1/2xl:right-[10rem] 2xl:top-[8rem] 2xl:right-[12rem] 3xl:top-[8rem] 3xl:right-[23rem]" src="/Cone2 (2).png" alt="RekonMedia Logo" height={20} width={147} quality={100} />
            <Image className="absolute lg:top-[9rem] lg:right-5 xl:top-[5rem] xl:right-5 1/2xl:top-[3rem] 1/2xl:right-5 2xl:top-[2rem] 2xl:right-5 3xl:top-0 3xl:right-5" src="/LineaNegra.png" alt="RekonMedia Logo" height={20} width={2100} quality={100} />
            <Image className="absolute lg:scale-50 xl:scale-100 lg:top-[-4rem] lg:left-[-4rem] xl:top-[29rem] xl:left-[-4rem] 1/2xl:top-[29rem] 1/2xl:left-0 2xl:top-[29rem] 2xl:left-0 3xl:top-[29rem] 3xl:left-0" src="/Torus Half  2.svg" alt="RekonMedia Logo" height={20} width={250} quality={100} />
            <Image className="absolute lg:bottom-0 lg:left-[7rem] xl:bottom-0 xl:left-[7rem] 1/2xl:bottom-0 1/2xl:left-[7rem] 2xl:bottom-0 2xl:left-[7rem] 3xl:bottom-0 3xl:left-[7rem]" src="/conemitad.png" alt="RekonMedia Logo" height={20} width={700} quality={100} />
            <Image className="absolute lg:scale-50 xl:scale-100 lg:right-[-16rem] lg:top-[21rem] xl:top-[24rem] xl:right-0 1/2xl:top-[27rem] 1/2xl:right-1   " src="/Explosion.svg" alt="RekonMedia Logo" height={20} width={900} quality={100} />
          </>}
        {width && width < 1024 &&
          <>
            <Image className="absolute xs:top-6 xs:right-1 md:top-6 md:right-4 " src="/Cone2.png" alt="RekonMedia Logo" height={20} width={75} quality={100} />
            <Image className="absolute xs:top-40  xs:left-0 md:top-40 opacity-20 md:left-0 " src="/Torus Half  2.svg" alt="RekonMedia Logo" height={20} width={140} quality={100} />
            <Image className="absolute xs:scale-125 xs:bottom-2 xs:left-[1rem] md:scale-110 md:bottom-2 md:left-[-2rem] " src="/conemitad.png" alt="RekonMedia Logo" height={20} width={1000} quality={100} />
            <Image className="absolute xs:right-[-4rem] xs:bottom-[0rem] md:right-0 md:bottom-[0rem] " src="/Forma fondo.png" alt="RekonMedia Logo" height={20} width={500} quality={100} />
          </>}
      </div>
    </section>
  );
};

export default WhatDoWeOffer;
