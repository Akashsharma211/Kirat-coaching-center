// "use client";

// import React, { useState } from "react";
// import { ExternalLink, ZoomIn, X, ChevronDown, ChevronUp } from "lucide-react";

// export default function Testimonials() {
//   const [selectedImg, setSelectedImg] = useState(null);
//   // State to handle the "View More" toggle
//   const [showAll, setShowAll] = useState(false);

//   const screenshots = [
//     { id: 1, src: "./src/assets/ss1.webp", alt: "JEE Result" },
//     { id: 2, src: "./src/assets/ss2.webp", alt: "Board Result" },
//     { id: 3, src: "./src/assets/ss3.webp", alt: "NEET Physics" },
//     { id: 4, src: "./src/assets/ss6.webp", alt: "Student Feedback }" },
//     { id: 5, src: "./src/assets/ss5.webp", alt: "Parent Review" },
//     { id: 6, src: "./src/assets/ss4.webp", alt: "Class 12 Result" },
//     { id: 7, src: "./src/assets/ss7.webp", alt: "Doubt Solving" },
//     { id: 8, src: "./src/assets/ss8.webp", alt: "Consistency"},
//     { id: 9, src: "./src/assets/ss9.webp", alt: "Concept Clarity" },
//     { id: 10, src: "./src/assets/ss10.webp", alt: "Gift"},
//     // Add more if needed...
//   ];

//   // Logic to slice the array
//   const INITIAL_COUNT = 6;
//   const visibleScreenshots = showAll ? screenshots : screenshots.slice(0, INITIAL_COUNT);

//   return (
//     <section className="py-20 px-6 bg-slate-50" id="testimonials">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
//             Wall of <span className="text-indigo-600">Results</span>
//           </h2>
//           <p className="text-slate-500 text-lg max-w-xl mx-auto">
//             Real chats. Real results. Real students winning.
//           </p>
//         </div>

//         {/* Masonry Grid */}
//         <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 transition-all duration-700 ease-in-out">
//           {visibleScreenshots.map((ss) => (
//             <div
//               key={ss.id}
//               className="relative group break-inside-avoid rounded-2xl overflow-hidden border-4 border-white shadow-sm hover:shadow-2xl transition-all duration-300 bg-white cursor-pointer animate-in fade-in zoom-in duration-500"
//               onClick={() => setSelectedImg(ss.src)}
//             >
//               <img
//                 src={ss.src}
//                 alt={ss.alt}
//                 className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
//                 loading="lazy"
//                 onError={(e) => {
//                   e.target.src = `https://via.placeholder.com/400x500?text=${ss.label}`;
//                 }}
//               />

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center">
//                 <ZoomIn className="text-white w-10 h-10 mb-2 scale-75 group-hover:scale-100 transition" />
//                 <span className="text-white font-bold text-lg uppercase tracking-widest text-center px-4">
//                   {ss.label}
//                 </span>
//               </div>

//               {/* Mobile Label */}
//               <div className="p-3 bg-white flex justify-between items-center md:hidden border-t">
//                 <span className="font-bold text-slate-700 text-sm">{ss.label}</span>
//                 <ExternalLink className="w-4 h-4 text-slate-400" />
//               </div>
//             </div>
//           ))}
//         </div>

//        {/* Stylish View More / Show Less Toggle */}
// {screenshots.length > INITIAL_COUNT && (
//   <div className={`relative ${!showAll ? "-mt-40" : "mt-12"} text-center transition-all duration-500`}>
    
//     {/* The Gradient Fade - Only visible when not showing all */}
//     {!showAll && (
//       <div className="h-40 w-full bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent pointer-events-none" />
//     )}

//     <div 
//       onClick={() => setShowAll(!showAll)}
//       className="group relative inline-flex cursor-pointer items-center justify-center px-10 py-4 overflow-hidden font-bold transition-all duration-300"
//     >
//       {/* Animated Background Glow */}
//       <div className="absolute inset-0 w-full h-full bg-slate-200/50 rounded-full group-hover:bg-indigo-50 transition-colors duration-300"></div>
      
//       {/* Floating Elements */}
//       <div className="relative flex items-center gap-3 text-slate-700 group-hover:text-indigo-600 transition-colors duration-300">
//         <span className="uppercase tracking-[0.2em] text-sm">
//           {showAll ? "Collapse Grid" : "Explore More Proof"}
//         </span>
        
//         <div className={`transition-transform duration-500 ${showAll ? "rotate-180" : "animate-bounce"}`}>
//           <ChevronDown size={20} strokeWidth={3} />
//         </div>
//       </div>

//       {/* Decorative Border Underline */}
//       <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-indigo-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
//     </div>
//   </div>
// )}
//         {/* Modal (Zoom View) */}
//         {selectedImg && (
//           <div 
//             className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
//             onClick={() => setSelectedImg(null)}
//           >
//             <button className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform">
//               <X size={40} />
//             </button>
//             <img
//               src={selectedImg}
//               alt="Preview"
//               className="max-h-[90vh] max-w-full rounded-lg shadow-2xl animate-in zoom-in duration-300"
//               onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
//             />
//           </div>
//         )}

//         {/* Bottom CTA */}
//         <div className="mt-20 text-center border-t border-slate-200 pt-10">
//           <p className="text-slate-400 mb-4 font-medium uppercase tracking-widest text-xs">Still have doubts?</p>
//           <div className="inline-block p-1 rounded-full bg-slate-200/50">
//             <a
//               href="https://wa.me/919911525359"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 px-8 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all text-slate-700 font-bold"
//             >
//               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
//               Get in Touch on WhatsApp
//             </a>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }