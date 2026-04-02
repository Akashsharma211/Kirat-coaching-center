import bgVideo from "../assets/bg-video.webm";

export default function Hero() {
  const fears = [
    {
      title: "Are you struggling with Physics concepts ?",
      // desc: "Are you struggling with physics ?",
      icon: "📚",
      border: "hover:border-blue-500/50"
    },
    {
      title: "Do you get anxious while solving numericals ?",
      // desc: "Do you get anxious while solving numericals ?",
      icon: "🧮",
      border: "hover:border-red-500/50"
    },
    {
      title: "Do yo feel you are lagging conceptually in Physics and the pile is increasing with each passing day ?",
      // desc: "Do yo feel you are lagging conceptually in physics?",
      icon: "⏳",
      border: "hover:border-amber-500/50"
    },
  ];

  return (
    // Changed pt-12 to pt-32 to give your Navbar plenty of breathing room
    // min-h-screen ensures it fills the view even with a large Navbar
    <section className="relative bg-slate-950 min-h-screen flex flex-col items-center pt-28 md:pt-36 pb-20 px-6 overflow-hidden">

      {/* Background Video Layer - Ensure z-0 so it stays behind everything */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-100">
          <source src={bgVideo} type="video/webm" />
        </video>
        {/* Added a darker top gradient so Navbar text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">

        {/* 1. THE CARDS (Now with better spacing for the top of the page) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {fears.map((fear, i) => (
            <div
              key={i}
              className={`bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl transition-all duration-300 group ${fear.border}`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{fear.icon}</div>
              <h3 className="text-amber-400 font-bold text-xl mb-2">{fear.title}</h3>
              {/* <p className="text-slate-400 text-sm leading-relaxed">{fear.desc}</p> */}
            </div>
          ))}
        </div>

        {/* 2. THE CONTENT */}
        <div className="text-center">
          {/* <div className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">
            Premier Physics Coaching
          </div> */}

          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
            Remove these fears with <br />
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Kirat Sir’s Expert Guidance
            </span>
            <br />
            and achieve your academic goals.
          </h1>

          {/* <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Stop letting conceptual lags hold you back. Join the elite batch where
            complex physics becomes second nature.
          </p> */}

          {/* 3. COACHING CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* <button className="w-full sm:w-auto px-12 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold rounded-xl shadow-lg transition-all transform hover:-translate-y-1 active:scale-95">
              ENROLL FOR 2026-27
            </button>
             */}
            <div className="flex items-center gap-4 bg-white/5 py-2 px-4 rounded-full border border-white/10 backdrop-blur-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-amber-500 flex items-center justify-center text-[10px] text-slate-900 font-bold">✓</div>
                ))}
              </div>
              <p className="text-sm text-slate-300">
                <span className="text-white font-bold">500+</span> Enrolled
              </p>
            </div>
          </div>

          {/* 4. INSTITUTE STATS */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-8 py-10 border-t border-white/10">
            {[
              { label: "Conceptual Clarity", val: "100%" },
              { label: "Numerical Practice", val: "Daily" },
              { label: "Doubt Support", val: "24/7" },
              // { label: "Rank Focus", val: "Top 100" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-white">{stat.val}</div>
                <div className="text-[10px] md:text-xs text-amber-500/70 uppercase font-bold tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}