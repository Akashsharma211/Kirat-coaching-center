"use client";

import React from "react";
import { Quote, Star, Trophy } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Saisha Gupta",
      review: "Kirat sir is an exceptional teacher. His clear explanations and patient teaching helped me build strong concepts from the basics. Highly recommended!",
      exam: "Class 12",
      score: "★★★★★",
      scoreType: "Rating",
      achievement: "Top Result",
      color: "from-indigo-500 to-purple-600",
      avatarBg: "bg-indigo-100 text-indigo-700",
    },
    {
      name: "Harmandeep Singh",
      review: "Amazing learning experience! Sir's effective analogies made grasping complex physics concepts extremely easy. My problem solving improved significantly.",
      exam: "NEET",
      score: "★★★★★",
      scoreType: "Rating",
      achievement: "Great Growth",
      color: "from-blue-500 to-indigo-600",
      avatarBg: "bg-blue-100 text-blue-700",
    },
    {
      name: "Khushi Wadhawan",
      review: "Very patient and engaging teacher. His handwritten notes were a lifesaver for boards. He always makes extra time for student doubts.",
      exam: "Boards",
      score: "★★★★★",
      scoreType: "Rating",
      achievement: "Concept King",
      color: "from-pink-500 to-rose-600",
      avatarBg: "bg-rose-100 text-rose-700",
    },
    {
      name: "Vihaan Bansal",
      review: "Kirat sir explains everything in a very simple manner. His experience is impeccable; almost all board questions were covered in his classes.",
      exam: "CBSE",
      score: "★★★★★",
      scoreType: "Rating",
      achievement: "Board Expert",
      color: "from-amber-500 to-orange-600",
      avatarBg: "bg-amber-100 text-amber-700",
    },
    {
      name: "Jiya Bedi",
      review: "Truly a great mentor who helped me gain a real interest in physics. I would recommend his classes to everyone aiming for high scores.",
      exam: "Class 12",
      score: "★★★★★",
      scoreType: "Rating",
      achievement: "Highly Rated",
      color: "from-emerald-500 to-teal-600",
      avatarBg: "bg-emerald-100 text-emerald-700",
    },
    {
      name: "Himank Bahl",
      review: "More than just a teacher, he is a guru. He makes physics fun to apply in real life and helps students overcome their fear of the subject.",
      exam: "JEE",
      score: "★★★★★",
      scoreType: "Rating",
      achievement: "True Mentor",
      color: "from-violet-500 to-indigo-600",
      avatarBg: "bg-violet-100 text-violet-700",
    },
  ];

  const getInitials = (name) => {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase();
  };

  const doubledReviews = [...reviews, ...reviews];

  return (
    <section className="py-16 bg-slate-50 overflow-hidden" id="testimonials">
      <style>
        {`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 35s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        <div className="flex items-stretch gap-6 w-max animate-infinite-scroll py-10">
          {doubledReviews.map((student, index) => (
            <div
              key={index}
              className="relative w-[300px] flex-shrink-0 bg-white p-6 pt-10 rounded-2xl border border-slate-200 flex flex-col transition-all hover:shadow-lg hover:-translate-y-1"
            >
              {/* INITIAL AVATAR */}
              <div className="absolute -top-6 left-6">
                <div className={`w-14 h-14 rounded-full border-4 border-white shadow-sm flex items-center justify-center font-bold text-lg ${student.avatarBg}`}>
                  {getInitials(student.name)}
                  <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white p-1 rounded-full border border-white">
                    <Quote className="w-2 h-2 fill-current" />
                  </div>
                </div>
              </div>

              <div className="flex gap-0.5 text-amber-400 mb-2 ml-16">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-1">
                {student.name}
              </h3>

              <p className="text-xs text-slate-600 italic mb-4 flex-grow leading-relaxed">
                "{student.review}"
              </p>

              <div className="mt-auto bg-slate-50 rounded-lg p-3 border border-slate-100 group">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[8px] font-bold uppercase text-slate-400 block tracking-wider">
                      {student.scoreType}
                    </span>
                    <span className="text-sm font-bold text-amber-500">
                      {student.score}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="inline-block px-1.5 py-0.5 bg-indigo-50 text-indigo-600 text-[8px] font-black rounded uppercase mb-1">
                      {student.exam}
                    </span>
                    <div className="flex items-center justify-end gap-1 text-[10px] font-bold text-slate-700">
                      <Trophy className="w-2.5 h-2.5 text-amber-500" />
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