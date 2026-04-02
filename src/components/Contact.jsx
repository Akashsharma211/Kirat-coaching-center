"use client";

import React, { useRef, useState } from "react";
import { Send, Phone, MapPin, User, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactCTA() {
  const form = useRef();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    setIsRedirecting(true);

    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const phone = formData.get("user_phone");
    const message = formData.get("message");

    // Replace with your WhatsApp number (include country code, no + or spaces)
    const phoneNumber = "919911525359"; 

    // Formatting the message for WhatsApp
    const whatsappMsg = `*New Inquiry for Physics Classes*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Email:* ${email}%0A` +
      `*Phone:* ${phone || "Not provided"}%0A` +
      `*Message:* ${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMsg}`;

    // Small delay to show "Redirecting" state to user
    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setIsRedirecting(false);
      form.current.reset();
    }, 800);
  };

  return (
    <section className="relative py-24 px-6 bg-slate-900 overflow-hidden" id="contacts">
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/4"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Ready to Excel in Physics?
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Don't leave your scores to chance. Reach out via WhatsApp or call to book your demo session.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Let's discuss your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">academic goals.</span>
            </h3>

            <a 
              href="tel:+919911525359"
              className="group inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 text-xl font-bold px-8 py-4 rounded-2xl shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 mb-12 w-full sm:w-auto"
            >
              <div className="bg-slate-900/10 p-2 rounded-lg">
                <Phone className="w-6 h-6" />
              </div>
              Call Now: 9911525359
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="w-full pt-8 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-slate-300 font-medium">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <User className="w-5 h-5 text-indigo-400" />
                </div>
                <span>Prabh Kirat Singh</span>
              </div>
              <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-600"></span>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <span>Chandigarh, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form to WhatsApp */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl relative">
            <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-indigo-600" />
              Send a WhatsApp Inquiry
            </h4>

            <form ref={form} onSubmit={handleWhatsAppRedirect} className="space-y-5 text-left">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5" htmlFor="user_name">Student / Parent Name *</label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  placeholder="Type your full name"
                  required
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5" htmlFor="user_email">Email Address *</label>
                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    placeholder="abc@example.com"
                    required
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5" htmlFor="user_phone">Phone Number</label>
                  <input
                    id="user_phone"
                    type="tel"
                    name="user_phone"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5" htmlFor="message">How can we help? *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="I am looking for CBSE 12th Physics tuitions..."
                  required
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isRedirecting}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#22c35e] disabled:bg-slate-400 text-white font-bold px-6 py-4 rounded-xl shadow-lg transition-all active:scale-[0.98]"
              >
                {isRedirecting ? (
                  "Opening WhatsApp..."
                ) : (
                  <>
                    Chat on WhatsApp
                    <CheckCircle2 className="w-5 h-5" />
                  </>
                )}
              </button>
              
              <p className="text-[10px] text-center text-slate-400 italic">
                Clicking will open WhatsApp with your pre-filled message.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}