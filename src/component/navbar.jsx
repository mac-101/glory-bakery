import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Branding with Italian Style Serif Font */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="text-2xl font-serif tracking-wide text-amber-900 font-semibold"
              style={{ fontFamily: "'Playfair Display', 'Bodoni MT', serif" }}
            >
              Glory Bakery
            </a>
          </div>

          {/* Center: Core Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#gallery" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">Gallery</a>
            <a href="#services" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">What We Offer</a>
            <a href="#team" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">Our Team</a>
            <a href="#location" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">Find Us</a>
          </div>

          {/* Right: Action Buttons (CTAs) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-amber-800 text-amber-800 rounded-md hover:bg-amber-50 transition-colors font-medium text-sm">
              <img src="/api/placeholder/16/16" alt="" className="hidden" /> {/* Placeholder fallback */}
              <Calendar className="w-4 h-4" />
              Book Team
            </button>
            <button className="flex items-center gap-2 px-5 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-900 transition-colors shadow-sm font-medium text-sm">
              <ShoppingBag className="w-4 h-4" />
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4 shadow-xl flex flex-col">
          <a 
            href="#gallery" 
            onClick={() => setIsOpen(false)}
            className="text-gray-800 hover:text-amber-700 text-lg py-2 border-b border-gray-50"
          >
            Gallery
          </a>
          <a 
            href="#services" 
            onClick={() => setIsOpen(false)}
            className="text-gray-800 hover:text-amber-700 text-lg py-2 border-b border-gray-50"
          >
            What We Offer
          </a>
          <a 
            href="#team" 
            onClick={() => setIsOpen(false)}
            className="text-gray-800 hover:text-amber-700 text-lg py-2 border-b border-gray-50"
          >
            Our Team
          </a>
          <a 
            href="#location" 
            onClick={() => setIsOpen(false)}
            className="text-gray-800 hover:text-amber-700 text-lg py-2 pb-4"
          >
            Find Us
          </a>
          
          {/* Mobile CTAs stacked */}
          <div className="pt-2 flex flex-col space-y-3">
            <button className="w-full flex items-center justify-center gap-2 py-3 border border-amber-800 text-amber-800 rounded-md font-medium">
              <Calendar className="w-5 h-5" />
              Book Team
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-amber-800 text-white rounded-md font-medium shadow-md">
              <ShoppingBag className="w-5 h-5" />
              Order Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;