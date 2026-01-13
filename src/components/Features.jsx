import React from 'react';

const features = [
  {
    title: 'AERIAL DOMINANCE',
    description: 'Next-generation loyal wingman autonomous aircraft capable of high-g maneuvers and swarm tactics.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    title: 'LAND SYSTEMS',
    description: 'Unmanned ground vehicles designed for reconnaissance, logistics, and direct action in contested environments.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 012-2h5a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'MARITIME AUTONOMY',
    description: 'Sub-surface and surface vessels for persistent surveillance and anti-access/area denial operations.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
    {
    title: 'CYBER & EW',
    description: 'Offensive and defensive electronic warfare suites integrated with real-time AI signal processing.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="capabilities" className="py-24 bg-zinc-100 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">
            Multi-Domain Capabilities
          </h2>
          <div className="mt-4 h-1 w-24 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative p-8 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
             {/* Tech decoration corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-zinc-300 dark:border-zinc-700 group-hover:border-cyan-500 transition-colors"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-zinc-300 dark:border-zinc-700 group-hover:border-cyan-500 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-zinc-300 dark:border-zinc-700 group-hover:border-cyan-500 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-zinc-300 dark:border-zinc-700 group-hover:border-cyan-500 transition-colors"></div>
              
              <div className="flex justify-center items-center w-16 h-16 mb-6 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100 font-mono tracking-wide">{feature.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                {feature.description}
              </p>
              
               <div className="mt-6 flex items-center text-xs font-mono text-cyan-600 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                   <span>LEARN MORE</span>
                   <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
