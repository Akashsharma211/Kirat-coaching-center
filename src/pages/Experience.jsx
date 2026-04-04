import React from 'react';
import { Award, BookOpen, CheckCircle, GraduationCap, Target, Users } from 'lucide-react';
import kiratImage from '../assets/kirat.jpeg';

export default function Experience() {
  return (
    <section className="py-10 px-4 bg-white" id="experience">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 tracking-tight mb-4">
            Meet Your Mentor
          </h2>
          <div className="w-16 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Top Section: Photo & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-1 px=10 py=4">

          {/* Left: Teacher Image - Constrained Size */}
          <div className="lg:col-span-5 max-w-md mx-auto lg:mx-0 relative group">
            <div className="absolute -inset-3 bg-indigo-50 rounded-3xl transform rotate-2 transition-transform duration-300 group-hover:rotate-0"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white aspect-[6/9]">
              <img
                src={kiratImage}
                alt="Prabh Kirat Singh"
                className="w-full h-full object-cover object-top"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-md border border-slate-100 flex items-center gap-3">
                <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase leading-none">Experience</p>
                  <p className="text-base font-black text-indigo-950">15+ Years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio & Approach */}
          <div className="lg:col-span-7 pt-2">
            <h3 className="text-3xl font-bold text-slate-900 mb-1">
              Prabh Kirat Singh
            </h3>
            <p className="text-lg font-semibold text-amber-500 mb-6">
              Senior Physics Faculty & Concept Specialist
            </p>

            <div className="space-y-5 text-slate-600 leading-relaxed mb-8">
              <p className="text-lg">

              </p>
              <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-amber-500">
                <p className="text-slate-700 italic">
                  <strong>My Approach:</strong> I focus on concept clarity rather than rote memorization. By integrating real-life examples with advanced problem-solving techniques, I ensure a strong foundation in Board Exams, NEET and JEE.
                </p>
              </div>
            </div>
            {/* Add this right before the Quick Stats Bar */}
            <div className="relative py-4 mb-3 border-t border-slate-200">
              {/* <span className="absolute -top-2 -left-3 text-6xl text-amber-500/20 font-serif">“</span> */}
              <p className="text-xl md:text-2xl font-medium text-indigo-950 leading-tight tracking-tight italic">
                For me, teaching is not just a profession. It is a <span className="text-amber-600 font-bold underline decoration-amber-200 underline-offset-4">conscious responsibility</span> in shaping your future.
              </p>
              {/* <span className="absolute -top-2 -left-3 text-6xl text-amber-500/20 font-serif"></span> */}
            </div>

            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-6 border-t border-slate-100">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-indigo-900">1000+</span>
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5 uppercase tracking-wide">
                  <Users className="w-3.5 h-3.5 text-amber-500" /> Students
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-indigo-900">100%</span>
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5 uppercase tracking-wide">
                  <Target className="w-3.5 h-3.5 text-amber-500" /> Success Rate
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-indigo-900">JEE/NEET/BOARDS</span>
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5 uppercase tracking-wide">
                  <BookOpen className="w-3.5 h-3.5 text-amber-500" /> Expertise
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Qualifications Card */}
          {/* <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Academic Background</h4>
            </div>
            <ul className="space-y-3">
              {[
                "M.Sc in Physics Expert",
                "B.Ed Professional Certification",
                "Advanced Problem Solving Specialist",
                "Updated Curriculum Methodology"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-600 text-sm">
                  <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div> */}

          {/* Experience Card */}
          {/* <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Career Milestones</h4>
            </div>
            <ul className="space-y-3">
              {[
                "15+ Years of Active Teaching",
                "CBSE 11th & 12th Board Specialist",
                "NEET & JEE Preparatory Expert",
                "Proven Track Record of Rankers"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-600 text-sm">
                  <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div> */}
        </div>

      </div>
    </section>
  );
}