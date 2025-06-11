export interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  category: 'internship' | 'application' | 'organization' | 'general';
  followUp: string[];
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
  isMinimized: boolean;
}