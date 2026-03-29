import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Phone, MapPin, User, ArrowRight, CheckCircle2, XCircle } from "lucide-react";

export default function ContactCTA() {
  const form = useRef();
  const [status, setStatus] = useState({ submitting: false, info: { error: false, msg: null } });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, info: { error: false, msg: null } });

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",   // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID",  // Replace with your EmailJS Template ID
        form.current,
        "YOUR_PUBLIC_KEY"    // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus({ submitting: false, info: { error: false, msg: "Message sent successfully! Sir will contact you soon." } });
          e.target.reset(); 
          setTimeout(() => setStatus({ submitting: false, info: { error: false, msg: null } }), 5000);
        },
        (error) => {
          console.error(error.text);
          setStatus({ submitting: false, info: { error: true, msg: "Oops! Something went wrong. Please try calling instead." } });
        }
      );
  };

  return (
    <section className="relative py-24 px-6 bg-slate-900 overflow-hidden" id="contacts">
      
      {/* Background pattern and ambient glowing orb */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/4"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Top Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Pulsing Admissions Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-amber-400 text-sm font-bold mb-8 uppercase tracking-wider backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            Admissions Open for New Batch
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Ready to Excel in Physics?
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Don't leave your scores to chance. Whether you want to book a demo class or have questions about the syllabus, reach out to us today.
          </p>
        </div>

        {/* Split Layout: CTA Info (Left) + Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Direct Contact & Trust Signals */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Let's discuss your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">academic goals.</span>
            </h3>

            {/* The Big Glowing Call Button */}
            <a 
              href="tel:+919911525359"
              className="group inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 text-xl font-bold px-8 py-4 rounded-2xl shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(245,158,11,0.7)] active:scale-95 mb-12 w-full sm:w-auto"
            >
              <div className="bg-slate-900/10 p-2 rounded-lg group-hover:bg-slate-900/20 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              Call Now: 9911525359
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Trust Footer (Name & Location) */}
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

          {/* Right Column: The Form Card */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl relative">
            
            {/* Success/Error Message Popup */}
            {status.info.msg && (
              <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 text-sm font-medium border ${
                status.info.error ? "bg-red-50 text-red-800 border-red-200" : "bg-emerald-50 text-emerald-800 border-emerald-200"
              }`}>
                {status.info.error ? <XCircle className="w-5 h-5 flex-shrink-0" /> : <CheckCircle2 className="w-5 h-5 flex-shrink-0" />}
                {status.info.msg}
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-5 text-left">
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5" htmlFor="user_name">Student / Parent Name *</label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  required
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5" htmlFor="user_email">Email Address *</label>
                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    placeholder="john@example.com"
                    required
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5" htmlFor="user_phone">Phone Number</label>
                  <input
                    id="user_phone"
                    type="tel"
                    name="user_phone"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 text-slate-900"
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
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 text-slate-900 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold px-6 py-4 rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-[0.98]"
              >
                {status.submitting ? (
                  "Sending Message..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}