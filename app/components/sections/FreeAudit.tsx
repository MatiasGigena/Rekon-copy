'use client';

import { useCallback, useState } from 'react';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { BrsonmediaRegular, montserrat } from "../fonts";
import Light from "../svg/Light";
import Input from '../inputs/Input';
import Form from '../Form';
import Button from '../inputs/Button';
import PopUpReachingOut from '../popups/PopUpReachingOut';
import { sendData } from '../../helpers/fetch';
import { freeAuditValidations } from '../../helpers/formValidations';
import Image from 'next/image';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

const FreeAudit = () => {
    const { width } = useWindowDimensions();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showPopup, setShowPopup] = useState<boolean>(false);


    const {
        register,
        handleSubmit,
        formState
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            website: ''
        }
    })



    const onSubmit: SubmitHandler<FieldValues> = async (data) =>{
        setIsLoading(true);
        const res = freeAuditValidations([{type: "email", text: data.email}, {type: "website", text: data.website}])
        if(!res.ok){
            toast.error(res.msg)
            setIsLoading(false);
            return;
        }

        
        try {

            const resp = await sendData('/v1/emails', {
                from: data.email,
                websiteUrl: data.website
            })
            if(resp?.ok){
                setShowPopup(true);
            } 
            
        } catch (error) {
                
        }
        
        setIsLoading(false);
    }

    return (
        <section className='relative'>
            <div 
                className={`
                py-20
                flex 
                flex-col
                gap-4
                justify-center
                px-7
                items-center
                xl:px-[7.2rem]
                xl:py-[11rem]
                2xl:px-[17rem]
                2xl:py-[11rem]
                ease-in-out
                transition-all
                duration-700
                ${showPopup?'opacity-0':'flex'}
                
            `}
            id='freeAudit'  data-listen-section
            >
                <article className='lg:h-[750px] h-[280px] w-[320px] sm:h-[470px] sm:w-[520px] rounded-[14px] lg:rounded-[40px] flex flex-col backdrop-blur-sm justify-start items-center lg:gap-12 gap-4 sm:gap-8 lg:w-[820px] purpleB'>
                    <div className=' w-full  flex justify-center   bg-gradient-to-r fondogradiente rounded-[6px] lg:rounded-[16px] h-[54px] sm:h-[74px] lg:h-[154px]  items-center'>
                        <div className='lg:rounded-[16px] rounded-[6px] flex w-full lg:h-[152.5px] sm:h-[72px]  h-[53px] purpleB2  items-center shadow-sm justify-center'>
                            <h3 className={` ${BrsonmediaRegular.className} text-white text-[26.58px] sm:text-[45px] lg:text-[76px]`}>
                                Get a <strong>Free Audit</strong>
                            </h3>
                        </div>
                    </div>
                    <div className='lg:px-[3.2rem] px-[38px] text-center'>
                        <h4 className={`text-white text-[11.58px] sm:text-[21px] lg:text-[34px] ${BrsonmediaRegular.className}`}>
                            Submit this two simple details and we <strong>will get in touch shortly</strong>
                        </h4>
                    </div>
                    <Form 
                
                className="flex flex-col gap-2  sm:gap-4 lg:gap-7 justify-center items-center sm:px-[56px] px-[38px] lg:px-20  ">
                    <Input
                        type='email'
                        id="email"
                        name="email field"
                        label="Email Address"
                        disabled={isLoading}
                        action={register}
                        errors={formState.errors}
                    />
                    <Input
                        type="text"
                        id="website"
                        name="website URL field"
                        label="Website URL"
                        disabled={isLoading}
                        action={register}
                        errors={formState.errors}
                    />
                    <Button
                        buttonType='invisible'
                        text='Submit'
                        isLoading={isLoading}
                        className="
                        mt-3
                         lg:mt-4
                         border-2
                         border-white
                         lg:!w-[280px]
                         w-[104px] 
                         sm:!w-[240px]
                         sm:!h-14
                        "
                        action={handleSubmit(onSubmit)}
                        type="submit"
                    />
                </Form>
                </article>
                { //si se quiere que vaya centrado colocar 1/2 y el tamaño del PopUp en el componente colocar h-72
                showPopup && (
                    <div className='
                        w-full
                        absolute
                        py-0
                        mx-auto
                        top-1/2
                        -translate-y-1/2
                        xl:top-1/3 
                        xl:-translate-y-1/3
                        xl:left-1/2
                        xl:-translate-x-1/2
                        xl:w-[82%]
                        2xl:w-3/4
                        px-7
                        xl:px-0
                        
                    
                    '>
                            <PopUpReachingOut
                                containerStyles='    rounded-2xl'
                                title='Thanks for reaching us out!'
                                subtitle='We will contact you as soon as possible!'
                            />
                    </div>
                )
            }
             {width && width >= 640 &&
          <>
            <Image className="absolute z-[-30] sm:scale-50 sm:top-[7rem] sm:right-[1rem] md:scale-50 md:top-[7rem] md:right-[2rem] lg:scale-100 lg:top-[15rem] lg:right-[2rem] xl:top-[20rem] xl:right-[9rem] 1/2xl:right-[14rem] 2xl:top-[21rem] 2xl:right-[17rem] 3xl:top-[21rem] 3xl:right-[29rem] " src="/Cone.png" alt="RekonMedia Logo" height={20} width={210} quality={100} />
            <Image className="absolute sm:scale-75 sm:top-[1.5rem] sm:left-[3rem] md:scale-75 md:top-[1.5rem] md:left-[3rem] lg:scale-100 lg:top-[4.5rem] lg:left-[2.5rem] xl:top-[11.5rem] xl:left-[9.5rem] 1/2xl:top-[11.5rem] 1/2xl:left-[14.5rem] 2xl:top-[12.5rem] 2xl:left-[18rem] 3xl:top-[11.5rem] 3xl:left-[29.5rem] -rotate-9 " src="/Torus Half.png" alt="RekonMedia Logo" height={20} width={145} quality={100} />
            <Image className="absolute  sm:scale-0 xl:scale-100 xl:top-[14rem] xl:left-0 z-[-30]" src="/shape2.png" alt="RekonMedia Logo" height={20} width={900} quality={100} />
            <Image className="absolute sm:bottom-0 sm:scale-[2] 3xl:scale-100 z-[-30]" src="/Lineapurple.png" alt="RekonMedia Logo" height={20} width={2500} quality={100} />
          </>}
          {width && width < 640 &&
          <>
            <Image className="absolute xs:right-2 xs:top-36  ift:right-6 ift:top-36 z-[-30] " src="/Cone.png" alt="RekonMedia Logo" height={20} width={60} quality={100} />
            <Image className="absolute xs:top-[3rem] xs:left-2 ift:top-[3.5rem] ift:left-5 rotate-3  " src="/Torus Half.png" alt="RekonMedia Logo" height={20} width={65} quality={100} />
            <Image className="absolute bottom-0 z-[-30]  " src="/Lineapequeña.png" alt="RekonMedia Logo" height={20} width={498} quality={100} />
          </>}
                </div>
        </section>
    )
}

export default FreeAudit