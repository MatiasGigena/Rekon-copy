'use client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { inter } from "../fonts";

interface InputProps {
    id: string;
    label: string;
    type: string;
    buttonType?: string;
    disabled?: boolean;
    required?: boolean;
    action: UseFormRegister<FieldValues>;
    onChange?: any
    errors?: FieldErrors
    inputStyles?: string;
    labelStyles?: string;
    name?: string;
    placeholder?:string
}

const Input:React.FC<InputProps> = ({
    id,
    label,
    type = "text",
    disabled,
    required,
    onChange = null,
    action,
    errors,
    inputStyles = "bg-[#0D0D0D]",
}) => {
  return (
    <div className="w-full relative">
        <input 
            id={id}
            disabled={disabled}
            {...action(id, {required})}
            placeholder = {label || ""}
            aria-label={id}
            type={type}
            name={id}
            onChange={onChange}
            className={`
                ${inter.className}
                peer
                w-full
                p-4
                pt-4
                font-normal
                ${inputStyles}
                rounded-md
                outline-none
                text-[10px]
                sm:text-[12px]
                text-white
                lg:mt-1
                lg:text-md
                transition
                disabled:opacity-70
                disabled:cursor-not-allowed
                h-10 
                sm:h-12
                break-words
                lg:h-[67px]
                lg:rounded-2xl
                ${errors && errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
            `}
        />
    </div>
  )
}

export default Input