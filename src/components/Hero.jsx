import React from 'react';

export default function Hero() {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[90vh] overflow-hidden">
      {/* Background Grid Visualization */}
      <div className="absolute inset-0 w-full h-full bg-zinc-50 dark:bg-zinc-950">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-400 opacity-20 blur-[100px] dark:bg-cyan-900"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="inline-block mb-4 px-3 py-1 border border-cyan-500/30 rounded-full bg-cyan-500/10 backdrop-blur-sm">
            <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs tracking-[0.2em] uppercase">Next Gen Defense Systems</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-zinc-900 dark:text-zinc-50">
          SUPERIORITY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
            THROUGH AUTONOMY
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
          Absolut Defense Systems integrates advanced AI, kinetic platforms, and realtime sensor fusion to redefine the modern battlespace.
        </p>
        <div className="mt-10 flex justify-center gap-6">
          <button className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold uppercase tracking-widest hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all border border-transparent">
             Mission Profiles
          </button>
           <button className="px-8 py-4 bg-transparent border border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-bold uppercase tracking-widest hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all">
             Our Technology
          </button>
        </div>
      </div>
      
      {/* Decorative SVG Elements - HUD Style */}
      <div className="absolute bottom-10 left-10 hidden md:block opacity-50">
        <svg width="200" height="100" viewBox="0 0 200 100" fill="none" className="text-zinc-400 dark:text-zinc-600">
            <path d="M0 100 V 50 L 50 0 H 200" stroke="currentColor" strokeWidth="1" fill="none"/>
            <rect x="10" y="60" width="10" height="10" fill="currentColor" />
            <rect x="30" y="60" width="10" height="10" fill="currentColor" opacity="0.5"/>
            <rect x="50" y="60" width="10" height="10" fill="currentColor" opacity="0.25"/>
            <text x="70" y="70" fill="currentColor" fontSize="10" fontFamily="monospace">STATUS: ACTIVE</text>
        </svg>
      </div>
       <div className="absolute top-24 right-10 hidden md:block opacity-30 animate-pulse">
        <svg width="150" height="150" viewBox="0 0 100 100" className="text-cyan-500">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="4 4"/>
            <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" fill="none"/>
            <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5"/>
            <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>
    </div>
  );
}
