import React from 'react';
import { Award, BookOpen, CheckCircle, GraduationCap, Target, Users } from 'lucide-react';

export default function Experience() {
  return (
    <section className="py-24 px-6 bg-white" id="experience">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 tracking-tight mb-4">
            Meet Your Mentor
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
        </div>

        {/* Top Section: Photo & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Teacher Image */}
          <div className="lg:col-span-5 relative group">
            {/* Decorative background */}
            <div className="absolute -inset-4 bg-indigo-50 rounded-3xl transform rotate-3 transition-transform duration-300 group-hover:rotate-0"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
              {/* Replace '/teacher.jpg' with your actual image path */}
              <img
                src="/teacher.jpg" 
                alt="Prabh Kirat Singh"
                className="w-full aspect-[4/5] object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Experience</p>
                  <p className="text-lg font-black text-indigo-950">15+ Years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio & Approach */}
          <div className="lg:col-span-7">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Prabh Kirat Singh
            </h3>
            <p className="text-xl font-medium text-amber-500 mb-6">
              Senior Physics Faculty & Concept Specialist
            </p>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-8">
              <p>
                With over a decade and a half of dedicated teaching experience, I specialize in demystifying physics for students. My goal is to transform the subject from a source of anxiety into a subject of logic and scoring potential.
              </p>
              <p>
                <strong>My Teaching Approach:</strong> I focus heavily on concept clarity rather than rote memorization. By integrating real-life examples with advanced numerical problem-solving techniques, I ensure every student develops a strong foundation necessary to crack highly competitive exams like NEET and JEE.
              </p>
            </div>

            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-indigo-900 mb-1">1000+</span>
                <span className="text-sm font-semibold text-slate-500 flex items-center gap-1.5"><Users className="w-4 h-4 text-amber-500" /> Students Mentored</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-indigo-900 mb-1">99%</span>
                <span className="text-sm font-semibold text-slate-500 flex items-center gap-1.5"><Target className="w-4 h-4 text-amber-500" /> Success Rate</span>
              </div>
              <div className="flex flex-col col-span-2 md:col-span-1">
                <span className="text-3xl font-black text-indigo-900 mb-1">CBSE/JEE</span>
                <span className="text-sm font-semibold text-slate-500 flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-amber-500" /> Core Expertise</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Qualifications & Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Qualifications Card */}
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl hover:border-indigo-300 transition-colors">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Academic Background</h3>
            </div>
            
            <ul className="space-y-4">
              {[
                "M.Sc in Physics from recognized university",
                "B.Ed (Professional Teaching Certification)",
                "Advanced Problem Solving Expert",
                "Continuous curriculum methodology updates"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience Card */}
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl hover:border-indigo-300 transition-colors">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Career Milestones</h3>
            </div>
            
            <ul className="space-y-4">
              {[
                "15+ Years of active teaching experience",
                "Specialized coaching for CBSE 11th & 12th Boards",
                "Dedicated preparatory batches for NEET & JEE",
                "Proven track record of producing top rankers"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}