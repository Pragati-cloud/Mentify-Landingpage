'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import BusinessOpportunity from '@/components/BusinessOpportunity'
import ProductList from '@/components/ProductList'
import Shop from '@/components/Shop'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/50 dark:bg-gradient-to-br dark:from-black dark:via-neutral-900 dark:to-black transition-all duration-500">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <BusinessOpportunity />
        <ProductList />
        <Shop />
      </main>
      <Footer />
    </div>
  )
}