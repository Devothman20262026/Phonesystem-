
import React, { useState } from 'react';

interface SearchAppProps {
  onBack: () => void;
}

const SearchApp: React.FC<SearchAppProps> = ({ onBack }) => {
  const [query, setQuery] = useState('');

  const suggestions = [
    'How to build a space station',
    'HyperOS 3 new features',
    'Best coffee shops in Dubai',
    'AI evolution 2025'
  ];

  return (
    <div className="absolute inset-0 bg-white flex flex-col animate-in slide-in-from-bottom duration-500">
      <div className="pt-14 px-6 pb-6">
        <h1 className="text-4xl font-black text-gray-900 tracking-tighter mb-6 text-center">
           Search<span className="text-blue-500">Engine</span>
        </h1>
        <div className="relative">
          <input 
            type="text" 
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the universe..."
            className="w-full bg-gray-100 rounded-2xl py-4 pl-12 pr-4 text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-500/10 border-0 transition-all shadow-sm"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6">
        <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar">
           {['All', 'Images', 'News', 'Videos', 'Shopping'].map((f, i) => (
             <button key={i} className={`px-5 py-1.5 rounded-full text-sm font-bold whitespace-nowrap ${i === 0 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
               {f}
             </button>
           ))}
        </div>

        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Trending Search</h3>
        <div className="space-y-4">
          {suggestions.map((s, i) => (
            <div key={i} className="flex items-center gap-4 group cursor-pointer" onClick={() => setQuery(s)}>
               <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
               </div>
               <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">{s}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-[32px] border border-blue-100">
           <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">✨</span>
              <h4 className="font-bold text-indigo-900">AI Instant Answer</h4>
           </div>
           <p className="text-sm text-indigo-700/80 leading-relaxed">
             HyperAI is ready to provide precise answers with sources. Simply start typing your question above.
           </p>
        </div>
      </div>

      <div className="p-6 pb-10 flex justify-center">
        <button onClick={onBack} className="text-gray-400 font-bold text-sm tracking-widest uppercase hover:text-gray-900 transition-colors">Dismiss</button>
      </div>
    </div>
  );
};

export default SearchApp;
