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
    <Link className="flex flex-row gap-4 colorbout rounded-[15px] lg:min-h-[165px]  justify-center items-center w-[254px] h-[116px] md:h-[145px] md:w-[374px] p-4 2xl:w-[370px] "
      aria-label={ariaLabel}
      href={href}
      target={'_blank'}
    
    >
                       <div className="flex justify-center gap-1 ml-2 lg:ml-0 w-full h-full items-center">
                         <Icon/>
                          <div
                              className=" flex flex-col justify-center flex-1 lg:max-w-[214px]"
                          >
                              <p
                                  className={`  ${inter.className} text-[19px] md:text-[27px] md:font-medium lg:text-2xl text-white lg:font-extrabold  `}
                              > {title} </p>
                              <p
                                  className={`
                                  ${inter.className}
                                  font-semibold
                                  text-white
                                  text-xs
                                  md:text-sm
                                  lg:text-md
                                  xl:text-lg
                         
                                  `}> {subtitle} </p>
                          </div>
                       </div>
    </Link>
  )
}

export default InteractionCard