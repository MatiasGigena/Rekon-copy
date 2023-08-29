
import { montserrat } from "../../../../components/fonts";


const HeroPolicy = () => {

  return (
    <section className="
      flex 
      flex-col 
      mt-14 
      pb-5
      xxs:gap-6 
      xxs:pb-10
      xs:gap-12 
      xs:pt-6
      sm:gap-16
      sm:py-20 
      md:gap-8
      justify-center 
      xxs:mt-20  
      px-7 
      xl:px-[17rem]
      lg:p-[7rem]
    ">
     <div>
        <h1
        className={`
            ${montserrat.className}
            text-[35px]
            leading-10
            xs:text-5xl
            sm:text-7xl
            md:text-[86px]
            md:leading-[79.21px]
            text-white
            font-bold
            mb-6
            md:mb-10
        `}
        >
           Privacy Policy
        </h1>
        <h2
            className={`
                ${montserrat.className}
                font-semibold
                text-xs
                sm:text-base
                md:text-lg
                lg:text-xl
                leading-5
                text-white
                w-full
                sm:w-3/4
                md:w-3/4

                `}
        >
            This Privacy Policy describes how your personal information is collected, used, and shared when you visit rekonmedia.com (the “Site”).
        </h2>
     </div>

    </section>
  )
}

export default HeroPolicy