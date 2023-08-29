"use client"
import { inter, montserrat } from "../components/fonts"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navigation/Navbar"
import { useEffect, useState } from "react"
import Button from "../components/inputs/Button"
import { useWindowDimensions } from "../hooks/useWindowDimensions"
import Image from "next/image"

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
    const pdfUrl = '/Videos de Formato Corto - La Guía Técnica MÁS COMPLETA y GRATIS - RekonMedia.pdf'; 
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Videos de Formato Corto - La Guía Técnica MÁS COMPLETA y GRATIS - RekonMedia.pdf';
    link.click();
  };
  const handleDownloadEN = () => {
    const pdfUrl = '/Short-Form Content - The MOST COMPLETE FREE Technical Guide - RekonMedia.pdf'; 
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Short-Form Content - The MOST COMPLETE FREE Technical Guide - RekonMedia.pdf';
    link.click();
  };
  
  return (

  <main className="bg-black overflow-x-hidden">
  <Navbar locomotiveScroll={locomotiveScroll} />
  {
            width && width>=600 && (
                    <Image
                    className="absolute top-24 scale-y-150 brightness-50 mt-16"
                    src={'/purplelights.png'}
                    alt="lights"
                    fill
                    />
                   
            ) || (
                <>
               <div
                    className="
                    absolute
                    w-full
                    h-full
                    bg-[#6300ff33]
                    blur-[60px]
                    -top-12
                    rounded-full
                    opacity-80
                    z-5
                    "
                ></div>
            </>
            )
          }
      <section className="
              flex
              flex-col
              items-center
              justify-center
              min-h-screen
              w-full
              sm:mt-10
              mt-5
      "
    
      >
        <div className="h-full w-full flex flex-col justify-center items-center xl:px-[7rem]
              2xl:px-[17rem]
              2xl:py-[4rem] gap-8 md:gap-10
              px-7">
          <h2 className={
                `${montserrat.className}
                text-center
                text-2xl
                font-bold
                text-[#FAFAFA]
                leading-6
                sm:text-4xl
                md:text-6xl
                lg:text-7xl
                z-50
                `
                }>FREE Guide</h2>
            <h2 className={
                `${montserrat.className}
                text-center
                text-base
                xs:text-center
                font-bold
                text-[#FAFAFA]
                leading-6
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
                z-50
                `
                }>Short-form content technical guide</h2>
            <p className={
                `
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
                Unlock the power of <strong className="font-extrabold">short-format video content</strong> with our comprehensive guide. Designed for both newcomers and seasoned creators, this guide offers <strong className="font-extrabold">practical insights and strategies</strong> to create engaging videos that resonate with your audience. From capturing attention in the first seconds to delivering a persuasive message, we provide the tools and knowledge to <strong className="font-extrabold">elevate your content to the next level</strong>.
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 xs:gap-10 sm:gap-16 place-items-center ">
              <Button
                            buttonType='secondary'
                            text='Download ESP'
                            className="
                            mt-2
                                lg:self-end
                                lg:w-[242px]
                                lg:h-[50px]
                                md:rounded-[10px]
                                hover:scale-105
                                hover:transition-all
                                hover:duration-300
                                z-[998]
                            "
                            action={handleDownloadES}
                            type="submit"
                        />
              <Button
                            buttonType='secondary'
                            text='Download ENG'
                            className="
                                mt-2
                                lg:self-end
                                lg:w-[242px]
                                lg:h-[50px]
                                md:rounded-[10px]
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
      </section>
      <Footer locomotiveScroll={locomotiveScroll}/>
  </main>
  )
}
export default FreeGuide