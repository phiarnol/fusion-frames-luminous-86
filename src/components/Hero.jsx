
import React from 'react';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-midnight overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid z-0"></div>
      <div className="absolute inset-0 bg-hero-gradient z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Turning <span className="text-cyan animate-glow">Vision</span> into 
              <span className="text-gold text-glow-gold"> Reality</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-lg">
              At Fusion Frames, we transform ordinary footage into extraordinary stories with cutting-edge video editing technology and creative expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-cyan hover:bg-cyan/80 text-midnight font-bold">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button variant="outline" asChild className="border-cyan text-cyan hover:bg-cyan/10">
                <a href="#showreel" className="flex items-center">
                  <Play size={16} className="mr-2" /> Watch Showreel
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-[400px] bg-gradient-to-br from-midnight via-midnight to-cyan/20 rounded-xl overflow-hidden border border-cyan/20 shadow-lg relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1601907473125-3f29c0472bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Video Editing" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    className="rounded-full w-16 h-16 bg-cyan hover:bg-cyan/80 animate-pulse-cyan"
                    aria-label="Play video"
                  >
                    <Play size={24} className="text-midnight" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-cyan/30 rounded-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-gold/30 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
