import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ArrowLeft } from 'lucide-react';

// Example array of your premium products
const galleryItems = [
  {
    id: 1,
    title: "The Duchess Rose",
    category: "Three-tier fondant mastery",
    image: "https://images.unsplash.com/photo-1659401083689-240a4f511a76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8THV4dXJ5JTIwbWluaW1hbGlzdCUyMHdlZGRpbmclMjBjYWtlfGVufDB8fDB8fHww",
    span: "md:row-span-3", // Tall vertical item
    description: "An exquisite three-tier fondant masterpiece featuring hand-painted rose details and edible gold leaf accents. Perfect for elegant celebrations."
  },
  {
    id: 2,
    title: "Golden Croissants",
    category: "Laminated French pastry",
    image: "https://images.unsplash.com/photo-1726950189914-8fe1016eb9c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXJ0aXNhbmFsJTIwRnJlbmNoJTIwcGFzdHJ5JTIwY2xvc2UlMjB1cHxlbnwwfHwwfHx8MA%3D%3D",
    span: "", // Standard item
    description: "Perfectly laminated French croissants with a golden, flaky exterior and buttery interior. A timeless French classic."
  },
  {
    id: 3,
    title: "The Autumn Gala",
    category: "Custom catering display",
    image: "https://plus.unsplash.com/premium_photo-1687904384427-d5e770bd644f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJha2luZyUyMG1hc3RlcmNsYXNzJTIwYWVzdGhldGljfGVufDB8fDB8fHww",
    span: "md:col-span-2", // Wide horizontal item
    description: "A stunning catering display featuring seasonal flavors and artisanal design. Perfect for upscale events and celebrations."
  },
  {
    id: 4,
    title: "Velvet Amber",
    category: "Celebration drip cake",
    image: "https://plus.unsplash.com/premium_photo-1663839412026-51a44cfadfb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2VsZWJyYXRpb24tY2FrZS5qcGd8ZW58MHx8MHx8fDA%3D",
    span: "", // Tall vertical item
    description: "A luxurious drip cake with velvet texture and amber accents. Celebrate in style with this show-stopping creation."
  },
  {
    id: 5,
    title: "The Duchess Rose",
    category: "Three-tier fondant mastery",
    image: "https://images.unsplash.com/photo-1659401083689-240a4f511a76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8THV4dXJ5JTIwbWluaW1hbGlzdCUyMHdlZGRpbmclMjBjYWtlfGVufDB8fDB8fHww",
    span: "md:row-span-3", // Tall vertical item
    description: "An exquisite three-tier fondant masterpiece featuring hand-painted rose details and edible gold leaf accents. Perfect for elegant celebrations."
  },
  {
    id: 6,
    title: "Golden Croissants",
    category: "Laminated French pastry",
    image: "https://images.unsplash.com/photo-1726950189914-8fe1016eb9c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXJ0aXNhbmFsJTIwRnJlbmNoJTIwcGFzdHJ5JTIwY2xvc2UlMjB1cHxlbnwwfHwwfHx8MA%3D%3D",
    span: "", // Standard item
    description: "Perfectly laminated French croissants with a golden, flaky exterior and buttery interior. A timeless French classic."
  },
  {
    id: 7,
    title: "The Autumn Gala",
    category: "Custom catering display",
    image: "https://plus.unsplash.com/premium_photo-1687904384427-d5e770bd644f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJha2luZyUyMG1hc3RlcmNsYXNzJTIwYWVzdGhldGljfGVufDB8fDB8fHww",
    span: "md:col-span-2", // Wide horizontal item
    description: "A stunning catering display featuring seasonal flavors and artisanal design. Perfect for upscale events and celebrations."
  },
  {
    id: 8,
    title: "Velvet Amber",
    category: "Celebration drip cake",
    image: "https://plus.unsplash.com/premium_photo-1663839412026-51a44cfadfb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2VsZWJyYXRpb24tY2FrZS5qcGd8ZW58MHx8MHx8fDA%3D",
    span: "md:row-span-3", // Tall vertical item
    description: "A luxurious drip cake with velvet texture and amber accents. Celebrate in style with this show-stopping creation."
  }
];

// Lightbox Component
function Lightbox({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-bounce-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all z-60 hover:scale-110 hover:rotate-90 transform duration-300"
        >
          <X className="w-6 h-6 text-stone-900" />
        </button>

        {/* Image */}
        <div className="relative w-full h-96 overflow-hidden bg-stone-100">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover animate-zoom-in"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          <h2 className="font-serif text-3xl text-stone-950 mb-2 animate-slide-left animation-delay-100">
            {item.title}
          </h2>
          <p className="text-amber-700 text-sm tracking-widest uppercase font-medium mb-4 animate-slide-left animation-delay-200">
            {item.category}
          </p>

          <p className="text-stone-600 text-base leading-relaxed mb-8 animate-fade-in animation-delay-300">
            {item.description}
          </p>

          {/* Inquire Button */}
          <button className="w-full bg-amber-800 hover:bg-amber-900 text-white font-serif py-3 rounded-md tracking-widest uppercase text-sm transition-all hover:shadow-lg hover:scale-105 transform duration-200 animate-slide-right animation-delay-400">
            Inquire About This Cake
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="bg-[#FFFDF9] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <div>
          {/* Back Button */}
          <div className="mb-8">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-stone-700 bg-white  border-stone-200 hover:bg-stone-50 px-4 py-2 rounded-full  transition duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>

          {/* Section Header */}
          <div className="text-center mb-12 animate-on-display">
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 mb-4 animation-delay-100">
              The Gallery Lookbook
            </h2>
            <p className="font-sans text-neutral-500 tracking-wide text-sm max-w-md mx-auto animation-delay-200">
              A visual curation of our finest artisanal bakes and custom commissions.
            </p>
          </div>
        </div>

        {/* The Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-6">
          {galleryItems.map((item, index) => (
            <figure
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`relative overflow-hidden rounded-sm cursor-pointer group animate-zoom-in hover:animate-glow transform ${item.span}`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Image with crisp scaling transition */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-125 group-hover:rotate-2"
              />

              {/* Luxury Gradient Overlay on Hover */}
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out">
                <h3 className="font-serif text-xl text-[#FFFDF9] mb-1 animate-slide-left">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-[#D4AF37] tracking-wider uppercase animate-slide-right animation-delay-100">
                  {item.category}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />


      </div>
    </section>
  );
}