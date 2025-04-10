
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-midnight">
      <Navbar />
      <div>
        <Hero />
        <Services />
        <Features />
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
