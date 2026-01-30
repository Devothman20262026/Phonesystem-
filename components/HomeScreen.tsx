
import React, { useState } from 'react';
import { AppType } from '../types';
import StatusBar from './StatusBar';

interface HomeScreenProps {
  onOpenApp: (app: AppType) => void;
  onOpenControlCenter: () => void;
  time: Date;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onOpenApp, onOpenControlCenter, time }) => {
  const [search, setSearch] = useState('');

  const apps = [
    { type: AppType.AI_ASSISTANT, name: 'HyperAI', icon: '✨', bg: 'bg-gradient-to-br from-indigo-500 to-purple-600', nameAr: 'المساعد الذكي' },
    { type: AppType.WEATHER, name: 'Weather', icon: '🌤️', bg: 'bg-gradient-to-br from-blue-400 to-blue-600', nameAr: 'الطقس' },
    { type: AppType.GALLERY, name: 'Photos', icon: '🖼️', bg: 'bg-gradient-to-br from-yellow-400 to-orange-500', nameAr: 'الصور' },
    { type: AppType.SETTINGS, name: 'Settings', icon: '⚙️', bg: 'bg-gradient-to-br from-gray-500 to-gray-700', nameAr: 'الإعدادات' },
    { type: AppType.CAMERA, name: 'Camera', icon: '📸', bg: 'bg-gradient-to-br from-emerald-500 to-teal-600', nameAr: 'الكاميرا' },
  ];

  const formatDay = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
  };

  return (
    <div className="h-full flex flex-col animate-in fade-in zoom-in duration-700">
      <div onClick={onOpenControlCenter}>
        <StatusBar />
      </div>

      {/* Spotlight Search Bar */}
      <div className="px-6 mt-4">
        <div className="relative group">
           <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
             <svg className="w-4 h-4 text-white/30" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
           </div>
           <input 
             type="text"
             value={search}
             onChange={(e) => setSearch(e.target.value)}
             placeholder="Search apps or ask AI..."
             className="w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl py-2.5 pl-11 pr-4 text-sm text-white placeholder-white/20 focus:outline-none focus:bg-white/10 transition-all"
           />
           {search && (
             <div className="absolute top-full mt-2 left-0 right-0 bg-white/10 backdrop-blur-3xl rounded-2xl p-2 border border-white/10 z-50">
                <div 
                  className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl cursor-pointer"
                  onClick={() => onOpenApp(AppType.AI_ASSISTANT)}
                >
                   <span className="text-xl">✨</span>
                   <span className="text-sm font-medium text-white">Ask AI about "{search}"</span>
                </div>
             </div>
           )}
        </div>
      </div>

      {/* Widgets Area - Refined */}
      <div className="px-6 mt-6 flex flex-col gap-4">
        <div className="bg-white/5 backdrop-blur-3xl rounded-[32px] p-6 flex justify-between items-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <div className="text-3xl font-black tracking-tighter">{time.getHours()}:{time.getMinutes().toString().padStart(2, '0')}</div>
            <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">{formatDay(time)}</div>
          </div>
          <div className="relative text-right">
            <div className="text-2xl font-bold flex items-center gap-1">24° <span className="text-blue-400">🌤️</span></div>
            <div className="text-[10px] font-bold text-white/40 uppercase">San Francisco</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 backdrop-blur-3xl rounded-[28px] p-4 border border-white/10 aspect-square flex flex-col justify-between items-start">
             <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-sm font-bold">🏃</div>
             <div>
                <div className="text-lg font-bold text-white">8,421</div>
                <div className="text-[8px] font-bold text-white/40 uppercase tracking-widest">Steps Today</div>
             </div>
          </div>
          <div className="bg-white/5 backdrop-blur-3xl rounded-[28px] p-4 border border-white/10 aspect-square flex flex-col justify-between">
             <div className="flex justify-between items-center">
                <div className="text-lg">🎵</div>
                <div className="flex gap-0.5">
                   {[1,2,3,4].map(i => <div key={i} className={`w-0.5 bg-blue-400 rounded-full animate-bounce h-${i*2}`} style={{ animationDelay: `${i*0.2}s` }}></div>)}
                </div>
             </div>
             <div>
                <div className="text-xs font-bold text-white truncate">Starlight Melodies</div>
                <div className="text-[8px] font-bold text-white/30 uppercase">Hyper Audio</div>
             </div>
          </div>
        </div>
      </div>

      {/* App Grid - Larger and more defined */}
      <div className="flex-1 px-6 mt-8 grid grid-cols-4 content-start gap-y-8">
        {apps.map((app) => (
          <div 
            key={app.type} 
            className="flex flex-col items-center gap-2 cursor-pointer group active:scale-90 transition-all"
            onClick={() => onOpenApp(app.type)}
          >
            <div className={`w-[60px] h-[60px] ${app.bg} rounded-[22px] flex items-center justify-center text-3xl shadow-xl ring-1 ring-white/10 group-hover:ring-white/30 group-hover:scale-105 transition-all`}>
              {app.icon}
            </div>
            <div className="flex flex-col items-center leading-none">
              <span className="text-[10px] text-white font-bold drop-shadow-md">{app.name}</span>
              <span className="text-[8px] text-white/40 font-medium mt-0.5">{app.nameAr}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Dock - Floating Glass Design */}
      <div className="mb-12 mx-6 bg-white/10 backdrop-blur-[40px] rounded-[38px] p-3.5 flex justify-between items-center border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {[
          { icon: '📞', bg: 'bg-green-500' },
          { icon: '💬', bg: 'bg-white' },
          { icon: '🧭', bg: 'bg-blue-600' },
          { icon: '✉️', bg: 'bg-orange-500' }
        ].map((d, i) => (
          <div key={i} className={`w-[54px] h-[54px] ${d.bg} rounded-[20px] flex items-center justify-center text-2xl shadow-lg cursor-pointer hover:scale-110 active:scale-90 transition-all`}>
            {d.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
