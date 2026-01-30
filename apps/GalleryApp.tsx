
import React from 'react';

interface GalleryAppProps {
  onBack: () => void;
}

const GalleryApp: React.FC<GalleryAppProps> = ({ onBack }) => {
  const images = [
    'https://picsum.photos/id/10/400/600',
    'https://picsum.photos/id/11/400/600',
    'https://picsum.photos/id/12/400/600',
    'https://picsum.photos/id/13/400/600',
    'https://picsum.photos/id/14/400/600',
    'https://picsum.photos/id/15/400/600',
    'https://picsum.photos/id/16/400/600',
    'https://picsum.photos/id/17/400/600',
  ];

  return (
    <div className="absolute inset-0 bg-white flex flex-col animate-in slide-in-from-bottom duration-500">
      <div className="pt-12 px-6 pb-4 flex items-center justify-between border-b border-gray-100">
        <button onClick={onBack} className="p-2 text-blue-500 font-medium">Albums</button>
        <h2 className="text-lg font-bold">All Photos</h2>
        <button className="text-blue-500 font-medium">Select</button>
      </div>
      
      <div className="flex-1 overflow-y-auto grid grid-cols-3 gap-0.5 p-0.5">
        {images.map((img, i) => (
          <div key={i} className="aspect-square bg-gray-100 overflow-hidden active:opacity-70 transition-opacity">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="h-16 flex justify-around items-center border-t border-gray-100 bg-white/80 backdrop-blur-md pb-4">
        <div className="flex flex-col items-center text-blue-500">
           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
           <span className="text-[10px] font-bold">Library</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20"/></svg>
           <span className="text-[10px] font-bold">For You</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
           <span className="text-[10px] font-bold">Search</span>
        </div>
      </div>
    </div>
  );
};

export default GalleryApp;
