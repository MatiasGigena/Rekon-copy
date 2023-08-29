'use client';

import { montserrat } from "../fonts";
import { Spinner } from "../loading/Spinner";

interface ButtonProps {
    className?: string;
    buttonType: "primary" | "secondary" | "invisible";
    text: string;
    action?: () => void; 
    isLoading?: boolean;
    type: "button" | "submit" | "reset" | undefined
}

const BUTTON_TYPES = {
    "primary": 'bg-[#0D0D0D] text-white',
    "secondary": 'bg-white text-black',
    "invisible": 'bg-opacity-0 text-white'
}

const Button:React.FC<ButtonProps> = (
    {
        className,
        buttonType,
        text,
        action,
        isLoading,
        type = "button"
    }
) => {
  return (
    <button 
        className={`
            ${BUTTON_TYPES[buttonType]} 
            rounded-[9px] 
            ${montserrat.className}
            font-bold
            xxs:text-[10px]
            sm:text-md
            md:text-xl
            w-[164px]
            h-7
            md:w-[295px]
            md:h-[68px]
            ${className}
        `}
        onClick={action}
        type={type}
        >
               {!isLoading ? text : <Spinner/>}
    </button>
  )
}

export default Button