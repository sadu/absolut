import React from 'react';

export default function About() {
  return (
    <section id="company" className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-100/50 to-transparent dark:from-zinc-900/30 dark:to-transparent skew-x-12 transform origin-bottom translate-x-32 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4 px-2 py-1 border-l-2 border-cyan-500 bg-zinc-100 dark:bg-zinc-900/50">
              <span className="text-zinc-600 dark:text-zinc-400 font-mono text-xs tracking-wider uppercase">Mission Briefing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-zinc-900 dark:text-zinc-50 tracking-tight">
              REDEFINING <span className="text-cyan-600 dark:text-cyan-500">DETERRENCE</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              We were founded on the belief that the future of security lies in <span className="text-zinc-900 dark:text-zinc-200 font-semibold">autonomous systems</span>. 
              By combining commercial speed with defense-grade reliability, Absolut Defense Systems delivers capabilities faster and more cost-effectively than traditional primes.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
              Our engineering-first culture prioritizes software-defined hardware, ensuring our platforms adapt to threats in real-time.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-zinc-200 dark:border-zinc-800 pt-8">
              <div>
                <div className="text-3xl font-mono font-bold text-zinc-900 dark:text-white">450+</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 mt-1">Systems Deployed</div>
              </div>
              <div>
                <div className="text-3xl font-mono font-bold text-zinc-900 dark:text-white">$2.4B</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 mt-1">Contract Valuation</div>
              </div>
              <div>
                <div className="text-3xl font-mono font-bold text-zinc-900 dark:text-white">0.02s</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 mt-1">Latency Response</div>
              </div>
              <div>
                 <div className="text-3xl font-mono font-bold text-zinc-900 dark:text-white">Global</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 mt-1">Support Network</div>
              </div>
            </div>
          </div>

          <div className="relative">
             {/* Abstract Map/Network Visualization */}
             <div className="aspect-square rounded-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                {/* Simulated Data Points */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping delay-300"></div>
                <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-indigo-500 rounded-full animate-ping delay-700"></div>

                {/* Connecting Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                  <path d="M100 100 L 250 200 L 150 300" stroke="currentColor" className="text-zinc-400 dark:text-zinc-600" strokeWidth="1" fill="none" strokeDasharray="5 5" />
                  <circle cx="100" cy="100" r="3" fill="currentColor" className="text-zinc-500" />
                  <circle cx="250" cy="200" r="3" fill="currentColor" className="text-zinc-500" />
                  <circle cx="150" cy="300" r="3" fill="currentColor" className="text-zinc-500" />
                </svg>

                {/* Overlay Text */}
                <div className="absolute bottom-4 right-4 bg-zinc-900/90 text-white p-4 text-xs font-mono max-w-[200px] border-l-2 border-cyan-500 backdrop-blur-sm">
                  <div className="mb-2 text-cyan-400 font-bold">LIVE TELEMETRY</div>
                  <div className="space-y-1 opacity-80">
                    <div className="flex justify-between"><span>NODES_ACTIVE:</span><span>42</span></div>
                    <div className="flex justify-between"><span>UPTIME:</span><span>99.99%</span></div>
                    <div className="flex justify-between"><span>THREAT_LEVEL:</span><span>LOW</span></div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
