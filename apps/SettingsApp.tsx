
import React from 'react';

interface SettingsAppProps {
  onBack: () => void;
  setWallpaper: (url: string) => void;
}

const SettingsApp: React.FC<SettingsAppProps> = ({ onBack, setWallpaper }) => {
  const wallpapers = [
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80&w=1000'
  ];

  return (
    <div className="absolute inset-0 bg-[#f4f4f4] flex flex-col animate-in slide-in-from-bottom duration-500">
      <div className="pt-12 px-6 pb-6 bg-white">
        <div className="flex items-center gap-4 mb-4">
           <button onClick={onBack} className="text-blue-500">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
           </button>
           <h1 className="text-3xl font-bold">Settings</h1>
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full bg-gray-100 rounded-xl py-2 px-10 focus:outline-none"
          />
          <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
        <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm">
           <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">JD</div>
           <div>
             <h3 className="font-bold text-lg">John Doe</h3>
             <p className="text-xs text-gray-500">Apple ID, iCloud, Media & Purchases</p>
           </div>
        </div>

        <section>
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-4 mb-2">Wallpaper</h4>
          <div className="grid grid-cols-2 gap-4">
            {wallpapers.map((url, i) => (
              <div 
                key={i} 
                onClick={() => setWallpaper(url)}
                className="aspect-[9/16] rounded-xl overflow-hidden cursor-pointer ring-2 ring-transparent active:ring-blue-500 transition-all border-2 border-white shadow-md"
              >
                <img src={url} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl overflow-hidden shadow-sm divide-y divide-gray-50">
          {[
            { icon: '✈️', name: 'Airplane Mode', color: 'bg-orange-400' },
            { icon: '📶', name: 'Wi-Fi', color: 'bg-blue-500', value: 'HyperNet' },
            { icon: '🔗', name: 'Bluetooth', color: 'bg-blue-600', value: 'On' },
            { icon: '📱', name: 'Cellular', color: 'bg-green-500' }
          ].map((item, i) => (
            <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 active:bg-gray-100 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center text-white shadow-sm`}>{item.icon}</div>
                <span className="font-medium text-gray-800">{item.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">{item.value}</span>
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default SettingsApp;
