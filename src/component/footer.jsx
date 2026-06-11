import React from 'react';
import { CameraIcon, ArrowUp, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative h-[70vh] w-full overflow-hidden bg-stone-950">
      
      {/* Background Image Container (Search Unsplash for: "aesthetic bakery flour counter dust" or "minimalist marble patisserie kitchen") */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMG1vb2R5JTIwa2l0Y2hlbiUyMG1hcmJsZSUyMHN1cmZhY2V8ZW58MHx8MHx8fDA%3D" 
          alt="Glory Bakery atmospheric background" 
          className="w-full h-full object-cover object-center opacity-25 filter contrast-125"
        />
        {/* Deep vignette gradients to ensure all text remains stark white and easily legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/60 to-stone-950" />
      </div>

      {/* Main Structural Content Grid */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-12 text-stone-300">
        
        {/* Top Segment */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Column (Spans 6/12) */}
          <div className="md:col-span-6 space-y-3 animate-fade-in">
            <h3 
              className="text-2xl sm:text-3xl font-serif text-white tracking-wide animation-delay-100"
              style={{ fontFamily: "'Playfair Display', 'Bodoni MT', serif" }}
            >
              Glory Bakery
            </h3>
            <p className="text-xs sm:text-sm font-light text-stone-400 max-w-sm leading-relaxed animation-delay-200">
              Bringing architectural custom cake blueprints and artisanal masterclasses into physical, mouthwatering dimensions.
            </p>
          </div>

          {/* Directory Navigation Links Column (Spans 3/12) */}
          <div className="md:col-span-3 flex flex-col space-y-2 animate-fade-in animation-delay-300">
            <span className="text-[10px] uppercase font-semibold tracking-widest text-amber-400 mb-1">Explore</span>
            <a href="#gallery" className="text-xs text-stone-300 hover:text-white transition-colors w-fit hover:translate-x-1 hover:scale-110 transform duration-200">The Signature Gallery</a>
            <a href="#services" className="text-xs text-stone-300 hover:text-white transition-colors w-fit hover:translate-x-1 hover:scale-110 transform duration-200">Creations & Classes</a>
            <a href="#team" className="text-xs text-stone-300 hover:text-white transition-colors w-fit hover:translate-x-1 hover:scale-110 transform duration-200">Meet the Artisans</a>
          </div>

          {/* Social Links Column (Spans 3/12) */}
          <div className="md:col-span-3 flex flex-col space-y-2">
            <span className="text-[10px] uppercase font-semibold tracking-widest text-amber-400 mb-1">Connect</span>
            <a href="#" className="flex items-center gap-2 text-xs text-stone-300 hover:text-white transition-colors w-fit">
              <CameraIcon className="w-3.5 h-3.5" />
              <span>@glorybakery_milano</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-xs text-stone-300 hover:text-white transition-colors w-fit">
              <Mail className="w-3.5 h-3.5" />
              <span>atelier@glorybakery.com</span>
            </a>
          </div>

        </div>

        {/* Bottom Metadata & Scroll Back Up Strip */}
        <div className="border-t border-stone-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Copyright details */}
          <div className="text-[11px] font-light text-stone-500 tracking-wide text-center sm:text-left">
            <span>© {new Date().getFullYear()} Glory Bakery S.r.l. All rights reserved. </span>
            <span className="hidden sm:inline-block mx-2 text-stone-700">|</span>
            <a href="#" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
          </div>

          {/* Premium Floating-effect Scroll Back to Top Action Button */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-stone-400 hover:text-white transition-all group"
            aria-label="Scroll back to top of the page"
          >
            <span>Back to Top</span>
            <div className="p-1.5 rounded-full bg-stone-900 border border-stone-800 group-hover:bg-amber-800 group-hover:border-amber-700 transition-all shadow-md">
              <ArrowUp className="w-3.5 h-3.5 text-stone-300 group-hover:text-white transition-colors" />
            </div>
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;