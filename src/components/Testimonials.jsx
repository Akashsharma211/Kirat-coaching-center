"use client";

import React, { useState, useEffect } from "react";
import { ExternalLink, ZoomIn, X, ChevronDown, ChevronUp } from "lucide-react";

// 1. Import all images directly
import ss1 from "../assets/ss1.webp";
import ss2 from "../assets/ss2.webp";
import ss3 from "../assets/ss3.webp";
import ss4 from "../assets/ss4.webp";
import ss5 from "../assets/ss5.webp";
import ss6 from "../assets/ss6.webp";
import ss7 from "../assets/ss7.webp";
import ss8 from "../assets/ss8.webp";
import ss9 from "../assets/ss9.webp";
import ss10 from "../assets/ss10.webp";

export default function Testimonials() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // 2. Map data using imported objects
  const screenshots = [
    { id: 1, src: ss1, alt: "JEE Result", label: "JEE Success 🚀" },
    { id: 2, src: ss2, alt: "Board Result", label: "95% in Boards 🔥" },
    { id: 3, src: ss3, alt: "NEET Physics", label: "Physics Boost 💯" },
    { id: 4, src: ss6, alt: "Student Feedback", label: "Student Love ❤️" },
    { id: 5, src: ss5, alt: "Parent Review", label: "Parent Trust 🙏" },
    { id: 6, src: ss4, alt: "Class 12 Result", label: "Grade Improvement 📈" },
    { id: 7, src: ss7, alt: "Doubt Solving", label: "24/7 Support 🌙" },
    { id: 8, src: ss8, alt: "Consistency", label: "Daily Progress 💪" },
    { id: 9, src: ss9, alt: "Concept Clarity", label: "Crystal Clear ✨" },
    { id: 10, src: ss10, alt: "Gift", label: "Student Token 🎁" },
  ];

  // Logic to slice the array
  const INITIAL_COUNT = 6;
  const visibleScreenshots = showAll ? screenshots : screenshots.slice(0, INITIAL_COUNT);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedImg) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedImg]);

  return (
    <section className="py-24 px-6 bg-slate-50 selection:bg-indigo-100" id="testimonials">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Wall of <span className="text-indigo-600">Results</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Real conversations. Real transformations. We let the results speak for themselves.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {visibleScreenshots.map((ss) => (
            <div
              key={ss.id}
              className="relative group break-inside-avoid rounded-3xl overflow-hidden border-[6px] border-white shadow-md hover:shadow-xl transition-all duration-500 bg-white cursor-zoom-in animate-in fade-in zoom-in duration-500"
              onClick={() => setSelectedImg(ss)}
            >
              <img
                src={ss.src.src || ss.src} // Handles both Next.js and Vite imports
                alt={ss.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] flex flex-col items-center justify-center">
                <ZoomIn className="text-white w-10 h-10 mb-2 scale-75 group-hover:scale-100 transition duration-300" />
                <span className="text-white font-bold tracking-wider text-sm uppercase px-4 py-2 bg-indigo-600 rounded-lg shadow-lg">
                  {ss.label}
                </span>
              </div>

              {/* Mobile Label */}
              <div className="p-4 bg-white flex justify-between items-center md:hidden border-t">
                <span className="font-bold text-slate-800 text-sm">{ss.label}</span>
                <ExternalLink className="w-4 h-4 text-indigo-500" />
              </div>
            </div>
          ))}
        </div>

        {/* View More / Show Less Toggle */}
        {screenshots.length > INITIAL_COUNT && (
          <div className={`relative ${!showAll ? "-mt-48" : "mt-16"} text-center transition-all duration-700 z-10`}>
            {!showAll && (
              <div className="h-48 w-full bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent pointer-events-none mb-4" />
            )}
            
            <div 
              onClick={() => setShowAll(!showAll)}
              className="group relative inline-flex cursor-pointer items-center justify-center px-10 py-4 overflow-hidden font-bold transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-slate-200/50 rounded-full group-hover:bg-indigo-50 transition-colors duration-300"></div>
              <div className="relative flex items-center gap-3 text-slate-700 group-hover:text-indigo-600">
                <span className="uppercase tracking-[0.2em] text-xs">
                  {showAll ? "Collapse Grid" : "Explore More Proof"}
                </span>
                <div className={`transition-transform duration-500 ${showAll ? "rotate-180" : "animate-bounce"}`}>
                  <ChevronDown size={20} strokeWidth={3} />
                </div>
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-indigo-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>
        )}

        {/* Modal (Zoom View) */}
        {selectedImg && (
          <div 
            className="fixed inset-0 bg-slate-950/95 z-[999] flex items-center justify-center p-6 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <X size={48} strokeWidth={1.5} />
            </button>
            <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImg.src.src || selectedImg.src}
                alt={selectedImg.alt}
                className="max-h-[80vh] w-auto rounded-2xl shadow-2xl border border-white/10 animate-in zoom-in duration-300"
              />
              <div className="mt-6 px-6 py-2 bg-indigo-600 rounded-full text-white font-bold tracking-wide">
                {selectedImg.label}
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div className="mt-32 pt-16 border-t border-slate-200 text-center">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-slate-100 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Are you ready to win?</h3>
            <p className="text-slate-500 mb-10 text-lg">Join the students who are already mastering Physics with Kirat Sir.</p>
            <a
              href="https://wa.me/919911525359"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl shadow-lg shadow-green-100 transition-all font-bold text-lg hover:-translate-y-1"
            >
              <span className="w-3 h-3 rounded-full bg-white animate-pulse"></span>
              Message Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}