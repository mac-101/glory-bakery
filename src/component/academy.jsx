import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const AcademySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const filmstripRef = useRef(null);
  const cardRefs = useRef([]);
  const isScrollingRef = useRef(false);

  const academyItems = [
    {
      image: "https://images.unsplash.com/photo-1677840147155-f2c28507fc76?w=800&auto=format&fit=crop",
      sentence: "Hands-on instruction limited to six students per session"
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1683707120428-8893fe258de8?w=800&auto=format&fit=crop",
      sentence: "From ingredient chemistry to structural engineering"
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1687904384427-d5e770bd644f?w=800&auto=format&fit=crop",
      sentence: "Learn the techniques behind our award-winning cakes"
    },
    {
      image: "https://images.unsplash.com/photo-1595144780677-6d0b5abbd089?w=800&auto=format&fit=crop",
      sentence: "Graduate with a recipe vault and ongoing mentorship"
    }
  ];

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile: Update active index based on scroll position
  useEffect(() => {
    if (!isMobile) return;

    const container = filmstripRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isScrollingRef.current) return;
      
      requestAnimationFrame(() => {
        const cardElements = cardRefs.current.filter(el => el);
        if (cardElements.length === 0) return;

        const containerRect = container.getBoundingClientRect();
        const centerPoint = containerRect.top + containerRect.height / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        cardElements.forEach((card, idx) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.top + cardRect.height / 2;
          const distance = Math.abs(centerPoint - cardCenter);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = idx;
          }
        });

        if (closestIndex !== activeIndex) {
          setActiveIndex(closestIndex);
        }
      });
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isMobile, activeIndex]);

  // Desktop: scroll active photo into view
  useEffect(() => {
    if (isMobile) return;
    if (filmstripRef.current && cardRefs.current[activeIndex]) {
      const container = filmstripRef.current;
      const activeCard = cardRefs.current[activeIndex];
      if (activeCard) {
        const scrollLeft = activeCard.offsetLeft - container.offsetWidth / 2 + activeCard.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeIndex, isMobile]);

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? academyItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === academyItems.length - 1 ? 0 : prev + 1));
  };

  // Get scale for mobile (centered card is largest)
  const getMobileCardScale = (index) => {
    const distance = Math.abs(index - activeIndex);
    if (distance === 0) return 1.05;
    if (distance === 1) return 0.95;
    if (distance === 2) return 0.85;
    return 0.75;
  };

  // Get opacity for mobile
  const getMobileCardOpacity = (index) => {
    const distance = Math.abs(index - activeIndex);
    if (distance === 0) return 1;
    if (distance === 1) return 0.6;
    return 0.3;
  };

  return (
    <section id="academy" className="relative bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs tracking-[0.2em] text-amber-700 uppercase font-mono mb-3 block">
            The Academy
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-950 tracking-tight mb-4"
            style={{ fontFamily: "'Playfair Display', 'Bodoni MT', serif" }}
          >
            Pass the Torch
          </h2>
          <p className="text-stone-500 text-base font-light italic">
            Not a class. A craft apprenticeship.
          </p>
        </div>

        {/* DESKTOP: Horizontal Filmstrip */}
        {!isMobile && (
          <div className="relative mb-16 group">
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{ borderRadius: '2px' }}
            >
              <ChevronLeft className="w-6 h-6 text-stone-700" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{ borderRadius: '2px' }}
            >
              <ChevronRight className="w-6 h-6 text-stone-700" />
            </button>

            <div
              ref={filmstripRef}
              className="overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: 'none' }}
            >
              <div className="flex gap-4 px-12 py-8 min-w-max">
                {academyItems.map((item, idx) => (
                  <div
                    key={idx}
                    ref={el => cardRefs.current[idx] = el}
                    onClick={() => setActiveIndex(idx)}
                    className={`cursor-pointer transition-all duration-500 ease-out flex-shrink-0 ${
                      idx === activeIndex ? 'shadow-2xl border-stone-400' : 'opacity-50 hover:opacity-70'
                    }`}
                    style={{
                      width: '260px',
                      transition: 'all 0.4s ease-out',
                      border: '1px solid',
                      borderColor: idx === activeIndex ? '#d6d3d1' : '#e7e5e4',
                      transform: idx === activeIndex ? 'scale(1.1)' : 'scale(0.9)'
                    }}
                  >
                    <div className="relative bg-white">
                      <img
                        src={item.image}
                        alt={`Academy ${idx + 1}`}
                        className="w-full h-[350px] object-cover block"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-8 max-w-2xl mx-auto">
              <p
                className="text-stone-800 text-xl md:text-2xl leading-relaxed font-serif italic transition-all duration-300"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {academyItems[activeIndex].sentence}
              </p>
            </div>
          </div>
        )}

        {/* MOBILE: Vertical Filmstrip (like desktop but stacked) */}
        {isMobile && (
          <div className="relative mb-16">
            <div
              ref={filmstripRef}
              className="h-[600px] overflow-y-auto scroll-smooth"
              style={{ scrollbarWidth: 'thin' }}
            >
              <div className="flex flex-col gap-6 py-8 px-4">
                {academyItems.map((item, idx) => {
                  const scale = getMobileCardScale(idx);
                  const opacity = getMobileCardOpacity(idx);
                  
                  return (
                    <div
                      key={idx}
                      ref={el => cardRefs.current[idx] = el}
                      className="transition-all duration-500 ease-out mx-auto"
                      style={{
                        width: '100%',
                        maxWidth: '320px',
                        transition: 'all 0.4s ease-out',
                        border: '1px solid',
                        borderColor: idx === activeIndex ? '#d6d3d1' : '#e7e5e4',
                        transform: `scale(${scale})`,
                        opacity: opacity,
                        backgroundColor: 'white'
                      }}
                    >
                      <div className="relative bg-white">
                        <img
                          src={item.image}
                          alt={`Academy ${idx + 1}`}
                          className="w-full h-[280px] object-cover block"
                        />
                      </div>
                      {/* Text INSIDE the card */}
                      <div className="p-4 text-center">
                        <p
                          className="text-stone-800 text-base leading-relaxed font-serif italic"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {item.sentence}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Stat Line - Fixed */}
        <div className="mt-16 mb-12 text-center">
          <div className="inline-flex flex-col items-center">
            <div className="w-12 h-px bg-amber-300 mb-6" />
            <p className="text-stone-500 text-sm tracking-[0.3em] uppercase font-mono">
              12 SESSIONS PER YEAR • 6 STUDENTS MAXIMUM • 1 MASTER BAKER
            </p>
            <div className="w-12 h-px bg-amber-300 mt-6" />
          </div>
        </div>

        {/* Who This Is For - Fixed */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <p className="text-stone-600 text-base font-light leading-relaxed">
            For home bakers ready to go professional. For pastry chefs refining their edge.
            For anyone who believes baking is architecture you can eat.
          </p>
        </div>

        {/* Luxury CTA - Fixed */}
        <div className="text-center">
          <button className="group inline-flex items-center gap-3 border-b border-stone-400 pb-1.5 hover:border-amber-600 transition-all duration-300">
            <span
              className="text-stone-800 text-sm uppercase tracking-[0.2em] font-medium group-hover:text-amber-700 transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Inquire About the Academy
            </span>
            <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-amber-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default AcademySection;