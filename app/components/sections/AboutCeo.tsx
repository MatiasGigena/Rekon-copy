'use client';
import {FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import Image from "next/image";
import { inter, montserrat } from "../fonts";
import { Avatar, AvatarFallback } from "../ui/avatar";
import Link from 'next/link';

const AboutCEO = () => {
  return (
    <section className="flex flex-col xs:flex-row justify-center items-center rounded-xl xl:rounded-[40px] gap-4 xl:gap-5 pt-2 xs:mt-12 sm:mt-14 xl:pt-16 xxs:mt-8 pb-24 
    xl:px-[17rem]
    xl:py-[11rem]
    px-7
    xl:mt-28
    ">
  <Avatar className="w-[50%] h-[150px] xs:w-[25%] xs:h-[140px] 
    sm:w-[25%] sm:h-[150px]
    md:w-[30%] md:h-[200px] 
    lg:w-[15%] 
    xl:w-[18%]  xl:h-[316px]
    rounded-l-[20%] 
    rounded-tr-[5%] 
    rounded-br-[15%]">
    <Image className="object-cover" src="/santi-rekon.webp" alt="Imagen de Matias del Curto - Founder & CEO de RekonMedia" fill quality={20} />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>

  <div className="flex flex-col bg-gradient-to-r from-indigo-600 to-purple-600 rounded-tl-[9px] rounded-tr-[23px] rounded-br-[23px] rounded-bl-[26px] justify-center 
  h-[100px]
  xs:w-[80%] xs:h-[140px]
  sm:h-[150px] sm:w-[80%]  
  md:h-[200px] md:w-[80%]
  lg:w-[80%]
  xl:w-[950px]  xl:h-[316px]
  xl:rounded-tl-[20px] xl:rounded-bl-[100px] xl:rounded-r-[100px] 
  lg:py-6 w-full   
  overflow-hidden
  ">
    <div className="px-5 sm:px-8 sm:py-4 md:p-7 xl:px-16 flex flex-col gap-1 xs:gap-3 xl:gap-6">
      <p className={`${montserrat.className} font-semibold text-[10px]  text-[#FAFAFA]      xxs:text-[10px] sm:text-base lg:text-xl xl:text-[27px] xl:leading-[33px]  xl:w-full`}>
        "Your vision, our mission. We're committed to making your online presence a source of strength, not stress. If we don't deliver, you don't pay. We're all in, just like you."
      </p>
      <div
        className="flex flex-row gap-2 sm:gap-4 lg:gap-12  items-center"
      >
        <i className={`${inter.className} text-[7px] leading-[8.5px]  text-[#FAFAFA]   xxs:text-[7px] sm:text-sm xl:text-xl xl:leading-6 font-normal md:text-sm left-0 relative top-1/2 -translate-y-1/2`}>
        Matias Del Curto - Founder & CEO
      </i>
        <div
          className='flex flex-row gap-2 sm:gap-3 lg:gap-8 flex-wrap relative '
        >
           <Link href={'https://www.instagram.com/_dcmat_/'} aria-label='Instagram de Matias del Curto CEO de RekonMedia' passHref>
              <FaInstagram
                className='fill-white
                h-[8px]
                w-[8px]
                sm:w-[14px]
                sm:h-[14px]
                xl:w-[20px]
                xl:h-[20px]
                hover:scale-105 
                hover:transition-all 
                hover:duration-300
                '
              />
          </Link>
         <Link href={'https://twitter.com/_Dcmat_'} aria-label='Twitter de Matias del Curto CEO de RekonMedia' passHref>
              <FaTwitter
                className='fill-white
                h-[8px]
                w-[8px]
                sm:w-[14px]
                sm:h-[14px]
                xl:w-[20px]
                xl:h-[20px]
                hover:scale-105 
                hover:transition-all 
                hover:duration-300
                '
              />
          </Link>
          <Link href={'https://www.linkedin.com/in/matiasdelcurto/'} aria-label='LinkedIn de Matias del Curto CEO de RekonMedia' passHref>
              <FaLinkedin
                className='fill-white
                h-[8px]
                w-[8px]
                sm:w-[14px]
                sm:h-[14px]
                xl:w-[20px]
                xl:h-[20px]
                hover:scale-105 
                hover:transition-all 
                hover:duration-300
                '
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