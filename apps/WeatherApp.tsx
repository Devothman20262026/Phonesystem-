
import React from 'react';

interface WeatherAppProps {
  onBack: () => void;
}

const WeatherApp: React.FC<WeatherAppProps> = ({ onBack }) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600 flex flex-col animate-in slide-in-from-bottom duration-500 text-white">
      <div className="pt-12 px-6 flex items-center">
        <button onClick={onBack} className="p-2 bg-white/10 rounded-full">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
      </div>
      
      <div className="flex-1 flex flex-col items-center mt-12 gap-2">
        <h1 className="text-3xl font-medium">San Francisco</h1>
        <div className="text-[96px] font-light leading-none">24°</div>
        <p className="text-xl opacity-80">Partly Cloudy</p>
        <div className="flex gap-4 mt-2">
          <span>H:28°</span>
          <span>L:16°</span>
        </div>
      </div>

      <div className="m-6 p-6 bg-white/10 backdrop-blur-xl rounded-[32px] border border-white/20">
        <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-6 pb-4 border-b border-white/10">Hourly Forecast</div>
        <div className="flex justify-between items-center">
          {[
            { t: 'Now', i: '🌤️', d: '24°' },
            { t: '1PM', i: '☀️', d: '26°' },
            { t: '2PM', i: '☀️', d: '27°' },
            { t: '3PM', i: '☀️', d: '28°' },
            { t: '4PM', i: '🌤️', d: '26°' }
          ].map((h, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <span className="text-xs font-medium">{h.t}</span>
              <span className="text-2xl">{h.i}</span>
              <span className="text-lg font-semibold">{h.d}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="m-6 mt-0 p-6 bg-white/10 backdrop-blur-xl rounded-[32px] border border-white/20 mb-12">
        <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-6 pb-4 border-b border-white/10">10-Day Forecast</div>
        {[
          { d: 'Today', i: '🌤️', h: '28°', l: '16°' },
          { d: 'Tue', i: '☀️', h: '29°', l: '17°' },
          { d: 'Wed', i: '🌧️', h: '22°', l: '14°' }
        ].map((day, i) => (
          <div key={i} className="flex items-center justify-between mb-4 last:mb-0">
            <span className="w-16 font-medium">{day.d}</span>
            <span className="text-xl">{day.i}</span>
            <div className="flex gap-4 w-24 justify-end">
              <span className="font-semibold">{day.h}</span>
              <span className="opacity-60">{day.l}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherApp;
