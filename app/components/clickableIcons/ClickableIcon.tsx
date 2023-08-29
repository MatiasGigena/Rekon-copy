'use client';

import Link from "next/link";

interface ClickableIconProps {
    linkInfo: {
        src: string;
        alt: string;
    }
    svg: any;
}

const ClickableIcon:React.FC<ClickableIconProps> = ({
    linkInfo, svg: SVG
}) => {
  return (
    
    <Link
        href={linkInfo.src}
        aria-label={linkInfo.alt}
        target="_blank"
        scroll={false}
    >
        <SVG
            className="
                fill-white
                scale-125
                lg:scale-[1.5]
            "
        />
    </Link>
   
  )
}

export default ClickableIcon