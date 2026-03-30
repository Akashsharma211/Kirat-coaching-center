import React from 'react';

export default function Courses() {
  const courses = [
    {
      title: "Class 11th & 12th",
      badge: "Board Excellence",
      description: "Master the fundamental laws of physics through deep conceptual learning, designed to secure 95%+ in your CBSE Board exams.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "bg-blue-600",
    },
    {
      title: "NEET Physics",
      badge: "Medical Entrance",
      description: "Speed-oriented problem solving and formula application techniques specifically tailored to conquer the NEET medical entrance.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "bg-rose-600",
    },
    {
      title: "JEE Mains & Adv.",
      badge: "Engineering Track",
      description: "Advanced analytical physics and rigorous practice modules for students aiming for top IITs and NITs through JEE.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "bg-amber-600",
    }
  ];

  return (
    <section className="py-24 px-6 bg-white" id="courses">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 tracking-tight mb-4">
            Specialized Physics Programs
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 leading-relaxed">
            High-yield coaching modules meticulously crafted for board-level mastery and competitive edge.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-50 border border-slate-200 p-8 rounded-2xl overflow-hidden hover:border-indigo-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg ${course.color} transform group-hover:rotate-6 transition-transform duration-300`}>
                  {course.icon}
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-[10px] font-black uppercase tracking-[0.1em]">
                  {course.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {course.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-10">
                {course.description}
              </p>

              {/* Updated Action Link: No Demo Mention */}
              <div className="mt-auto pt-6 border-t border-slate-200">
                <a 
                  href="tel:+919911525359" 
                  className="inline-flex items-center text-indigo-600 font-bold group-hover:text-amber-600 transition-colors tracking-wide"
                >
                  Inquire for Batch Details
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}