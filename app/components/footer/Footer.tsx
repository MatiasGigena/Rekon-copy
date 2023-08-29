"use client";

import { inter } from "../fonts";
import RekonMediaSVG from "../svg/RekonMediaSVG";
import FollowUs from "./FollowUs";
import FooterGroupItems from "./FooterGroupItems";
import Scroll from "locomotive-scroll";
import { useContext, useCallback } from "react";
import { UIContext } from "../../context/ui";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const NAVIGATE_ITEMS = [
  { name: "Privacy Policy", to: "/privacy/policy" },
  { name: "FREE Audit", to: "#freeAudit" },
  { name: "FREE Guide", to: "/freeguide" },
  { name: "FAQ", to: "#faq" },
];

const OFFERS = [
  { name: "90-Day Growth", to: "#services" },
  { name: "Market Expansion", to: "#services" },
  { name: "About Us", to: "#aboutUs" },
];

const CONTACT = [
  { name: "WhatsApp: +54 9 11 4091-4448 ", to: "https://wa.me/5491140914448" },
  { name: "Email: contact@rekonmedia.com", to: "mailto:contact@rekonmedia.com" },
];

const Footer = ({ locomotiveScroll }: { locomotiveScroll: Scroll }) => {
  const { width } = useWindowDimensions();
  const { updateFragmentURL } = useContext(UIContext);

  const handleClickLink = useCallback(
    (to: string) => {
      updateFragmentURL(to);
      if (width && width >= 1024) {
        if (
          (to === "/privacy/policy" ||
            to === "https://wa.me/5491140914448" ||
            to === "mailto:contact@rekonmedia.com" ||
            to === "/freeguide") &&
          locomotiveScroll
        ) {
        } else {
          const targetElement: HTMLElement | null = document.querySelector(to);

          if (targetElement && locomotiveScroll) {
            locomotiveScroll.scrollTo(targetElement, {
              offset: 0,
              duration: 4,
            });
          }
        }
      } else {
      }
    },
    [locomotiveScroll, updateFragmentURL]
  );

  return (
    <div
      className="
            py-20
            flex 
            flex-col
            lg:flex-row
            bg-[#600BFC]
            items-center
            justify-center
            mx-auto
            lg:items-start
            lg:w-full
            lg:justify-between
            lg:px-[3rem]
            xl:px-[7.3rem]
            2xl:px-[17rem]
            gap-8
            relative
            max-w-[1920px]
        ">
      <div className="w-1/2 lg:w-[15%] flex flex-col gap-8 lg:mt-1 xl:mt-1">
        <RekonMediaSVG />
        <p
          className={`
                    ${inter.className}
                    text-md
                    text-white
                    hidden
                    lg:block
                    lg:w-[100%]
                `}>
          © Copyright <strong>RekonMedia</strong>. All Rights Reserved
        </p>
      </div>
      <FollowUs />
      <FooterGroupItems handleClickLink={handleClickLink} sectionTitle="Navigate" sectionItems={NAVIGATE_ITEMS} />
      <FooterGroupItems handleClickLink={handleClickLink} sectionTitle="Our Offers" sectionItems={OFFERS} />
      <FooterGroupItems handleClickLink={handleClickLink} sectionTitle="Contact" sectionItems={CONTACT} />
      <p
        className={`
                ${inter.className}
                text-[10px]
                text-white
                lg:hidden
            `}>
        © Copyright RekonMedia. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
