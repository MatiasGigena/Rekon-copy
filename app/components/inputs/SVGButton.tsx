'use client';

import { montserrat } from "../fonts";
import { Spinner } from "../loading/Spinner";

interface ButtonProps {
    className?: string;
    action?: () => void; 
    isLoading?: boolean;
    type?:  "submit"
    children: any;
}


const SVGButton:React.FC<ButtonProps> = (
    {
        className,
        action,
        children,
        isLoading,
        type = "submit"
    }
) => {
  return (
    <button 
        className={`
            ${className}
        `}
        onClick={action}
        type={type}
        >
               {!isLoading ? children : <Spinner className="inline w-4 h-4 lg:w-8 lg:h-8 text-gray-200 animate-spin  dark:text-gray-600 fill-[#6300FF]"/>}
    </button>
  )
}

export default SVGButton