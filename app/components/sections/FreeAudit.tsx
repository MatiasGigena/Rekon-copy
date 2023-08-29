'use client';

import { useCallback, useState } from 'react';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { montserrat } from "../fonts";
import Light from "../svg/Light";
import Input from '../inputs/Input';
import Form from '../Form';
import Button from '../inputs/Button';
import PopUpReachingOut from '../popups/PopUpReachingOut';
import { sendData } from '../../helpers/fetch';
import { freeAuditValidations } from '../../helpers/formValidations';

const FreeAudit = () => {

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
               <div className="absolute bottom-[795px]" id='freeAudit'  data-listen-section></div>
            <div 
                className={`
                py-20
                flex 
                flex-col
                gap-4
                bg-[#6909F5]
                justify-center
                px-7
                items-center
                xl:px-[7.2rem]
                xl:py-[11rem]
                2xl:px-[17rem]
                2xl:py-[11rem]
                xl:items-start
                xl:justify-start
                xl:flex-row
                ease-in-out
                transition-all
                duration-700
                ${showPopup?'opacity-0':'flex'}
                
            `}
                
            >
                <Light />
                <div>
                    <h4
                        className=
                        {` 
                ${montserrat.className} 
                leading-6
                text-xl
                font-medium
                text-[#FFFFFF]
                w-full
                md:w-[70%]
                lg:w-[85%]
                self-start
                xs:text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
                
            `}
                    >Would you like a <strong
                        className={` 
                    ${montserrat.className} 
                    font-extrabold
                    text-xl
                    xs:text-xl
                    sm:text-2xl
                    md:text-3xl
                    lg:text-4xl
                    leading-6
                    text-[#FFFFFF]
                
            `}
                    >FREE Audit</strong> or us to contact you first?</h4>
                    <p className=
                        {` 
                            ${montserrat.className} 
                            text-[10px]
                            font-medium
                            leading-4 
                            text-[#FFFFFF]
                            lg:w-[67%]
                            sm:text-md
                            md:text-lg
                            lg:text-xl
                            lg:leading-7
                            pt-3
                            lg:pt-5
                `}
                    >Submit this two simple details and we will get in touch shortly</p>
                </div>
                <Form 
                
                className="
                    pt-8
                    xl:pt-0 
                    flex 
                    flex-col 
                    gap-3 
                    justify-center
                    items-center
                    xl:w-[79%]
                    2xl:w-[60%]
                ">
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
                        buttonType='secondary'
                        text='Submit'
                        isLoading={isLoading}
                        className="
                            mt-2
                            lg:self-end
                            lg:w-[242px]
                            lg:h-[50px]
                            md:rounded-[10px] 
                            hover:scale-105 
                            hover:transition-all 
                            hover:duration-300
                        "
                        action={handleSubmit(onSubmit)}
                        type="submit"
                    />
                </Form>
                
            </div>

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
        </section>
    )
}

export default FreeAudit