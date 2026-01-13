import React from 'react';

const projects = [
  {
    id: 1,
    name: "GHOSTHAWK",
    type: "Unmanned Aerial System",
    description: "High-altitude, long-endurance surveillance drone with integrated stealth coating and autonomous loitering capabilities.",
    specs: ["Mach 0.85", "36Hr Endurance", "50k ft Ceiling"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: 2,
    name: "TITAN",
    type: "Autonomous Ground Vehicle",
    description: "Multi-role ground combat support vehicle capable of traversing extreme terrain while carrying heavy logistics or armament payloads.",
    specs: ["Electric Drive", "3000lb Payload", "Amphibious"],
    color: "from-amber-500 to-orange-500"
  },
  {
    id: 3,
    name: "AEGIS",
    type: "Distributed Sensor Grid",
    description: "A mesh-networked array of passive sensors that provides real-time battlefield awareness without emitting detectable signals.",
    specs: ["Passive RF", "AI Processing", "Mesh Link"],
    color: "from-purple-500 to-pink-500"
  }
];

export default function Projects() {
  return (
    <section id="platforms" className="py-24 bg-zinc-50 dark:bg-zinc-900 border-t border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter">
              Active Platforms
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-xl">
              From the stratosphere to the deep ocean, our platforms define the bleeding edge of kinetic engineering.
            </p>
          </div>
          <div className="hidden md:block">
             <button className="text-sm font-mono text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 flex items-center gap-2 group">
              VIEW FULL CATALOG
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
             </button>
          </div>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${project.color}"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 items-center">
                {/* Visual Representation (SVG) */}
                <div className="col-span-12 md:col-span-3 lg:col-span-2">
                   <div className={`w-full aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-sm flex items-center justify-center relative overflow-hidden group-hover:bg-zinc-50 dark:group-hover:bg-zinc-800 transition-colors`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`}></div>
                       {/* Simple Schematic SVG based on ID */}
                       {project.id === 1 && (
                         <svg className="w-16 h-16 text-zinc-800 dark:text-zinc-200" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                         </svg>
                       )}
                       {project.id === 2 && (
                         <svg className="w-16 h-16 text-zinc-800 dark:text-zinc-200" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M4 10a2 2 0 00-2 2v7a2 2 0 002 2h16a2 2 0 002-2v-7a2 2 0 00-2-2H4zm0 2h16v7H4v-7zm0-4h6v2H4V8zm8 0h8v2H12V8z"/>
                         </svg>
                       )}
                       {project.id === 3 && (
                         <svg className="w-16 h-16 text-zinc-800 dark:text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                         </svg>
                       )}
                   </div>
                </div>

                {/* Content */}
                <div className="col-span-12 md:col-span-6 lg:col-span-7">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">{project.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{project.name}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">{project.description}</p>
                </div>

                {/* Specs */}
                <div className="col-span-12 md:col-span-3 lg:col-span-3 flex flex-row md:flex-col gap-2 justify-center">
                  {project.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 group/spec">
                      <div className="w-1 h-1 rounded-full bg-cyan-500"></div>
                      <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 group-hover/spec:text-cyan-600 dark:group-hover/spec:text-cyan-400 transition-colors uppercase">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Action Button */}
              <button className="absolute bottom-6 right-6 p-2 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
