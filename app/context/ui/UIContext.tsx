'use client';
import { createContext } from 'react'

interface ContextProps {
    actualFragmentURL: string;
    updateFragmentURL: (fragment: string) => void; 
}

export const  UIContext = createContext<ContextProps>({} as ContextProps);