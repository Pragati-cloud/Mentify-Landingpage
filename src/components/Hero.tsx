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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient floating-reflections">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating glass orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-petrol-400/20 to-transparent rounded-full"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400/40 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white/30 rounded-full animate-float delay-500"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-petrol-300/40 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-cyan-400/40 rounded-full animate-float delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Intelligence with
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">
              Purpose
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-2xl lg:text-3xl text-white/90 mb-16 leading-relaxed max-w-4xl mx-auto font-light">
            Personalized AIs designed to guide your growth, health, career, relationships, and beyond.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button 
              onClick={() => scrollToSection('store')}
              className="group px-10 py-5 glass-card text-white rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 font-semibold text-xl flex items-center"
            >
              Meet Your AI Team
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-10 py-5 glass-morphism-white text-white rounded-full hover:bg-white/20 transition-all duration-300 font-semibold text-xl flex items-center">
              <Play className="w-6 h-6 mr-3" />
              Watch Trailer
            </button>
          </div>

          {/* Infinity Logo */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-petrol-400/30 rounded-full blur-3xl"></div>
            <img 
              src="/infinity__1_-removebg-preview.png" 
              alt="Mentify AI Infinity Logo" 
              className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto object-contain animate-float opacity-90 infinity-glow"
            />
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