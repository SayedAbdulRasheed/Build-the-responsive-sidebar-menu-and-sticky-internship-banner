import React, { useState, useEffect } from 'react';
import { Briefcase, ArrowRight, X } from 'lucide-react';

export default function StickyBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldShow = scrollPosition > 200 && !isDismissed;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleApplyClick = () => {
    // Scroll to application section or handle navigation
    const applicationSection = document.getElementById('internship-application');
    if (applicationSection) {
      applicationSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Navigate to internship application');
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-4 left-4 z-30 transform transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-full opacity-0 scale-95'
      }`}
    >
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm max-w-sm">
        <div className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Briefcase size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Ready to Apply?</h3>
                <p className="text-xs text-blue-100">Join our internship program</p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors duration-200"
              aria-label="Dismiss banner"
            >
              <X size={14} className="text-white/80" />
            </button>
          </div>
          
          <button
            onClick={handleApplyClick}
            className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 group"
          >
            <span className="font-medium text-sm">Apply for Internship</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
      </div>
    </div>
  );
}