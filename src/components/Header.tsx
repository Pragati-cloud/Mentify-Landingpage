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
      setIsScrolled(window.scrollY > 10);
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700 shadow-sm' 
        : 'bg-white/80 dark:bg-transparent backdrop-blur-sm'
    }`}>
      <nav className="w-full px-4 sm:px-6 lg:px-8 py-4"> {/* add horizontal padding to nav container */}
        <div className="flex items-center justify-between w-full">
          {/* Left side: Logo - flush to left */}
          <div className="flex items-center space-x-3 ml-0">
            <img 
              src="/infinity__1_-removebg-preview.png" 
              alt="Mentify AI Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mentify AI
            </span>
          </div>

          {/* Right side: Desktop nav (md+) and Mobile controls (sm) - flush to right */}
          <div className="flex items-center space-x-6 mr-0">
            {/* Mobile controls (visible on small screens) */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 mr-[4px] text-slate-700 dark:text-slate-400"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-700 dark:text-slate-400"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Navigation (visible on md+) */}
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 font-medium rounded-md"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('business')}
                className="px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 font-medium rounded-md"
              >
                Business Opportunity
              </button>
              <button 
                onClick={() => scrollToSection('shop')}
                className="px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 font-medium rounded-md"
              >
                Shop
              </button>
              <button className="px-3 py-2 text-slate-700 dark:text-white hover:underline transition-all duration-200 font-medium rounded-md">
                Login
              </button>
              <button
                onClick={toggleTheme}
                className="ml-[2px] mr-[4px] p-2 text-slate-700 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 rounded-md"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('business')}
                className="text-left text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
              >
                Business Opportunity
              </button>
              <button 
                onClick={() => scrollToSection('shop')}
                className="text-left text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
              >
                Shop
              </button>
              <button className="text-left px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full font-medium">
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;