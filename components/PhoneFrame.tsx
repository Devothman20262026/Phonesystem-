
import React, { useState, useEffect } from 'react';
import { AppType } from '../types';

interface PhoneFrameProps {
  children: React.ReactNode;
  activeApp: AppType;
  onHomePress: () => void;
  wallpaper: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, activeApp, onHomePress, wallpaper }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientY / innerHeight - 0.5) * 10; // Max 5deg tilt
      const y = (e.clientX / innerWidth - 0.5) * -10; 
      setRotate({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="relative transition-transform duration-200 ease-out"
      style={{
        perspective: '2000px',
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
    >
      {/* Outer Shell - Premium Titanium/Glass Finish */}
      <div className="relative w-[380px] h-[780px] bg-[#0f0f0f] rounded-[60px] p-[14px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.1)] border border-white/10">
        
        {/* Hardware details: Antenna, Speakers, Buttons */}
        <div className="absolute top-[100px] -left-[2px] w-[3px] h-[30px] bg-[#1a1a1a] rounded-l-md border-l border-white/10"></div>
        <div className="absolute top-[160px] -left-[2px] w-[3px] h-[60px] bg-[#1a1a1a] rounded-l-md border-l border-white/10 shadow-sm"></div>
        <div className="absolute top-[230px] -left-[2px] w-[3px] h-[60px] bg-[#1a1a1a] rounded-l-md border-l border-white/10 shadow-sm"></div>
        <div className="absolute top-[180px] -right-[2px] w-[3px] h-[100px] bg-[#1a1a1a] rounded-r-md border-r border-white/10 shadow-sm"></div>

        {/* Glossy Screen Overlay (Bezel) */}
        <div className="relative w-full h-full bg-black rounded-[48px] overflow-hidden shadow-inner ring-1 ring-white/5">
          
          {/* Wallpaper with Parallax effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-110"
            style={{ 
              backgroundImage: `url(${wallpaper})`,
              transform: `translate(${rotate.y * 1.5}px, ${rotate.x * 1.5}px)`
            }}
          />
          
          {/* Enhanced Dynamic Island with interactive glow */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[34px] bg-black rounded-[22px] z-[100] flex items-center justify-between px-5 group cursor-pointer transition-all hover:w-[180px]">
             <div className="w-2 h-2 rounded-full bg-blue-500/30 animate-pulse"></div>
             <div className="flex-1 mx-2 h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-blue-500/50"></div>
             </div>
             <div className="w-2 h-2 rounded-full bg-green-500/30"></div>
          </div>

          {/* Screen Content Layer */}
          <div className="relative w-full h-full z-10 flex flex-col">
            {children}
          </div>

          {/* Home Indicator - Interactive gesture zone */}
          <div 
            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-white/20 rounded-full z-[100] cursor-pointer hover:bg-white/50 active:scale-x-90 transition-all"
            onClick={onHomePress}
          />

          {/* Screen Reflection overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-30 z-[110]"></div>
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;
