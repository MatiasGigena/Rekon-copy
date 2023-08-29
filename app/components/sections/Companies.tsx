'use client';
import { inter } from "../fonts"
import styles from './styles/Companies.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useState, useEffect } from 'react';

const Companies = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [carouselReady, setCarouselReady] = useState(false);

  useEffect(() =>{
    setTimeout(() =>{
      setCarouselReady(true)
    }, 0)
  }, [])

  useEffect(() => {
    const handleResize = () => {

      if(window.innerWidth>1280){
        setSlidesToShow(4);
      }
      else if(window.innerWidth>768){
        setSlidesToShow(3);
      }else if(window.innerWidth > 520){
        setSlidesToShow(2)
      } 
      else{
        setSlidesToShow(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: !slidesToShow?4:slidesToShow,
      centerMode: true,
      centerPadding: '0',
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 1000,
      cssEase: "ease-in-out",
      arrows: false,
      swipe: false,
      draggable: false
    };
  

  return (
    <section
        className="
           
            bg-[#0D0D0D]
            rounded-lg
            lg:rounded-[40px]
            gap-3
            sm:gap-8
            md:gap-9
            xl:gap-14
            py-4
            sm:px-4
            md:px-8
            md:pt-8
            md:pb-8
            lg:pt-12
            lg:pb-12 
            mt-6 
            xs:mt-12 
            sm:mt-14
            md:mt-24
            m-7 
            xxs:mt-8
            lg:mx-[5.5rem]
            xl:mx-[9rem]
            1/2xl:mx-[14rem]
            2xl:mx-[17rem]
            3xl:mx-[29rem]
            lg:mt-32
            z-20
                   
        "
        id="companies"
    >
            <span className={`text-[#FAFAFA] !italic ${inter.className} text-xs md:text-base text-opacity-40     text-center w-full block mb-4 md:mb-8`}>Trusted by these companies:</span>
             <div className={styles.mainContainer} >
              {
                carouselReady && (
                  <Slider {...settings} >
                    <div className={styles.container} >
                    <Image
                        sizes={"(max-width: 768px) 60vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw"}
                        className={styles.image} 
                        src={'/logos/mustHaveApps.webp'}
                        alt="MustHaveApps Logo"
                        fill
                        priority={true}
                      />
                    </div>
                    <div className={styles.container}>
                      
                      <Image
                      sizes={"(max-width: 768px) 60vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw"}
                        className={styles.image} 
                        src={'/logos/binanceUS.webp'}
                        alt="Binance Logo"
                        fill
                        priority={true}
                      />
                    </div>
                    <div className={styles.container}>
                    <Image
                    sizes={"(max-width: 768px) 60vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw"}
                    className={styles.image} 
                        src={'/logos/headway.webp'}
                        alt="Headway Logo"
                        fill
                        priority={true}
                      />
                    </div>
                    <div className={styles.container}>
                    <Image
                    sizes={"(max-width: 768px) 60vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw"}
                    className={styles.image} 
                        src={'/logos/instories.webp'}
                        alt="Instories Logo"
                        fill
                        priority={true}
                      />
                    </div>
                    
                    <div className={styles.container}>
                    <Image
                    sizes={"(max-width: 768px) 60vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw"}
                    className={styles.image} 
                        src={'/logos/nftGallery.webp'}
                        alt="Binance Logo"
                        fill
                        priority={true}
                      />
                    </div>
                    <div className={styles.container}>
                    <Image
                        sizes={"(max-width: 768px) 90vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw"}
                        className={styles.image} 
                        src={'/logos/unstoppableDomains.webp'}
                        alt="Binance Logo"
                        fill
                        priority={true}
                      />
                    </div>
               </Slider>
                )
              }
              

             </div>
             
            
    </section>
  )
}

export default Companies