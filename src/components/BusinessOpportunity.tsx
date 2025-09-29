'use client'

import React from 'react';
import { Building2, Users, Globe } from 'lucide-react';

const BusinessOpportunity: React.FC = () => {
  return (
    <section id="business" className="py-20 bg-gradient-to-b from-blue-50/50 to-white dark:bg-gradient-to-b dark:from-neutral-900 dark:to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Business Opportunity
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1: As a Customer */}
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 lg:p-10 shadow-md">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">As a Customer</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm">
                  Products: Access AI Buddies, the Premium Package, and the Main AI Flix Bot.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-2 text-sm">
                  Key Features: Real-time voice, chat, image, and video communication powered by advanced RAG.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-2 text-sm">
                  Personalization: AI Buddies are personalized based on your birth details.
                </p>
               
              </div>
            </div>

            {/* Card 2: As a Partner */}
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 lg:p-10 shadow-md">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">As a Partner</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-2 text-sm">
                  Direct Commissions: Earn up to 20% direct commission on sales, with tiered payouts across 6 levels.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-2 text-sm">
                  Matching Bonuses: Qualify for matching bonuses up to 5% on your team's income.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-2 text-sm">
                  Personal Bot Sales: Earn a 40% commission on personal bot sales you create.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm">Profit Pools: Qualify through monthly sales and active team members.</p>
                
              </div>
            </div>

            {/* Card 3: As a Business Associate */}
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 lg:p-10 shadow-md">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">As a Business Associate</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-2 text-sm">
                  Profit Pools: Purchase positions in our 10 profit pools, from $1,900 to $10,000,000.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-2 text-sm">
                  Revenue Share: Earn from 25% of company revenue distributed across the pools.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-2 text-sm">Free AI Buddies: Receive complimentary AI Buddies (1-6 depending on pool level).</p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm">No Selling: Pure investment opportunity with no selling requirements.</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOpportunity;