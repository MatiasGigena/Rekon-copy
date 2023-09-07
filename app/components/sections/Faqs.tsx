'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/accordion"
import { inter, montserrat,BrsonmediaMedium } from "../fonts"
import Input from "../inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import TextArea from "../inputs/TextArea";
import { useState } from 'react';
import { sendData } from "../../helpers/fetch";
import SVGButton from "../inputs/SVGButton";
import SendInfo from "../svg/SendInfo";
import { toast } from 'react-hot-toast';
import { freeAuditValidations } from "../../helpers/formValidations";
import PopUpReachingOut from "../popups/PopUpReachingOut";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import Image from "next/image";

interface FAQ_Item {
    title: string;
    description: string;
}

export const FAQ_ITEM:FAQ_Item[] = [
    {
        title: "How would we explain our services to a five year old?",
        description: "RekonMedia is a company that helps other companies to make their websites more popular and easier to find on the internet. We also help companies with their advertising campaigns, making sure that the money they spend on advertising is well spent."
    },
    {
        title: "Who are the target clients for our services?",
        description: `The agency usually works on eCommerce websites, but our SEO, Web Design, and Advertising services are effective for: 
        <ul style="list-style: circle !important;"> 
            <li> Businesses who want to improve their website and advertising campaigns. </li> 
            <li> Individuals who want to improve their website's visibility and accessibility. </li> 
            <li> Businesses who want to invest their advertising budget efficiently. </li> 
        </ul>
        
        `,
    },
    {
        title: "How do the guarantees and refund policies work?",
        description: "Our mission is to help businesses scale and grow with us. We are strictly determined to satisfy the needs of our clients, and if we fail to do so, we will partially or completely refund the amount paid, depending on the situation. We are looking for long-term partnerships with serious businesses that we can work with for years to come."
    },
    {
        title: "What are the advantages of monthly deals?",
        description: "We highly encourage monthly deals for services such as SEO and Advertising campaigns. These two marketing areas require time to perfect and to sort effect in the case of SEO. We provide support 24/7 while we work alongside your team to optimize your campaigns and get you the best humanly possible results."
    },
    {
        title: "What payment methods do you accept?",
        description: "We usually take payments via PayPal. We also accept payments with cryptocurrencies. We are open to using other methods if the client needs so."
    }
]

