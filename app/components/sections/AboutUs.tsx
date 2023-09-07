'use client';
import Image from "next/image";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { BrsonmediaRegular, inter, montserrat } from "../fonts"

const AboutUs = () => {
  const { width } = useWindowDimensions();
  return (
    <section className="
            py-2  
            mt-6 
            xs:mt-12 
            sm:mt-28 
            flex 
            flex-col
            items-center
            gap-8
            xxs:py-5  
            px-7 
            lg:px-[5.5rem]
            xl:px-[9rem]
            xl:py-[11rem]
            1/2xl:px-[14rem]
            2xl:px-[17rem]
            3xl:px-[29rem]
            2xl:py-[4rem]
            z-40
    "   
    >
      <div className="absolute top-96" id="aboutUs" data-listen-section></div>
        <div className="linear gap-3 md:gap-5 p-4 md:p-6 lg:p-8 xl:p-12 rounded-[16px] backdrop-blur-sm flex flex-col lg:gap-10 relative">
          <h2 className={
              `${width && width >= 640 ? BrsonmediaRegular.className : montserrat.className} 
              text-center
              text-xl
              2xs:text-xl
              font-normal
              text-[#FAFAFA]
              leading-6
              sm:text-2xl
              md:text-4xl
              lg:text-6xl
              xl:text-7xl
              `
              }>What is RekonMedia?</h2>
          <p className={
              `
              text-center
              text-[#FAFAFA]
              font-medium
              leading-[19px]
              text-xs
              sm:text-lg
              md:text-xl
              lg:text-[24px]
              lg:leading-[39px]
              lg:max-w-[1269px]
              ${inter.className}
              `}>
              We <strong className="font-extrabold">accelerate growth</strong> for medium-sized businesses and <strong className="font-extrabold">expand market reach</strong> for apps. <strong className="font-extrabold">Using tailored strategies</strong>, we deliver <strong className="font-extrabold">noticeable results in under 90 days</strong>, all stress-free. Our focus on <strong className="font-extrabold">boosting organic traffic</strong> and <strong className="font-extrabold">strategic influencer marketing</strong> lets you concentrate on what truly matters to your business.
          </p>

        </div>
        {width && width >= 1024 &&
          <>
            <Image className="absolute lg:top-[16rem] lg:left-[0rem] xl:top-[25rem] xl:left-10 1/2xl:left-32 2xl:top-[18.5rem] 2xl:left-44 3xl:top-[18rem] 3xl:left-[22rem]" src="/3D Shape.svg" alt="RekonMedia Logo" height={20} width={200} quality={100} />
            <Image className="absolute lg:top-[36rem] lg:right-[0rem] xl:top-[49rem] xl:right-10 1/2xl:right-32  z-[-30] 2xl:top-[42rem] 2xl:right-40 3xl:top-[42rem] 3xl:right-[22rem] " src="/3D Torus.svg" alt="RekonMedia Logo" height={20} width={200} quality={100} />
            <Image className="absolute lg:top-[36rem] lg:left-0 xl:top-[45rem] 1/2xl:top-[50rem] 2xl:top-[37rem] 3xl:top-[30rem] z-[-30] " src="/Linea.png" alt="RekonMedia Logo" height={20} width={2000} quality={100} />
          </>}
        {width && width < 1024 && width > 640 &&
          <>
            <Image className="absolute sm:left-[-1rem] sm:top-[12.5rem] md:left-[-1rem] md:top-[16.3rem]" src="/3D Shape.svg" alt="RekonMedia Logo" height={20} width={100} quality={100} />
            <Image className="absolute  sm:right-[-1rem] sm:top-[25rem] md:right-[-1rem] md:top-[31rem]  z-[-30] " src="/3D Torus.svg" alt="RekonMedia Logo" height={20} width={100} quality={100} />
            <Image className="absolute sm:top-[23rem] md:top-[28rem] z-[-30] " src="/Linea.png" alt="RekonMedia Logo" height={20} width={1000} quality={100} />
          </>}
        {width && width < 640 &&
          <>
            <Image className="absolute left-2 top-40 " src="/3D Shape (1).png" alt="RekonMedia Logo" height={20} width={50} quality={100} />
            <Image className="absolute xsm:top-[18.5rem] xs:top-[22rem] ift:top-[21rem] right-2  z-[-30] " src="/3D Torus (1).png" alt="RekonMedia Logo" height={20} width={50} quality={100} />
          </>}
      
    </section>
  )
}

export default AboutUs