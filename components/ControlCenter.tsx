
import React from 'react';

interface ControlCenterProps {
  onClose: () => void;
}

const ControlCenter: React.FC<ControlCenterProps> = ({ onClose }) => {
  return (
    <div className="absolute inset-0 z-[60] bg-black/60 backdrop-blur-[40px] p-6 flex flex-col animate-in slide-in-from-top duration-500">
      <div className="flex justify-between items-center mb-8 text-white">
        <h2 className="text-xl font-bold">Control Center</h2>
        <button onClick={onClose} className="p-2 bg-white/10 rounded-full hover:bg-white/20">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      </div>

      {/* Top Toggles */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-600 rounded-3xl p-4 flex flex-col gap-3 text-white shadow-lg">
          <div className="flex justify-between items-center">
            <div className="p-2 bg-white/20 rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/></svg>
            </div>
            <div className="text-sm font-bold">ON</div>
          </div>
          <div className="font-semibold">Wi-Fi</div>
        </div>
        <div className="bg-green-600 rounded-3xl p-4 flex flex-col gap-3 text-white shadow-lg">
          <div className="flex justify-between items-center">
             <div className="p-2 bg-white/20 rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"/></svg>
            </div>
            <div className="text-sm font-bold">ON</div>
          </div>
          <div className="font-semibold">Bluetooth</div>
        </div>
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white/10 rounded-3xl p-4 h-48 flex flex-col justify-end items-center gap-4 border border-white/10">
          <div className="flex-1 w-8 bg-white/20 rounded-full relative overflow-hidden">
             <div className="absolute bottom-0 w-full h-[70%] bg-white rounded-t-full"></div>
          </div>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
        </div>
        <div className="bg-white/10 rounded-3xl p-4 h-48 flex flex-col justify-end items-center gap-4 border border-white/10">
          <div className="flex-1 w-8 bg-white/20 rounded-full relative overflow-hidden">
             <div className="absolute bottom-0 w-full h-[40%] bg-white rounded-t-full"></div>
          </div>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
        </div>
      </div>

      {/* Small Toggles Grid */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { icon: '✈️', name: 'Airplane' },
          { icon: '🔦', name: 'Torch' },
          { icon: '🌙', name: 'DND' },
          { icon: '🔄', name: 'Rotate' },
          { icon: '📍', name: 'GPS' },
          { icon: '🔋', name: 'Battery' },
          { icon: '📱', name: 'Cast' },
          { icon: '📶', name: 'Hotspot' }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl border border-white/5">
              {item.icon}
            </div>
            <span className="text-[10px] text-white/60 font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ControlCenter;
