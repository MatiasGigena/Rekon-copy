'use client';
import 'animate.css';
import { useCallback, useContext, useState } from "react"
import Hamburguer from "../svg/Hamburguer";
import NavbarItem from '../navigation/NavbarItem';
import { NAVBAR_ITEM, NAVBAR_ITEMS } from '../navigation/utils';
import { UIContext } from '../../context/ui';


export const SideMenu = () => {
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);
  const {actualFragmentURL, updateFragmentURL} = useContext(UIContext);

  const handleOpenSideMenu = () =>{
    setOpenSideMenu(!openSideMenu);
  }

  const handleClickLink = useCallback((to: string) =>{
      updateFragmentURL(to)
  }, [])


  return (
    <>
    
      <div className="z-10"  onClick={() => handleOpenSideMenu()}>
        <button className="navbar-burger flex items-center text-black dark:text-white" name='SideMenu button' aria-label="SideMenu button" title='SideMenu button'>
          <svg className="block h-6 w-6 fill-current mb-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <Hamburguer/>
          </svg>
        </button>
      </div>
  
    <div className={`navbar-menu relative z-50 lg:hidden ${openSideMenu?'block':'hidden'} `}>
      <div className="navbar-backdrop fixed inset-0 radial-gradient(at center bottom, rgb(17, 24, 39), rgb(75, 85, 99)) opacity-25"></div>
      <div className="fixed top-0 right-0 bottom-0 flex flex-col gap-y-4 w-2/4 md:w-1/3 py-2 xxs:py-2 md:py-5 max-w-sm  bg-[#0D0D0D]  overflow-y-auto  dark:bg-gradient-to-bl dark:from-slate-900 dark:to-zinc-900 animate__animated animate__slideInRight animate__faster ">
        <div className="flex items-center mb-8 p-4 pb-0 ">
          <button className="navbar-close" onClick={() => handleOpenSideMenu()}>
            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div className="flex flex-col   justify-center items-start gap-4 px-6">
              {
                NAVBAR_ITEMS.map(({to, title}:NAVBAR_ITEM) => {
                  return <NavbarItem
                            key={to}
                            title={title}
                            to={to}
                            events={{actualUrl: actualFragmentURL == '/'?'#aboutUs':actualFragmentURL, action: handleClickLink}}
                         />
                })
              }
        </div>
       
      
      </div>
    </div>
    </>
  )
  

  
}