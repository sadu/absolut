import React, { useState } from 'react';

const projectDetails = {
  ghosthawk: {
    name: 'UH-80 GHOSTHAWK',
    type: 'Stealth Multi-Role Transport',
    tagline: 'Silent Insertion. Absolute Precision.',
    description: 'The Ghosthawk is a stealth-optimized variant of the traditional utility helicopter, designed to operate in high-threat environments where signature management is paramount. Its acoustic signature reduction and RAM coating ensure minimal detection from ground-based sensors.',
    image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=800&auto=format&fit=crop&q=80',
    specs: [
      { label: 'Role', value: 'Stealth Multi-Role Transport', detail: 'Insertion/Extraction in contested zones' },
      { label: 'Crew', value: '2 Pilots, 2 Gunners', detail: 'High-threat tactical operations' },
      { label: 'Passenger Capacity', value: '8-12 Personnel', detail: 'Standard squad-level deployment' },
      { label: 'Stealth Technology', value: 'Low-Acoustic Rotors; RAM Coating', detail: 'Minimal detection signature' },
      { label: 'Armament', value: '2x 7.62mm Rotary Guns', detail: 'Defensive suppressive fire' },
      { label: 'Max Speed', value: '180 knots', detail: 'Dash capability' },
      { label: 'Range', value: '500 nm', detail: 'Combat radius' },
      { label: 'Service Ceiling', value: '19,000 ft', detail: 'High-altitude capable' },
    ],
    features: [
      'Integrated with Nexus Commander for real-time C2',
      'Active vibration dampening for crew comfort',
      'Multi-spectral sensor suite with IR/EO capabilities',
      'Autonomous flight mode via Nexus Pilot integration'
    ],
    color: 'from-cyan-500 to-blue-600'
  },
  titan: {
    name: 'TITAN',
    type: 'High-Endurance Autonomous Platform',
    tagline: 'Heavy Lift. Persistent Presence.',
    description: 'The Titan platform serves as the workhorse for autonomous logistics and persistent surveillance. Built with industrial-grade propulsion systems, it carries specialized sensors or kinetic payloads across diverse mission sets with unmatched endurance.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&auto=format&fit=crop&q=80',
    specs: [
      { label: 'MTOW', value: '450 kg', detail: 'Maximum Take-Off Weight' },
      { label: 'Max Payload', value: '120 kg', detail: 'Specialized sensors or cargo' },
      { label: 'Propulsion', value: 'Brushless Axial Flux Motors', detail: 'High-efficiency, high-torque' },
      { label: 'Power System', value: '800V Integrated', detail: 'Automotive-grade reliability' },
      { label: 'Endurance', value: '15+ Hours', detail: 'EFI-enhanced range' },
      { label: 'Max Speed', value: '120 km/h', detail: 'Transit speed' },
      { label: 'Operating Altitude', value: '0-15,000 ft', detail: 'Multi-environment' },
      { label: 'Comm Range', value: '200+ km', detail: 'SATCOM backup' },
    ],
    features: [
      'Fully autonomous via Nexus Edge runtime',
      'Modular payload bay for mission flexibility',
      'All-weather operation capability',
      'VTOL with fixed-wing hybrid efficiency'
    ],
    color: 'from-amber-500 to-orange-600'
  },
  aegis: {
    name: 'AEGIS',
    type: 'Integrated Air Defense System',
    tagline: 'Networked Defense. Absolute Protection.',
    description: 'The Aegis system represents the defensive shield of the Absolut ecosystem, providing a networked layer of protection against aerial and ground-based threats. It integrates seamlessly with Titan sensor data to create a multi-layered defense network.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80',
    specs: [
      { label: 'Radar Detection (Air)', value: '9 km', detail: 'Against aerial targets' },
      { label: 'Radar Detection (Ground)', value: '6 km', detail: 'Against ground targets' },
      { label: 'Armament', value: 'Twin 35mm Autocannons', detail: '680 HE-Tracer rounds' },
      { label: 'Interceptors', value: 'Titan-AA Missiles', detail: 'High-altitude interdiction' },
      { label: 'Reaction Time', value: '<2 seconds', detail: 'From detection to engagement' },
      { label: 'Tracking Capacity', value: '100+ targets', detail: 'Simultaneous tracking' },
      { label: 'Defense Zones', value: '360° coverage', detail: 'Full hemisphere protection' },
      { label: 'Integration', value: 'Nexus Commander', detail: 'Automated threat response' },
    ],
    features: [
      'Automated threat assessment and prioritization',
      'Coordinated response via Nexus OS',
      'Multi-layer engagement envelope',
      'Friend-or-foe identification system'
    ],
    color: 'from-purple-500 to-pink-600'
  }
};

