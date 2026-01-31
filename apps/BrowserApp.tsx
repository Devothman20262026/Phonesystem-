
import React, { useState } from 'react';

interface BrowserAppProps {
  onBack: () => void;
}

const BrowserApp: React.FC<BrowserAppProps> = ({ onBack }) => {
  const [url, setUrl] = useState('hyperos.com');
  const [isLoading, setIsLoading] = useState(false);

  const handleGo = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 800);
  };

  return (
    <div className="absolute inset-0 bg-[#f9f9f9] flex flex-col animate-in slide-in-from-bottom duration-500 overflow-hidden">
      {/* Browser Bar */}
      <div className="pt-14 px-4 pb-3 bg-white border-b border-gray-200">
        <form onSubmit={handleGo} className="relative flex items-center">
          <div className="absolute left-3 text-gray-400">
             <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M12 15V3m0 0l-4 4m4-4l4 4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.52L22 17"/></svg>
          </div>
          <input 
            type="text" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full bg-gray-100 rounded-xl py-2 pl-9 pr-10 text-xs text-gray-800 font-medium focus:outline-none focus:bg-gray-200 transition-colors"
          />
          <button type="submit" className="absolute right-3 text-gray-400">
             <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          </button>
        </form>
      </div>

      {/* Browser Content */}
      <div className="flex-1 overflow-y-auto relative">
        {isLoading && (
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-500 animate-[loading_1s_infinite]"></div>
        )}
        
        <div className="p-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center mb-6">
             <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto flex items-center justify-center text-white text-3xl mb-4">H</div>
             <h1 className="text-2xl font-black text-gray-900 tracking-tight">HyperWeb</h1>
             <p className="text-gray-500 text-sm mt-2">The fastest browser on the planet.</p>
          </div>

          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2 mb-4">Favorites</h3>
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { name: 'Google', icon: 'G', bg: 'bg-white' },
              { name: 'Apple', icon: '🍎', bg: 'bg-black' },
              { name: 'GitHub', icon: '🐙', bg: 'bg-gray-800' },
              { name: 'Twitter', icon: '𝕏', bg: 'bg-black' },
              { name: 'Wiki', icon: 'W', bg: 'bg-white' },
              { name: 'Maps', icon: '📍', bg: 'bg-green-500' },
              { name: 'News', icon: '🗞️', bg: 'bg-red-500' },
              { name: 'Shop', icon: '🛍️', bg: 'bg-orange-500' }
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 cursor-pointer">
                <div className={`w-12 h-12 ${f.bg} rounded-xl shadow-md flex items-center justify-center text-xl`}>{f.icon}</div>
                <span className="text-[10px] font-bold text-gray-600">{f.name}</span>
              </div>
            ))}
          </div>

          <div className="bg-blue-600 rounded-[32px] p-6 text-white shadow-xl shadow-blue-500/20">
             <div className="text-xs font-bold opacity-60 uppercase tracking-widest mb-1">Coming Soon</div>
             <h2 className="text-xl font-bold">Web 4.0 Integration</h2>
             <p className="text-sm opacity-80 mt-2">Browse the decentralized web with built-in HyperAI translation.</p>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="h-16 flex justify-around items-center bg-white/80 backdrop-blur-xl border-t border-gray-200 pb-4">
        <button className="text-gray-400 hover:text-blue-500 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button className="text-gray-400 hover:text-blue-500 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
        </button>
        <button className="text-gray-400 hover:text-blue-500 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
        </button>
        <button className="text-gray-400 hover:text-blue-500 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>
        </button>
      </div>
    </div>
  );
};

export default BrowserApp;
