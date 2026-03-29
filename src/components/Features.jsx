import React from 'react';
import { BookOpen, LineChart, Lightbulb, Zap } from "lucide-react";

export default function Features() {
  // Using the exact text from the flyer
  const features = [
    {
      title: "Regular Assessment",
      desc: "Detailed weekly tests & mock exams with thorough performance analysis.",
      icon: <LineChart className="w-7 h-7" />,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Comprehensive Notes",
      desc: "Topic-wise study material with clear diagrams, summaries, and formulas.",
      icon: <BookOpen className="w-7 h-7" />,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100"
    },
    {
      title: "Concept Focused",
      desc: "Strong emphasis on building core fundamentals over rote learning.",
      icon: <Lightbulb className="w-7 h-7" />,
      color: "text-amber-600",
      bgColor: "bg-amber-100"
    },
    {
      title: "Quick Solving Tricks",
      desc: "Shortcuts and advanced problem-solving techniques for faster calculations.",
      icon: <Zap className="w-7 h-7" />,
      color: "text-rose-600",
      bgColor: "bg-rose-100"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white" id="features">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 tracking-tight mb-4">
            The Learning Experience
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600">
            Everything you need to master physics, structured for maximum retention and top-tier exam performance.
          </p>
        </div>

        {/* Features Grid (2x2 layout for 4 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

      </div>
    </section>
  );
}

// Extracted sub-component for cleaner code
function FeatureCard({ icon, title, desc, color, bgColor }) {
  return (
    <div className="group flex items-start gap-6 p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 ease-out">
      
      {/* Icon Container with subtle pulse effect on hover */}
      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ${bgColor} ${color} shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
        {icon}
      </div>
      
      {/* Text Content */}
      <div>
        <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
          {title}
        </h4>
        <p className="text-slate-600 leading-relaxed">
          {desc}
        </p>
      </div>
      
    </div>
  );
}