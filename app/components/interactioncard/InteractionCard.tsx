import Link from "next/link";
import { inter } from "../fonts";

interface IInteractionCardProps {
    icon: any;
    title: string;
    subtitle: string;
    href: string;
    ariaLabel: string;

}
const InteractionCard:React.FC<IInteractionCardProps> = ({icon: Icon, title, subtitle, href, ariaLabel}) => {
  return (
    <Link className="flex flex-row gap-4 bg-gradient-to-r from-purple-700 to-indigo-700 rounded-[15px] lg:min-h-[165px]  justify-center items-center w-full p-4 2xl:px-8 2xl:py-4 "
      aria-label={ariaLabel}
      href={href}
      target={'_blank'}
    
    >
                       <Icon/>
                        <div
                            className=" flex flex-col  justify-center flex-1 lg:max-w-[214px]"
                        >
                            <p
                                className={`  ${inter.className} md:text-xl lg:text-2xl text-white font-extrabold  `}
                            > {title} </p>
                            <p 
                                className={`
                                ${inter.className}
                                font-semibold
                                text-white
                                text-xs
                                lg:text-md
                                xl:text-lg
                                
                                `}> {subtitle} </p>
                        </div>
    </Link>
  )
}

export default InteractionCard