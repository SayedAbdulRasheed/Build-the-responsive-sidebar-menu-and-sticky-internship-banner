import { faqData, fallbackResponses } from '../data/faqData';
import { FAQItem } from '../types/chat';

export function findBestMatch(userMessage: string): FAQItem | null {
  const normalizedMessage = userMessage.toLowerCase().trim();
  const words = normalizedMessage.split(/\s+/);
  
  let bestMatch: FAQItem | null = null;
  let bestScore = 0;
  
  for (const faq of faqData) {
    let score = 0;
    
    // Check for exact phrase matches
    if (normalizedMessage.includes(faq.question.toLowerCase())) {
      score += 100;
    }
    
    // Check keyword matches
    for (const keyword of faq.keywords) {
      if (normalizedMessage.includes(keyword.toLowerCase())) {
        score += 10;
      }
    }
    
    // Check individual word matches
    for (const word of words) {
      if (word.length > 2) { // Ignore very short words
        for (const keyword of faq.keywords) {
          if (keyword.toLowerCase().includes(word) || word.includes(keyword.toLowerCase())) {
            score += 5;
          }
        }
        
        // Check against question words
        const questionWords = faq.question.toLowerCase().split(/\s+/);
        if (questionWords.includes(word)) {
          score += 3;
        }
      }
    }
    
    // Bonus for category-specific matches
    if (normalizedMessage.includes('intern') && faq.category === 'internship') score += 5;
    if (normalizedMessage.includes('apply') && faq.category === 'application') score += 5;
    if (normalizedMessage.includes('company') && faq.category === 'organization') score += 5;
    
    if (score > bestScore && score >= 8) { // Minimum threshold
      bestScore = score;
      bestMatch = faq;
    }
  }
  
  return bestMatch;
}

export function generateFallbackResponse(): string {
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

export function generateMessageId(): string {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
}

export function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}