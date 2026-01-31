
import React from 'react';

interface AppStoreAppProps {
  onBack: () => void;
  onInstall: () => void;
}

const AppStoreApp: React.FC<AppStoreAppProps> = ({ onBack, onInstall }) => {
  const featured = [
    { name: 'Instagram', icon: '📸', category: 'Social Networking', color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600' },
    { name: 'WhatsApp', icon: '💬', category: 'Messaging', color: 'bg-green-500' },
    { name: 'YouTube', icon: '📺', category: 'Video Streaming', color: 'bg-red-600' }
  ];

  const categories = ['Top Charts', 'Games', 'Apps', 'Arcade'];

  return (
    <div className="absolute inset-0 bg-[#000] flex flex-col animate-in slide-in-from-bottom duration-500 overflow-hidden">
      <div className="pt-14 px-6 pb-4 bg-black/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-20">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-white">App Store</h1>
          <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white">JD</div>
        </div>
        <div className="flex gap-6 mt-4">
           {categories.map((c, i) => (
             <span key={i} className={`text-sm font-medium ${i === 0 ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-gray-400'}`}>{c}</span>
           ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8 pb-20">
        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-xl font-bold text-white">Featured</h2>
            <span className="text-sm text-blue-500">See All</span>
          </div>
          <div className="flex gap-4 overflow-x-auto snap-x pb-4 no-scrollbar">
            {featured.map((app, i) => (
              <div key={i} className="min-w-[280px] bg-gray-900 rounded-3xl p-5 border border-white/5 snap-start shadow-xl">
                <div className="text-xs font-bold text-blue-500 uppercase mb-1">New Update</div>
                <h3 className="text-white font-bold text-lg">{app.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{app.category}</p>
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 ${app.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>{app.icon}</div>
                  <button 
                    onClick={onInstall}
                    className="bg-gray-800 hover:bg-blue-600 text-blue-500 hover:text-white px-6 py-1.5 rounded-full font-bold text-sm transition-all"
                  >
                    GET
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Trending Games</h2>
          {[
            { name: 'Genshin Impact', icon: '⚔️', rating: '4.8', size: '3.2 GB' },
            { name: 'Minecraft', icon: '🧱', rating: '4.7', size: '1.1 GB' },
            { name: 'Among Us', icon: '🚀', rating: '4.5', size: '250 MB' }
          ].map((game, i) => (
            <div key={i} className="flex items-center gap-4 py-4 border-b border-white/5 last:border-0">
               <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center text-3xl">{game.icon}</div>
               <div className="flex-1">
                 <h4 className="text-white font-bold">{game.name}</h4>
                 <div className="text-[10px] text-gray-500 flex items-center gap-2">
                   <span>⭐ {game.rating}</span>
                   <span>•</span>
                   <span>{game.size}</span>
                 </div>
               </div>
               <button onClick={onInstall} className="bg-gray-800 text-blue-500 px-5 py-1 rounded-full font-bold text-xs uppercase">Get</button>
            </div>
          ))}
        </section>
      </div>

      <div className="h-16 flex justify-around items-center bg-black/90 backdrop-blur-xl border-t border-white/5 pb-4">
        {['Discover', 'Apps', 'Games', 'Search'].map((tab, i) => (
          <div key={i} className={`flex flex-col items-center gap-1 ${i === 0 ? 'text-blue-500' : 'text-gray-500'}`}>
            <div className="w-6 h-6 rounded-md bg-current opacity-20"></div>
            <span className="text-[10px] font-bold">{tab}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppStoreApp;
