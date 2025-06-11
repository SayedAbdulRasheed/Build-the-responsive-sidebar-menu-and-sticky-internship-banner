import React, { useState, useRef, useEffect } from 'react';
import { Message, ChatState } from '../../types/chat';
import { findBestMatch, generateFallbackResponse, generateMessageId } from '../../utils/chatUtils';
import { quickSuggestions } from '../../data/faqData';
import ChatMessage from './ChatMessage';
import QuickSuggestions from './QuickSuggestions';
import TypingIndicator from './TypingIndicator';
import { MessageCircle, Send, Minimize2, Maximize2, X } from 'lucide-react';

export default function ChatBot() {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [
      {
        id: generateMessageId(),
        text: "Hello! I'm here to help answer your questions about our internship program, application process, and organization. What would you like to know?",
        isBot: true,
        timestamp: new Date(),
        suggestions: quickSuggestions.slice(0, 3)
      }
    ],
    isTyping: false,
    isMinimized: false
  });
  
  const [inputText, setInputText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages, chatState.isTyping]);

  useEffect(() => {
    if (isOpen && !chatState.isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, chatState.isMinimized]);

  const handleSendMessage = async (text: string = inputText.trim()) => {
    if (!text) return;

    const userMessage: Message = {
      id: generateMessageId(),
      text,
      isBot: false,
      timestamp: new Date()
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isTyping: true
    }));

    setInputText('');

    // Simulate thinking time
    setTimeout(() => {
      const match = findBestMatch(text);
      
      const botMessage: Message = {
        id: generateMessageId(),
        text: match ? match.answer : generateFallbackResponse(),
        isBot: true,
        timestamp: new Date(),
        suggestions: match ? match.followUp : quickSuggestions.slice(0, 3)
      };

      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        isTyping: false
      }));
    }, 800 + Math.random() * 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleMinimize = () => {
    setChatState(prev => ({ ...prev, isMinimized: !prev.isMinimized }));
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        data-chatbot-trigger
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 animate-pulse"
      >
        <MessageCircle size={24} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] z-50">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle size={16} />
            </div>
            <div>
              <h3 className="font-semibold text-sm">FAQ Assistant</h3>
              <p className="text-xs opacity-90">Always here to help</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMinimize}
              className="p-1.5 hover:bg-white/20 rounded-lg transition-colors duration-200"
            >
              {chatState.isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/20 rounded-lg transition-colors duration-200"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {!chatState.isMinimized && (
          <>
            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white">
              {chatState.messages.length === 1 && (
                <QuickSuggestions 
                  onSuggestionClick={handleSendMessage}
                  className="mb-4"
                />
              )}
              
              {chatState.messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  onSuggestionClick={handleSendMessage}
                />
              ))}
              
              {chatState.isTyping && <TypingIndicator />}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex gap-2 items-end">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about internships..."
                  className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                  disabled={chatState.isTyping}
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputText.trim() || chatState.isTyping}
                  className="p-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}