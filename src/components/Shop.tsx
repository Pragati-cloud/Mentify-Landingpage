'use client'

import React, { useState } from 'react';
import { ShoppingBag, ArrowRight, Sparkles, ChevronUp, Bot, Heart, DollarSign, Dumbbell, Share2, GraduationCap } from 'lucide-react';

const Shop: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setTimeout(() => {
        const element = document.getElementById('store-expanded');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const mainAIs = [
    {
      id: 'main-bot',
      title: 'Main AI Flix Bot',
      description: 'Your comprehensive guide to AI Flix',
      icon: Bot,
      gradient: 'from-cyan-400 to-petrol-500',
      price: 'Included'
    },
    {
      id: 'business-mentor',
      title: 'Business Mentor',
      description: 'Inspires and guides business growth',
      icon: Sparkles,
      gradient: 'from-petrol-400 to-cyan-500',
      price: '$300/year'
    },
    {
      id: 'relationship-buddy',
      title: 'Relationship Buddy',
      description: 'Supports friendship and emotional connection',
      icon: Heart,
      gradient: 'from-pink-400 to-red-500',
      price: '$300/year'
    },
    {
      id: 'finance-buddy',
      title: 'Finance Buddy',
      description: 'Personal guide for investments and savings',
      icon: DollarSign,
      gradient: 'from-green-400 to-emerald-500',
      price: '$300/year'
    },
    {
      id: 'health-buddy',
      title: 'Health & Wellness',
      description: 'Advice on diet, fitness, and wellbeing',
      icon: Dumbbell,
      gradient: 'from-blue-400 to-cyan-500',
      price: '$300/year'
    },
    {
      id: 'social-media-buddy',
      title: 'Social Media Buddy',
      description: 'Build your online identity and brand',
      icon: Share2,
      gradient: 'from-purple-400 to-pink-500',
      price: '$300/year'
    },
    {
      id: 'education-buddy',
      title: 'Education Buddy',
      description: 'Learning, training, and problem solving',
      icon: GraduationCap,
      gradient: 'from-indigo-400 to-purple-500',
      price: '$300/year'
    }
  ];

  return (
    <section id="store" className="py-20 bg-gradient-to-b from-petrol-900 via-coolGrey-800 to-petrol-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 glass-morphism-white rounded-full text-cyan-300 text-lg font-medium mb-8">
              <ShoppingBag className="w-5 h-5 mr-3" />
              Your AI Store
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              The <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">AI's</span>
            </h2>
            <p className="text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Select the AI you need today, or unlock the full ecosystem
            </p>
          </div>

          {/* Compact Preview - AI Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {mainAIs.slice(0, 8).map((ai, index) => {
              const IconComponent = ai.icon;
              return (
                <div key={ai.id} className={`glass-card rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 animate-slide-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${ai.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    <IconComponent className="w-8 h-8 text-white relative z-10" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{ai.title}</h3>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">{ai.description}</p>
                  <div className="text-cyan-300 font-semibold">{ai.price}</div>
                </div>
              );
            })}
          </div>

          {/* Visit Store Button */}
          <div className="text-center mb-16">
            <button 
              onClick={toggleExpanded}
              className="group px-10 py-5 glass-card text-white rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold text-xl flex items-center mx-auto"
            >
              {isExpanded ? 'Show Less' : 'Visit Store'}
              {isExpanded ? 
                <ChevronUp className="w-6 h-6 ml-3 group-hover:-translate-y-1 transition-transform" /> :
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              }
            </button>
          </div>

          {/* Expanded Store */}
          {isExpanded && (
            <div id="store-expanded" className="animate-fade-in-up">
              {/* Premium Package Highlight */}
              <div className="glass-card rounded-3xl p-12 mb-12 text-center">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold mb-6">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Premium Package
                </div>
                <h3 className="text-4xl font-bold text-white mb-6">Complete AI Ecosystem</h3>
                <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Get all 6 AI Buddies plus the ability to create and sell your own Personal Buddy. 
                  Transform your expertise into a lifetime asset.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-300">$3,800</div>
                    <div className="text-white/60">One-time payment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">40%</div>
                    <div className="text-white/60">Commission on Personal Buddy sales</div>
                  </div>
                </div>
                <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 font-semibold text-lg">
                  Get Premium Package
                </button>
              </div>

              {/* Individual AI Buddies */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {mainAIs.map((ai, index) => {
                  const IconComponent = ai.icon;
                  return (
                    <div key={ai.id} className={`glass-card rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 animate-slide-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className={`w-20 h-20 bg-gradient-to-r ${ai.gradient} rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        <IconComponent className="w-10 h-10 text-white relative z-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{ai.title}</h3>
                      <p className="text-white/70 mb-6 leading-relaxed">{ai.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-xl font-bold text-cyan-300">{ai.price}</div>
                        <button className="px-6 py-2 glass-morphism-white text-white rounded-full hover:bg-white/20 transition-all duration-300 font-medium">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bundle Options */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="glass-card rounded-2xl p-8 text-center">
                  <h4 className="text-xl font-bold text-white mb-4">Starter Bundle</h4>
                  <p className="text-white/70 mb-4">3 AI Buddies of your choice</p>
                  <div className="text-2xl font-bold text-cyan-300 mb-4">$800</div>
                  <div className="text-sm text-green-400 mb-4">Save $100</div>
                  <button className="w-full px-6 py-3 glass-morphism-white text-white rounded-full hover:bg-white/20 transition-all duration-300 font-medium">
                    Choose Bundle
                  </button>
                </div>

                <div className="glass-card rounded-2xl p-8 text-center border-2 border-cyan-400/50">
                  <div className="inline-block px-3 py-1 bg-cyan-400 text-petrol-900 rounded-full text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Complete Bundle</h4>
                  <p className="text-white/70 mb-4">All 6 AI Buddies</p>
                  <div className="text-2xl font-bold text-cyan-300 mb-4">$1,500</div>
                  <div className="text-sm text-green-400 mb-4">Save $300</div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium">
                    Get Complete Bundle
                  </button>
                </div>

                <div className="glass-card rounded-2xl p-8 text-center">
                  <h4 className="text-xl font-bold text-white mb-4">Enterprise</h4>
                  <p className="text-white/70 mb-4">Custom AI solutions for teams</p>
                  <div className="text-2xl font-bold text-cyan-300 mb-4">Custom</div>
                  <div className="text-sm text-white/60 mb-4">Contact for pricing</div>
                  <button className="w-full px-6 py-3 glass-morphism-white text-white rounded-full hover:bg-white/20 transition-all duration-300 font-medium">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Shop;