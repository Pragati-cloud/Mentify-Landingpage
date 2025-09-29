'use client'

import React from 'react';
import { Linkedin, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-petrol-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="floating-orbs">
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Brand Statement */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 relative">
              <svg viewBox="0 0 24 24" className="w-full h-full text-cyan-400 infinity-glow">
                <path 
                  d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12l1.83 1.83c.97.97 2.34 1.53 3.77 1.53 2.94 0 5.32-2.39 5.32-5.32S21.54 6.62 18.6 6.62zM6.62 6.62c-2.94 0-5.32 2.39-5.32 5.32s2.38 5.32 5.32 5.32c1.44 0 2.8-.56 3.77-1.53L12 13.34 13.52 12l-1.83-1.83c-.97-.97-2.34-1.53-3.77-1.53z" 
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">
              Mentify-AI
            </span>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Mentify-AI transforms life with intelligent AIs for growth, balance, and possibility.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-300">Navigation</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('about')} className="text-white/70 hover:text-cyan-300 transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-white/70 hover:text-cyan-300 transition-colors">Founders</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-white/70 hover:text-cyan-300 transition-colors">Circle of Life</button></li>
              <li><button onClick={() => scrollToSection('store')} className="text-white/70 hover:text-cyan-300 transition-colors">Store</button></li>
              <li><button onClick={() => scrollToSection('business')} className="text-white/70 hover:text-cyan-300 transition-colors">Business</button></li>
              <li><button onClick={() => scrollToSection('associate')} className="text-white/70 hover:text-cyan-300 transition-colors">Associate</button></li>
            </ul>
          </div>

          {/* AI Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-300">AI Buddies</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-cyan-300 transition-colors">Love AI</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyan-300 transition-colors">Social AI</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyan-300 transition-colors">Health AI</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyan-300 transition-colors">Career AI</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyan-300 transition-colors">Wealth AI</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyan-300 transition-colors">Inner Life AI</a></li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-300">Business</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-cyan-300 transition-colors">Become a Customer</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyan-300 transition-colors">Partner Program</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyan-300 transition-colors">Associate Opportunities</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyan-300 transition-colors">Profit Pools</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyan-300 transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyan-300 transition-colors">Training Resources</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-300">Connect With Us</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                <span className="text-white/70">support@mentify-ai.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                <span className="text-white/70">Global Operations</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-petrol-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-cyan-300 transition-colors">Terms of Use</a>
              <a href="#" className="text-white/60 hover:text-cyan-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-cyan-300 transition-colors">Cookie Policy</a>
              <a href="#" className="text-white/60 hover:text-cyan-300 transition-colors">Legal Notice</a>
            </div>
            <div className="text-white/50 text-sm">
              © 2024 Mentify-AI. All rights reserved. Intelligence with Purpose.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;