const FAQs = () => {

    const { width } = useWindowDimensions();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [doubt, setDoubt] = useState<string>('');

    const {
        register: action,
        handleSubmit,
        formState: {
            errors,
        },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            email: ''
        }
    })



    const onSubmit: SubmitHandler<FieldValues> = async (data) =>{
        setIsLoading(true);
        try {

            const res = freeAuditValidations([{type: "email", text: data.email}, {type: "doubt", text: doubt}])
            if(!res.ok){
                toast.error(res.msg)
                setIsLoading(false);
                return;
            }

            
          const resp = await sendData('/v1/doubt', {
                from: data.email,
                doubt
            })  

          if(resp.ok){
                setShowPopup(true);
                reset();
                setDoubt('');
          }   
             
        } catch (error) {
                
        }
        
         setIsLoading(false); 
    }

  return (
    <section

        className="
        py-10
        sm:py-20 
        flex 
        flex-col
        items-center
        xl:items-start
        xl:justify-start
        gap-3
        justify-center
        px-7 
        xl:px-[7.4rem]
        xl:py-[8rem]
        2xl:px-[17rem]
        lg:gap-5
        relative
        
        "
    
    >
         <div className="absolute bottom-[2586px]"  id="faq"  data-listen-section></div>
        <h5
            className={` 
            ${width && width >= 640 ? BrsonmediaMedium.className : montserrat.className} 
            leading-6
            text-xl
            font-medium
            text-[#FFFFFF]
            w-full
            text-center
            sm:text-4xl
            lg:text-[65px]
            xl:text-[70px]
            3xl:text-[76px]
            pb-2
            lg:pb-5
        `}
        >Frequently asked questions</h5>
        <Accordion type="single" collapsible 
        className={` 
                ${inter.className}
                w-full
                text-white
                flex 
                flex-col
                items-center
                sm:mt-5
                lg:mt-16
            `}
        >
            {
                FAQ_ITEM.map((item: FAQ_Item, index: number) =>{
                    return (
                        <AccordionItem 
                        key={item.title}
                        value={`item-${index}`} className={` 
                                ${BrsonmediaMedium.className}
                                xs:mt-4
                                sm:mt-7
                                lg:mt-8
                                rounded-md
                                xs:rounded-[16px]
                                sm:rounded-[24px]
                                md:rounded-[28px]
                                lg:px-8
                                sm:py-2
                                bg-transparent
                                w-[288px]
                                xs:w-[330px]
                                lg:w-[818px]
                                sm:w-[590px]
                                md:w-[630px]
                                md:py-4
                                px-4
                                border
                                border-white
                                text-[10px]
                                md:text-lg
                                lg:py-0
                            `}>
                            <AccordionTrigger>
                                {item.title}
                            </AccordionTrigger>
                            <AccordionContent
                                className={` 
                                 ${inter.className}
                                 text-[10px]
                                 md:text-lg
                                 lg:py-2
                                `}
                                
                            ><p dangerouslySetInnerHTML={{__html: item.description}} ></p></AccordionContent>
                        </AccordionItem>
                    )
                })
            }
           
        </Accordion>
        <div className="w-full z-40 flex justify-center items-center">
            <div
                className="
                    borderB23
                    border-t
                    border-t-[#575757]
                    py-1
                    xs:px-2
                    xs:py-2
                    sm:py-2
                    xs:mt-7
                    sm:mt-12
                    lg:w-[818px]
                    lg:h-[275px]
                    sm:w-[590px]
                    md:w-[630px]
                    xs:w-[330px]
                    rounded-2xl
                    relative
            
                "
            >
                { !showPopup && (
                    <>
                     <p
                     className={`
                         ${BrsonmediaMedium.className}
                         font-normal
                         text-[10px]
                         sm:text-lg
                         md:text-xl
                         lg:text-[27px]
                         text-[#FAFAFA]
                         px-4
                         xs:py-2
                         sm:py-4
                         sm:px-7
                         md:px-9
                         lg:py-8
            
            
                     `}
                 >Do you have any questions that we did not include here? </p>
                 <div
                 className="
                     py-2
                     lg:py-0
                     w-[95%]
                     m-auto
                     flex
                     flex-col
                     xs:gap-4
                 "
                 >
                      <Input
                         id="email"
                         label="Your email..."
                         type="text"
                         action={action}
                         errors={undefined}
                         inputStyles={'bg-[#737373] !text-left xs:!rounded-[10px]  bg-opacity-5 text-[10px] lg:!text-[15px] word-wrap sm:!rounded-[14px] xs:!h-7 sm:!h-10 lg:!h-[52px]  '}
                         name="email"
                         placeholder="Your email..."
                     />
                     <div
                         className="
                             flex
                             flex-row
                             gap-2
            
                         "
                     >
                         <TextArea
                             value={doubt}
                             id="doubt"
                             label="Write your doubts..."
                             type="text"
                             event={setDoubt}
                             action={action}
                             errors={undefined}
                             inputStyles={'bg-[#737373] xs:!rounded-[10px]  bg-opacity-5 text-[10px] sm:!rounded-[14px] lg:!text-[15px] word-wrap xs:!h-8 xs:!w-[248px] sm:!h-10 sm:!w-[490px] md:!w-[527px] lg:!h-[52px] lg:!w-[684px] '}
                             name="doubt"
                             placeholder="Write your doubts..."
                         />
            
                        <SVGButton
                             className=" h-full self-stretch xs:mt-[5px] sm:mt-0 lg:m-1"
                             type="submit"
                             isLoading={isLoading}
                             children={<SendInfo event={handleSubmit(onSubmit)}/>}
                        />
            
                     </div>
                 </div>
                 </>
                ) ||
                (
            
                    <div className='
                        w-full
                        py-0
                        m-auto
                        xl:w-[82%]
                        2xl:w-3/4
                    '>
                        <PopUpReachingOut
                            containerStyles="bg-[#1E1E1E] bg-opacity-0 xl:mt-0"
                            title="Thanks for sending your doubt!"
                            subtitle="We will answer you as soon as possible!"
                        />
                    </div>
                )}
            
        </div>      
        </div>
        {width && width >= 640 &&
          <>
            <Image className="absolute sm:scale-50 sm:top-0 sm:right-[-4rem] lg:top-28 xl:top-36 lg:scale-75 lg:right-[-2rem] 2xl:scale-100 2xl:right-0" src="/Asset.png" alt="RekonMedia Logo" height={20} width={250} quality={100} />
            <Image className="absolute sm:scale-50 sm:bottom-20 sm:left-[-4rem]  lg:scale-75  lg:left-[-2rem] 2xl:scale-100 2xl:left-0 bottom-72" src="/Asset (2).png" alt="RekonMedia Logo" height={20} width={280} quality={100} />
            <Image className="absolute left-0 bottom-0" src="/ShapeBlack.png" alt="RekonMedia Logo" height={20} width={550} quality={100} />
          </>}
        {width && width < 640 &&
          <>
            <Image className="absolute right-0 top-0 " src="/Asset.png" alt="RekonMedia Logo" height={20} width={70} quality={100} />
            <Image className="absolute bottom-0 z-20 left-0" src="/Asset3.png" alt="RekonMedia Logo" height={20} width={120} quality={100} />
            <Image className="absolute z-10 left-0 bottom-0 opacity-70" src="/ShapeBlack.png" alt="RekonMedia Logo" height={20} width={170} quality={100} />
          </>}
    </section>
  )
}

export default FAQs