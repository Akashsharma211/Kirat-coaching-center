import React from 'react';
import poster from '../assets/poster.jpeg'; // Ensure this path is correct based on your project structure

export default function About() {
  const features = [
    {
      title: "15+ Years Experience",
      description: "A decade and a half of proven expertise, delivering consistent and reliable results.",
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Concept Clarity",
      description: "We focus on building strong foundational knowledge rather than just surface-level understanding.",
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Personalized Attention",
      description: "Tailored approaches designed to meet the unique needs and goals of every individual.",
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Column 1: Your Photo/Poster */}
          <div className="relative group">
            {/* Background pattern decoration */}
            <div className="absolute -inset-4 bg-indigo-100 rounded-3xl transform -rotate-2 scale-105 group-hover:rotate-0 group-hover:scale-100 transition-transform duration-300"></div>
            
            {/* THE IMAGE SLOT - Now set to display fully without cropping! */}
            <img 
              src={poster} 
              alt="Prabh Kirat Singh - Physics Tutor" 
              className="relative w-full h-auto object-contain rounded-2xl shadow-2xl border-4 border-white bg-white"
            />
            
            {/* A subtle decorative highlight */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300 z-10">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
            </div>
          </div>

          {/* Column 2: Text Content & Features */}
          <div className="relative">
            {/* Main Header Section */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                We bring years of expertise and a deep commitment to ensuring you achieve your highest potential. With us, you are not just a client; you're a partner in success.
              </p>
            </div>

            {/* Features Stack */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-5"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}