'use client';
import { FC, useEffect, useReducer, useState } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';

type Props = {
       children?: React.ReactNode;
};


export interface IUIState {
    actualFragmentURL: string;
}

const UI_INITIAL_STATE:IUIState = {
        actualFragmentURL:  ""
}

export const UIProvider: FC<Props> = ({ children }) => {

       const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
       const [isMounted, setMounted] = useState(false);
       const [actualUrl, setActualUrl] = useState<string | null>(null);

        useEffect(() => {
              
            if (isMounted) {
                if(window.location.hash){
                     setActualUrl(window.location.hash)
                     updateFragmentURL(window.location.hash)
                }else{
                     setActualUrl(window.location.hash)
                     updateFragmentURL('#aboutUs')
                }
                
            } else {
                setMounted(true);
            }
    }, [isMounted]);

    // useEffect(() => {
    //    const handleScroll = () => {
    //      const sections = document.querySelectorAll<HTMLElement>('section[data-listen-section]');
    //      const currentPosition = window.scrollY + window.innerHeight / 2;
   
    //      sections.forEach((section) => {
    //        const sectionTop = section.offsetTop;
    //        const sectionHeight = section.offsetHeight;
    //        const sectionBottom = sectionTop + sectionHeight;
   
    //        if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
    //          const sectionId = section.getAttribute('id');
    //          const stringSection = "#" +sectionId 
    //          setActualUrl(stringSection)
    //          updateFragmentURL(stringSection)
    //        }
    //      });
    //    };
   
    //    window.addEventListener('scroll', handleScroll);
   
    //    return () => {
    //      window.removeEventListener('scroll', handleScroll);
    //    };
    //  }, []);

       const updateFragmentURL = (actualFragmentURL: string) => {
              return dispatch({ type: '[UI] - UPDATE URL FRAGMENT', payload: {actualFragmentURL} });
       }

       return (
        <UIContext.Provider value={{
               ...state,
               updateFragmentURL
               
        }}>
               {children}
        </UIContext.Provider>
 )
}