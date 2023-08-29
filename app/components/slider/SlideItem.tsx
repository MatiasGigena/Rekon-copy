'use client';

import { inter, montserrat } from "../fonts";

interface SlideItemProps {
    id: number;
    svg: any;
    text: string;
    description: any;
}
const SlideItem:React.FC<SlideItemProps> = ({id, svg:Svg, text, description}) => {
    
  return (
    <>
        
        <div className={` 
            flex
            flex-col
            justify-center
            items-center
            xl:w-[350px]
            relative
            
        `}>
      
            {Svg}
               
            <p
                className={` 
                pt-4
                md:pt-8
                ${montserrat.className}   
                leading-6
                lg:leading-[3rem]
                text-xl
                font-bold
                text-[#FFFFFF]
                xs:text-[15px]
                sm:text-[20px]
                md:text-3xl
                pb-2
                lg:pb-2
                text-center
                z-20
            `}
            > {text} </p>
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
                dangerouslySetInnerHTML={{ __html: description }}
            ></p>
        </div>
    </>
  )
}

export default SlideItem