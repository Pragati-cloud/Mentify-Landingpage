// const ProductListSection = () => {
//   const products = [
//     {
//       id: 'custom-career-bot',
//       title: 'Custom Career Bot',
//       category: 'Career Development',
//       description: 'AI-powered career coach that analyzes your skills, provides job search strategies, interview preparation, resume optimization, and personalized career advancement roadmaps',
//       price: '$100',
//       rating: 4,
//       creator: 'Sarah Johnson',
//       icon: '💼'
//     },
//     {
//       id: 'wellness-tracker-bot',
//       title: 'Wellness Tracker Bot',
//       category: 'Health & Wellness',
//       description: 'Comprehensive health companion that tracks your wellness metrics, provides personalized nutrition advice, workout plans, and daily health insights for optimal living',
//       price: '$100',
//       rating: 5,
//       creator: 'Dr. Mike Chen',
//       icon: '🏃‍♂️'
//     },
//     {
//       id: 'investment-advisor-bot',
//       title: 'Investment Advisor Bot',
//       category: 'Finance',
//       description: 'Smart investment assistant that analyzes market trends, provides portfolio recommendations, risk assessment, and helps make informed financial decisions for wealth building',
//       price: '$100',
//       rating: 4,
//       creator: 'Alex Rodriguez',
//       icon: '💰'
//     },
//     {
//       id: 'language-learning-bot',
//       title: 'Language Learning Bot',
//       category: 'Education',
//       description: 'Interactive language tutor that creates personalized learning paths, provides conversation practice, grammar correction, and cultural insights for fluent language mastery',
//       price: '$100',
//       rating: 5,
//       creator: 'Maria Garcia',
//       icon: '🌍'
//     },
//     {
//       id: 'social-media-bot',
//       title: 'Social Media & Branding Bot',
//       category: 'Marketing',
//       description: 'Professional brand builder that helps create engaging content, manages posting schedules, analyzes performance metrics, and grows your online presence strategically',
//       price: '$100',
//       rating: 4,
//       creator: 'James Wilson',
//       icon: '📱'
//     },
//     {
//       id: 'relationship-coach-bot',
//       title: 'Relationship Coach Bot',
//       category: 'Personal Development',
//       description: 'Relationship expert that provides guidance on communication, dating advice, conflict resolution, and building meaningful connections in personal and professional relationships',
//       price: '$100',
//       rating: 5,
//       creator: 'Dr. Emily Thompson',
//       icon: '❤️'
//     }
//   ];

//   // Star rating component
//   const StarRating = ({ rating }: { rating: number }) => {
//     return (
//       <div className="flex items-center gap-1 mb-2">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <div
//             key={star}
//             className={`text-sm ${
//               star <= rating ? 'text-yellow-400' : 'text-gray-300'
//             }`}
//           >
//             ⭐
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   return (
//     <section id="products" className="py-20 px-6 relative bg-gray-50 dark:bg-gray-900">      
//       <div className="container mx-auto relative">
//         <div className="text-center space-y-6 mb-16 animate-slide-up">
//           <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
//             Mentify Shop: Smarter Living with AI Buddies
//           </h1>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((product, index) => (
//             <Card 
//               key={product.id} 
//               className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-up"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               {/* Card Header with Blue Gradient Background and Tech Pattern */}
//               <div className="relative h-48 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 overflow-hidden">
//                 {/* Tech pattern overlay */}
//                 <div className="absolute inset-0 opacity-20">
//                   <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//                     <defs>
//                       <pattern id={`tech-pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
//                         <circle cx="2" cy="2" r="1" fill="white" opacity="0.3"/>
//                         <line x1="2" y1="2" x2="18" y2="18" stroke="white" strokeWidth="0.5" opacity="0.2"/>
//                         <line x1="18" y1="2" x2="2" y2="18" stroke="white" strokeWidth="0.5" opacity="0.2"/>
//                       </pattern>
//                     </defs>
//                     <rect width="100%" height="100%" fill={`url(#tech-pattern-${index})`}/>
//                   </svg>
//                 </div>
                
//                 {/* Floating geometric shapes */}
//                 <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full animate-pulse"></div>
//                 <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white/40 rotate-45"></div>
//                 <div className="absolute top-1/2 left-1/2 w-12 h-12 border border-white/20 rounded-lg transform -translate-x-1/2 -translate-y-1/2 rotate-12"></div>
                
//                 {/* Bot icon in top right */}
//                 <div className="absolute top-4 right-4 text-white text-2xl opacity-80">
//                   🤖
//                 </div>
//               </div>
              
//               <CardContent className="p-6">
//                 {/* Category badge */}
//                 <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wide">
//                   {product.category}
//                 </div>
                
//                 {/* Star rating */}
//                 <StarRating rating={product.rating} />
                
//                 {/* Title */}
//                 <CardTitle className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-tight">
//                   {product.title}
//                 </CardTitle>
                
//                 {/* Description */}
//                 <CardDescription className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
//                   {product.description}
//                 </CardDescription>
                
//                 {/* Creator */}
//                 <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
//                   Created by <span className="font-medium text-blue-600 dark:text-blue-400">{product.creator}</span>
//                 </p>
                
//                 {/* Price and Button */}
//                 <div className="flex items-center justify-between">
//                   <div className="text-2xl font-bold text-gray-900 dark:text-white">
//                     {product.price}
//                   </div>
//                   <Button 
//                     className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
//                     onClick={() => {
//                       alert(`Adding ${product.title} to cart - Coming Soon!`);
//                     }}
//                   >
//                     Add to Cart
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
'use client'

import React from 'react';

const ProductList: React.FC = () => {
  // "Meet Your AI Buddies" section removed per user request.
  return null;
};

export default ProductList;