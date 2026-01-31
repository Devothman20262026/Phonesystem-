
import React from 'react';

interface NavigationBarProps {
  onBack: () => void;
  onHome: () => void;
  onRecents: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ onBack, onHome, onRecents }) => {
  return (
    <div className="relative z-[120] w-full h-[64px] bg-[#0a0a0a]/85 backdrop-blur-2xl flex items-center justify-around px-12 border-t border-white/10 shadow-[0_-4px_24px_rgba(0,0,0,0.5)]">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="w-14 h-14 flex items-center justify-center text-white hover:text-blue-400 active:scale-90 transition-all group"
        aria-label="Back"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Home Button */}
      <button 
        onClick={onHome}
        className="w-14 h-14 flex items-center justify-center text-white hover:text-blue-400 active:scale-90 transition-all group"
        aria-label="Home"
      >
        <div className="w-5 h-5 rounded-full border-[3px] border-current group-hover:scale-110 transition-transform shadow-[0_2px_4px_rgba(0,0,0,0.5)]"></div>
      </button>

      {/* Recents Button */}
      <button 
        onClick={onRecents}
        className="w-14 h-14 flex items-center justify-center text-white hover:text-blue-400 active:scale-90 transition-all group"
        aria-label="Recents"
      >
        <div className="w-5 h-5 rounded-[5px] border-[3px] border-current group-hover:scale-110 transition-transform shadow-[0_2px_4px_rgba(0,0,0,0.5)]"></div>
      </button>
    </div>
  );
};

export default NavigationBar;
