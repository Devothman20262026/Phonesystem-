
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AIAssistantProps {
  onBack: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ onBack }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', parts: [{ text: 'Hello! I am HyperAI. How can I assist you today? يمكنك التحدث معي بالعربية أيضاً.' }] }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', parts: [{ text: input }] };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getGeminiResponse(messages, input);
    setMessages(prev => [...prev, { role: 'model', parts: [{ text: response }] }]);
    setIsLoading(false);
  };

  const isArabic = (text: string) => /[\u0600-\u06FF]/.test(text);

  return (
    <div className="absolute inset-0 bg-[#050505] flex flex-col animate-in slide-in-from-bottom duration-500">
      {/* Premium Header */}
      <div className="pt-14 px-6 pb-4 flex items-center justify-between bg-black/50 backdrop-blur-xl border-b border-white/5">
        <button onClick={onBack} className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
          <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div className="flex flex-col items-center">
          <span className="text-white font-black text-sm tracking-[0.2em] uppercase">HyperAI Vision</span>
          <div className="flex items-center gap-1.5">
             <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse"></div>
             <span className="text-[9px] text-blue-400 font-bold uppercase tracking-widest">Neural Link Active</span>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5">
          <svg className="w-5 h-5 text-white/40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </button>
      </div>

      {/* Chat Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
        {messages.map((msg, i) => (
          <div 
            key={i} 
            dir={isArabic(msg.parts[0].text) ? 'rtl' : 'ltr'}
            className={`max-w-[90%] p-4 rounded-[28px] text-sm leading-relaxed shadow-lg ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white self-end rounded-tr-none' 
                : 'bg-white/5 text-white/90 self-start rounded-tl-none border border-white/10 backdrop-blur-md'
            }`}
          >
            {msg.parts[0].text}
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-2 p-4 bg-white/5 rounded-[28px] rounded-tl-none border border-white/10 w-fit items-center">
            <div className="flex gap-1">
               <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
               <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
               <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Processing</span>
          </div>
        )}
      </div>

      {/* Input Dock */}
      <div className="p-6 pb-14 bg-gradient-to-t from-black to-transparent">
        <div className="relative flex items-center group">
          <div className="absolute left-4 text-white/20">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
          </div>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type or speak..."
            className="w-full bg-white/5 border border-white/10 rounded-[30px] py-4 pl-12 pr-14 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white/10 transition-all"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className={`absolute right-2 w-11 h-11 rounded-full flex items-center justify-center transition-all ${
              input.trim() ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/40 scale-100' : 'bg-white/5 text-white/20 scale-90'
            }`}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
