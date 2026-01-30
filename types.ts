
export enum AppType {
  HOME = 'HOME',
  AI_ASSISTANT = 'AI_ASSISTANT',
  GALLERY = 'GALLERY',
  SETTINGS = 'SETTINGS',
  WEATHER = 'WEATHER',
  CAMERA = 'CAMERA'
}

export interface Notification {
  id: string;
  title: string;
  body: string;
  time: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}
