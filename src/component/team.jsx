import React from 'react';
import { Mail, CameraIcon, Sparkles } from 'lucide-react';

const MeetTheTeam = () => {
    const teamLeader = {
        name: "Francesca Rossi",
        role: "Founder & Master Pastry Architect",
        quote: "A cake shouldn't just look like art; it must taste like an unforgettable memory. We bake with intention, precision, and passion.",
        img: "https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlZ2FudCUyMGZlbWFsZSUyMGNoZWYlMjBwb3J0cmFpdCUyMG9yJTIwcHJvZmVzc2lvbmFsJTIwcGFzdHJ5JTIwY2hlZiUyMGx1eHVyeXxlbnwwfHwwfHx8MA%3D%3D" // Unsplash: "elegant female chef portrait"
    };

    const bakers = [
        {
            id: 1,
            name: "Marco Biagi",
            role: "Lead Sugar Sculptor",
            specialty: "Sugar Floristry & Fine Piping",
            img: "https://plus.unsplash.com/premium_photo-1664474751742-8ac75ae2520e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFzdHJ5JTIwY2hlZiUyMGRlY29yYXRpbmclMjBjbG9zZSUyMHVwJTIwb3IlMjBtYWxlJTIwY2hlZiUyMHNtaWxpbmclMjBraXRjaGVufGVufDB8fDB8fHww" // Unsplash: "male professional baker"
        },
        {
            id: 2,
            name: "Alessia Naoni",
            role: "Flavor Chemist",
            specialty: "Bespoke Infusions & Fillings",
            img: "https://plus.unsplash.com/premium_photo-1681483867977-a2d9c24ee63b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwYmFrZXIlMjBtaXhpbmclMjBpbmdyZWRpZW50cyUyMG9yJTIwYXJ0aXNhbiUyMGNvb2slMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D" // Unsplash: "female pastry chef kitchen"
        },
        {
            id: 3,
            name: "Luca Thorne",
            role: "Event Logistics Baker",
            specialty: "Structural Tier Engineering",
            img: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmlkZW50JTIwbWFsZSUyMHBhc3RyeSUyMGNoZWZ8ZW58MHx8MHx8fDA%3D" // Unsplash: "smiling male chef portrait"
        }
    ];

    return (
        <section id="team" className="py-24 bg-stone-900 text-stone-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-16 text-center lg:text-left">
                    <span className="text-xs tracking-widest text-amber-400 uppercase font-semibold">The Artisans</span>
                    <h2
                        className="text-3xl md:text-5xl font-serif tracking-tight mt-2 text-white"
                        style={{ fontFamily: "'Playfair Display', 'Bodoni MT', serif" }}
                    >
                        Meet the Masters
                    </h2>
                    <div className="w-16 h-0.5 bg-amber-500 mt-4 mx-auto lg:mx-0" />
                </div>

                {/* Master Asymmetrical Grid Wrapper */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">

                    {/* LEFT COLUMN: Dominant Team Leader Frame (Spans 5/12 of the grid) */}
                    <div className="lg:col-span-5 group">
                        <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-2xl bg-stone-800 mb-6">
                            <img
                                src={teamLeader.img}
                                alt={teamLeader.name}
                                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

                            {/* Floating Quote Badge */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-stone-950/80 backdrop-blur-md rounded-lg border border-stone-800">
                                <Sparkles className="w-5 h-5 text-amber-400 mb-2" />
                                <p className="text-sm font-light italic text-stone-300 leading-relaxed">
                                    "{teamLeader.quote}"
                                </p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-serif text-white tracking-wide">{teamLeader.name}</h3>
                        <p className="text-amber-400 text-sm font-medium tracking-wide mt-1">{teamLeader.role}</p>
                    </div>

                    {/* RIGHT COLUMN: Tight Horizontal Grid for the 3 Bakers (Spans 7/12 of the grid) */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-8 lg:space-y-0 lg:pt-4">
                        <div className="flex flex-col justify-center h-full  lg:pt-4">

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                                {bakers.map((baker) => (
                                    <div key={baker.id} className="bg-stone-950/40 p-4 rounded-xl border border-stone-800/60 hover:border-amber-500/30 transition-all duration-300 group flex flex-col">

                                        {/* Tight Square Image Wrapper */}
                                        <div className="aspect-square w-full rounded-lg overflow-hidden mb-4 bg-stone-800">
                                            <img
                                                src={baker.img}
                                                alt={baker.name}
                                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Card Info */}
                                        <div className="flex-grow">
                                            <h4 className="text-lg font-serif text-stone-100 tracking-wide group-hover:text-amber-400 transition-colors">
                                                {baker.name}
                                            </h4>
                                            <p className="text-xs text-stone-400 font-medium mt-0.5">{baker.role}</p>

                                            <div className="mt-3 pt-3 border-t border-stone-800/80">
                                                <span className="text-[11px] uppercase tracking-wider text-amber-500/80 font-semibold block">Specialty:</span>
                                                <p className="text-xs text-stone-300 font-light mt-0.5">{baker.specialty}</p>
                                            </div>
                                        </div>

                                        {/* Social/Contact Strip */}
                                        <div className="flex items-center gap-3 mt-4 pt-2 text-stone-500 group-hover:text-stone-400 transition-colors">
                                            <button aria-label="CamerIcon profile" className="hover:text-amber-400 transition-colors">
                                                <img src="/api/placeholder/14/14" alt="" className="hidden" /> {/* Fallback hook */}
                                                <CameraIcon className="w-4 h-4" />
                                            </button>
                                            <button aria-label="Email contact" className="hover:text-amber-400 transition-colors">
                                                <Mail className="w-4 h-4" />
                                            </button>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

                            {/* Micro Context Footer Note to balance the row alignment layout */}
                            <div className="hidden lg:block border-l-2 border-amber-500/40 pl-4 mt-12 max-w-xl">
                                <p className="text-xs text-stone-400 font-light leading-relaxed">
                                    Our kitchen functions as a synchronized orchestra. Backed by collective decades of international patisserie training, each custom cake moves systematically through design, flavor infusion, structural molding, and final sugar articulation.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
        </section>
    );
};

export default MeetTheTeam;