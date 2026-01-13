import React, { useState } from 'react';

const softwarePillars = [
  {
    id: 'edge',
    name: 'NEXUS EDGE',
    tagline: 'Deterministic Runtime Environment',
    description: 'The foundational runtime for edge-deployed autonomous robots. Nexus Edge ensures that autonomous behaviors are predictable, auditable, and reproducible in the most demanding real-world conditions.',
    features: [
      'Sub-millisecond latency message passing',
      'Static JSON configuration for deployment',
      'Shared-memory communication architecture',
      'Auditable deployment pipelines'
    ],
    kpis: [
      { label: 'Latency', value: '<1ms' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Deploy Time', value: '<30s' }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    id: 'pilot',
    name: 'NEXUS PILOT',
    tagline: 'Autonomy Behavior Catalog',
    description: 'The autonomy catalog featuring pre-built behaviors for multi-agent teaming, motion planning, and adaptive mission execution. Enables single operators to manage hundreds of autonomous systems.',
    features: [
      '95%+ classification accuracy',
      'Real-time obstacle avoidance',
      'Multi-agent swarm coordination',
      'Intent-to-Task decomposition'
    ],
    kpis: [
      { label: 'Accuracy', value: '95%+' },
      { label: 'Agents', value: '100+' },
      { label: 'Response', value: '20ms' }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'forge',
    name: 'NEXUS FORGE',
    tagline: 'Simulation & Testing Suite',
    description: 'A unified suite of tools for the simulation, testing, and analysis of autonomous missions. Reduces development cycles from years to weeks with high-fidelity physics simulation.',
    features: [
      'High-fidelity physics engine',
      'Hardware-in-the-loop testing',
      'Scenario generation & replay',
      'Performance analytics dashboard'
    ],
    kpis: [
      { label: 'Dev Cycle', value: 'Weeks' },
      { label: 'Fidelity', value: '99.5%' },
      { label: 'Tests/Day', value: '10K+' }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: 'commander',
    name: 'NEXUS COMMANDER',
    tagline: 'Command & Control Toolkit',
    description: 'The C2 toolkit that interfaces autonomous platforms with existing fleet management systems. Provides a single-pane-of-glass common operating picture for decision dominance.',
    features: [
      'Bi-directional API integration',
      'Real-time common operating picture',
      'Multi-domain sensor fusion',
      'Threat assessment automation'
    ],
    kpis: [
      { label: 'Sensors', value: '1000+' },
      { label: 'Refresh', value: '60Hz' },
      { label: 'Integrations', value: '50+' }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

export default function Software() {
  const [activePillar, setActivePillar] = useState('edge');
  const activeData = softwarePillars.find(p => p.id === activePillar);

  return (
    <section id="software" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 border border-cyan-500/30 rounded-full bg-cyan-500/10">
            <span className="text-cyan-400 font-mono text-xs tracking-[0.2em] uppercase">AI-Powered Battle Management</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            NEXUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">OPERATING SYSTEM</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-zinc-400 leading-relaxed">
            A distributed, AI-powered battle management platform designed to accelerate complex kill chains 
            by translating raw sensor data into actionable intelligence at the tactical edge.
          </p>
        </div>

        {/* Pillar Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {softwarePillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActivePillar(pillar.id)}
              className={`px-4 py-2 font-mono text-sm uppercase tracking-wider transition-all rounded-sm border ${
                activePillar === pillar.id
                  ? 'bg-cyan-500 text-white border-cyan-500'
                  : 'bg-transparent text-zinc-400 border-zinc-700 hover:border-cyan-500/50 hover:text-cyan-400'
              }`}
            >
              {pillar.name.replace('NEXUS ', '')}
            </button>
          ))}
        </div>

        {/* Active Pillar Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info Panel */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-sm border border-cyan-500/30">
                {activeData.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{activeData.name}</h3>
                <p className="text-cyan-400 font-mono text-sm">{activeData.tagline}</p>
              </div>
            </div>
            
            <p className="text-zinc-300 mb-8 leading-relaxed">{activeData.description}</p>
            
            <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-4">Core Capabilities</h4>
            <ul className="space-y-3 mb-8">
              {activeData.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-cyan-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-4">
              {activeData.kpis.map((kpi, i) => (
                <div key={i} className="text-center p-4 bg-zinc-800/50 border border-zinc-700">
                  <div className="text-2xl font-mono font-bold text-cyan-400">{kpi.value}</div>
                  <div className="text-xs uppercase tracking-wider text-zinc-500 mt-1">{kpi.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 backdrop-blur-sm">
            <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-6">System Architecture</h4>
            
            <div className="relative">
              {/* Architecture SVG */}
              <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none">
                {/* Central Node - Nexus Core */}
                <circle cx="200" cy="150" r="40" fill="url(#coreGradient)" stroke="#22d3ee" strokeWidth="2" />
                <text x="200" y="145" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">NEXUS</text>
                <text x="200" y="158" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace">CORE</text>

                {/* Edge Nodes */}
                <g className="animate-pulse">
                  <circle cx="80" cy="80" r="25" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
                  <text x="80" y="83" textAnchor="middle" fill="#a1a1aa" fontSize="8" fontFamily="monospace">EDGE</text>
                  <line x1="100" y1="95" x2="165" y2="125" stroke="#22d3ee" strokeWidth="1" strokeDasharray="4 2" />
                </g>

                <g className="animate-pulse" style={{ animationDelay: '0.2s' }}>
                  <circle cx="320" cy="80" r="25" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
                  <text x="320" y="83" textAnchor="middle" fill="#a1a1aa" fontSize="8" fontFamily="monospace">PILOT</text>
                  <line x1="300" y1="95" x2="235" y2="125" stroke="#22d3ee" strokeWidth="1" strokeDasharray="4 2" />
                </g>

                <g className="animate-pulse" style={{ animationDelay: '0.4s' }}>
                  <circle cx="80" cy="220" r="25" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
                  <text x="80" y="223" textAnchor="middle" fill="#a1a1aa" fontSize="8" fontFamily="monospace">FORGE</text>
                  <line x1="100" y1="205" x2="165" y2="175" stroke="#22d3ee" strokeWidth="1" strokeDasharray="4 2" />
                </g>

                <g className="animate-pulse" style={{ animationDelay: '0.6s' }}>
                  <circle cx="320" cy="220" r="25" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
                  <text x="320" y="223" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="monospace">COMMANDER</text>
                  <line x1="300" y1="205" x2="235" y2="175" stroke="#22d3ee" strokeWidth="1" strokeDasharray="4 2" />
                </g>

                {/* Sensor Nodes */}
                {[40, 120, 200, 280, 360].map((x, i) => (
                  <g key={i}>
                    <rect x={x - 8} y="270" width="16" height="16" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
                    <text x={x} y="295" textAnchor="middle" fill="#71717a" fontSize="6" fontFamily="monospace">S{i + 1}</text>
                  </g>
                ))}

                {/* Gradient Definition */}
                <defs>
                  <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0891b2" />
                    <stop offset="100%" stopColor="#164e63" />
                  </radialGradient>
                </defs>
              </svg>

              {/* Legend */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                  <span className="text-zinc-400">Core Processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-zinc-800 border border-zinc-600"></div>
                  <span className="text-zinc-400">Sensor Inputs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-cyan-500" style={{ borderStyle: 'dashed' }}></div>
                  <span className="text-zinc-400">Data Flow</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-800 border border-zinc-600"></div>
                  <span className="text-zinc-400">Software Modules</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sensor Fusion Section */}
        <div className="mt-16 border-t border-zinc-800 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-4">Sensor Fusion & Intent-to-Task</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Nexus OS breaks down high-level operator intent into discrete, executable tasks distributed 
                across a fleet of unmanned assets, enabling single operators to manage hundreds of autonomous systems.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'X-Band Radar', status: 'ACTIVE', detail: 'Maritime detection' },
                { label: 'EO/IR Systems', status: 'ACTIVE', detail: 'Long-range stabilized' },
                { label: 'AIS Integration', status: 'LINKED', detail: 'Vessel identification' },
                { label: 'RF Signature Analysis', status: 'PROCESSING', detail: 'Threat classification' }
              ].map((sensor, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 p-4 flex items-center justify-between">
                  <div>
                    <div className="font-mono text-sm font-bold text-white">{sensor.label}</div>
                    <div className="text-xs text-zinc-500">{sensor.detail}</div>
                  </div>
                  <div className={`text-xs font-mono px-2 py-1 rounded ${
                    sensor.status === 'ACTIVE' ? 'bg-green-500/20 text-green-400' :
                    sensor.status === 'LINKED' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-amber-500/20 text-amber-400'
                  }`}>
                    {sensor.status}
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
