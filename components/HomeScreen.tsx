
import React, { useState } from 'react';
import { AppType } from '../types';
import StatusBar from './StatusBar';

interface HomeScreenProps {
  onOpenApp: (app: AppType) => void;
  onOpenNotifications: () => void;
  onOpenControlCenter: () => void;
  time: Date;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onOpenApp, onOpenNotifications, onOpenControlCenter, time }) => {
  const apps = [
    { type: AppType.AI_ASSISTANT, name: 'HyperAI', icon: '✨', bg: 'bg-gradient-to-br from-indigo-500 to-purple-600', nameAr: 'المساعد الذكي' },
    { type: AppType.APP_STORE, name: 'App Store', icon: '🅰️', bg: 'bg-gradient-to-br from-blue-400 to-blue-600', nameAr: 'المتجر' },
    { type: AppType.BROWSER, name: 'Browser', icon: '🌐', bg: 'bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800', nameAr: 'المتصفح' },
    { type: AppType.SEARCH, name: 'Search', icon: '🔍', bg: 'bg-gradient-to-br from-red-500 to-orange-500', nameAr: 'البحث' },
    { type: AppType.WEATHER, name: 'Weather', icon: '🌤️', bg: 'bg-gradient-to-br from-blue-400 to-cyan-500', nameAr: 'الطقس' },
    { type: AppType.GALLERY, name: 'Photos', icon: '🖼️', bg: 'bg-gradient-to-br from-yellow-400 to-orange-500', nameAr: 'الصور' },
    { type: AppType.SETTINGS, name: 'Settings', icon: '⚙️', bg: 'bg-gradient-to-br from-gray-500 to-gray-700', nameAr: 'الإعدادات' },
    { type: AppType.CAMERA, name: 'Camera', icon: '📸', bg: 'bg-gradient-to-br from-emerald-500 to-teal-600', nameAr: 'الكاميرا' },
  ];

  return (
    <div className="h-full flex flex-col animate-in fade-in zoom-in duration-700">
      <div className="flex h-10 w-full">
        <div className="flex-1 cursor-pointer" onClick={onOpenNotifications}>
           <StatusBar />
        </div>
        <div className="absolute top-0 right-0 h-10 w-1/4 z-20" onClick={onOpenControlCenter}></div>
      </div>

      <div className="px-6 mt-4">
        <div className="relative group" onClick={() => onOpenApp(AppType.SEARCH)}>
           <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
             <svg className="w-4 h-4 text-white/30" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
           </div>
           <div className="w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl py-2.5 pl-11 pr-4 text-sm text-white/40">
             Search or ask AI...
           </div>
        </div>
      </div>

      <div className="px-6 mt-6">
        <div className="bg-white/5 backdrop-blur-3xl rounded-[40px] p-6 flex flex-col gap-4 border border-white/10 shadow-2xl group transition-all">
          <div className="flex justify-between items-start">
            <div className="text-4xl font-black text-white tracking-tighter drop-shadow-lg">
              {time.getHours()}:{time.getMinutes().toString().padStart(2, '0')}
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-white">24°</div>
              <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Sunny</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
               <div className="h-full bg-blue-500 w-[65%]"></div>
            </div>
            <span className="text-[10px] font-bold text-white/40 uppercase">Mon, Oct 24</span>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 mt-10 grid grid-cols-4 content-start gap-y-10">
        {apps.map((app) => (
          <div 
            key={app.type} 
            className="flex flex-col items-center gap-2 cursor-pointer group active:scale-90 transition-all"
            onClick={() => onOpenApp(app.type)}
          >
            <div className={`w-[62px] h-[62px] ${app.bg} rounded-[24px] flex items-center justify-center text-3xl shadow-2xl ring-1 ring-white/10 group-hover:ring-white/40 group-hover:translate-y-[-4px] transition-all duration-300`}>
              {app.icon}
            </div>
            <div className="flex flex-col items-center leading-tight">
              <span className="text-[10px] text-white font-bold tracking-tight">{app.name}</span>
              <span className="text-[8px] text-white/40 font-medium">{app.nameAr}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-14 mx-6 relative">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[60px] rounded-[44px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)]"></div>
        <div className="relative px-4 py-4 flex justify-between items-center">
          {[
            { icon: '📞', bg: 'bg-green-500 shadow-green-500/20' },
            { icon: '💬', bg: 'bg-white shadow-white/20' },
            { icon: '🧭', bg: 'bg-blue-600 shadow-blue-600/20' },
            { icon: '✉️', bg: 'bg-orange-500 shadow-orange-500/20' }
          ].map((d, i) => (
            <div key={i} className={`w-[58px] h-[58px] ${d.bg} rounded-[22px] flex items-center justify-center text-3xl shadow-2xl cursor-pointer hover:scale-110 active:scale-90 transition-all duration-300 transform`}>
              {d.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
