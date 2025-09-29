import { AIBuddy, BusinessOpportunity } from '../types';

export const businessOpportunities: BusinessOpportunity[] = [
  {
    id: 'business-associate',
    title: 'BUSINESS ASSOCIATE',
    description: {
      compact: 'Purchase positions in our profit pools and grow your wealth. No sales required.',
      full: `As a Business Associate, you can directly purchase positions in our 10 profit pools ranging from Pool-1 ($1,900) to Pool-10 ($10,000,000). 

Key Benefits:
• Receive free AI Buddies (1-6 depending on pool level)
• Earn from 25% of company revenue distributed across pools
• No selling requirements - pure investment opportunity
• $1,000 activation credit for 10 months included
• Automatic qualification for all lower pools when you qualify for higher ones

Pool Distribution:
• 50% distributed equally among qualified members
• 50% distributed by seniority (Streamline Number)
• Monthly BV requirements for qualification
• Leg balance rule: Max 50% BV from single leg`
    },
    icon: '💼'
  },
  {
    id: 'customer',
    title: 'CUSTOMER',
    description: {
      compact: 'Acquire powerful AI Buddies for personal growth and productivity.',
      full: `As a Customer, access our revolutionary AI Buddies designed to transform your personal and professional life.

Product Options:
• Individual Buddies: $300-$1,800/year
• Premium Package: $3,800 (all 6 Buddies + Personal Buddy creation rights)
• Main AI Flix Bot: Comprehensive platform guide with advanced features

AI Buddy Features:
• Real-time voice communication
• Advanced chat capabilities
• Image and video interaction
• Personalized based on your birth details
• RAG technology for updated conversations
• Specialized domains for every need

Personal Buddy Creation:
• Available with $3,800 package
• Create bots based on your expertise
• Sell to others for profit (lifetime asset)
• Earn 40% from each $100 annual sale`
    },
    icon: '👤'
  },
  {
    id: 'partner',
    title: 'PARTNER',
    description: {
      compact: 'Join our social commerce model, earn commissions by sharing AI Buddies.',
      full: `As a Partner, build your AI career through our social commerce model with multiple income streams.

Income Opportunities:

1. Direct Commission (20% of sales):
• Level 1: 10% • Level 2: 5% • Levels 3-5: 1% each • Level 6: 2%
• Network compression applies
• Immediate payout visibility

2. Upline Matching Bonus:
• Pool 3+: 2.5% of Level 1's income
• Pool 5+: Additional 2.5% of Level 2's income

3. Personal Buddy Commissions:
• 40% to creator • 10% Level 1 • 5% Level 2 • 5% Level 3

4. Profit Pools:
• Qualify through monthly BV and active Level 1 members
• Pool 1: $900 BV • Pool 10: $10M BV + 20 active Level 1s
• Higher pools = automatic qualification for lower pools

Active Status:
• $100 monthly sales OR purchase any buddy from month 3
• Network compression for inactive members`
    },
    icon: '🤝'
  }
];

export const aiBuddies: AIBuddy[] = [
  {
    id: 'main-bot',
    title: 'Main AI Flix Bot',
    description: {
      compact: 'Your comprehensive guide to AI Flix, offering real-time voice, chat, image, and video communication with advanced RAG technology.',
      full: 'The Main AI Flix Bot serves as your dedicated guide to everything about AI Flix. It provides comprehensive information about our platform, functionality, and vision. Features include real-time voice communication, advanced chat capabilities, image chatting, video chatting, enhanced RAG (Retrieval-Augmented Generation) technology, and sophisticated prompting. This bot is your gateway to understanding and maximizing your experience with the entire AI Flix ecosystem.'
    },
    image: '🤖',
    price: 'Included in all packages',
    isMainBot: true
  },
  {
    id: 'business-mentor',
    title: 'Business Motivator & Mentor',
    description: {
      compact: 'Inspires, guides, and explains the Mentify business plan to prospects.',
      full: 'Your personal business coach and mentor, designed to inspire entrepreneurial success. This AI Buddy provides motivational guidance, business strategy insights, and can effectively explain the Mentify business plan to prospects. It combines real-time voice communication, chat support, and limited image/video capabilities with specialized business knowledge. Perfect for entrepreneurs, business owners, and anyone looking to grow their professional network and understanding of business opportunities.'
    },
    image: '💼',
    price: 'From $300/year',
    discount: 'Bundle and Save!'
  },
  {
    id: 'relationship-buddy',
    title: 'Relationship & Social Buddy',
    description: {
      compact: 'Supports friendship, dating, and emotional connection.',
      full: 'Your personal companion for navigating relationships and social connections. This AI Buddy specializes in friendship advice, dating guidance, emotional support, and building meaningful connections. It understands the complexities of human relationships and provides personalized advice based on your unique situation. Features include empathetic communication, social skills development, and relationship strategy guidance to help you build stronger, more fulfilling connections with others.'
    },
    image: '❤️',
    price: 'From $300/year',
    discount: '20% off first year!'
  },
  {
    id: 'finance-buddy',
    title: 'Finance & Real Estate Buddy',
    description: {
      compact: 'Your personal guide for investments, savings, and opportunities.',
      full: 'Your expert financial advisor and real estate consultant in AI form. This Buddy provides personalized guidance on investments, savings strategies, real estate opportunities, and financial planning. It stays updated with market trends, offers portfolio advice, and helps you make informed financial decisions. Whether you\'re a beginner or experienced business associate, this AI companion helps you navigate the complex world of finance and real estate with confidence and expertise.'
    },
    image: '💰',
    price: 'From $300/year'
  },
  {
    id: 'health-buddy',
    title: 'Health & Wellness Buddy',
    description: {
      compact: 'Offering advice on diet, fitness, and holistic wellbeing.',
      full: 'Your comprehensive health and wellness coach, dedicated to optimizing your physical and mental well-being. This AI Buddy provides personalized advice on nutrition, fitness routines, mental health, and holistic wellness practices. It creates customized meal plans, workout schedules, and wellness strategies based on your goals and lifestyle. From diet optimization to stress management, this companion supports your journey to optimal health and vitality.'
    },
    image: '🏃‍♂️',
    price: 'From $300/year',
    discount: 'Health Bundle Available!'
  },
  {
    id: 'social-media-buddy',
    title: 'Social Media & Branding Buddy',
    description: {
      compact: 'Helps you build your online identity, create posts, and manage behavior.',
      full: 'Your personal social media strategist and brand development expert. This AI Buddy specializes in building compelling online identities, creating engaging content, managing social media presence, and developing personal or business brands. It provides content creation assistance, posting strategies, audience engagement tactics, and brand positioning advice. Perfect for influencers, entrepreneurs, and anyone looking to establish a strong digital presence and build their personal brand online.'
    },
    image: '📱',
    price: 'From $300/year'
  },
  {
    id: 'problem-solver-buddy',
    title: 'Problem Solver & Education Buddy',
    description: {
      compact: 'Assists in learning, training, and sales guidance.',
      full: 'Your intelligent problem-solving companion and educational mentor. This AI Buddy excels at analytical thinking, creative problem-solving, educational guidance, and sales training. It helps you tackle complex challenges, provides learning resources, offers training programs, and develops your sales skills. Whether you need help with academic subjects, professional development, or sales techniques, this versatile companion adapts to your learning style and helps you achieve your educational and professional goals.'
    },
    image: '🎓',
    price: 'From $300/year',
    discount: 'Student Discount!'
  }
];