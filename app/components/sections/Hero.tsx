'use client';
import { BrsonmediaMedium, BrsonmediaRegular, montserrat } from "../fonts"
import LinkableButton from "../inputs/LinkableButton";
import { TypeAnimation } from "react-type-animation";
import styles from './styles/Hero.module.css'
import Image from "next/image";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import Scroll from "locomotive-scroll"


const Hero = ({ locomotiveScroll }: { locomotiveScroll: Scroll }) => {
  const {width} = useWindowDimensions();
  return (
    <section className="
      flex 
      flex-col 
      xxs:gap-6 
      xs:gap-12 
      sm:gap-14 
      md:gap-8
      justify-center 
      md:mt-28
      lg:mt-40 
      xxs:mt-10  
      px-7 
      xl:px-[9rem]
      lg:px-[5.5rem]
      1/2xl:px-[14rem]
      2xl:px-[17rem]
      3xl:px-[29rem]
      lg:pt-[7rem]
      lg:pb-[2rem]
      pt-24
    "
    id="hero"
    
    >
     <div className=" 
                flex 
                flex-row
                w-full
                justify-between
                relative
                "
            >
        <h1
        className={`
        ${montserrat.className}
            text-[35px]
            h-24
            leading-10
            ml-2
            xs:text-5xl
            sm:text-7xl
            md:text-[63px]
            lg:text-[72px]
            md:leading-[79.21px]
            text-white
            font-medium
            md:w-[517px]
            md:h-[172px]
            z-10
        `}
        >
            
              <TypeAnimation
                        cursor={true}
                        sequence={
                          [
                            'Scale', 3000,
                             'Improve', 3000,
                             '10x', 3000,
                             'Grow', 3000,
                             'Expand', 3000,
                             'Boost', 3000,
                             'Elevate', 3000
                            ]}
                        wrapper="strong"
                        className="font-extrabold"
                        repeat={Infinity}
                    />  
            your business!
        </h1>
        {
          width && width >=768 && (
            <div
                className={styles.heroImg}
            >
              <Image
                  className="transition-opacity"
                  priority={true}
                  src="/3D Icon.svg"
                  alt="hero img"
                  quality={100}
                  fill
              />
  
            </div>
      
          )
        }
        {
          width && width >=1024 && (
            <div
                className={styles.shapeImg}
            >
              <Image
                  className="transition-opacity"
                  priority={true}
                  src="/Shape blur.png"
                  alt="shape img"
                  quality={100}
                  fill
              />
  
            </div>
      
          )
        }
       
      </div>
     <div className="flex flex-row md:ml-2">
      <LinkableButton 
          className="flex items-center xxs:text-sm  md:text-lg justify-center md:!w-[192px] md:!h-[44px] rounded-[34px] 
          hover:scale-105 
          hover:transition-all 
          hover:duration-300
          text-[#6300FF]
          "
          buttonType={'secondary'} 
          text={'FREE Audit'} 
          href={"#freeAudit"}
          label={"Free Audit Button"}
          locomotiveScroll={locomotiveScroll}
         
        />
      <LinkableButton 
          className="flex items-center font-normal xxs:text-lg md:text-2xl justify-center md:!w-[192px] md:!h-[44px] md:rounded-[10px] 
          hover:scale-105 
          hover:transition-all 
          hover:duration-300
          "
          buttonType={'invisible'} 
          text={'Contact us'} 
          href={"#contact"}
          label={"Contact Button"}
          locomotiveScroll={locomotiveScroll}
      />
     </div>
    </section>
  )
}

export default Hero