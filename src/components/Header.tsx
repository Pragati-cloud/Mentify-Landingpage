'use client'

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: "The AI's", id: 'ais' },
    { label: 'Business Opportunity', id: 'business' },
    { label: 'Store', id: 'store' },
    { label: 'Associate', id: 'associate' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-morphism-header shadow-lg' 
        : 'glass-morphism-transparent'
    }`}>
      <nav className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 24 24" className="w-full h-full text-cyan-400 infinity-glow">
                <path 
                  d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12l1.83 1.83c.97.97 2.34 1.53 3.77 1.53 2.94 0 5.32-2.39 5.32-5.32S21.54 6.62 18.6 6.62zM6.62 6.62c-2.94 0-5.32 2.39-5.32 5.32s2.38 5.32 5.32 5.32c1.44 0 2.8-.56 3.77-1.53L12 13.34 13.52 12l-1.83-1.83c-.97-.97-2.34-1.53-3.77-1.53z" 
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">
              Mentify-AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 font-medium transition-all duration-300 rounded-md ${
                  isScrolled 
                    ? 'text-coolGrey-300 hover:text-white' 
                    : 'text-coolGrey-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className={`ml-4 p-2 transition-all duration-300 rounded-md ${
                isScrolled 
                  ? 'text-coolGrey-300 hover:text-white' 
                  : 'text-coolGrey-400 hover:text-white'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 transition-all duration-300 ${
                isScrolled 
                  ? 'text-coolGrey-300 hover:text-white' 
                  : 'text-coolGrey-400 hover:text-white'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-all duration-300 ${
                isScrolled 
                  ? 'text-coolGrey-300 hover:text-white' 
                  : 'text-coolGrey-400 hover:text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-6 glass-card rounded-xl">
            <div className="flex flex-col space-y-4 px-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-white hover:text-cyan-300 transition-colors duration-200 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;