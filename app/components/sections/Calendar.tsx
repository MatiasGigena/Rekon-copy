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
            pt-1
            flex flex-col 
            xxs:gap-6 
            xs:gap-8 
            sm:gap-6
            md:gap-12
            md:pt-20 
            lg:gap-12 
            lg:pt-24 
            justify-center 
            xxs:mt-1  
            px-7
            xl:px-[7rem]
            xl:py-[11rem]
            2xl:px-[17rem]
            2xl:py-[0rem]
            items-center
            relative
            overflow-hidden
            z-20
        
        "
       
       
    >
         <div className="absolute bottom-[920px]"   id="contact"  data-listen-section></div>
          {
            width && width>=600 && (
                    <Image
                    className="absolute top-24 scale-y-150 overflow-hidden -mt-28 pt-48"
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
        <h6
            className={` 
                ${montserrat.className}
                text-xl
                font-bold
                text-[#FAFAFA]
                md:text-3xl
                lg:text-4xl
                z-20
            `} 
        
        >Get in touch with us</h6>
        <div
            className="
                flex
                flex-col
                lg:flex-row
                gap-6
                lg:gap-6
                2xl:gap-16
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
                
                <div className="flex flex-col  gap-4 lg:gap-12 items-center   z-20   justify-center w-full   ">

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
    </section>
  )
}

export default Calendar