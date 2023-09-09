"use client";
import { BrsonmediaMedium, BrsonmediaRegular, inter, montserrat } from "../components/fonts";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navigation/Navbar";
import { useEffect, useState } from "react";
import Button from "../components/inputs/Button";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import Image from "next/image";

const FreeGuide = () => {
  const { width } = useWindowDimensions();
  const [locomotiveScroll, setLocomotiveScroll] = useState<any>(null);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScrollInstance = new LocomotiveScroll({
        lenisOptions: {
          duration: 2,
          smoothTouch: false,
        },
      });
      setLocomotiveScroll(locomotiveScrollInstance);
    })();
  }, []);
  const handleDownloadES = () => {
    const pdfUrl = "/Videos de Formato Corto - La Guía Técnica MÁS COMPLETA y GRATIS - RekonMedia.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Videos de Formato Corto - La Guía Técnica MÁS COMPLETA y GRATIS - RekonMedia.pdf";
    link.click();
  };
  const handleDownloadEN = () => {
    const pdfUrl = "/Short-Form Content - The MOST COMPLETE FREE Technical Guide - RekonMedia.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Short-Form Content - The MOST COMPLETE FREE Technical Guide - RekonMedia.pdf";
    link.click();
  };

  return (
    <main className="bg-[#0F0F12]  overflow-x-hidden">
      <Navbar locomotiveScroll={locomotiveScroll} />
      <section
        className="
              flex
              flex-col
              items-center
              justify-center
              min-h-screen
              w-full
              sm:mt-10
              mt-5
              relative
      ">
        <div
          className="h-full w-full flex flex-col justify-center items-center xl:px-[7rem]
              2xl:px-[17rem]
              2xl:py-[4rem] gap-8 md:gap-4
              px-7">
          <h2
            className={`${width && width >= 640 ? BrsonmediaMedium.className : montserrat.className}
                text-center
                text-2xl
                text-[#FAFAFA]
                leading-6
                sm:text-4xl
                md:text-6xl
                lg:text-[76.73px]
                z-50
                md:mb-6
                lg:mb-7
                `}>
            <strong>Free</strong> Guide
          </h2>
          <h2
            className={`${width && width >= 640 ? BrsonmediaMedium.className : montserrat.className}
                text-center
                text-base
                xs:text-center
                text-[#FAFAFA]
                leading-6
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
                z-50
                `}>
            Short-form content technical guide
          </h2>
          <p
            className={`
            mb-4
                borderB
                border-0
                border-t            
                rounded-t-[18px]
              border-t-[#575757]
              p-7
              md:p-10
                lg:p-14
                text-center
                text-[#FAFAFA]
                font-medium
                leading-[19px]
                text-xs
                sm:text-xl
                md:text-2xl
                lg:text-[24px]
                lg:leading-[39px]
                lg:max-w-[1269px]
                z-50
                ${inter.className}
                `}>
            Unlock the power of <strong className="font-extrabold">short-format video content</strong> with our
            comprehensive guide. Designed for both newcomers and seasoned creators, this guide offers{" "}
            <strong className="font-extrabold">practical insights and strategies</strong> to create engaging videos that
            resonate with your audience. From capturing attention in the first seconds to delivering a persuasive
            message, we provide the tools and knowledge to{" "}
            <strong className="font-extrabold">elevate your content to the next level</strong>.
          </p>
          <div className="grid grid-cols-1 xs:grid-cols-2 xs:gap-10 sm:gap-16 place-items-center ">
            <Button
              buttonType="secondary"
              text="Download ESP"
              className="
                            mt-2
                                lg:self-end
                                lg:w-[242px]
                                lg:h-[50px]
                                md:rounded-[55px]
                                hover:scale-105
                                hover:transition-all
                                hover:duration-300
                                z-[998]
                            "
              action={handleDownloadES}
              type="submit"
            />
            <Button
              buttonType="secondary"
              text="Download ENG"
              className="
                                mt-2
                                lg:self-end
                                lg:w-[242px]
                                lg:h-[50px]
                                md:rounded-[55px]
                                hover:scale-105
                                hover:transition-all
                                hover:duration-300
                                z-[998]
                            "
              action={handleDownloadEN}
              type="submit"
            />
          </div>
        </div>
        {width && width >= 1024 && (
          <>
            <Image
              className="absolute lg:scale-75 lg:top-[2rem] lg:right-0 xl:top-[8rem] xl:right-[7rem] 1/2xl:top-[8rem] 1/2xl:right-[10rem] 2xl:top-[8rem] 2xl:right-[12rem] 3xl:top-[8rem] 3xl:right-0"
              src="/Cone2 (2).png"
              alt="RekonMedia Logo"
              height={20}
              width={180}
              quality={100}
            />
            <Image
              className="absolute lg:top-[9rem] lg:right-5 xl:top-[5rem] xl:right-5 1/2xl:top-[3rem] 1/2xl:right-5 2xl:top-[2rem] 2xl:right-5 3xl:top-0 3xl:right-5"
              src="/LineaNegra.png"
              alt="RekonMedia Logo"
              height={20}
              width={2100}
              quality={100}
            />
            <Image
              className="absolute lg:scale-50 xl:scale-100 lg:top-[-4rem] lg:left-[-4rem] xl:top-[29rem] xl:left-[-4rem] 1/2xl:top-[29rem] 1/2xl:left-0 2xl:top-[29rem] 2xl:left-0 3xl:top-[29rem] 3xl:left-0"
              src="/Torus Half  2.svg"
              alt="RekonMedia Logo"
              height={20}
              width={250}
              quality={100}
            />
            <Image
              className="absolute lg:bottom-0 lg:left-[14rem] xl:bottom-0  1/2xl:bottom-0 2xl:bottom-0  3xl:bottom-0"
              src="/conemitad.png"
              alt="RekonMedia Logo"
              height={20}
              width={300}
              quality={100}
            />
            <Image
              className="absolute lg:scale-50 xl:scale-100 lg:right-[-16rem] lg:top-[24rem] xl:top-[27rem] xl:right-0 1/2xl:top-[30rem] 1/2xl:right-1   "
              src="/Explosion.svg"
              alt="RekonMedia Logo"
              height={20}
              width={800}
              quality={100}
            />
          </>
        )}
        {width && width < 1024 && (
          <>
            <Image
              className="absolute xs:top-16 xs:right-1 md:top-20 md:right-4 "
              src="/Cone2.png"
              alt="RekonMedia Logo"
              height={20}
              width={75}
              quality={100}
            />
            <Image
              className="absolute xs:top-40  xs:left-0 md:top-40  md:left-0 "
              src="/Torus Half  2.svg"
              alt="RekonMedia Logo"
              height={20}
              width={140}
              quality={100}
            />
            <Image
              className="absolute xs:scale-125 xs:bottom-2 xs:left-[1rem] md:scale-110 md:bottom-2 md:left-[-2rem] "
              src="/conemitad.png"
              alt="RekonMedia Logo"
              height={20}
              width={1000}
              quality={100}
            />
            <Image
              className="absolute xs:right-[-4rem] xs:bottom-[0rem] md:right-0 md:bottom-[0rem] "
              src="/Forma fondo.png"
              alt="RekonMedia Logo"
              height={20}
              width={500}
              quality={100}
            />
            <Image
              className="absolute xs:top-0 xs:right-1 md:top-0 md:right-4"
              src="/LineaNegra.png"
              alt="RekonMedia Logo"
              height={20}
              width={2100}
              quality={100}
            />
          </>
        )}
      </section>
      <Footer locomotiveScroll={locomotiveScroll} />
    </main>
  );
};
export default FreeGuide;
