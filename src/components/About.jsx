import React from 'react';
import { BookOpen, LineChart, Lightbulb, Zap, Clock, Users, GraduationCap, Award } from "lucide-react";
import poster from '../assets/poster.jpeg'; 

export default function About() {
  const allFeatures = [
    {
      title: "15+ Years Experience",
      desc: "A decade and a half of proven expertise, delivering consistent results.",
      icon: <Clock className="w-6 h-6" />,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100"
    },
    {
      title: "Concept Focused",
      desc: "Strong emphasis on building core fundamentals over rote learning.",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "text-amber-600",
      bgColor: "bg-amber-100"
    },
    {
      title: "Regular Assessment",
      desc: "Weekly tests & mock exams with thorough performance analysis.",
      icon: <LineChart className="w-6 h-6" />,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Personalized Attention",
      desc: "Tailored approaches designed to meet your unique academic goals.",
      icon: <Users className="w-6 h-6" />,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Comprehensive Notes",
      desc: "Topic-wise study material with clear diagrams and formulas.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100"
    },
    {
      title: "Quick Solving Tricks",
      desc: "Advanced problem-solving techniques for faster calculations.",
      icon: <Zap className="w-6 h-6" />,
      color: "text-rose-600",
      bgColor: "bg-rose-100"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Why Learn With Us?
          </h2>
          <div className="w-24 h-2 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            For me, teaching is not just a profession. it is a conscious responsibility in shaping your future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Image + Sub-cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative group">
              <div className="absolute -inset-4 bg-indigo-200/50 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <img 
                src={poster} 
                alt="Prabh Kirat Singh" 
                className="relative z-10 w-full h-auto object-contain rounded-2xl shadow-2xl border-4 border-white bg-white"
              />
            </div>

            {/* TWO CARDS UNDER IMAGE */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center group hover:bg-indigo-600 transition-colors duration-300">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-indigo-400">
                  <GraduationCap className="w-5 h-5 text-indigo-600 group-hover:text-white" />
                </div>
                <span className="text-2xl font-black text-slate-900 group-hover:text-white">10k+</span>
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

          {/* Column 2: The Merged Features */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {allFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all group"
              >
                <div className={`w-12 h-12 ${feature.bgColor} ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
            
            {/* Final Statement Card */}
            {/* <div className="md:col-span-2 bg-slate-900 p-6 rounded-2xl text-white flex items-center gap-6 shadow-lg border-l-4 border-amber-500">
               <div className="hidden sm:block bg-white/10 p-3 rounded-full uppercase text-[10px] font-bold tracking-tighter rotate-90 whitespace-nowrap">Kirat Sir</div>
               <p className="text-sm italic opacity-90 leading-relaxed">
                 "Teaching is not just my profession; it is a conscious responsibility in shaping your future."
               </p>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
}