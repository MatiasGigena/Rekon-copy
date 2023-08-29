'use client';

import Image from "next/image";
import { montserrat } from "../fonts";

interface IPopup {
    containerStyles?: string;
    title: string;
    subtitle: string;
}

const PopUpReachingOut:React.FC<IPopup> = (
    {
        containerStyles = "",
        title,
        subtitle
    }
) => {
  return (
    <div
        className={`
        ${containerStyles}
        w-full
        p-4
        gap-2
        md:gap-4
        lg:py-0
        bg-[#0D0D0D]
        flex
        flex-col-reverse
        text-center
        justify-evenly
        xl:gap-8
        items-center
        ease-in
        transition-all
        duration-500
        md:text-start
        xl:mt-[3.74rem]
        lg:h-[25rem]
        xl:h-[16rem]
        xl:flex-row
        xl:rounded-[30px]
        
        `}
    >
        <div className="flex flex-col gap-1 xl:gap-3">
            <p
                className={` 
                    ${montserrat.className}
                    text-lg
                    font-extrabold
                    xs:text-[16px]
                    sm:text-[18px]
                    md:text-2xl
                    xl:text-4xl
                    text-white
                    

                `}
            > {title} </p>
            <small className={` 
                ${montserrat.className}
                text-[12px]
                md:text-sm
                xl:text-2xl
                font-medium
                text-white
                text-center
                xl:text-start
            `}> {subtitle} </small>
        </div>
        <div className="w-24 h-16 md:w-[120px] md:h-[120px] lg:w-[188px] lg:h-[188px]  relative">
            <Image
                src="/like-violeta.svg"
                alt="tick"
                quality={10}
                fill
            />

        </div>
    </div>
  )
}

export default PopUpReachingOut