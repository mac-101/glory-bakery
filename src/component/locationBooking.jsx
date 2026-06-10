import React, { useState } from 'react';
import { MapPin, Clock, Phone, Upload, Calendar, Send, ClipboardEdit, Users, X } from 'lucide-react';

const LocationAndBooking = () => {
  const [activeTab, setActiveTab] = useState(null); // null means form is hidden at initial state

  return (
    <section id="location" className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT SIDE: Location & Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs tracking-widest text-amber-800 uppercase font-semibold">Visit the Gallery</span>
              <h2 
                className="text-3xl md:text-5xl font-serif text-stone-950 tracking-tight mt-2 mb-6"
                style={{ fontFamily: "'Playfair Display', 'Bodoni MT', serif" }}
              >
                Where to Find Us
              </h2>
              
              <div className="space-y-6 text-stone-700 font-light">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-amber-800 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-stone-900">Glory Bakery HQ</h4>
                    <p className="text-sm mt-0.5">Via della Moscova, 24, 20121 Milano MI, Italy</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-amber-800 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-stone-900">Operating Hours</h4>
                    <p className="text-sm mt-0.5">Tuesday – Saturday: 09:00 – 19:00</p>
                    <p className="text-sm">Sunday: 10:00 – 16:00 <span className="text-amber-800 italic">(Mondays Closed)</span></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-amber-800 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-stone-900">Direct Line</h4>
                    <p className="text-sm mt-0.5">+39 02 1234 5678</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Element */}
            <div className="mt-8 h-64 w-full bg-stone-200 rounded-xl overflow-hidden relative shadow-inner border border-stone-300/60">
              <img 
                src="https://media.istockphoto.com/id/2227049093/photo/3d-illustration-of-a-top-view-of-tokyo-japan.webp?a=1&b=1&s=612x612&w=0&k=20&c=n3p8tHQt9f681knrPQo25fkZy4bY7VBR8QdgPuPkFhc=" 
                alt="Map visualization placeholder" 
                className="w-full h-full object-cover filter brightness-95 contrast-105" 
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-md shadow-sm text-xs font-medium text-stone-800 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-800" />
                <span>Open in Google Maps</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Presentation Area / Dynamic Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl  border border-stone-200 flex flex-col justify-center min-h-[450px] relative overflow-hidden transition-all duration-300">
            
            {activeTab === null ? (
              /* INITIAL HIDDEN STATE: Welcoming Portal with Two Entry Actions */
              <div className="text-center py-8 animate-fade-in flex flex-col items-center justify-center">
                <span className="text-xs tracking-widest text-amber-800 uppercase font-semibold mb-2">Inquiries & Consultations</span>
                <h3 
                  className="text-2xl sm:text-3xl font-serif text-stone-900 mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Ready to collaborate?
                </h3>
                <p className="text-stone-600 font-light max-w-sm text-sm sm:text-base mb-8 leading-relaxed">
                  Select an action below to detail your bespoke cake requirements or setup a structural design consult with our artisans.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                  <button 
                    onClick={() => setActiveTab('order')}
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 border border-amber-800 text-amber-800 rounded-xl font-medium hover:bg-amber-50 transition-all duration-200 shadow-sm"
                  >
                    <ClipboardEdit className="w-5 h-5" />
                    <span>Place an Order</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('book')}
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-stone-900 text-white rounded-xl font-medium hover:bg-stone-800 transition-all duration-200 shadow-md"
                  >
                    <Users className="w-5 h-5 text-amber-400" />
                    <span>Book the Team</span>
                  </button>
                </div>
              </div>
            ) : (
              /* ACTIVE STATE: Form Renders With Close Button */
              <div className="animate-fade-in h-full flex flex-col justify-between">
                
                {/* Close Form Link / Tab Controls header combo */}
                <div className="flex items-center justify-between border-b border-stone-200 mb-6 pb-2">
                  <div className="flex gap-6">
                    <button
                      onClick={() => setActiveTab('order')}
                      className={`pb-3 font-medium text-sm sm:text-base border-b-2 transition-all ${
                        activeTab === 'order' ? 'border-amber-800 text-amber-800 font-semibold' : 'border-transparent text-stone-400'
                      }`}
                    >
                      Place an Order
                    </button>
                    <button
                      onClick={() => setActiveTab('book')}
                      className={`pb-3 font-medium text-sm sm:text-base border-b-2 transition-all ${
                        activeTab === 'book' ? 'border-amber-800 text-amber-800 font-semibold' : 'border-transparent text-stone-400'
                      }`}
                    >
                      Book the Team
                    </button>
                  </div>
                  
                  {/* Close Action */}
                  <button 
                    onClick={() => setActiveTab(null)}
                    className="p-1.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors"
                    aria-label="Back to options"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Form Elements */}
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-600 mb-1">Your Name</label>
                      <input type="text" className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-800 bg-stone-50/50 text-sm" placeholder="Francesca" required />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-600 mb-1">Email Address</label>
                      <input type="email" className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-800 bg-stone-50/50 text-sm" placeholder="name@domain.com" required />
                    </div>
                  </div>

                  {activeTab === 'order' ? (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
                        <div>
                          <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-600 mb-1">Event Date</label>
                          <input type="date" className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-800 bg-stone-50/50 text-sm text-stone-500" required />
                        </div>
                        <div>
                          <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-600 mb-1">Estimated Guests</label>
                          <input type="number" className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-800 bg-stone-50/50 text-sm" placeholder="e.g. 50" required />
                        </div>
                      </div>

                      <div className="animate-fade-in">
                        <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-600 mb-1">Upload Your Vision (Inspiration Photo)</label>
                        <div className="border-2 border-dashed border-stone-200 hover:border-amber-800 rounded-lg p-4 text-center cursor-pointer bg-stone-50/50 transition-colors group">
                          <Upload className="w-5 h-5 text-stone-400 group-hover:text-amber-800 mx-auto mb-1 transition-colors" />
                          <span className="text-[11px] text-stone-500 block">Drop your design reference sketch here</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
                      <div>
                        <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-600 mb-1">Consultation Type</label>
                        <select className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-800 bg-stone-50/50 text-sm text-stone-600" required>
                          <option value="wedding">Wedding Cake Design</option>
                          <option value="corporate">Large Corporate Event</option>
                          <option value="training">Academy & Masterclasses</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-600 mb-1">Preferred Date</label>
                        <input type="date" className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-800 bg-stone-50/50 text-sm text-stone-500" required>
                        </input>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-600 mb-1">Additional Notes</label>
                    <textarea rows="2" className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-800 bg-stone-50/50 text-sm resize-none" placeholder="Provide extra design or context notes..." />
                  </div>

                  <button type="submit" className="w-full flex items-center justify-center gap-2 py-2.5 bg-amber-800 hover:bg-amber-900 text-white font-medium text-sm rounded-lg transition-colors shadow-sm">
                    {activeTab === 'order' ? (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Cake Vision Order</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Request Team Consultation</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default LocationAndBooking;