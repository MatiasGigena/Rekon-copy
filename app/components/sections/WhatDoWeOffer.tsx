"use client";

import { montserrat } from "../fonts";
import WebDevelopment from "../svg/WebDevelopment";
import Marketing from "../svg/Marketing";
import SlideItem from "../slider/SlideItem";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const WhatDoWeOffer = () => {
  const { width } = useWindowDimensions();
  const slides = [
    {
      id: 2,
      img: <WebDevelopment />,
      text: "90-Day Growth",
      description:
        "<strong>Achieve powerful growth</strong> for your <strong>medium-sized business</strong> in <strong>under 90 days</strong> with us. Our tailored strategy <strong>amplifies organic traffic</strong>, transforming your website into a <strong>hub of engagement</strong>. Enjoy the results <strong>without stress</strong>, and <strong>free up time</strong> for what truly matters to you.",
    },
    {
      id: 3,
      img: <Marketing />,
      text: "Market Expansion",
      description:
        "We leverage <strong>influencer marketing</strong> to assist <strong>medium to large-sized apps</strong> in tapping into the often-untapped <strong>Hispanic market and beyond</strong>. Transform the <strong>followers of influencers</strong> into your app's <strong>loyal customers</strong>, and make your app a <strong>sensation in new markets</strong>.",
    },
  ];

  return (
    <section
      className="
              xs:mt-12 
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
        bg-[#0D0D0D]
        w-full
        z-10
        flex
        flex-col
        justify-center
        items-center
        gap-8
        xl:px-[7.5rem]
        xl:py-[11rem]
        2xl:px-[17rem]
        2xl:py-[11rem]
        px-7 
        relative
      ">
        <h3
          className={` 
            ${montserrat.className} 
            leading-6
            text-xl
            font-bold
            text-[#FFFFFF]
            xs:text-xl
            sm:text-3xl
            md:text-4xl
            pb-8
            lg:pb-14
            z-20
            
          `}>
          What do we offer?
        </h3>

        <div className="grid grid-cols-1 items-center md:items-start  lg:grid-cols-2 justify-between gap-8 lg:gap-36 !z-20">
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
        {(width && width >= 1400 && (
          <>
            <div
              className="
                    absolute
                    w-[12%]
                    h-[12%]
                    bg-[#6300FF]
                    blur-[200px]
                    top-[40%]
                    opacity-80
                    left-[50%]
                  "></div>
            <div
              className="
                 absolute
                 w-[12%]
                 h-[12%]
                 bg-[#6300FF]
                 blur-[200px]
                 opacity-80
                 left-[45%]
                 -translate-x-[45%]
                 bottom-[20%]
                 -translate-y-[20%]
                 "></div>
          </>
        )) || (
          <>
            <div
              className="
                        absolute
                        w-full
                        h-2/3
                        bg-[#6300ff33]
                        blur-[60px]
                        top-3/4
                        left-[20%]
                        -translate-y-3/4
                        rounded-full
                        opacity-80
                        z-10

                    "></div>
            <div
              className="
                    
                        absolute
                        w-full
                        h-[30%]
                        bg-[#6300ff33]
                        blur-[60px]
                        top-[100%]
                        -left-1/2
                        -translate-y-[85%]
                        rounded-full
                        opacity-80
                        z-10
                    "></div>
          </>
        )}
      </div>
    </section>
  );
};

export default WhatDoWeOffer;
