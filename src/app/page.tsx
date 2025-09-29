'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import BusinessOpportunity from '@/components/BusinessOpportunity'
import Shop from '@/components/Shop'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <BusinessOpportunity />
        <Shop />
        {/* Associate and Contact sections */}
        <div id="associate" className="py-20 bg-gradient-to-b from-petrol-900 to-coolGrey-900 text-center relative overflow-hidden">
          <div className="floating-orbs">
            <div className="floating-orb"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-white mb-8">Associate Program</h2>
            <p className="text-xl text-white/80 mb-8">Coming Soon - Advanced Associate Features</p>
            <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-white/70">
                Join our exclusive Associate Program and unlock premium investment opportunities 
                in the future of AI technology.
              </p>
            </div>
          </div>
        </div>
        <div id="contact" className="py-20 bg-gradient-to-b from-coolGrey-900 to-petrol-900 text-center relative overflow-hidden">
          <div className="floating-orbs">
            <div className="floating-orb"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-white mb-8">Contact Us</h2>
            <p className="text-xl text-white/80 mb-8">Get in touch with our team</p>
            <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-white/70 mb-6">
                Ready to transform your life with AI? Contact our team to learn more about 
                Mentify-AI and how we can help you achieve your goals.
              </p>
              <button className="glass-button px-8 py-3 text-white rounded-full font-semibold">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}