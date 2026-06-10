import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const CarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with the 3rd card centered

  // 6 Sample Cake Designs
  const cakes = [
    { id: 1, title: "The Florence Blossom", category: "Personal Custom", img: "https://images.unsplash.com/photo-1678473289849-34a3d765dd13?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, title: "Venetian Gold Tier", category: "Event Luxury", img: "https://images.unsplash.com/photo-1630801059487-a75e2769819f?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, title: "Tuscan Marble Craft", category: "Bespoke Wedding", img: "https://images.unsplash.com/photo-1616690710400-a16d146927c5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, title: "Milanese Modernist", category: "Corporate Event", img: "https://plus.unsplash.com/premium_photo-1664205766264-b6c393604933?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, title: "The Sicily Berry Rustic", category: "Personal Milestone", img: "https://images.unsplash.com/photo-1693060236785-206a880f8573?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 6, title: "Roman Velvet Masterpiece", category: "Artisanal Special", img: "https://images.unsplash.com/photo-1671686400734-d9d0a4934f5a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? cakes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === cakes.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="p-20 bg-stone-100 overflow-hidden flex flex-col justify-center">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 
          className="text-3xl md:text-5xl font-serif text-stone-950 tracking-wide"
          style={{ fontFamily: "'Playfair Display', 'Bodoni MT', serif" }}
        >
          Our Signature Gallery
        </h2>
        <div className="w-16 h-0.5 bg-amber-800 mx-auto mt-4" />
      </div>

      {/* 3D Focus Carousel Viewport Container */}
      <div className="relative w-full max-w-7xl mx-auto h-[60vh] lg:h-[80vh] flex items-center justify-center px-4">
        
        {/* Left Navigation Arrow */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 md:left-10 z-30 p-3 rounded-full bg-white/80 hover:bg-white text-stone-900 shadow-md backdrop-blur-sm transition-all hover:scale-105"
          aria-label="Previous Cake"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Card Track wrapper */}
        <div className="relative w-full h-full flex items-center justify-center">
          {cakes.map((cake, index) => {
            // Calculate relative positional offset for the 3D layout
            let offset = index - activeIndex;
            
            // Loop adjustment for infinite wrap-around feel
            if (offset < -2) offset += cakes.length;
            if (offset > 2) offset -= cakes.length;

            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;
            const isFarLeft = offset === -2;
            const isFarRight = offset === 2;

            // Strict visibility mapping
            const isVisible = isCenter || isLeft || isRight || isFarLeft || isFarRight;

            if (!isVisible) return null;

            return (
              <div
                key={cake.id}
                onClick={() => !isCenter && setActiveIndex(index)}
                className={`absolute w-[280px] sm:w-[320px] md:w-[360px] h-[60vh] lg:h-[80vh] rounded-xl overflow-hidden shadow-xl transition-all duration-500 ease-out cursor-pointer select-none origin-center
                  ${isCenter ? 'z-20 scale-100 animate-on-display animate-scale-up opacity-100' : ''}
                  ${isLeft ? 'z-10 -translate-x-[65%] sm:-translate-x-[75%] scale-85 opacity-60 bg-stone-950/20' : ''}
                  ${isRight ? 'z-10 translate-x-[65%] sm:translate-x-[75%] scale-85 opacity-60 bg-stone-950/20' : ''}
                  ${isFarLeft ? 'z-0 -translate-x-[120%] scale-70 opacity-30 pointer-events-none' : ''}
                  ${isFarRight ? 'z-0 translate-x-[120%] scale-70 opacity-30 pointer-events-none' : ''}
                `}
              >
                {/* Image Wrap */}
                <div className="relative w-full h-full group">
                  <img 
                    src={cake.img} 
                    alt={cake.title} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Subtle vignette/tint for non-focused items */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-stone-900/30 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-10" />
                  )}

                  {/* Elegant Text Overlay (Always visible on Center, visible on hover for side cards) */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent flex flex-col justify-end p-6 transition-all duration-300 ${
                    isCenter ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    <span className="text-xs tracking-widest text-amber-400 uppercase font-medium mb-1">
                      {cake.category}
                    </span>
                    <h3 
                      className="text-xl sm:text-2xl font-serif text-white tracking-wide leading-tight mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {cake.title}
                    </h3>
                    
                    {isCenter && (
                      <div className="flex items-center gap-2 text-stone-300 text-xs mt-1 animate-fade-in">
                        <Eye className="w-3.5 h-3.5 text-amber-400" />
                        <span>Click to expand view</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Navigation Arrow */}
        <button 
          onClick={handleNext}
          className="absolute right-4 md:right-10 z-30 p-3 rounded-full bg-white/80 hover:bg-white text-stone-900 shadow-md backdrop-blur-sm transition-all hover:scale-105"
          aria-label="Next Cake"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

      </div>
    </section>
  );
};

export default CarouselSection;