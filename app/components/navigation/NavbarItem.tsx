'use client';

import Link from "next/link";
import { montserrat } from "../fonts";

interface NavbarItemProps{
    title: string;
    to: string;
    events: {
      actualUrl: string;
      action: (to: string) => void;
    }
}
const NavbarItem:React.FC<NavbarItemProps> = ({
    title,
    to,
    events
}) => {
  
  return (
    <Link 
        scroll={false}
        href={to === '/freeguide' ? to : `/${to}`} 
        aria-label={title}
        onClick={() => events.action(to)}
        className={`
            ${montserrat.className}
            text-base
            font-semibold
            hover:text-white
            transition-all
            duration-500
            
            ${events && (events.actualUrl == to ? 'text-white':'text-[#808080]') || 'text-white'}
            
        `}
        >
        {title}
    </Link>
  )
}

export default NavbarItem