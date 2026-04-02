"use client";

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    // 1. Handle Scroll for Top Navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    // 2. Intersection Observer to detect Footer
    // We look for the 'footer' tag or an ID #contacts/footer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of footer is visible
    );

    const footerElement = document.querySelector('footer') || document.getElementById('contacts');
    if (footerElement) observer.observe(footerElement);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (footerElement) observer.unobserve(footerElement);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contacts', href: '#contacts' },
  ];

  // Logic: Show button only if scrolled AND NOT at the footer
  const showFloatingButton = isScrolled && !isFooterVisible;

  return (
    <>
      {/* === TOP NAVBAR === */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'opacity-0 -translate-y-full pointer-events-none' 
            : 'opacity-100 translate-y-0 pointer-events-auto'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
         <a
  href="#home"
  className="flex flex-col items-center justify-center text-center drop-shadow-md cursor-pointer"
>
  <span className="text-3xl font-extrabold text-white tracking-tight leading-none">
    PRABH KIRAT SINGH
  </span>
  <span className="text-[19px] font-bold text-amber-500 uppercase tracking-widest mt-1">
    Physics Classes
  </span>
</a>

          <div className="hidden lg:flex items-center gap-8 font-medium">
  {navLinks.map((link) => (
    <a
      key={link.name}
      href={link.href}
      className="text-xl font-semibold text-slate-100 hover:text-amber-400 transition-colors drop-shadow-md cursor-pointer"
    >
      {link.name}
    </a>
  ))}
</div>

          <a 
            href="tel:+919911525359" 
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-5 py-2.5 rounded-lg shadow-lg transition-transform active:scale-95 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </nav>

      {/* === FLOATING CONTACT BUTTON === */}
      <a 
        href="tel:+919911525359"
        className={`fixed bottom-6 right-6 z-[60] flex items-center gap-3 bg-slate-900 text-white pl-2 pr-5 py-2 rounded-full shadow-2xl shadow-slate-900/50 border-2 border-amber-500 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group hover:scale-105 active:scale-95 cursor-pointer ${
          showFloatingButton 
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
            : 'opacity-0 translate-y-12 scale-50 pointer-events-none'
        }`}
      >
        <div className="bg-amber-500 text-slate-900 p-2.5 rounded-full flex items-center justify-center relative">
          <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping"></span>
          <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <span className="text-lg font-bold tracking-wide">
          9911525359
        </span>
      </a>
    </>
  );
}