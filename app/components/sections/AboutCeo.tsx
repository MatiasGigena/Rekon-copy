"use client";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { BrsonmediaSemibold, inter, montserrat } from "../fonts";
import { Avatar, AvatarFallback } from "../ui/avatar";
import Link from "next/link";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const AboutCEO = () => {
  const { width } = useWindowDimensions();
  return (
    <section
      className="flex flex-col xs:flex-row justify-center items-center rounded-xl xl:rounded-[40px] gap-4 xl:gap-5 pt-2 xs:mt-12 sm:mt-14 xl:pt-16 xxs:mt-8 pb-24 
    xl:px-[17rem]
    xl:py-[11rem]
    px-6
    ift:px-7
    xl:mt-28
    relative
    ">
      {width && width > 640 && <Image className=" absolute z-10 object-cover" src="/rm2.png" alt="" fill quality={100} />}
      <Avatar
        className="w-[50%] z-20 h-[150px] xs:w-[69px] xs:h-[133px] 
    sm:w-[25%] sm:h-[150px]
    md:w-[30%] md:h-[200px] 
    lg:w-[18%]  lg:h-[316px]
    xl:w-[18%]  xl:h-[316px]
    rounded-[16px]">
        <Image
          className="object-cover"
          src="/santi-rekon.webp"
          alt="Imagen de Matias del Curto - Founder & CEO de RekonMedia"
          fill
          quality={20}
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div
        className="flex flex-col z-20 backdrop-blur-3xl colorbout2 rounded-[8px] justify-center 
  h-[100px]
  xs:w-[350px] xs:h-[133px]
  sm:h-[150px] sm:w-[80%]  
  md:h-[200px] md:w-[80%]
  lg:w-[610px] lg:h-[316px]
  xl:w-[610px]  xl:h-[316px]
  xl:rounded-[16px] 
  overflow-hidden
  ">
        <div className="pb-2 pt-4 ift:pb-3 ift:pt-9 md:py-10 flex h-full justify-start ift:justify-between lg:mt-10 items-center w-full flex-col gap-1 xs:gap-3 xl:gap-10 relative">
          <p
            className={`${width && width >= 640 ?  BrsonmediaSemibold.className : montserrat.className} font-semibold text-[10px]  text-[#FAFAFA]  lg:mb-7 xl:mb-0 w-[230px]  sm:text-base md:text-[20px]  lg:text-[23px] lg:leading-[30px] 2xl:text-[25.98px] md:w-[390px]  lg:w-[419px]`}>
            "Your vision, our mission. We're committed to making your online presence a source of strength, not stress.
            If we don't deliver, you don't pay. We're all in, just like you."
          </p>
          <div className="flex flex-row px-4 gap-2 sm:gap-4 lg:gap-6 md:px-10 w-full justify-between  items-center">
            <i
              className={`${inter.className} text-[7px] leading-[8.5px]  text-[#FAFAFA]   xxs:text-[7px] sm:text-sm xl:text-base xl:leading-6 font-normal md:text-sm left-0 relative top-1/2 -translate-y-1/2`}>
              Matias Del Curto - <strong>Founder & CEO</strong>
            </i>
            <div className="flex flex-row gap-2 sm:gap-3 lg:gap-8 flex-wrap  ">
              <Image src={"/comillas.svg"} alt="" width={30} height={20} className="scale-50 ift:scale-[0.65] md:scale-100 md:top-4 top-0 ift:top-2 right-3 absolute lg:top-0 md:right-10" />
              <Link
                href={"https://www.instagram.com/_dcmat_/"}
                aria-label="Instagram de Matias del Curto CEO de RekonMedia"
                passHref>
                <FaInstagram
                  className="fill-white
                h-[8px]
                w-[8px]
                sm:w-[14px]
                sm:h-[14px]
                xl:w-[20px]
                xl:h-[20px]
                hover:scale-105 
                hover:transition-all 
                hover:duration-300
                "
                />
              </Link>
              <Link
                href={"https://twitter.com/_Dcmat_"}
                aria-label="Twitter de Matias del Curto CEO de RekonMedia"
                passHref>
                <FaTwitter
                  className="fill-white
                h-[8px]
                w-[8px]
                sm:w-[14px]
                sm:h-[14px]
                xl:w-[20px]
                xl:h-[20px]
                hover:scale-105 
                hover:transition-all 
                hover:duration-300
                "
                />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/matiasdelcurto/"}
                aria-label="LinkedIn de Matias del Curto CEO de RekonMedia"
                passHref>
                <FaLinkedin
                  className="fill-white
                h-[8px]
                w-[8px]
                sm:w-[14px]
                sm:h-[14px]
                xl:w-[20px]
                xl:h-[20px]
                hover:scale-105 
                hover:transition-all 
                hover:duration-300
                "
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCEO;
