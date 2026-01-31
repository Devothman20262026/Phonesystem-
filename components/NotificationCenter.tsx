
import React from 'react';
import { Notification } from '../types';

interface NotificationCenterProps {
  notifications: Notification[];
  onClose: () => void;
  onClear: (id: string) => void;
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({ notifications, onClose, onClear }) => {
  return (
    <div className="absolute inset-0 z-[65] bg-black/40 backdrop-blur-[50px] p-6 flex flex-col animate-in slide-in-from-top duration-500">
      <div className="flex justify-between items-center mb-6 text-white pt-10 px-2">
        <div className="flex flex-col">
          <h2 className="text-3xl font-black tracking-tighter">Notifications</h2>
          <span className="text-xs font-bold text-white/40 uppercase tracking-widest mt-1">Notification Center</span>
        </div>
        <button onClick={onClose} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 no-scrollbar pb-12">
        {notifications.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center opacity-30 gap-4">
            <div className="text-6xl">📭</div>
            <p className="text-sm font-bold text-white uppercase tracking-widest">No New Notifications</p>
          </div>
        ) : (
          notifications.map((n) => (
            <div 
              key={n.id} 
              className="bg-white/10 backdrop-blur-3xl rounded-[28px] p-4 border border-white/10 shadow-lg relative group transition-all active:scale-[0.98]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-6 h-6 ${n.color} rounded-md flex items-center justify-center text-[10px] shadow-sm`}>{n.icon}</div>
                <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">{n.app}</span>
                <span className="text-[10px] font-medium text-white/30 ml-auto">{n.time}</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">{n.title}</h4>
                <p className="text-white/70 text-xs leading-relaxed mt-0.5">{n.body}</p>
              </div>
              <button 
                onClick={() => onClear(n.id)}
                className="absolute top-4 right-4 text-white/20 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            </div>
          ))
        )}
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
         <div 
          className="w-20 h-1.5 bg-white/20 rounded-full cursor-pointer hover:bg-white/40 transition-colors"
          onClick={onClose}
        ></div>
      </div>
    </div>
  );
};

export default NotificationCenter;
