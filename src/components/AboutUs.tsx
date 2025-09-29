'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Building2, Users, Globe, ArrowRight } from 'lucide-react';

const AboutUs: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setTimeout(() => {
        const element = document.getElementById('about-expanded');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-petrol-900 via-coolGrey-800 to-petrol-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="floating-orbs">
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Compact Preview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="animate-slide-in-left">
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
                About <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">Mentify-AI</span>
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Mentify-AI is built to humanize artificial intelligence. Our vision is to create 
                life-centered AIs that empower people worldwide to balance growth, health, career, 
                and community.
              </p>
              <button 
                onClick={toggleExpanded}
                className="group glass-button px-8 py-4 text-white rounded-full font-semibold text-lg flex items-center hover-lift"
              >
                {isExpanded ? 'Show Less' : 'Learn More'}
                {isExpanded ? 
                  <ChevronUp className="w-5 h-5 ml-2 group-hover:-translate-y-1 transition-transform" /> :
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                }
              </button>
            </div>

            {/* Floating Infinity Image */}
            <div className="relative animate-slide-in-right">
              <div className="w-80 h-80 mx-auto relative">
                <svg viewBox="0 0 24 24" className="w-full h-full text-cyan-400 infinity-glow animate-float">
                  <path 
                    d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12l1.83 1.83c.97.97 2.34 1.53 3.77 1.53 2.94 0 5.32-2.39 5.32-5.32S21.54 6.62 18.6 6.62zM6.62 6.62c-2.94 0-5.32 2.39-5.32 5.32s2.38 5.32 5.32 5.32c1.44 0 2.8-.56 3.77-1.53L12 13.34 13.52 12l-1.83-1.83c-.97-.97-2.34-1.53-3.77-1.53z" 
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Expanded Content */}
          {isExpanded && (
            <div id="about-expanded" className="animate-fade-in-up">
              {/* Mission & Vision */}
              <div className="glass-card rounded-3xl p-12 mb-12">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Mission & Vision</h3>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-300 mb-4">Mission</h4>
                    <p className="text-white/80 leading-relaxed">
                      To transform how people interact with Artificial Intelligence by creating deeply personal, 
                      intuitive AI companions that empower individuals to build stable, long-term careers while 
                      enhancing every aspect of their lives.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-300 mb-4">Vision</h4>
                    <p className="text-white/80 leading-relaxed">
                      A world where AI serves as a trusted companion for every individual, providing personalized 
                      guidance, support, and opportunities for growth across all dimensions of human experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Cards */}
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                <div className="glass-card rounded-3xl p-8 text-center hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-petrol-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Visionary Leadership</h3>
                  <p className="text-white/70 leading-relaxed">
                    Founded by industry experts with decades of experience in technology and business innovation.
                  </p>
                </div>

                <div className="glass-card rounded-3xl p-8 text-center hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-petrol-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Life Empowerment</h3>
                  <p className="text-white/70 leading-relaxed">
                    Our AI companions are designed to enhance every aspect of your life, from career to relationships.
                  </p>
                </div>

                <div className="glass-card rounded-3xl p-8 text-center hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-petrol-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Global Reach</h3>
                  <p className="text-white/70 leading-relaxed">
                    Connecting people worldwide through intelligent AI technology and secure USDT transactions.
                  </p>
                </div>
              </div>

              {/* Circle of Life Section */}
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold text-white mb-8">
                  Inspired by the <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">Circle of Life</span>
                </h3>
                <p className="text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Our Guides illuminate every dimension of living, creating a harmonious balance between technology and humanity.
                </p>
                
                {/* Flowing wave design */}
                <div className="relative">
                  <svg className="w-full h-32 opacity-30" viewBox="0 0 1200 200" preserveAspectRatio="none">
                    <path d="M0,100 C300,20 600,180 900,100 C1050,50 1150,150 1200,100 L1200,200 L0,200 Z" fill="url(#waveGradient)"/>
                    <defs>
                      <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="50%" stopColor="#003B4D" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;