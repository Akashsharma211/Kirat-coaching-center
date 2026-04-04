import React from 'react';
import { CheckCircle2 } from "lucide-react";

// Move static data outside to ensure it's defined only once in memory
const COURSES_DATA = [
  { id: 'boards', title: "+1 & +2 Board Preparation" },
  { id: 'neet', title: "NEET Physics for Medical Entrance" },
  { id: 'jee', title: "JEE Physics for Engineering Entrance" },
  { id: 'i-neet', title: "Board + NEET (Integrated)" },
  { id: 'i-jee', title: "Board + JEE (Integrated)" }
];

const CourseItem = ({ title }) => (
  <li className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group">
    <div className="bg-amber-100 p-2 rounded-lg group-hover:bg-amber-500 transition-colors shrink-0">
      <CheckCircle2 
        className="w-5 h-5 text-amber-600 group-hover:text-white transition-colors" 
        aria-hidden="true" 
      />
    </div>
    <span className="text-lg font-bold text-slate-800 leading-tight">
      {title}
    </span>
  </li>
);

export default function Courses() {
  return (
    <section className="py-10 px-4 bg-slate-50" id="courses">
      <div className="max-w-4xl mx-auto">
        
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 tracking-tight mb-4">
            Physics Programs Offered
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6" />
        </header>

        <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden transition-shadow hover:shadow-2xl">
          {/* Brand Accent Bar */}
          <div className="h-2 bg-gradient-to-r from-indigo-600 to-amber-500 w-full" />
          
          <div className="p-8 md:p-12">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {COURSES_DATA.map((course) => (
                <CourseItem key={course.id} title={course.title} />
              ))}
            </ul>
            
            {/* <footer className="mt-12 pt-8 border-t border-slate-100 text-center">
              <p className="text-slate-500 font-medium italic">
                Specialized coaching modules tailored for every physics aspirant.
              </p>
            </footer> */}
          </div>
        </div>
      </div>
    </section>
  );
}