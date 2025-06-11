import React from 'react';
import { Message } from '../../types/chat';
import { Bot, User } from 'lucide-react';
import { formatTime } from '../../utils/chatUtils';

interface ChatMessageProps {
  message: Message;
  onSuggestionClick: (suggestion: string) => void;
}

export default function ChatMessage({ message, onSuggestionClick }: ChatMessageProps) {
  return (
    <div
      className={`flex gap-3 mb-4 animate-fade-in ${
        message.isBot ? 'justify-start' : 'justify-end'
      }`}
    >
      {message.isBot && (
        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
          <Bot size={16} className="text-white" />
        </div>
      )}
      
      <div className={`max-w-[80%] ${message.isBot ? 'order-2' : 'order-1'}`}>
        <div
          className={`rounded-2xl px-4 py-3 shadow-sm ${
            message.isBot
              ? 'bg-white border border-gray-100 text-gray-800'
              : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
          }`}
        >
          <p className="text-sm leading-relaxed whitespace-pre-line">
            {message.text}
          </p>
        </div>
        
        <div className={`flex items-center gap-1 mt-1 text-xs text-gray-500 ${
          message.isBot ? 'justify-start' : 'justify-end'
        }`}>
          <span>{formatTime(message.timestamp)}</span>
        </div>
        
        {message.suggestions && message.suggestions.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {message.suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => onSuggestionClick(suggestion)}
                className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-all duration-200 hover:shadow-md transform hover:scale-105"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {!message.isBot && (
        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center shadow-lg order-2">
          <User size={16} className="text-white" />
        </div>
      )}
    </div>
  );
}