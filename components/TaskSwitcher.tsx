
import React from 'react';
import { AppType } from '../types';

interface TaskSwitcherProps {
  openApps: AppType[];
  lockedApps: AppType[];
  onSwitch: (app: AppType) => void;
  onClose: (app: AppType) => void;
  onToggleLock: (app: AppType) => void;
  onClearAll: () => void;
  onExit: () => void;
}

const TaskSwitcher: React.FC<TaskSwitcherProps> = ({ 
  openApps, 
  lockedApps,
  onSwitch, 
  onClose, 
  onToggleLock,
  onClearAll,
  onExit 
}) => {
  const getAppData = (type: AppType) => {
    switch (type) {
      case AppType.AI_ASSISTANT: return { name: 'HyperAI', icon: '✨', color: 'from-purple-500 to-indigo-600' };
      case AppType.APP_STORE: return { name: 'App Store', icon: '🅰️', color: 'from-blue-500 to-indigo-700' };
      case AppType.BROWSER: return { name: 'Browser', icon: '🌐', color: 'from-gray-300 to-gray-400' };
      case AppType.SEARCH: return { name: 'Search', icon: '🔍', color: 'from-red-500 to-orange-500' };
      case AppType.WEATHER: return { name: 'Weather', icon: '🌤️', color: 'from-blue-400 to-blue-600' };
      case AppType.GALLERY: return { name: 'Photos', icon: '🖼️', color: 'from-orange-400 to-red-500' };
      case AppType.SETTINGS: return { name: 'Settings', icon: '⚙️', color: 'from-gray-600 to-gray-800' };
      case AppType.CAMERA: return { name: 'Camera', icon: '📸', color: 'from-emerald-500 to-teal-600' };
      default: return { name: 'Home', icon: '🏠', color: 'from-blue-500 to-indigo-500' };
    }
  };

  return (
    <div className="absolute inset-0 z-40 bg-black/60 backdrop-blur-3xl animate-in fade-in duration-300 flex flex-col items-center justify-center overflow-hidden">
      <div className="flex-1 w-full flex items-center overflow-x-auto snap-x snap-mandatory px-12 no-scrollbar">
        <div className="flex gap-6 min-w-full items-center py-20">
          {openApps.map((app) => {
            const data = getAppData(app);
            const isLocked = lockedApps.includes(app);
            return (
              <div 
                key={app}
                className="relative min-w-[260px] h-[480px] bg-[#1a1a1a] rounded-[48px] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] snap-center transition-all hover:scale-[1.02] active:scale-[0.98] group overflow-hidden"
              >
                <div 
                  className={`w-full h-full p-6 flex flex-col items-center justify-center bg-gradient-to-br ${data.color} ${isLocked ? 'opacity-80' : 'opacity-60'} group-hover:opacity-80 transition-opacity cursor-pointer`}
                  onClick={() => onSwitch(app)}
                >
                  <div className="text-7xl mb-6 drop-shadow-2xl">{data.icon}</div>
                  <div className="text-white font-black text-3xl tracking-tighter">{data.name}</div>
                  
                  {isLocked && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[2.5] opacity-20 pointer-events-none">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    </div>
                  )}
                </div>
                
                {/* Control Buttons Container */}
                <div className="absolute top-4 right-4 flex flex-col gap-3">
                  {/* Close Button - Hidden if locked */}
                  {!isLocked && app !== AppType.HOME && (
                    <button 
                      onClick={(e) => { e.stopPropagation(); onClose(app); }}
                      className="w-10 h-10 bg-white/10 hover:bg-red-500/80 rounded-full flex items-center justify-center text-white backdrop-blur-2xl border border-white/20 transition-all active:scale-90"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6 6 18M6 6l12 12"/></svg>
                    </button>
                  )}

                  {/* Lock Toggle Button */}
                  {app !== AppType.HOME && (
                    <button 
                      onClick={(e) => { e.stopPropagation(); onToggleLock(app); }}
                      className={`w-10 h-10 ${isLocked ? 'bg-blue-500 border-blue-400' : 'bg-white/10 border-white/20'} hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-2xl border transition-all active:scale-90`}
                    >
                      {isLocked ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4" strokeDasharray="14" strokeDashoffset="14"/></svg>
                      )}
                    </button>
                  )}
                </div>

                <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-2">
                  <div className="px-4 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
                    <span className="text-sm">{data.icon}</span>
                    <span className="text-white/80 text-xs font-bold uppercase tracking-widest">{data.name}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Clear All Tasks Button */}
      {openApps.length > 1 && (
        <div className="pb-10 flex flex-col items-center gap-4 animate-in slide-in-from-bottom duration-500">
           <button 
            onClick={onClearAll}
            className="w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-3xl rounded-full border border-white/10 flex items-center justify-center text-white shadow-2xl transition-all active:scale-90 group"
           >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:rotate-12 transition-transform">
                <path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
              </svg>
           </button>
           <span className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em]">Clear All</span>
        </div>
      )}
      
      <div 
        className="absolute inset-0 -z-10" 
        onClick={onExit}
      ></div>
    </div>
  );
};

export default TaskSwitcher;