export default function ProjectModal({ projectId, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');
  
  if (!isOpen || !projectId) return null;
  
  const project = projectDetails[projectId.toLowerCase()];
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-zinc-950/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-zinc-700 shadow-2xl">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-zinc-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header Image */}
        <div className="relative h-48 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <div className="text-xs font-mono text-white/70 uppercase tracking-wider mb-2">{project.type}</div>
            <h2 className="text-3xl font-black text-white tracking-tight">{project.name}</h2>
            <p className="text-white/80 font-light mt-1">{project.tagline}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-zinc-800">
          <div className="flex gap-1 px-6">
            {['overview', 'specifications', 'integration'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 font-mono text-sm uppercase tracking-wider transition-colors border-b-2 ${
                  activeTab === tab
                    ? 'text-cyan-400 border-cyan-400'
                    : 'text-zinc-500 border-transparent hover:text-zinc-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <p className="text-zinc-300 leading-relaxed">{project.description}</p>
              
              <div>
                <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-4">Key Capabilities</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-zinc-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-zinc-800">
                {project.specs.slice(0, 4).map((spec, i) => (
                  <div key={i} className="text-center p-4 bg-zinc-800/50 border border-zinc-700">
                    <div className="text-lg font-mono font-bold text-white">{spec.value}</div>
                    <div className="text-xs uppercase tracking-wider text-zinc-500 mt-1">{spec.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="space-y-4">
              <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-4">Technical Datasheet</h4>
              <div className="border border-zinc-800">
                <table className="w-full">
                  <thead>
                    <tr className="bg-zinc-800/50">
                      <th className="text-left p-3 text-xs font-mono text-zinc-400 uppercase">Parameter</th>
                      <th className="text-left p-3 text-xs font-mono text-zinc-400 uppercase">Specification</th>
                      <th className="text-left p-3 text-xs font-mono text-zinc-400 uppercase hidden md:table-cell">Context</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.specs.map((spec, i) => (
                      <tr key={i} className="border-t border-zinc-800">
                        <td className="p-3 text-sm text-zinc-400">{spec.label}</td>
                        <td className="p-3 text-sm font-mono text-white">{spec.value}</td>
                        <td className="p-3 text-sm text-zinc-500 hidden md:table-cell">{spec.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'integration' && (
            <div className="space-y-6">
              <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-4">Nexus OS Integration</h4>
              <p className="text-zinc-300 leading-relaxed">
                The {project.name} is fully integrated with the Nexus Operating System, enabling autonomous operation, 
                real-time sensor fusion, and seamless coordination with other Absolut platforms.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { module: 'Nexus Edge', status: 'Integrated', desc: 'Deterministic runtime environment' },
                  { module: 'Nexus Pilot', status: 'Integrated', desc: 'Autonomy behavior catalog' },
                  { module: 'Nexus Forge', status: 'Compatible', desc: 'Simulation & testing suite' },
                  { module: 'Nexus Commander', status: 'Integrated', desc: 'C2 toolkit interface' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-zinc-800/50 border border-zinc-700 flex items-center justify-between">
                    <div>
                      <div className="font-mono text-white font-bold">{item.module}</div>
                      <div className="text-xs text-zinc-500">{item.desc}</div>
                    </div>
                    <span className={`text-xs font-mono px-2 py-1 rounded ${
                      item.status === 'Integrated' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-zinc-800 flex justify-between items-center">
          <div className="text-xs font-mono text-zinc-600">
            CLASSIFICATION: UNCLASSIFIED // DISTRIBUTION: PUBLIC
          </div>
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-sm uppercase tracking-wider transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
