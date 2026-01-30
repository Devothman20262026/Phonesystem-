
import React, { useState } from 'react';
import StatusBar from './StatusBar';

interface LockScreenProps {
  onUnlock: () => void;
  time: Date;
}

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock, time }) => {
  const [startY, setStartY] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const y = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setStartY(y);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    const y = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const diff = y - startY;
    if (diff < 0) setOffsetY(Math.max(diff, -300));
  };

  const handleTouchEnd = () => {
    if (offsetY < -100) {
      onUnlock();
    }
    setOffsetY(0);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };

  return (
    <div 
      className="absolute inset-0 z-50 transition-transform duration-300 ease-out"
      style={{ transform: `translateY(${offsetY}px)` }}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <StatusBar />
      
      <div className="flex flex-col items-center mt-12 text-white select-none">
        <div className="text-[72px] font-light tracking-tight leading-none drop-shadow-lg">
          {formatTime(time)}
        </div>
        <div className="text-lg font-medium opacity-80 mt-2 drop-shadow-md">
          {formatDate(time)}
        </div>
      </div>

      <div className="absolute bottom-12 w-full flex flex-col items-center gap-4 text-white">
        <div className="flex gap-16">
          <button className="w-12 h-12 bg-black/30 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-black/50 transition-colors">
             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/><path d="m15 10-3 3-3-3"/>
             </svg>
          </button>
          <button className="w-12 h-12 bg-black/30 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-black/50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col items-center opacity-60 animate-pulse">
          <div className="w-6 h-1 bg-white rounded-full mb-2"></div>
          <span className="text-xs font-semibold tracking-wider uppercase">Swipe up to unlock</span>
        </div>
      </div>
    </div>
  );
};

export default LockScreen;
