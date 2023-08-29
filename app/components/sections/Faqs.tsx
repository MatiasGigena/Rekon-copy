'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/accordion"
import { inter, montserrat } from "../fonts"
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
        py-20 
        flex 
        flex-col
        items-center
        xl:items-start
        xl:justify-start
        gap-3
        justify-center
        px-7 
        xl:px-[7.4rem]
        xl:py-[11rem]
        2xl:px-[17rem]
        2xl:py-[11rem]
        lg:gap-5
        
        "
    
    >
         <div className="absolute bottom-[2586px]"  id="faq"  data-listen-section></div>
        <h5
            className={` 
            ${montserrat.className} 
            leading-6
            text-xl
            font-bold
            text-[#FFFFFF]
            w-full
            
            text-center
            sm:text-2xl
            md:text-3xl
            lg:text-4xl
            pb-2
            lg:pb-5
        `}
        >Frequently asked questions</h5>
        <Accordion type="single" collapsible 
        className={` 
                ${inter.className}
                w-full
                text-white
                
            `}
        >
            {
                FAQ_ITEM.map((item: FAQ_Item, index: number) =>{
                    return (
                        <AccordionItem 
                        key={item.title}
                        value={`item-${index}`} className={` 
                                ${inter.className}
                                mt-3
                                md:mt-4
                                lg:mt-8
                                rounded-md
                                lg:rounded-2xl
                                lg:px-8
                                bg-[#6300FF]
                                px-4
                                border-0
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
        <div
            className="
                bg-[#1E1E1E]
                w-full
                py-1
                sm:py-2
                lg:py-4
                lg:mt-5
                rounded-2xl
                relative
                
            "
        >
            { !showPopup && (
                <>
                 <p
                 className={`
                     ${inter.className}
                     font-semibold
                     text-[10px]
                     sm:text-sm
                     md:text-md
                     lg:text-lg
                     text-[#FAFAFA]
                     px-4
                     sm:px-7
                     md:px-9
                     pt-2
                     md:py-2
                     
                    
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
                 gap-2
             "
             >
                  <Input
                     id="email"
                     label="Your email..."
                     type="text"
                     action={action}
                     errors={undefined}
                     inputStyles={'bg-[#737373]  bg-opacity-5 text-[10px] lg:!text-[15px] word-wrap !rounded-[10px] h-8 sm:h-8 lg:h-10  '}
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
                         inputStyles={'bg-[#737373]  bg-opacity-5 text-[10px] !rounded-[10px] lg:!text-[15px] word-wrap h-12 sm:h-12 lg:h-14  flex-1 '}
                         name="doubt"
                         placeholder="Write your doubts..."
                     />
                    
                    <SVGButton 
                         className=" h-full self-stretch lg:m-1"
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
    </section>
  )
}

export default FAQs