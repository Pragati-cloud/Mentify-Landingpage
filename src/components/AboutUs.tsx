'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Building2, Users, Globe } from 'lucide-react';

const AboutUs: React.FC = () => {

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50/50 dark:bg-gradient-to-b dark:from-black dark:to-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI Flix</span>
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mt-1">
              AI Flix, founded by MLM and legal experts, leverages AI to empower individuals. Our mission: enable careers in AI by sharing specialized AI buddies, with all global transactions in USDT.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Card: Expert Foundation */}
              <div className="group">
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-center">Expert Foundation</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm text-center">Founded by a team of leading MLM and legal experts, our platform is built on a solid ethical and operational framework, ensuring transparency and security for all users.</p>
                </div>
              </div>

              {/* Card: AI Empowerment */}
              <div className="group">
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-center">AI Empowerment</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm text-center">We're not just selling bots; we're building careers. Our specialized AI Buddies help you acquire new skills, streamline your work, and generate income by leveraging the power of AI.</p>
                </div>
              </div>

              {/* Card: Global Reach */}
              <div className="group">
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4">
                    <Globe className="w-8 h-8 text-violet-400" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-center">Global Reach</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm text-center">Operate without borders. Our platform facilitates secure and instant transactions worldwide using USDT, providing seamless accessibility for a global community of users.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission & Vision</h3>
              <div className="text-left space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  Mentify-AI is a Global Social Commerce Company with a mission to transform the way people see Artificial Intelligence. At a time when AI is feared for "taking jobs," Mentify-AI flips the narrative — by empowering people to build stable, long-term careers in AI simply by sharing our revolutionary AI Buddys'.
                </p>

                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mt-6 mb-3">What Makes Us Different</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Unlike generic chatbots, Mentify AI Buddys' are deeply personal, aligned with your date, time, and place of birth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Each AI Buddy feels like your truest AI companion — always relevant, always connected to you</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Advanced RAG technology ensures conversations stay current and meaningful</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Global platform with secure USDT transactions for worldwide accessibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;