'use client'

import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/infinity__1_-removebg-preview.png" 
                alt="Mentify AI Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Mentify AI
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Transforming how people interact with AI, empowering careers through revolutionary AI Buddys' 
              aligned with your unique identity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-700 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">About AI Flix</a></li>
              <li><a href="#business" className="text-slate-400 hover:text-cyan-400 transition-colors">Business Opportunities</a></li>
              <li><a href="#products" className="text-slate-400 hover:text-cyan-400 transition-colors">AI Buddies</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Main AI Flix Bot</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Business Mentor</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Health & Wellness</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Finance Buddy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Social Media Buddy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                <span className="text-slate-400">support@mentify-ai.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                <span className="text-slate-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                <span className="text-slate-400">Global Operations</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 dark:border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Terms & Conditions</a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Cookie Policy</a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Legal Notice</a>
            </div>
            <div className="text-slate-500 text-sm">
              © 2024 Mentify AI. All rights reserved. Powered by AI Flix.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;