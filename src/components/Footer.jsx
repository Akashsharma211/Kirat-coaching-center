import React from 'react';
import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  // Smooth scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="flex flex-col">
            <a href="#home" className="flex flex-col mb-4">
              <span className="text-2xl font-extrabold text-white tracking-tight leading-none">
                KIRAT SIR
              </span>
              <span className="text-[11px] font-bold text-amber-500 uppercase tracking-widest mt-1">
                Physics Home Tuitions
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs">
              Empowering students with strong concept clarity and quick-solving techniques to achieve top ranks in CBSE, NEET, and JEE.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <nav className="flex flex-col gap-3 text-sm">
              <a href="#about" className="hover:text-amber-400 transition-colors inline-flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-700"></span> About Sir
              </a>
              <a href="#courses" className="hover:text-amber-400 transition-colors inline-flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-700"></span> Courses Offered
              </a>
              <a href="#features" className="hover:text-amber-400 transition-colors inline-flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-700"></span> Study Methodology
              </a>
              <a href="#testimonials" className="hover:text-amber-400 transition-colors inline-flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-700"></span> Success Stories
              </a>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Get in Touch</h4>
            <div className="flex flex-col gap-4 text-sm">
              <a href="tel:+919911525359" className="flex items-center gap-3 hover:text-amber-400 transition-colors group">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-amber-500/50 transition-colors">
                  <Phone className="w-4 h-4 text-amber-500" />
                </div>
                9911525359
              </a>
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <MapPin className="w-4 h-4 text-amber-500" />
                </div>
                Chandigarh, India
              </div>
              <a href="mailto:contact@kiratsirphysics.com" className="flex items-center gap-3 hover:text-amber-400 transition-colors group">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-amber-500/50 transition-colors">
                  <Mail className="w-4 h-4 text-amber-500" />
                </div>
                contact@kiratsirphysics.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Harsh Raj Singh with Akash Kumar Sharma. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-medium hover:text-amber-400 transition-colors group"
          >
            Back to top
            <div className="p-1.5 rounded-full bg-slate-900 border border-slate-800 group-hover:bg-amber-500 group-hover:text-slate-900 group-hover:border-amber-500 transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}