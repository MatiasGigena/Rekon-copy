"use client"
import { BrsonmediaMedium, BrsonmediaRegular, montserrat } from "../../../../components/fonts";
import { useWindowDimensions } from "../../../../hooks/useWindowDimensions";

const HeroPolicy = () => {
const { width } = useWindowDimensions();
  return (
    <section className="
    flex 
    flex-col 
    mt-28 
    xxs:gap-6 
    xs:gap-12 
    xs:pt-6
    sm:gap-16
    md:gap-8
    justify-center 
    lg:mt-44  
    px-7 
    xl:px-[17rem]
    lg:px-[7rem]
    ">
     <div>
        <h1
        className={`
            ${width && width >= 640 ?  BrsonmediaMedium.className : montserrat.className}
            text-[35px]
            leading-10
            xs:text-5xl
            sm:text-7xl
            md:text-[86px]
            md:leading-[79.21px]
            text-white
            font-[600]
            mb-6
            md:mb-10
        `}
        >
           Privacy Policy
        </h1>
        <h2
            className={`
                ${width && width >= 640 ?  BrsonmediaMedium.className : montserrat.className}
                text-base
                sm:text-base
                md:text-lg
                lg:text-[24.47px]
                leading-[28px]
                lg:leading-[39.17px]
                text-white
                w-full
                sm:w-3/4
                md:w-3/4

                `}
        >
            This Privacy Policy describes how your personal information is collected, used, and shared when you visit rekonmedia.com (the “Site”).
        </h2>
     </div>

    </section>
  )
}

export default HeroPolicy