import React from 'react';
import { Phone, MapPin, User, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 px-6 bg-slate-900 overflow-hidden" id="contacts">
      
      {/* Subtle Background pattern and ambient glow effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        
        {/* Pulsing Admissions Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-amber-400 text-sm font-bold mb-8 uppercase tracking-wider backdrop-blur-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
          Admissions Open for New Batch
        </div>

        {/* Main Heading & Subtext */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
          Ready to Excel in Physics?
        </h2>
        
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Don't leave your board or competitive exam scores to chance. Join Kirat Sir today to build strong concepts, master quick-solving tricks, and achieve your highest potential.
        </p>

        {/* The Big Glowing Call Button */}
        <a 
          href="tel:+919911525359"
          className="group inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 text-xl font-bold px-8 py-4 rounded-2xl shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(245,158,11,0.7)] active:scale-95"
        >
          <div className="bg-slate-900/10 p-2 rounded-lg group-hover:bg-slate-900/20 transition-colors">
            <Phone className="w-6 h-6" />
          </div>
          Call Now: 9911525359
          <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Trust Footer (Name & Location from Flyer) */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-center gap-6 text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-indigo-400" />
            <span>Prabh Kirat Singh</span>
          </div>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-700"></span>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-indigo-400" />
            <span>Chandigarh, India</span>
          </div>
        </div>

      </div>
    </section>
  );
}