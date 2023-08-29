'use client';
import React, { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget w-full  lg:w-[45%]  overflow-y-hidden scrollbar scrollbar-thumb-blue-400 scrollbar-track-gray-100 rounded-[37px]  " data-url="https://calendly.com/rekonmedia/meeting?hide_gdpr_banner=1" 
    
    style={{  height: '700px', display: 'flex', justifyContent:'row', borderRadius: '37px'}}></div>
  );
}

export default CalendlyWidget


