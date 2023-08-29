import React from 'react'

interface ISendInfoProps {
  event: (data: any) => void;
}

const SendInfo = ({ event }: ISendInfoProps) => {
  return (
    <svg
      onClick={event}
      className="
            px-1
            md:px-[5px]
            lg:px-2
            w-[40px]
            mb-1
            md:mb-0
            sm:min-w-[60px]
            md:min-w-[63px]
            lg:min-w-[89px]
            cursor-pointer 
            rounded-md
            lg:rounded-[10px]
            
        "
      viewBox="0 0 68 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Button to send your doubts to RekonMedia"
    >
      <rect width="68" height="64" rx="10" fill="#4E4E4E" />
      <path d="M39.25 31.6487C39.25 31.8581 39.2046 32.0623 39.1137 32.2614C39.0228 32.4604 38.8889 32.6436 38.7118 32.8109L34.9058 36.3093L31.0998 39.8076C30.7603 40.1139 30.3358 40.2611 29.8264 40.2493C29.317 40.2376 28.8893 40.0785 28.5433 39.7723C28.1461 39.4189 27.9666 39.0243 28.0051 38.5885C28.0435 38.1527 28.2293 37.7699 28.5625 37.44L34.8674 31.6448L28.5625 25.8495C28.2293 25.5314 28.0499 25.1339 28.0243 24.6568C27.9987 24.1798 28.1836 23.7881 28.579 23.4819C28.9232 23.1285 29.3461 22.9695 29.8477 23.0048C30.3493 23.0402 30.7795 23.211 31.1383 23.5172L38.7118 30.4786C38.8889 30.6475 39.0228 30.8323 39.1137 31.0332C39.2046 31.2341 39.25 31.4393 39.25 31.6487Z" fill="white" />
    </svg>
  )
}

export default SendInfo