import React from 'react';
import { useLenis } from './hooks/useLenis';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import Features from './components/sections/Features';
import ProductShowcase from './components/sections/ProductShowcase';
import BusinessQR from './components/sections/BusinessQR';
import BusinessCTA from './components/sections/BusinessCTA';
import FAQ from './components/sections/FAQ';

export default function App() {
  // Initialize smooth scrolling with prefers-reduced-motion check
  useLenis();

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#29243A] font-sans selection:bg-[#B69AFB]/30 selection:text-[#29243A] overflow-x-hidden w-full">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow w-full overflow-x-hidden">
        {/* A. Hero Section with Review Composer centerpiece */}
        <Hero />

        {/* B. How MOZHI Works */}
        <HowItWorks />

        {/* C. Features Grid */}
        <Features />

        {/* D. Product Showcase (Expanded Review Composer Demo) */}
        <ProductShowcase />

        {/* E. Business QR Code Section */}
        <BusinessQR />

        {/* F. Business CTA Section */}
        <BusinessCTA />

        {/* G. FAQ Accordion Section */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
