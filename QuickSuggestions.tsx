import React from 'react';
import { quickSuggestions } from '../../data/faqData';

interface QuickSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
  className?: string;
}

export default function QuickSuggestions({ onSuggestionClick, className = '' }: QuickSuggestionsProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <p className="text-sm font-medium text-gray-600 mb-3">Quick questions:</p>
      <div className="grid gap-2">
        {quickSuggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="text-left p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200 text-sm text-gray-700 hover:text-blue-700 group"
          >
            <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
              {suggestion}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}