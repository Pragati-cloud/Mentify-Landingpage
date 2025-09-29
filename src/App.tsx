import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import BusinessOpportunity from './components/BusinessOpportunity';
import ProductList from './components/ProductList';
import Shop from './components/Shop';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/30 dark:bg-gradient-to-br dark:from-black dark:via-neutral-900 dark:to-black transition-all duration-500 bg-light-pattern dark:bg-dark-pattern">
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
    </ThemeProvider>
  );
}

export default App;