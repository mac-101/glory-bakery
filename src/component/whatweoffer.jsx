import React from 'react';
import { Sparkles, Award, GraduationCap, ArrowUpRight } from 'lucide-react';

const WhatWeOffer = () => {
  return (
    <section id="services" className="relative bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Split Container */}
        <div className="flex flex-col lg:flex-row min-h-screen gap-12 lg:gap-16 py-20">

          {/* LEFT SIDE: The Sticky Visual Frame (Desktop: Locked / Mobile: Stacks naturally) */}
          <div className="w-full lg:w-1/2 lg:h-[75vh] lg:sticky lg:top-24 flex flex-col justify-between">

            {/* Header Content placed on the left to set up the editorial feel */}
            <div className="mb-8 lg:mb-0 animate-on-display">
              <span className="text-xs tracking-widest text-amber-800 uppercase font-semibold animation-delay-100">What We Do</span>
              <h2
                className="text-3xl md:text-5xl font-serif text-stone-950 tracking-tight mt-2 animation-delay-200"
                style={{ fontFamily: "'Playfair Display', 'Bodoni MT', serif" }}
              >
                Our Creations & <br />Masterclasses
              </h2>
              <p className="text-stone-600 font-light mt-4 max-w-md text-sm md:text-base animation-delay-300">
                Explore the dimensions of Glory Bakery. We alternate between crafting high-art confections and passing the torch to the next generation of bakers.
              </p>
            </div>

            {/* Dynamic Visual Area (For simplicity and smooth scrolling, the preview images flow adjacent to the text context) */}
            <div className="hidden lg:block w-full h-[45vh] rounded-xl overflow-hidden shadow-2xl relative bg-stone-200 animate-on-display animation-delay-300">
              <img
                src="https://images.unsplash.com/photo-1683435844308-b757f5ca64b1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Glory Bakery dynamic preview showcase"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:rotate-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 to-transparent pointer-events-none" />
            </div>

          </div>

          {/* RIGHT SIDE: The Scrolling Content Rows */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-16 md:space-y-24">

            {/* Row 1: Personal Cakes */}
            <div className="group border-b border-stone-200 pb-12 animate-on-display animation-delay-400">
              {/* Mobile Image Fallback */}
              <div className=" w-full h-64 rounded-xl overflow-hidden mb-6 animate-float">
                <img src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Personal custom cakes" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>

              <div className="flex items-center gap-3 text-amber-800 mb-4">
                <Sparkles className="w-5 h-5" />
                <span className="text-xs uppercase font-semibold tracking-wider">01 / Curated Moments</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-stone-900 mb-4">Cakes for Personal Celebrations</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-6">
                Turn your private milestones into historical memories. Whether it is an intimate birthday, a golden anniversary, or a whimsical surprise party, we work directly with your vision to construct a center tile completely custom to your color palette and flavor preferences.
              </p>
              <button className="flex items-center gap-2 text-stone-900 font-medium text-sm group-hover:text-amber-800 transition-colors">
                <span>Inquire Personal Design</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Row 2: Event Cake Needs */}
            <div className="group border-b border-stone-200 pb-12 animate-on-display animation-delay-500">
              {/* Mobile Image Fallback */}
              <div className=" w-full h-64 rounded-xl overflow-hidden mb-6 animate-float animation-delay-200">
                <img src="https://plus.unsplash.com/premium_photo-1675720060105-ba50ca9e21a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGllcmVkJTIwbHV4dXJ5JTIwd2VkZGluZyUyMGNha2V8ZW58MHx8MHx8fDA%3D" alt="Event gala cakes" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>

              <div className="flex items-center gap-3 text-amber-800 mb-4 animate-slide-left animation-delay-500">
                <Award className="w-5 h-5 animate-spin-slow animation-delay-100" />
                <span className="text-xs uppercase font-semibold tracking-wider">02 / Structural Grandeur</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-stone-900 mb-4 animate-slide-left animation-delay-600">Cover Event Cake Needs</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-6 animate-fade-in animation-delay-600">
                Grand halls and massive corporate galas demand presence. Our team specializes in high-tier event engineering, handling extreme multi-tier structural design, secure on-site transportation logistics, and coordination with luxury event decorators to match themes precisely.
              </p>
              <button className="flex items-center gap-2 text-stone-900 font-medium text-sm group-hover:text-amber-800 transition-colors hover:scale-105 transform duration-200 animate-slide-right animation-delay-700">
                <span>Book Event Consultations</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
            
          </div>

          {/* Row 2: Event Cake Needs */}


          {/* Row 3: Baking Training with the 4-Picture Grid Wrap */}
          {/* <div className="group pb-12">
              
              <div className="w-full grid grid-cols-2 gap-3 mb-8">
                <div className="h-32 sm:h-40 rounded-lg overflow-hidden bg-stone-200 shadow-sm">
                  <img src="https://images.unsplash.com/photo-1677840147155-f2c28507fc76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FrZSUyMGRlY29yYXRpb24lMjBwaXBpbmclMjBoYW5kcyUyMGNsb3NlJTIwdXB8ZW58MHx8MHx8fDA%3D" alt="Piping technique close-up" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="h-32 sm:h-40 rounded-lg overflow-hidden bg-stone-200 shadow-sm">
                  <img src="https://plus.unsplash.com/premium_photo-1683707120428-8893fe258de8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFraW5nJTIwbWFzdGVyY2xhc3MlMjBraXRjaGVuJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D" alt="Active student instruction" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="h-32 sm:h-40 rounded-lg overflow-hidden bg-stone-200 shadow-sm">
                  <img src="https://plus.unsplash.com/premium_photo-1687904384427-d5e770bd644f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFrZXIlMjB0YWtpbmclMjBjYWtlJTIwb3V0JTIwb2YlMjBvdmVufGVufDB8fDB8fHww" alt="Sponge prep extraction" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="h-32 sm:h-40 rounded-lg overflow-hidden bg-stone-200 shadow-sm">
                  <img src="https://images.unsplash.com/photo-1595144780677-6d0b5abbd089?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGF0aXNzZXJpZSUyMGNha2VzJTIwZGlzcGxheSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D" alt="Completed masterclass gallery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

              <div className="flex items-center gap-3 text-amber-800 mb-4">
                <GraduationCap className="w-5 h-5" />
                <span className="text-xs uppercase font-semibold tracking-wider">03 / The Academy</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-stone-900 mb-4">Baking Training & Masterclasses</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-6">
                Demystify the elite art of artisanal baking. From learning crucial ingredient chemistry down to refining complex piping borders, our structured training programs offer complete, hands-on workstations managed directly by our team leader and expert bakers.
              </p>
              <button className="flex items-center gap-2 text-stone-900 font-medium text-sm group-hover:text-amber-800 transition-colors">
                <span>View Academy Class Schedules</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div> */}

        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;