'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import BusinessOpportunity from '@/components/BusinessOpportunity'
import Shop from '@/components/Shop'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen smooth-scroll">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <BusinessOpportunity />
        <Shop />
        {/* Associate and Contact sections can be added here */}
        <div id="associate" className="py-20 bg-petrol-900 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-8">Associate Program</h2>
            <p className="text-xl text-white/80 mb-8">Coming Soon - Advanced Associate Features</p>
          </div>
        </div>
        <div id="contact" className="py-20 bg-coolGrey-900 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-8">Contact Us</h2>
            <p className="text-xl text-white/80 mb-8">Get in touch with our team</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}