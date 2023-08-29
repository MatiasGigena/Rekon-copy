'use client';

interface PurpleLightProps {
  className: string;
}
const PurpleLight: React.FC<PurpleLightProps> = ({ className }) => {
  
  return (
    <svg width="708" height="708" viewBox="0 0 708 708" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <g filter="url(#filter0_f_85_4)">
        <circle cx="354" cy="354" r="155" fill="#6300FF" fill-opacity="0.83" />
      </g>
      <defs>
        <filter id="filter0_f_85_4" x="0" y="0" width="708" height="708" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="99.5" result="effect1_foregroundBlur_85_4" />
        </filter>
      </defs>
    </svg>




  )
}

export default PurpleLight