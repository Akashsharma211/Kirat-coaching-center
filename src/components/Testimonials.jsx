"use client";

import React, { useState, useEffect } from "react";
import { ZoomIn, X, ChevronDown } from "lucide-react";

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
import ss11 from "../assets/ss11.webp";
import ss12 from "../assets/ss12.webp";

export default function Testimonials() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const screenshots = [
    { id: 1, src: ss5, alt: "JEE Result" },
    { id: 2, src: ss2, alt: "Board Result" },
    { id: 3, src: ss3, alt: "NEET Physics"},
    { id: 4, src: ss6, alt: "Student Feedback"},
    { id: 5, src: ss1, alt: "Parent Review" },
    { id: 6, src: ss4, alt: "Class 12 Result"},
    { id: 7, src: ss7, alt: "Doubt Solving"},
    { id: 8, src: ss11, alt: "Best Physics Teacher"},
    { id: 9, src: ss12, alt: "Effective Teaching"},
    { id: 10, src: ss8, alt: "Consistency" },
    { id: 11, src: ss9, alt: "Concept Clarity" },
    { id: 12, src: ss10, alt: "Gift" },
  ];

  const INITIAL_COUNT = 6;
  const visibleScreenshots = showAll ? screenshots : screenshots.slice(0, INITIAL_COUNT);

  useEffect(() => {
    if (selectedImg) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedImg]);

  return (
    <section className="py-10 px-4 bg-slate-50 selection:bg-indigo-100" id="testimonials">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Description Removed */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Our Success <span className="text-indigo-600">Journey</span>
          </h2>
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
                src={ss.src.src || ss.src}
                alt={ss.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Overlay - Label Removed */}
              <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] flex flex-col items-center justify-center">
                <ZoomIn className="text-white w-10 h-10 scale-75 group-hover:scale-100 transition duration-300" />
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
                  {showAll ? "View Less" : "View More"}
                </span>
                <div className={`transition-transform duration-500 ${showAll ? "rotate-180" : "animate-bounce"}`}>
                  <ChevronDown size={20} strokeWidth={3} />
                </div>
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-indigo-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>
        )}

        {/* Modal (Zoom View) - Label Removed */}
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
                className="max-h-[90vh] w-auto rounded-2xl shadow-2xl border border-white/10 animate-in zoom-in duration-300"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}