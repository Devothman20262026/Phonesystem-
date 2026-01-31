
import React, { useState, useEffect } from 'react';
import { AppType, Notification } from './types';
import PhoneFrame from './components/PhoneFrame';
import LockScreen from './components/LockScreen';
import HomeScreen from './components/HomeScreen';
import ControlCenter from './components/ControlCenter';
import NotificationCenter from './components/NotificationCenter';
import AIAssistant from './apps/AIAssistant';
import WeatherApp from './apps/WeatherApp';
import GalleryApp from './apps/GalleryApp';
import SettingsApp from './apps/SettingsApp';
import AppStoreApp from './apps/AppStoreApp';
import BrowserApp from './apps/BrowserApp';
import SearchApp from './apps/SearchApp';
import TaskSwitcher from './components/TaskSwitcher';

const INITIAL_NOTIFICATIONS: Notification[] = [
  { id: '1', app: 'WhatsApp', title: 'Khalid', body: 'Where are you? we are waiting...', time: 'Now', icon: '💬', color: 'bg-green-500' },
  { id: '2', app: 'System', title: 'HyperOS Update', body: 'HyperOS 3.9 is now available for download.', time: '2m ago', icon: '🚀', color: 'bg-blue-600' },
  { id: '3', app: 'Calendar', title: 'Meeting', body: 'Project sync in 15 minutes', time: '15m ago', icon: '📅', color: 'bg-red-500' },
];

const App: React.FC = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [activeApp, setActiveApp] = useState<AppType>(AppType.HOME);
  const [openApps, setOpenApps] = useState<AppType[]>([AppType.HOME]);
  const [lockedApps, setLockedApps] = useState<AppType[]>([]);
  const [isControlCenterOpen, setIsControlCenterOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isTaskSwitcherOpen, setIsTaskSwitcherOpen] = useState(false);
  const [wallpaper, setWallpaper] = useState('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000');
  const [time, setTime] = useState(new Date());
  const [isDownloading, setIsDownloading] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(INITIAL_NOTIFICATIONS);

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
    setActiveApp(AppType.HOME);
    setIsControlCenterOpen(false);
    setIsNotificationsOpen(false);
    setIsTaskSwitcherOpen(false);
  };

  const handleGoBack = () => {
    if (isNotificationsOpen) {
      setIsNotificationsOpen(false);
    } else if (isControlCenterOpen) {
      setIsControlCenterOpen(false);
    } else if (isTaskSwitcherOpen) {
      setIsTaskSwitcherOpen(false);
    } else if (activeApp !== AppType.HOME) {
      setActiveApp(AppType.HOME);
    }
  };

  const handleOpenRecents = () => {
    if (isLocked) return;
    setIsNotificationsOpen(false);
    setIsControlCenterOpen(false);
    setIsTaskSwitcherOpen(!isTaskSwitcherOpen);
  };

  const handleSwitchTask = (app: AppType) => {
    setActiveApp(app);
    setIsTaskSwitcherOpen(false);
  };

  const handleCloseTask = (app: AppType) => {
    // Only close if not the last app (Home) and not locked
    if (app === AppType.HOME) return;
    setOpenApps(prev => prev.filter(a => a !== app));
    if (activeApp === app) setActiveApp(AppType.HOME);
  };

  const handleToggleLock = (app: AppType) => {
    setLockedApps(prev => 
      prev.includes(app) ? prev.filter(a => a !== app) : [...prev, app]
    );
  };

  const handleClearAllTasks = () => {
    const newOpenApps = openApps.filter(app => app === AppType.HOME || lockedApps.includes(app));
    setOpenApps(newOpenApps);
    if (!newOpenApps.includes(activeApp)) {
      setActiveApp(AppType.HOME);
    }
    // Briefly show animation or just keep switcher open if apps remain, otherwise home
    if (newOpenApps.length <= 1 && !lockedApps.includes(activeApp)) {
        setIsTaskSwitcherOpen(false);
    }
  };

  const startDownload = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 5000);
  };

  const clearNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const renderContent = () => {
    if (isLocked) return <LockScreen onUnlock={handleUnlock} time={time} />;
    
    // System Overlays
    if (isNotificationsOpen) return <NotificationCenter notifications={notifications} onClose={() => setIsNotificationsOpen(false)} onClear={clearNotification} />;
    if (isControlCenterOpen) return <ControlCenter onClose={() => setIsControlCenterOpen(false)} />;
    
    if (isTaskSwitcherOpen) return (
      <TaskSwitcher 
        openApps={openApps}
        lockedApps={lockedApps}
        onSwitch={handleSwitchTask} 
        onClose={handleCloseTask}
        onToggleLock={handleToggleLock}
        onClearAll={handleClearAllTasks}
        onExit={() => setIsTaskSwitcherOpen(false)}
      />
    );

    switch (activeApp) {
      case AppType.AI_ASSISTANT: return <AIAssistant onBack={handleGoBack} />;
      case AppType.WEATHER: return <WeatherApp onBack={handleGoBack} />;
      case AppType.GALLERY: return <GalleryApp onBack={handleGoBack} />;
      case AppType.SETTINGS: return <SettingsApp onBack={handleGoBack} setWallpaper={setWallpaper} />;
      case AppType.APP_STORE: return <AppStoreApp onBack={handleGoBack} onInstall={startDownload} />;
      case AppType.BROWSER: return <BrowserApp onBack={handleGoBack} />;
      case AppType.SEARCH: return <SearchApp onBack={handleGoBack} />;
      case AppType.HOME:
      default:
        return (
          <HomeScreen 
            onOpenApp={handleOpenApp} 
            onOpenNotifications={() => setIsNotificationsOpen(true)}
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
        onBackPress={handleGoBack}
        onRecentsPress={handleOpenRecents}
        wallpaper={wallpaper}
        isDownloading={isDownloading}
      >
        {renderContent()}
      </PhoneFrame>

      <div className="absolute bottom-8 flex flex-col items-center gap-1 text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase pointer-events-none">
        <span>HyperOS 3.9 Platinum</span>
        <span className="text-[8px] opacity-50">Experimental Dev Build</span>
      </div>
    </div>
  );
};

export default App;
