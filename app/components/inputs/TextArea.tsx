'use client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { inter } from "../fonts";
import { useRef } from "react";

interface TextAreaProps {
    id: string;
    label: string;
    type: string;
    buttonType?: string;
    disabled?: boolean;
    required?: boolean;
    action: UseFormRegister<FieldValues>;
    errors?: FieldErrors
    inputStyles?: string;
    labelStyles?: string;
    value?: string;
    name?: string;
    placeholder?:string
    event: (text: string) => void;
}

const TextArea:React.FC<TextAreaProps> = ({
    id,
    label,
    type = "text",
    name, 
    disabled,
    value,
    required,
    event,
    action,
    errors,
    placeholder,
    inputStyles = "bg-[#0D0D0D]",
    labelStyles
}) => {

  const textAreaRef = useRef(null);

  const handleInput = () => {
    const textarea:any = textAreaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`; 
    event(textarea.value)
    
  };


  return (
    <div className="w-full relative">
        <textarea 
            id={id}
            disabled={disabled}
            {...action(id, {required})}
            ref={textAreaRef}
            placeholder = {label || ""}
            aria-label={id}
            onChange={handleInput}
            name={id}
            value={value}
            className={`
                ${inter.className}
                peer
                w-full
                px-4
                py-2
                font-normal
                ${inputStyles}
                rounded-md
                outline-none
                text-white
                lg:mt-1
                lg:text-xl
                transition
                disabled:opacity-70
                disabled:cursor-not-allowed
                h-7
                break-words
                lg:h-[67px]
                lg:rounded-2xl
                ${errors && errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
            `}
        />
    </div>
  )
}

export default TextArea