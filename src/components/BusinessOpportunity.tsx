'use client'

import React, { useState } from 'react';
import { Building2, Users, Globe, ArrowRight, ChevronUp, Download } from 'lucide-react';

const BusinessOpportunity: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setTimeout(() => {
        const element = document.getElementById('business-expanded');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const opportunities = [
    {
      title: 'Customer',
      subtitle: 'Your AI, Your Lifestyle',
      description: 'Upgrade your lifestyle with AI.',
      gradient: 'from-cyan-400 to-petrol-500',
      glassClass: 'glass-card-cyan',
      icon: Building2
    },
    {
      title: 'Partner',
      subtitle: 'Share Mentify-AI, Grow Together',
      description: 'Share Mentify-AI, grow together.',
      gradient: 'from-petrol-400 to-cyan-500',
      glassClass: 'glass-card-blue',
      icon: Users
    },
    {
      title: 'Associate',
      subtitle: 'Invest in the Future of AI',
      description: 'Invest in the future of intelligence.',
      gradient: 'from-cyan-500 to-purple-500',
      glassClass: 'glass-card-purple',
      icon: Globe
    }
  ];

  return (
    <section id="business" className="py-20 bg-gradient-to-b from-coolGrey-900 via-petrol-800 to-coolGrey-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="floating-orbs">
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Business <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">Opportunity</span>
            </h2>
          </div>

          {/* Compact Preview - Three Glass Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {opportunities.map((opportunity, index) => (
              <div key={opportunity.title} className={`${opportunity.glassClass} rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-300 animate-slide-in-up hover-lift glass-shine`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative mb-6">
                  {/* Infinity symbol with gradient */}
                  <div className="w-20 h-20 mx-auto mb-4 relative">
                    <svg viewBox="0 0 24 24" className={`w-full h-full ${index === 0 ? 'text-cyan-400' : index === 1 ? 'text-blue-400' : 'text-purple-400'} infinity-glow`}>
                      <path 
                        d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12l1.83 1.83c.97.97 2.34 1.53 3.77 1.53 2.94 0 5.32-2.39 5.32-5.32S21.54 6.62 18.6 6.62zM6.62 6.62c-2.94 0-5.32 2.39-5.32 5.32s2.38 5.32 5.32 5.32c1.44 0 2.8-.56 3.77-1.53L12 13.34 13.52 12l-1.83-1.83c-.97-.97-2.34-1.53-3.77-1.53z" 
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{opportunity.title}</h3>
                <p className="text-cyan-300 font-medium mb-4">{opportunity.subtitle}</p>
                <p className="text-white/70 text-sm leading-relaxed">{opportunity.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button 
              onClick={toggleExpanded}
              className="group glass-button px-10 py-5 text-white rounded-full font-semibold text-xl flex items-center mx-auto hover-lift"
            >
              {isExpanded ? 'Show Less' : 'Explore Opportunities'}
              {isExpanded ? 
                <ChevronUp className="w-6 h-6 ml-3 group-hover:-translate-y-1 transition-transform" /> :
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              }
            </button>
          </div>

          {/* Expanded Content */}
          {isExpanded && (
            <div id="business-expanded" className="mt-20 animate-fade-in-up">
              {/* The Opportunity */}
              <div className="glass-card rounded-3xl p-12 mb-12">
                <h3 className="text-4xl font-bold text-white mb-8 text-center">The Opportunity</h3>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-xl text-white/80 leading-relaxed mb-6">
                      Mentify-AI represents a revolutionary shift in how people interact with artificial intelligence. 
                      We're not just selling products – we're building careers and transforming lives.
                    </p>
                    <ul className="space-y-4 text-white/70">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Global market opportunity in AI technology</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Multiple income streams and growth paths</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Secure USDT transactions worldwide</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
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
              </div>

              {/* Detailed Opportunity Cards */}
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                {/* Customer Details */}
                <div className="glass-card rounded-3xl p-8 hover-lift">
                  <h4 className="text-2xl font-bold text-cyan-300 mb-6">The Customers</h4>
                  <div className="space-y-4 text-white/80">
                    <p><strong>Products:</strong> AI Buddies, Premium Package, Main AI Flix Bot</p>
                    <p><strong>Features:</strong> Real-time voice, chat, image, and video communication</p>
                    <p><strong>Personalization:</strong> AI Buddies based on birth details</p>
                    <p><strong>Pricing:</strong> Individual Buddies from $300/year, Premium Package $3,800</p>
                  </div>
                </div>

                {/* Partner Details */}
                <div className="glass-card rounded-3xl p-8 hover-lift">
                  <h4 className="text-2xl font-bold text-cyan-300 mb-6">The Ideal Partner</h4>
                  <div className="space-y-4 text-white/80">
                    <p><strong>Direct Commissions:</strong> Up to 20% across 6 levels</p>
                    <p><strong>Matching Bonuses:</strong> Up to 5% on team income</p>
                    <p><strong>Personal Bot Sales:</strong> 40% commission on creations</p>
                    <p><strong>Profit Pools:</strong> Qualify through monthly sales and team activity</p>
                  </div>
                </div>

                {/* Associate Details */}
                <div className="glass-card rounded-3xl p-8 hover-lift">
                  <h4 className="text-2xl font-bold text-cyan-300 mb-6">Empowering You with Technology</h4>
                  <div className="space-y-4 text-white/80">
                    <p><strong>Profit Pools:</strong> 10 pools from $1,900 to $10,000,000</p>
                    <p><strong>Revenue Share:</strong> 25% of company revenue distributed</p>
                    <p><strong>Free AI Buddies:</strong> 1-6 depending on pool level</p>
                    <p><strong>No Selling:</strong> Pure investment opportunity</p>
                  </div>
                </div>
              </div>

              {/* Download Pitch Deck */}
              <div className="text-center">
                <button className="group glass-button px-10 py-5 text-white rounded-full font-semibold text-xl flex items-center mx-auto hover-lift">
                  <Download className="w-6 h-6 mr-3" />
                  Download Pitch Deck
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BusinessOpportunity;