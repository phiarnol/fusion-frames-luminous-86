
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 bg-midnight relative overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to bring your <span className="text-cyan animate-glow">vision</span> to life?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create something extraordinary together. Contact us today to discuss your project and get started.
          </p>
          <Button asChild className="bg-cyan hover:bg-cyan/80 text-midnight font-bold px-8 py-6 text-lg">
            <Link to="/contact" className="flex items-center">
              Contact Us <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
