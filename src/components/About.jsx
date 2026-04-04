import React from 'react';
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";
import poster from '../assets/poster.jpeg'; 

export default function About() {
  const highlights = [
    "15+ Years Experience",
    "Concept Focused Teaching",
    "Regular Homework and Assessment",
    "Personalized Attention",
    "All-in-one Comprehensive Notes",
    "Quick Solving Tricks"
  ];

  return (
    <section className="py-10 px-4 bg-slate-50 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Why Learn With Us?
          </h2>
          <div className="w-24 h-2 bg-amber-500 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Image + Sub-cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative group flex-1">
              <div className="absolute -inset-4 bg-indigo-200/50 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <img 
                src={poster} 
                alt="Prabh Kirat Singh" 
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white bg-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center group hover:bg-indigo-600 transition-colors duration-300">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-indigo-400">
                  <GraduationCap className="w-5 h-5 text-indigo-600 group-hover:text-white" />
                </div>
                <span className="text-2xl font-black text-slate-900 group-hover:text-white">1000+</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 group-hover:text-indigo-100">Students Taught</span>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center group hover:bg-amber-500 transition-colors duration-300">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-amber-300">
                  <Award className="w-5 h-5 text-amber-600 group-hover:text-white" />
                </div>
                <span className="text-2xl font-black text-slate-900 group-hover:text-white">100%</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 group-hover:text-amber-50/80">Success Rate</span>
              </div>
            </div>
          </div>

          {/* Column 2: The Simplified Bullet Card */}
          <div className="lg:col-span-7">
            <div className="bg-white h-full p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
                <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
                Key Highlights
              </h3>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <CheckCircle2 className="text-amber-500 w-6 h-6 shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-xl font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Personal Statement Bottom Highlight */}
              {/* <div className="mt-16 pt-10 border-t border-slate-100">
                <p className="text-2xl md:text-3xl font-bold text-indigo-950 leading-tight italic">
                  <span className="text-amber-500 text-5xl font-serif mr-2 leading-none">“</span>
                  Teaching is not just my profession; it is a <span className="text-amber-600">conscious responsibility</span> in shaping your future.
                </p>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}