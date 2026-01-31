
import React, { useState } from 'react';

interface SettingsAppProps {
  onBack: () => void;
  setWallpaper: (url: string) => void;
}

const SettingsApp: React.FC<SettingsAppProps> = ({ onBack, setWallpaper }) => {
  const [airplaneMode, setAirplaneMode] = useState(false);
  const [wifi, setWifi] = useState(true);

  const wallpapers = [
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80&w=1000'
  ];

  const Toggle = ({ enabled, setEnabled, color }: any) => (
    <div 
      onClick={(e) => { e.stopPropagation(); setEnabled(!enabled); }}
      className={`w-12 h-7 rounded-full transition-all relative cursor-pointer ${enabled ? color : 'bg-gray-300'}`}
    >
      <div className={`absolute top-1 transition-all w-5 h-5 bg-white rounded-full shadow-md ${enabled ? 'right-1' : 'left-1'}`}></div>
    </div>
  );

  return (
    <div className="absolute inset-0 bg-[#f7f7f9] flex flex-col animate-in slide-in-from-bottom duration-500 overflow-hidden">
      <div className="pt-16 px-6 pb-6 bg-white border-b border-gray-100 flex flex-col gap-4">
        <div className="flex items-center justify-between">
           <h1 className="text-4xl font-black text-gray-900 tracking-tighter">Settings</h1>
           <button onClick={onBack} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-blue-600 active:scale-90 transition-all">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
           </button>
        </div>
        <div className="relative group">
          <input 
            type="text" 
            placeholder="Search preferences..." 
            className="w-full bg-gray-100 rounded-2xl py-3 px-11 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
          />
          <svg className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-8 no-scrollbar pb-24">
        {/* User Card */}
        <div className="bg-white rounded-[32px] p-5 flex items-center gap-4 shadow-sm border border-gray-100 group cursor-pointer active:scale-[0.98] transition-all">
           <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-lg">JD</div>
           <div className="flex-1">
             <h3 className="font-black text-gray-900 leading-tight">John Doe</h3>
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Apple ID, iCloud, Purchases</p>
           </div>
           <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
        </div>

        {/* System Settings Section */}
        <section className="space-y-2">
          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] px-4">Connectivity</h4>
          <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 divide-y divide-gray-50">
            {[
              { 
                icon: '✈️', 
                name: 'Airplane Mode', 
                color: 'bg-orange-400', 
                component: <Toggle enabled={airplaneMode} setEnabled={setAirplaneMode} color="bg-orange-500" /> 
              },
              { 
                icon: '📶', 
                name: 'Wi-Fi', 
                color: 'bg-blue-500', 
                value: wifi ? 'HyperNet' : 'Off',
                component: <Toggle enabled={wifi} setEnabled={setWifi} color="bg-blue-500" />
              },
              { icon: '🔗', name: 'Bluetooth', color: 'bg-blue-600', value: 'On' },
              { icon: '📱', name: 'Cellular', color: 'bg-green-500' }
            ].map((item, i) => (
              <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors group">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 ${item.color} rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>{item.icon}</div>
                  <span className="font-bold text-gray-800 text-sm">{item.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  {item.component ? item.component : (
                    <>
                      <span className="text-xs font-bold text-gray-400">{item.value}</span>
                      <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Wallpaper Picker Section */}
        <section className="space-y-3">
          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] px-4">Personalization</h4>
          <div className="bg-white rounded-[32px] p-5 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-gray-800 text-sm">Appearance & Wallpaper</span>
              <span className="text-xs font-bold text-blue-500">Add New</span>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {wallpapers.map((url, i) => (
                <div 
                  key={i} 
                  onClick={() => setWallpaper(url)}
                  className="min-w-[100px] h-[180px] rounded-2xl overflow-hidden cursor-pointer ring-4 ring-transparent active:ring-blue-500 transition-all border-2 border-white shadow-lg flex-shrink-0"
                >
                  <img src={url} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notifications & Focus */}
        <section className="space-y-2">
          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] px-4">Alerts & System</h4>
          <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 divide-y divide-gray-50">
            {[
              { icon: '🔔', name: 'Notifications', color: 'bg-red-500' },
              { icon: '🌙', name: 'Focus', color: 'bg-purple-600' },
              { icon: '⌛', name: 'Screen Time', color: 'bg-indigo-500' },
              { icon: '⚙️', name: 'General', color: 'bg-gray-400' }
            ].map((item, i) => (
              <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 active:bg-gray-100 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 ${item.color} rounded-xl flex items-center justify-center text-white shadow-md`}>{item.icon}</div>
                  <span className="font-bold text-gray-800 text-sm">{item.name}</span>
                </div>
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-4 pb-12 flex flex-col items-center opacity-30">
          <div className="text-2xl font-black tracking-tighter text-gray-900">HyperOS</div>
          <span className="text-[8px] font-black uppercase tracking-[0.5em] mt-1">version 3.9.4 platinum</span>
        </div>
      </div>
    </div>
  );
};

export default SettingsApp;
