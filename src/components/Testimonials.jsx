"use client";

import React from 'react';
import { Quote, Star, Trophy } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Aarav Sharma",
      photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop",
      review: "Kirat Sir completely changed how I look at Physics. His concept-focused approach meant I wasn't just memorizing formulas. The weekly mock tests were a game-changer.",
      exam: "JEE Mains",
      score: "99.8",
      scoreType: "Percentile",
      achievement: "Top 1%",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Sneha Patel",
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop",
      review: "I used to struggle with the numericals. Sir's quick-solving tricks helped me finish my NEET physics section 20 minutes early with maximum accuracy!",
      exam: "NEET UG",
      score: "170/180",
      scoreType: "Physics Score",
      achievement: "State Rank 42",
      color: "from-rose-500 to-red-600"
    },
    {
      name: "Rohan Verma",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
      review: "The personalized attention is unmatched. He identified my weak topics in electromagnetism and provided targeted worksheets. Scored perfect marks!",
      exam: "CBSE 12th",
      score: "100/100",
      scoreType: "Board Score",
      achievement: "School Topper",
      color: "from-amber-500 to-orange-600"
    },
    {
      name: "Priya Singh",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
      review: "His all-in-one notes are a lifesaver. You don't need to read 5 different thick books. Everything you need for the boards is right there in his material.",
      exam: "CBSE 12th",
      score: "98/100",
      scoreType: "Board Score",
      achievement: "Distinction",
      color: "from-emerald-500 to-teal-600"
    },
    {
      name: "Kabir Das",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      review: "If you are serious about JEE Advanced, this is the place. We tackled advanced mechanics problems that showed up exactly the same way in the final paper.",
      exam: "JEE Advanced",
      score: "AIR 842",
      scoreType: "All India Rank",
      achievement: "IIT Selected",
      color: "from-blue-500 to-indigo-600"
    }
  ];

  // Duplicate the array to create the seamless infinite scroll illusion
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden" id="testimonials">
      {/* Custom CSS for the infinite marquee animation */}
      <style>
        {`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 40s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 mb-16">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 tracking-tight mb-4">
            Proven Success Stories
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600">
            Don't just take our word for it. See how our students have transformed their potential into top-tier results.
          </p>
        </div>
      </div>

      {/* The Scrolling Marquee Container
        (Removed the mask-image class here to get rid of the white fade effect!) 
      */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        
        {/* The Track (Pauses on hover) */}
        <div className="flex items-stretch justify-start gap-6 w-max animate-infinite-scroll py-8 px-3">
          
          {doubledReviews.map((student, index) => (
            <div 
              key={index} 
              // Flat design: removed shadows, kept simple border
              className="relative w-[320px] flex-shrink-0 bg-white p-6 pt-10 rounded-2xl border border-slate-200 flex flex-col"
            >
              {/* Overlapping Profile Photo */}
              <div className="absolute -top-8 left-6">
                {/* Flat design: removed shadow, added matching border */}
                <div className="relative w-16 h-16 rounded-full p-1 bg-white border border-slate-200">
                  <img 
                    src={student.photo} 
                    alt={student.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* Decorative quote badge */}
                  <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white p-1 rounded-full">
                    <Quote className="w-3 h-3 fill-current" />
                  </div>
                </div>
              </div>

              {/* Five Star Rating */}
              <div className="flex gap-1 text-amber-400 mb-3 ml-20">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>

              {/* Student Name */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {student.name}
              </h3>

              {/* The Review Text */}
              <p className="text-sm text-slate-600 leading-relaxed italic mb-6 flex-grow">
                "{student.review}"
              </p>

              {/* DYNAMIC SCORE & ACHIEVEMENT AREA */}
              <div className="mt-auto bg-slate-50 rounded-xl p-4 border border-slate-200 relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-r ${student.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative z-10 flex justify-between items-end">
                  {/* Left Side: Score Data */}
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-0.5 block">
                      {student.scoreType}
                    </span>
                    <span className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${student.color}`}>
                      {student.score}
                    </span>
                  </div>

                  {/* Right Side: Exam & Achievement */}
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 bg-slate-200 text-slate-700 text-[9px] font-bold uppercase tracking-wider rounded mb-1.5">
                      {student.exam}
                    </span>
                    <div className="flex items-center justify-end gap-1 text-slate-900 font-bold text-xs">
                      <Trophy className="w-3 h-3 text-amber-500" />
                      {student.achievement}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}