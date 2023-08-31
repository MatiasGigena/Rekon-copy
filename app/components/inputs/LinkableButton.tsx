"use client";

import Link from "next/link";
import { montserrat } from "../fonts";
import { useCallback, useContext } from "react";
import { UIContext } from "../../context/ui";
import Scroll from "locomotive-scroll";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

interface ButtonProps {
  className?: string;
  buttonType: "primary" | "secondary" | "invisible";
  text: string;
  action?: () => void;
  isLoading?: boolean;
  href: string;
  label: string;
  locomotiveScroll: Scroll;
}

const BUTTON_TYPES = {
  primary: "bg-[#0D0D0D] text-white",
  secondary: "bg-white",
  invisible: "bg-opacity-0 text-white",
};

const LinkableButton: React.FC<ButtonProps> = ({ className, buttonType, text, href, label, locomotiveScroll }) => {
  const { width } = useWindowDimensions();
  const { actualFragmentURL, updateFragmentURL } = useContext(UIContext);

  const handleClickLink = useCallback(
    (to: string) => {
      updateFragmentURL(to);
      if (width && width >= 1024) {
        const targetElement: any = document.querySelector(to);

        if (targetElement && locomotiveScroll) {
          locomotiveScroll.scrollTo(targetElement, {
            offset: 0,
            duration: 4,
          });
        }
      } else {
      }
    },
    [locomotiveScroll, updateFragmentURL]
  );

  return (
    <Link
      className={`
                ${BUTTON_TYPES[buttonType]} 
                ${montserrat.className}
                font-bold
                w-44
                h-11
                md:w-[295px]
                md:h-[68px]
                z-50
                ${className}
            `}
      href={href}
      aria-label={label}
      onClick={() => handleClickLink(href)}>
      {text}
    </Link>
  );
};

export default LinkableButton;
