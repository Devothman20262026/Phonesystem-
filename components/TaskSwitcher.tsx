
import React from 'react';
import { AppType } from '../types';

interface TaskSwitcherProps {
  openApps: AppType[];
  onSwitch: (app: AppType) => void;
  onClose: (app: AppType) => void;
  onExit: () => void;
}

const TaskSwitcher: React.FC<TaskSwitcherProps> = ({ openApps, onSwitch, onClose, onExit }) => {
  const getAppData = (type: AppType) => {
    switch (type) {
      case AppType.AI_ASSISTANT: return { name: 'HyperAI', icon: '✨', color: 'from-purple-500 to-indigo-600' };
      case AppType.WEATHER: return { name: 'Weather', icon: '🌤️', color: 'from-blue-400 to-blue-600' };
      case AppType.GALLERY: return { name: 'Photos', icon: '🖼️', color: 'from-orange-400 to-red-500' };
      case AppType.SETTINGS: return { name: 'Settings', icon: '⚙️', color: 'from-gray-600 to-gray-800' };
      case AppType.CAMERA: return { name: 'Camera', icon: '📸', color: 'from-emerald-500 to-teal-600' };
      default: return { name: 'Home', icon: '🏠', color: 'from-blue-500 to-indigo-500' };
    }
  };

  return (
    <div className="absolute inset-0 z-40 bg-black/40 backdrop-blur-3xl animate-in fade-in duration-300 flex items-center overflow-x-auto snap-x snap-mandatory px-12">
      <div className="flex gap-6 min-w-full items-center">
        {openApps.map((app) => {
          const data = getAppData(app);
          return (
            <div 
              key={app}
              className="relative min-w-[240px] h-[480px] bg-[#1a1a1a] rounded-[40px] border border-white/10 shadow-2xl snap-center transition-transform hover:scale-105 group"
            >
              <div 
                className={`w-full h-full rounded-[38px] p-6 flex flex-col items-center justify-center bg-gradient-to-br ${data.color} opacity-40`}
                onClick={() => onSwitch(app)}
              >
                <div className="text-6xl mb-4">{data.icon}</div>
                <div className="text-white font-bold text-2xl">{data.name}</div>
              </div>
              
              <button 
                onClick={(e) => { e.stopPropagation(); onClose(app); }}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 hover:bg-red-500/50 rounded-full flex items-center justify-center text-white backdrop-blur-xl border border-white/20 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-black/40 flex items-center justify-center text-sm">{data.icon}</span>
                <span className="text-white/80 text-xs font-bold">{data.name}</span>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Tap outside hint */}
      <div 
        className="absolute inset-0 -z-10" 
        onClick={onExit}
      ></div>
    </div>
  );
};

export default TaskSwitcher;
