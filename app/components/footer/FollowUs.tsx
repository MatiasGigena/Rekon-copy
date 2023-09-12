'use client';
import {FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import ClickableIcon from '../clickableIcons/ClickableIcon';
import { montserrat } from '../fonts';

const REKON_SOCIAL_MEDIA = [
    {
        linkInfo: {
            src: 'https://www.instagram.com/rekonmedia/',
            alt: 'Instagram de RekonMedia'
        },
        svg: FaInstagram
    },
    {
        linkInfo: {
            src: 'https://twitter.com/RekonMedia',
            alt: "Rekon Media's Twitter account"
        },
        svg: FaTwitter
    },
    {
        linkInfo: {
            src: 'https://www.linkedin.com/company/rekonmedia/',
            alt: "Rekon Media's LinkedIn account"
        },
        svg: FaLinkedin
    },
]

const FollowUs = () => {
  return (
    <div className='
        flex 
        flex-col 
        gap-3 
        items-center
        lg:order-last
    '>
        <div className='
            flex 
            justify-between
            gap-8
            lg:gap-12
        '>
            {
                REKON_SOCIAL_MEDIA.map((socialMedia) =>{
                    return <ClickableIcon
                        key={socialMedia.linkInfo.alt}
                        linkInfo={socialMedia.linkInfo}
                        svg={socialMedia.svg}
                    />
                })
            }
        </div>
    </div>
  )
}

export default FollowUs