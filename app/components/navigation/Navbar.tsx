"use client";
import { useCallback, useContext } from "react";
import { SideMenu } from "../sidemenu/SideMenu";
import RekonMediaSVG from "../svg/RekonMediaSVG";
import NavbarItem from "./NavbarItem";
import { NAVBAR_ITEM, NAVBAR_ITEMS } from "./utils";
import { UIContext } from "../../context/ui";
import Scroll from "locomotive-scroll";
import { useRouter } from "next/navigation";

const Navbar = ({ locomotiveScroll }: { locomotiveScroll: Scroll }) => {
  
  let prevScrollpos = window.scrollY;
  window.onscroll = function () {
    let navbar = document.getElementById("navbar");
    let currentScrollPos = window.scrollY;
    if (navbar) {
      if (prevScrollpos > currentScrollPos) {
        navbar.style.scale = "1";
      } else {
        navbar.style.scale = "0";
      }
    }
    prevScrollpos = currentScrollPos;
  };
  const router = useRouter();
  const { actualFragmentURL, updateFragmentURL } = useContext(UIContext);
  const handleClickLink = useCallback(
    (to: string) => {
      updateFragmentURL(to);

      if (to === "/freeguide" && locomotiveScroll) {
      } else {
        const targetElement: HTMLElement | null = document.querySelector(to);

        if (targetElement && locomotiveScroll) {
          locomotiveScroll.scrollTo(targetElement, {
            offset: 0,
            duration: 4,
          });
        }
      }
    },
    [locomotiveScroll, updateFragmentURL]
  );
  return (
    <div className="w-full flex items-center justify-center">
      <div
        id="navbar"
        className="fixed bg-[#0D0D0D] lg:rounded-3xl w-full lg:w-[850px] xl:w-[990px] z-[999] top-0 transition-all duration-200 lg:top-20">
        <div
          className="
          flex
          flex-row
          gap-2
          h-[3rem]
          items-center
          justify-between
          lg:h-[3.9rem]
          max-w-[1920px]
          mx-auto
          px-7
          rounded-xl
          sm:h-[5rem]
          xs:h-[4rem]
        bg-[#0D0D0D]
      
        ">
          <button
            className="relative lg:mb-1
            w-[15%]
            min-h-[16px]
            min-w-[140px]
            sm:min-w-[150px]
            md:min-w-[180px]
            xl:min-w-[180px]
          "
            onClick={() => router.push("/")}
            aria-label="clickable link that go to hero section">
            <RekonMediaSVG />
          </button>
          <div
            className="
      
              flex-row
              xl:gap-[3.3rem]
              lg:gap-8
              hidden
              lg:flex
              lg:items-center
              
            ">
            {NAVBAR_ITEMS.map(({ to, title }: NAVBAR_ITEM) => {
              return (
                <NavbarItem
                  key={to}
                  title={title}
                  to={to}
                  events={{
                    actualUrl: actualFragmentURL == "/" ? "#aboutUs" : actualFragmentURL,
                    action: handleClickLink,
                  }}
                />
              );
            })}
          </div>
          <div
            className="
                block
                lg:hidden
              ">
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
