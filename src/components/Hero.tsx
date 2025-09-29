'use client'

import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      {/* Animated Background Elements */}
      <div className="floating-orbs">
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
      </div>

      {/* Glowing Infinity Symbol */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-32 h-32 relative animate-infinity-glow">
          <svg viewBox="0 0 24 24" className="w-full h-full text-cyan-400 infinity-glow">
            <path 
              d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12l1.83 1.83c.97.97 2.34 1.53 3.77 1.53 2.94 0 5.32-2.39 5.32-5.32S21.54 6.62 18.6 6.62zM6.62 6.62c-2.94 0-5.32 2.39-5.32 5.32s2.38 5.32 5.32 5.32c1.44 0 2.8-.56 3.77-1.53L12 13.34 13.52 12l-1.83-1.83c-.97-.97-2.34-1.53-3.77-1.53z" 
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Intelligence with Purpose.
          </h1>
          
          {/* Sub-Headline */}
          <p className="text-xl lg:text-2xl text-white/90 mb-16 leading-relaxed max-w-4xl mx-auto font-light">
            Personalized AIs designed to guide your growth, health, career, relationships, and beyond.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button 
              onClick={() => scrollToSection('store')}
              className="group glass-button px-10 py-4 text-white rounded-full font-semibold text-lg flex items-center hover-lift"
            >
              Meet Your AI Team
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group glass-button-secondary px-10 py-4 text-white rounded-full font-semibold text-lg flex items-center hover-lift">
              <Play className="w-5 h-5 mr-3" />
              Watch Trailer
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;