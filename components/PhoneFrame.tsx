
import React, { useState, useEffect } from 'react';
import { AppType } from '../types';
import NavigationBar from './NavigationBar';

interface PhoneFrameProps {
  children: React.ReactNode;
  activeApp: AppType;
  onHomePress: () => void;
  onBackPress: () => void;
  onRecentsPress: () => void;
  wallpaper: string;
  isDownloading?: boolean;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ 
  children, 
  activeApp, 
  onHomePress, 
  onBackPress, 
  onRecentsPress, 
  wallpaper, 
  isDownloading 
}) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientY / innerHeight - 0.5) * 8;
      const y = (e.clientX / innerWidth - 0.5) * -8; 
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
      <div className="relative w-[380px] h-[780px] bg-[#0c0c0c] rounded-[64px] p-[16px] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)] border border-white/10 ring-1 ring-white/10">
        
        <div className="absolute top-[100px] -left-[2px] w-[3px] h-[35px] bg-[#1a1a1a] rounded-l-md border-l border-white/10"></div>
        <div className="absolute top-[165px] -left-[2px] w-[3px] h-[65px] bg-[#1a1a1a] rounded-l-md border-l border-white/10"></div>
        <div className="absolute top-[240px] -left-[2px] w-[3px] h-[65px] bg-[#1a1a1a] rounded-l-md border-l border-white/10"></div>
        <div className="absolute top-[180px] -right-[2px] w-[3px] h-[105px] bg-[#1a1a1a] rounded-r-md border-r border-white/10"></div>

        <div className="relative w-full h-full bg-black rounded-[52px] overflow-hidden shadow-inner ring-1 ring-white/5 flex flex-col">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-110"
            style={{ 
              backgroundImage: `url(${wallpaper})`,
              transform: `translate(${rotate.y * 1.2}px, ${rotate.x * 1.2}px)`
            }}
          />
          
          {/* Dynamic Island */}
          <div className={`absolute top-3 left-1/2 -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${isDownloading ? 'w-[200px] h-[40px]' : 'w-[120px] h-[34px]'} bg-black rounded-[22px] z-[100] flex items-center justify-between px-5 group cursor-pointer shadow-lg`}>
             {isDownloading ? (
               <div className="flex items-center gap-3 w-full animate-in fade-in duration-300">
                 <div className="w-6 h-6 rounded-full border-2 border-blue-500 border-t-transparent animate-spin"></div>
                 <div className="flex-1">
                   <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 animate-[loading_5s_ease-in-out]"></div>
                   </div>
                 </div>
                 <span className="text-[10px] text-blue-400 font-bold">AppStore</span>
               </div>
             ) : (
               <>
                 <div className="w-2 h-2 rounded-full bg-blue-500/30 animate-pulse"></div>
                 <div className="flex-1 mx-2 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-blue-500/50"></div>
                 </div>
                 <div className="w-2 h-2 rounded-full bg-green-500/30"></div>
               </>
             )}
          </div>

          <div className="relative flex-1 w-full z-10 overflow-hidden">
            {children}
          </div>

          {/* New 3-Button Navigation Bar */}
          <NavigationBar 
            onBack={onBackPress} 
            onHome={onHomePress} 
            onRecents={onRecentsPress} 
          />

          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-30 z-[110]"></div>
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;
