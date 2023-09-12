"use client";

import { BrsonmediaBold, inter, montserrat } from "../fonts";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

interface SlideItemProps {
  id: number;
  svg: any;
  text: string;
  description: any;
}
const SlideItem: React.FC<SlideItemProps> = ({ id, svg: Svg, text, description }) => {
  const { width } = useWindowDimensions();
  return (
    <>
      <div
        className={` 
            flex
            flex-col
            justify-center
            items-center
            xl:w-[391.38px]
            relative
borderB
border-0
border-t            
            rounded-t-[16px]
          border-t-[#575757]
            px-6
            pb-2
            lg:mb-8
            xl:mb-0

            
        `}>
        <img src={Svg} height={"auto"} width={"auto"} alt="" className="bg-black color2 shadow2 h-40 rounded-2xl mt-[-5rem] " />

        <p
          className={` 
                pt-4
                ${width && width >= 640 ? BrsonmediaBold.className : montserrat.className} 

                leading-6
                lg:leading-[3rem]
                text-xl
                font-bold
                text-[#FFFFFF]
                xs:text-2xl
                sm:text-[20px]
                md:text-5xl
                my-10
                pb-2
                lg:pb-2
                text-center
                z-20
            `}>
          {" "}
          {text}{" "}
        </p>
        <p
          className={` 
                    ${inter.className} 
                    leading-5
                    text-center
                    text-xs
                    font-normal
                    text-[#FFFFFF]
                    sm:text-lg
                    lg:text-sm
                    pb-3
                    lg:pb-5
                    z-20
                    
                `}
          dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </>
  );
};

export default SlideItem;
