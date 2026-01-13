import React, { useState } from 'react';

const features = [
  {
    id: 'aerial',
    title: 'AERIAL DOMINANCE',
    description: 'Next-generation loyal wingman autonomous aircraft capable of high-g maneuvers and swarm tactics.',
    details: 'Our aerial platforms leverage Nexus Pilot for autonomous flight behaviors, enabling coordinated swarm operations with minimal human oversight. Integration with Nexus Commander provides real-time mission adaptation.',
    applications: ['Combat Air Support', 'ISR Missions', 'Autonomous Escorts'],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    id: 'land',
    title: 'LAND SYSTEMS',
    description: 'Unmanned ground vehicles designed for reconnaissance, logistics, and direct action in contested environments.',
    details: 'Ground robotics powered by Nexus Edge runtime ensure deterministic behavior in complex terrain. Capable of autonomous navigation, threat detection, and coordinated convoy operations.',
    applications: ['Route Clearance', 'Logistics Resupply', 'Perimeter Defense'],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 012-2h5a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    id: 'maritime',
    title: 'MARITIME AUTONOMY',
    description: 'Sub-surface and surface vessels for persistent surveillance and anti-access/area denial operations.',
    details: 'Maritime platforms integrate X-band radar, EO/IR sensors, and AIS for comprehensive domain awareness. Nexus OS enables autonomous interdiction and coordinated fleet response.',
    applications: ['Coastal Patrol', 'Mine Countermeasures', 'Port Security'],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'cyber',
    title: 'CYBER & EW',
    description: 'Offensive and defensive electronic warfare suites integrated with real-time AI signal processing.',
    details: 'Our cyber and EW capabilities leverage Nexus OS for real-time signal analysis and automated countermeasure deployment. Machine learning algorithms identify and classify threats in contested spectrum environments.',
    applications: ['Spectrum Dominance', 'Signal Intelligence', 'Jamming Operations'],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

export default function Features() {
  const [expandedFeature, setExpandedFeature] = useState(null);

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
            <div 
              key={index} 
              className="group relative p-8 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
            >
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
              
              <button 
                onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
                className="mt-6 flex items-center text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
              >
                <span>{expandedFeature === feature.id ? 'SHOW LESS' : 'LEARN MORE'}</span>
                <svg className={`w-4 h-4 ml-2 transition-transform ${expandedFeature === feature.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Expanded Content */}
              {expandedFeature === feature.id && (
                <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700 animate-fadeIn">
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed mb-4">
                    {feature.details}
                  </p>
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-zinc-500 uppercase">Applications:</div>
                    {feature.applications.map((app, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                        <span className="text-xs text-zinc-600 dark:text-zinc-300">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
