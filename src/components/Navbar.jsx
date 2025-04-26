
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-midnight/80 border-b border-cyan/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-white animate-glow">
            FUSION<span className="text-cyan">FRAMES</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <NavLinks className="flex gap-8" />
        </div>
        
        <Link to="/" className="hidden md:block">
          <img 
            src="/lovable-uploads/9e1720cf-2703-4074-b563-bd64cd03fa7a.png" 
            alt="Fusion Frames Logo" 
            className="h-12 w-auto"
          />
        </Link>
        
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-cyan focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-midnight border-b border-cyan/20">
          <div className="container mx-auto px-4 py-4">
            <NavLinks className="flex flex-col gap-4" onClick={() => setIsMenuOpen(false)} />
            <div className="mt-4 flex justify-center">
              <img 
                src="/lovable-uploads/9e1720cf-2703-4074-b563-bd64cd03fa7a.png" 
                alt="Fusion Frames Logo" 
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ className, onClick }) => (
  <div className={cn("text-white", className)}>
    <Link 
      to="/" 
      className="hover:text-cyan transition-colors duration-200 relative group" 
      onClick={onClick}
    >
      Home
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan group-hover:w-full transition-all duration-300"></span>
    </Link>
    <Link 
      to="/services" 
      className="hover:text-cyan transition-colors duration-200 relative group" 
      onClick={onClick}
    >
      Services
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan group-hover:w-full transition-all duration-300"></span>
    </Link>
    <Link 
      to="/contact" 
      className="hover:text-cyan transition-colors duration-200 relative group" 
      onClick={onClick}
    >
      Contact
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan group-hover:w-full transition-all duration-300"></span>
    </Link>
  </div>
);

export default Navbar;
