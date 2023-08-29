'use client';

import Link from "next/link";
import { inter, montserrat } from "../fonts";

interface FooterGroupItems{
    sectionTitle: string;
    sectionItems: any;
    handleClickLink: (arg0: string) => void;
}

const FooterGroupItems:React.FC<FooterGroupItems> = (
    {
        sectionTitle,
        sectionItems,
        handleClickLink,
    }
) => {

    

  return (
    <div className='
    flex flex-col gap-2 items-center lg:items-start'>
        <p
            className={`
                ${montserrat.className}
                font-bold
                text-base
                text-white
                md:text-lg
            `}
        >{sectionTitle}</p>
        <div className='
            flex 
            flex-col
            gap-2
            items-center
            lg:items-start
        '>
            {
                sectionItems.map((item:any) =>{
                    return (
                        <Link 
                            key={item.name}
                            href={item.to === '/privacy/policy' || item.to === '/freeguide' ? item.to : `/${item.to}`} 
                            aria-label={item.name}
                            className={`
                                ${inter.className}
                                text-xs
                                font-normal
                                text-white
                                md:text-md
                            `}
                            scroll={false}
                            onClick={() => handleClickLink(item.to)}
                         >
                            {item.name}
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default FooterGroupItems