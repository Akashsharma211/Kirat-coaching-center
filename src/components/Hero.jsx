import bgVideo from "../assets/bg-video.webm";

export default function Hero() {
  return (
    // Added min-h-[80vh] for a substantial size, and rounded-b for the shape
    <section className="relative bg-slate-900 overflow-hidden  min-h-[100vh] flex items-center shadow-2xl">
      
      {/* Background Video Wrapper */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src={bgVideo} type="video/webm" />
        </video>
        {/* Subtle gradient overlay to make text easier to read over the video */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900/80"></div>
      </div>
      
      {/* Container sizing and padding */}
      <div className="relative w-full max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
  
  {/* Badge */}
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium mb-6 border border-indigo-500/30">
    <span className="flex h-2 w-2 rounded-full bg-amber-500"></span>
    Admissions open for 2026-2027
  </div>

  {/* Main Headline */}
  <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-4xl">
    Achieve Your Academic Goals with{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
      Expert Guidance
    </span>
  </h1>

  {/* Subheadline */}
  <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
    Join thousands of successful students who have transformed their potential
    into top ranks. Expert faculty, comprehensive study material, and
    personalized mentoring.
  </p>

  {/* Quick Stats below Hero (Commented out) */}
  {/*
  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate-700/50 w-full max-w-4xl">
    {[
      { label: "Students Selected", value: "10,000+" },
      { label: "Expert Faculty", value: "50+" },
      { label: "Years of Trust", value: "15+" },
      { label: "Success Rate", value: "94%" },
    ].map((stat, i) => (
      <div key={i} className="flex flex-col items-center">
        <span className="text-3xl font-bold text-white">
          {stat.value}
        </span>
        <span className="text-sm text-slate-400 mt-1">
          {stat.label}
        </span>
      </div>
    ))}
  </div>
  */}

</div>
    </section>
  );
}