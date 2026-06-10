import React from 'react';
import { ShoppingBag, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[66vh] w-full flex items-center justify-center bg-stone-50 overflow-hidden mt-16">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-10 left-10 w-72 h-72 bg-amber-100 rounded-full filter blur-3xl" />
        <div className="absolute bottom-5 right-10 w-96 h-96 bg-orange-50 rounded-full filter blur-3xl" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center h-full">
        
        {/* Hero Text (Italian Style Font) */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 tracking-tight mb-4"
          style={{ fontFamily: "'Playfair Display', 'Bodoni MT', serif" }}
        >
          Baked from <br />
          <span className="italic text-amber-800 font-normal">your vision</span>
        </h1>

        {/* Supporting Subtext */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-stone-600 font-light leading-relaxed mb-8">
          From intimate personal milestones to grand event centerpieces, we translate your imagination into breathtaking, delicious reality.
        </p>

        {/* Dual Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-md shadow-md transition-all duration-200 transform hover:-translate-y-0.5 font-medium text-sm sm:text-base">
            <ShoppingBag className="w-5 h-5" />
            Order Custom Cake
          </button>

          <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-4 py-2 border-2 border-stone-800 hover:bg-stone-900 hover:text-white text-stone-900 rounded-md transition-all duration-200 transform hover:-translate-y-0.5 font-medium text-sm sm:text-base">
            <Users className="w-5 h-5" />
            Book Our Team
          </button>
          
        </div>

      </div>
    </section>
  );
};

export default Hero;