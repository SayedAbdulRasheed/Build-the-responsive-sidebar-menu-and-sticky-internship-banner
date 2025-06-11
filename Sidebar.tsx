import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  FileText, 
  Award, 
  Shield, 
  Users, 
  Mail, 
  ChevronRight,
  Briefcase
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const navigationItems = [
  {
    id: 'internship-application',
    label: 'Internship Application',
    icon: FileText,
    href: '#internship-application',
    description: 'Apply for our internship program'
  },
  {
    id: 'offer-letter',
    label: 'Offer Letter Generation',
    icon: Award,
    href: '#offer-letter',
    description: 'Generate your offer letter'
  },
  {
    id: 'certificate-verification',
    label: 'Certificate Verification',
    icon: Shield,
    href: '#certificate-verification',
    description: 'Verify your certificates'
  },
  {
    id: 'team-join',
    label: 'Team Join Form',
    icon: Users,
    href: '#team-join',
    description: 'Join our team'
  },
  {
    id: 'contact',
    label: 'Contact Information',
    icon: Mail,
    href: '#contact',
    description: 'Get in touch with us'
  }
];

export default function Sidebar({ isOpen, onToggle, onClose }: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex(prev => 
            prev < navigationItems.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex(prev => 
            prev > 0 ? prev - 1 : navigationItems.length - 1
          );
          break;
        case 'Enter':
          if (focusedIndex >= 0) {
            const item = navigationItems[focusedIndex];
            // Handle navigation
            console.log(`Navigate to: ${item.href}`);
            onClose();
          }
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, focusedIndex, onClose]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <Briefcase className="text-white" size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">TechCorp</h2>
              <p className="text-sm text-gray-600">Internships</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/60 rounded-lg transition-colors duration-200"
            aria-label="Close navigation menu"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-6">
          <div className="px-6 mb-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Navigation
            </h3>
          </div>
          
          <ul className="space-y-1 px-3">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const isFocused = focusedIndex === index;
              
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`group flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-sm ${
                      isFocused ? 'bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`Navigate to: ${item.href}`);
                      onClose();
                    }}
                    onFocus={() => setFocusedIndex(index)}
                    onBlur={() => setFocusedIndex(-1)}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-200">
                      <Icon size={18} className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 group-hover:text-blue-900 transition-colors duration-200">
                        {item.label}
                      </div>
                      <div className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors duration-200 truncate">
                        {item.description}
                      </div>
                    </div>
                    
                    <ChevronRight 
                      size={16} 
                      className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" 
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Need help?</p>
            <button
              onClick={() => {
                onClose();
                // Focus on chatbot
                const chatButton = document.querySelector('[data-chatbot-trigger]') as HTMLElement;
                if (chatButton) {
                  chatButton.click();
                }
              }}
              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              Chat with our FAQ Assistant →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}