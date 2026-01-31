
import React, { useState } from 'react';

interface ControlCenterProps {
  onClose: () => void;
}

const ControlCenter: React.FC<ControlCenterProps> = ({ onClose }) => {
  const [activeToggles, setActiveToggles] = useState<Record<string, boolean>>({
    wifi: true,
    bluetooth: true,
    airplane: false,
    torch: false,
  });

  const toggleState = (key: string) => {
    setActiveToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="absolute inset-0 z-[65] bg-black/40 backdrop-blur-[50px] p-6 flex flex-col animate-in slide-in-from-top duration-500">
      <div className="flex justify-between items-center mb-8 text-white pt-10">
        <h2 className="text-3xl font-black tracking-tighter">System</h2>
        <button onClick={onClose} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all active:scale-90">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      </div>

      {/* Main Connectivity Hub */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div 
          onClick={() => toggleState('wifi')}
          className={`${activeToggles.wifi ? 'bg-blue-600' : 'bg-white/10'} rounded-[32px] p-5 flex flex-col gap-4 text-white shadow-2xl transition-all cursor-pointer border border-white/10 active:scale-95`}
        >
          <div className="flex justify-between items-center">
            <div className={`${activeToggles.wifi ? 'bg-white/20' : 'bg-white/10'} p-3 rounded-2xl`}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/></svg>
            </div>
            <div className="text-[10px] font-black tracking-widest uppercase opacity-60">{activeToggles.wifi ? 'Online' : 'Off'}</div>
          </div>
          <div className="font-black text-lg tracking-tight">Wi-Fi</div>
        </div>
        <div 
          onClick={() => toggleState('bluetooth')}
          className={`${activeToggles.bluetooth ? 'bg-indigo-600' : 'bg-white/10'} rounded-[32px] p-5 flex flex-col gap-4 text-white shadow-2xl transition-all cursor-pointer border border-white/10 active:scale-95`}
        >
          <div className="flex justify-between items-center">
             <div className={`${activeToggles.bluetooth ? 'bg-white/20' : 'bg-white/10'} p-3 rounded-2xl`}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"/></svg>
            </div>
            <div className="text-[10px] font-black tracking-widest uppercase opacity-60">{activeToggles.bluetooth ? 'Active' : 'Off'}</div>
          </div>
          <div className="font-black text-lg tracking-tight">Bluetooth</div>
        </div>
      </div>

      {/* Modern Sliders */}
      <div className="grid grid-cols-2 gap-4 mb-6 h-52">
        <div className="bg-white/10 rounded-[40px] p-6 flex flex-col justify-end items-center gap-6 border border-white/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-x-0 bottom-0 bg-white/20 h-2/3 transition-all group-active:h-3/4"></div>
          <div className="relative z-10 w-full flex flex-col items-center gap-6">
             <div className="w-1.5 h-16 bg-white/10 rounded-full relative">
                <div className="absolute bottom-0 w-full h-[70%] bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
             </div>
             <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          </div>
        </div>
        <div className="bg-white/10 rounded-[40px] p-6 flex flex-col justify-end items-center gap-6 border border-white/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-x-0 bottom-0 bg-white/20 h-1/2 transition-all group-active:h-2/3"></div>
          <div className="relative z-10 w-full flex flex-col items-center gap-6">
             <div className="w-1.5 h-16 bg-white/10 rounded-full relative">
                <div className="absolute bottom-0 w-full h-[50%] bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
             </div>
             <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          </div>
        </div>
      </div>

      {/* Multi-Utility Grid */}
      <div className="grid grid-cols-4 gap-4 pb-12">
        {[
          { icon: '✈️', name: 'Airplane', key: 'airplane' },
          { icon: '🔦', name: 'Torch', key: 'torch' },
          { icon: '🌙', name: 'DND', key: 'dnd' },
          { icon: '🔄', name: 'Rotate', key: 'rotate' },
          { icon: '📍', name: 'GPS', key: 'gps' },
          { icon: '🔋', name: 'Battery', key: 'battery' },
          { icon: '📱', name: 'Cast', key: 'cast' },
          { icon: '📶', name: 'Hotspot', key: 'hotspot' }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer" onClick={() => toggleState(item.key)}>
            <div className={`w-14 h-14 ${activeToggles[item.key] ? 'bg-blue-500 shadow-blue-500/30' : 'bg-white/10'} rounded-2xl flex items-center justify-center text-2xl border border-white/5 shadow-xl transition-all active:scale-90 group-hover:bg-white/20`}>
              {item.icon}
            </div>
            <span className="text-[9px] text-white/40 font-black uppercase tracking-widest">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ControlCenter;
