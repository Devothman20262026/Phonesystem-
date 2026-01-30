
import React from 'react';

interface StatusBarProps {
  light?: boolean;
}

const StatusBar: React.FC<StatusBarProps> = ({ light = false }) => {
  const textColor = light ? 'text-black' : 'text-white';
  
  return (
    <div className={`w-full px-8 pt-3 pb-1 flex justify-between items-center text-[11px] font-semibold tracking-tight ${textColor} select-none`}>
      <div>9:41</div>
      <div className="flex items-center gap-1.5">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" fillOpacity=".3" />
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z" />
        </svg>
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 22h20V2z" fillOpacity=".3" />
          <path d="M17 7L2 22h15z" />
        </svg>
        <div className="w-6 h-3 rounded-[3px] border border-current opacity-40 relative px-[1px] py-[1px]">
          <div className="w-full h-full bg-current rounded-[1px] opacity-100"></div>
          <div className="absolute top-1/2 -right-[3px] -translate-y-1/2 w-[2px] h-[4px] bg-current rounded-full opacity-40"></div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
