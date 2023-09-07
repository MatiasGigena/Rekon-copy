'use client';
import dynamic from "next/dynamic"
import { inter, montserrat } from "../fonts"
import Email from "../svg/Email"
import WhatsappIcon from "../svg/WhatsappIcon"
import Image from "next/image";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import InteractionCard from "../interactioncard/InteractionCard";
import { FaInstagram } from "react-icons/fa";
import InstagramLogo from "../svg/InstagramLogo";

const CalendlyWidget = dynamic(() => import('../scripts/Calendly'))

const Calendar = () => {

  const {width } = useWindowDimensions();

  return (
    <section
        className="
            flex flex-col 
            xxs:gap-6 
            xs:gap-8 
            sm:gap-6
            md:gap-12
            lg:pt-24 
            justify-center 
            px-7
            xl:px-[7rem]
            2xl:px-[17rem]
            2xl:py-[0rem]
            items-center
            relative
            overflow-hidden
            z-20
        
        "
       
       
    >
         <div className="absolute bottom-[920px]"   id="contact"  data-listen-section></div>
        <h6
            className={` 
                ${montserrat.className}
                text-[24px]
                font-medium
                text-[#FAFAFA]
                md:text-[36px]
                lg:text-7xl
                z-20
                mt-20
            `} 
        
        ><strong>Get in touch</strong> with us</h6>
        <div
            className="
                flex
                flex-col
                lg:flex-row
                gap-14
                lg:gap-6
                2xl:gap-8
                items-center
                justify-center
                w-full
             
            "
        >
            <div
                className={`
                    flex
                    flex-col 
                    gap-6
                    items-center
                    lg:items-start 
                    justify-center
                    lg:gap-20
                    z-20
                    w-full
                    lg:max-w-[430px]
                    
                `} 
            >
                
                <div className="flex flex-col  gap-5 lg:gap-14 items-center   z-20   justify-center w-full   ">

                    <InteractionCard
                        icon={WhatsappIcon}
                        title="Leave a message!"
                        subtitle="+54 9 11 4091-4448"
                        href="https://wa.me/5491140914448"
                        ariaLabel="Go to RekonMedia WhatsApp"
                    />

                    <InteractionCard
                        icon={Email}
                        title="Send an email"
                        subtitle="contact@rekonmedia.com"
                        href="mailto:contact@rekonmedia.com" 
                        ariaLabel="email a contact@rekonmedia.com"
                    />

                    <InteractionCard
                        icon={InstagramLogo}
                        title="Send us a DM!"
                        subtitle="@rekonmedia"
                        href="https://www.instagram.com/rekonmedia" 
                        ariaLabel="instagram de RekonMedia"
                    />
                   
                   
                </div>
                
            </div>
                <CalendlyWidget/>
        </div>
        {width && width >= 1024 &&
          <>
            <Image className="absolute lg:right-[14rem] lg:bottom-0 xl:right-[14rem] xl:bottom-0 1/2xl:right-[14rem] 1/2xl:bottom-0 2xl:left-0 2xl:bottom-0 " src="/Shape blur.svg" alt="RekonMedia Logo" height={882} width={1467}  quality={100} />
            <Image className="absolute lg:right-[51rem] lg:top-5 xl:left-5 xl:top-10 1/2xl:left-16 1/2xl:top-10 2xl:left-24 2xl:top-9 3xl:left-60 3xl:top-9" src="/Navigation.png" alt="RekonMedia Logo" height={20} width={280} quality={100} />
            <Image className="absolute  lg:scale-50 lg:left-[41rem] lg:top-[16rem] xl:scale-75 xl:left-[55rem] xl:top-72 1/2xl:scale-100 1/2xl:left-[64rem] 1/2xl:top-72 2xl:left-[64rem] 2xl:top-52 3xl:left-[82rem] 3xl:top-60 z-[-30]   " src="/Mensaje.png" alt="RekonMedia Logo" height={20} width={550} quality={100} />
            <Image className="absolute xl:top-[20rem] 1/2xl:top-[19rem] 2xl:top-[17rem] 3xl:top-60 z-[-40] " src="/linealarga.png" alt="RekonMedia Logo" height={20} width={2000} quality={100} />
            <Image className="absolute 3xl:top-0 3xl:right-0 z-[-40] " src="/circle.svg" alt="RekonMedia Logo" height={20} width={953} quality={100} />
          </>}
        {width && width < 1024 &&
          <>
            <Image className="absolute md:left-0 top-44 z-[-30] " src="/Shape blur.svg" alt="RekonMedia Logo" height={882} width={498}  quality={100} />
            <Image className="absolute scale-[0.65] top-20 right-[263px] md:top-24 md:left-10" src="/Navigation.png" alt="RekonMedia Logo" height={20} width={173} quality={100} />
            <Image className="absolute scale-[0.65] top-[18rem] left-[190px] -rotate-6 md:top-[23rem] md:right-4 z-30  " src="/Mensaje.png" alt="RekonMedia Logo" height={20} width={280} quality={100} />
            <Image className="absolute bottom-0 md:top-[50rem] z-[-40] " src="/linealarga.png" alt="RekonMedia Logo" height={20} width={2000} quality={100} />
            <Image className="absolute right-0 top-48 md:top-44 md:right-0 z-[-40] " src="/circle.svg" alt="RekonMedia Logo" height={20} width={304} quality={100} />
          </>}
    </section>
  )
}

export default Calendar