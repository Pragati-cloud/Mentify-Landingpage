'use client'

import React from 'react';
import { ArrowRight, Sparkles, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:bg-gradient-to-br dark:from-black dark:via-neutral-900 dark:to-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/30 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/30 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 dark:from-blue-500/10 to-transparent rounded-full"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400/40 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400/40 rounded-full animate-float delay-500"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-violet-400/40 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-cyan-400/40 rounded-full animate-float delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/90 dark:bg-slate-800/50 backdrop-blur-sm border border-cyan-200 dark:border-slate-700/50 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-8 shadow-lg shadow-cyan-500/10">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionary AI Technology
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Guiding You Through
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              AI Complexity
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Mentify-AI transforms how you interact with Artificial Intelligence, empowering you to build stable, 
            long-term careers by sharing revolutionary AI Buddys' tailored to your unique needs.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={scrollToProducts}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 text-slate-900 dark:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all duration-300 font-semibold text-lg flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>

          {/* Infinity Logo */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 dark:from-cyan-400/20 to-blue-500/30 dark:to-blue-500/20 rounded-full blur-3xl"></div>
            <img 
              src="/infinity__1_-removebg-preview.png" 
              alt="Mentify AI Infinity Logo" 
              className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto object-contain animate-float opacity-90"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-600 dark:bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;