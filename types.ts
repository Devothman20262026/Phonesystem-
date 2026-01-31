
export enum AppType {
  HOME = 'HOME',
  AI_ASSISTANT = 'AI_ASSISTANT',
  GALLERY = 'GALLERY',
  SETTINGS = 'SETTINGS',
  WEATHER = 'WEATHER',
  CAMERA = 'CAMERA',
  APP_STORE = 'APP_STORE',
  BROWSER = 'BROWSER',
  SEARCH = 'SEARCH'
}

export interface Notification {
  id: string;
  title: string;
  body: string;
  time: string;
  icon: string;
  app: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}
