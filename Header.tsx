import React from 'react';
import { Menu, Briefcase } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuToggle}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu size={20} className="text-gray-700" />
            </button>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Briefcase className="text-white" size={16} />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900">TechCorp</h1>
                <p className="text-xs text-gray-600 -mt-1">Internships</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#internship-application"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Apply
            </a>
            <a
              href="#offer-letter"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Offer Letter
            </a>
            <a
              href="#certificate-verification"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Verify Certificate
            </a>
            <a
              href="#team-join"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Join Team
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <button
              onClick={() => {
                const applicationSection = document.getElementById('internship-application');
                if (applicationSection) {
                  applicationSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}