"use client";

import React, { useState } from "react";
import { Phone, MapPin, User, MessageCircle, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleWhatsAppRedirect = () => {
    setIsRedirecting(true);
    const phoneNumber = "919911525359";
    const message = encodeURIComponent("Hello Sir, I am interested in Physics classes. Please share more details.");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setIsRedirecting(false);
    }, 500);
  };

  return (
    <section className="relative py-10 px-4 bg-slate-900 overflow-hidden" id="contacts">
      
      {/* Background visual accents */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto z-10 text-center">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Contact Us
          </h2>
          {/* <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Don't leave your scores to chance. Reach out directly to book your demo session.
          </p> */}
        </div>

        {/* Direct Action Buttons - "Phone/Mobile Style" */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          
          {/* Primary WhatsApp Action */}
          <button
            onClick={handleWhatsAppRedirect}
            disabled={isRedirecting}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] disabled:bg-slate-400 text-white font-black px-10 py-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(37,211,102,0.4)] transition-all hover:-translate-y-1 active:scale-95 text-xl"
          >
            <MessageCircle className="w-7 h-7" />
            {isRedirecting ? "Connecting..." : "WhatsApp"}
          </button>

          {/* Direct Call Action */}
          <a
            href="tel:+919911525359"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 font-black px-10 py-5 rounded-2xl shadow-xl transition-all hover:-translate-y-1 active:scale-95 text-xl"
          >
            <Phone className="w-6 h-6" />
            Call
          </a>
        </div>

        {/* Footer Contact Details */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-12 border-t border-white/10 text-slate-400 font-medium">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/5">
              <User className="w-5 h-5 text-indigo-400" />
            </div>
            <span>Prabh Kirat Singh</span>
          </div>
          
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-700"></div>
          
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/5">
              <MapPin className="w-5 h-5 text-indigo-400" />
            </div>
            <span>1182, Sector 42B, Chandigarh 160036</span>
          </div>
        </div>

      </div>
    </section>
  );
}