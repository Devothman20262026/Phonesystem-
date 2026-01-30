
import React, { useState, useEffect } from 'react';
import { AppType } from './types';
import PhoneFrame from './components/PhoneFrame';
import LockScreen from './components/LockScreen';
import HomeScreen from './components/HomeScreen';
import ControlCenter from './components/ControlCenter';
import AIAssistant from './apps/AIAssistant';
import WeatherApp from './apps/WeatherApp';
import GalleryApp from './apps/GalleryApp';
import SettingsApp from './apps/SettingsApp';
import TaskSwitcher from './components/TaskSwitcher';

const App: React.FC = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [activeApp, setActiveApp] = useState<AppType>(AppType.HOME);
  const [openApps, setOpenApps] = useState<AppType[]>([AppType.HOME]);
  const [isControlCenterOpen, setIsControlCenterOpen] = useState(false);
  const [isTaskSwitcherOpen, setIsTaskSwitcherOpen] = useState(false);
  const [wallpaper, setWallpaper] = useState('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleUnlock = () => setIsLocked(false);

  const handleOpenApp = (app: AppType) => {
    if (!openApps.includes(app)) {
      setOpenApps(prev => [...prev, app]);
    }
    setActiveApp(app);
    setIsTaskSwitcherOpen(false);
  };

  const handleGoHome = () => {
    if (activeApp === AppType.HOME) {
      setIsTaskSwitcherOpen(!isTaskSwitcherOpen);
    } else {
      setActiveApp(AppType.HOME);
    }
    setIsControlCenterOpen(false);
  };

  const handleSwitchTask = (app: AppType) => {
    setActiveApp(app);
    setIsTaskSwitcherOpen(false);
  };

  const handleCloseTask = (app: AppType) => {
    setOpenApps(prev => prev.filter(a => a !== app));
    if (activeApp === app) setActiveApp(AppType.HOME);
  };

  const renderContent = () => {
    if (isLocked) return <LockScreen onUnlock={handleUnlock} time={time} />;
    if (isControlCenterOpen) return <ControlCenter onClose={() => setIsControlCenterOpen(false)} />;
    if (isTaskSwitcherOpen) return (
      <TaskSwitcher 
        openApps={openApps} 
        onSwitch={handleSwitchTask} 
        onClose={handleCloseTask}
        onExit={() => setIsTaskSwitcherOpen(false)}
      />
    );

    switch (activeApp) {
      case AppType.AI_ASSISTANT: return <AIAssistant onBack={handleGoHome} />;
      case AppType.WEATHER: return <WeatherApp onBack={handleGoHome} />;
      case AppType.GALLERY: return <GalleryApp onBack={handleGoHome} />;
      case AppType.SETTINGS: return <SettingsApp onBack={handleGoHome} setWallpaper={setWallpaper} />;
      case AppType.HOME:
      default:
        return (
          <HomeScreen 
            onOpenApp={handleOpenApp} 
            onOpenControlCenter={() => setIsControlCenterOpen(true)}
            time={time}
          />
        );
    }
  };

  return (
    <div className="relative group w-full h-full flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      <PhoneFrame 
        activeApp={activeApp} 
        onHomePress={handleGoHome}
        wallpaper={wallpaper}
      >
        {renderContent()}
      </PhoneFrame>

      <div className="absolute bottom-8 flex flex-col items-center gap-1 text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase pointer-events-none">
        <span>HyperOS 3.5 Platinum Edition</span>
        <span className="text-[8px] opacity-50">Experimental Build • Arabic Enhanced</span>
      </div>
    </div>
  );
};

export default App;
