'use client';

import { ReactNode } from "react";

interface FormProps {
    children: ReactNode;
    className: string;
}
const Form:React.FC<FormProps> = ({children, className}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault(); 
  };
  return (
    <form 
        className={`w-full ${className}`}
        onSubmit={handleSubmit}
    >
        {children}
    </form>
  )
}

export default Form