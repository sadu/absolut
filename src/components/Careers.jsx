import React, { useState } from 'react';

const departments = [
  { 
    title: "Software Engineering", 
    roles: 12,
    positions: ['Autonomy Engineer', 'Backend Systems', 'ML/AI Specialist', 'DevSecOps'],
    description: 'Build the cognitive layer of autonomous systems with Nexus OS.'
  },
  { 
    title: "Autonomous Systems", 
    roles: 8,
    positions: ['Robotics Engineer', 'Perception Lead', 'Motion Planning', 'Simulation'],
    description: 'Design and deploy intelligent platforms across all domains.'
  },
  { 
    title: "Hardware Design", 
    roles: 5,
    positions: ['Aerospace Engineer', 'Electrical Systems', 'Propulsion Lead'],
    description: 'Engineer the physical platforms that define modern warfare.'
  },
  { 
    title: "Field Operations", 
    roles: 4,
    positions: ['Flight Operations', 'Systems Integration', 'Field Service'],
    description: 'Deploy and maintain systems in real-world operational environments.'
  }
];

const benefits = [
  { icon: '🏥', title: 'Healthcare', desc: 'Comprehensive medical, dental, vision' },
  { icon: '📈', title: '401(k) Match', desc: 'Up to 6% employer contribution' },
  { icon: '🎖️', title: 'Veteran Support', desc: 'Dedicated transition programs' },
  { icon: '📚', title: 'Learning', desc: '$10K annual education stipend' },
];

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState(null);
  const [showApplication, setShowApplication] = useState(false);

  return (
    <section id="careers" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background Image/Texure overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            BUILD THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              IMPOSSIBLE
            </span>
          </h2>
          <p className="text-xl text-zinc-400 mb-8 font-light leading-relaxed">
            We are looking for engineers, designers, and strategists who aren't afraid to challenge the status quo. 
            Join us in building the technologies that will safeguard the free world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setShowApplication(!showApplication)}
              className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold uppercase tracking-widest transition-colors rounded-sm"
            >
              View Open Roles
            </button>
            <a 
              href="#company"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('company')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/50 text-white font-bold uppercase tracking-widest transition-colors rounded-sm backdrop-blur-sm text-center"
            >
              Life at Absolut
            </a>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-zinc-800/50 border border-zinc-700 p-4 text-center backdrop-blur-sm">
              <div className="text-2xl mb-2">{benefit.icon}</div>
              <div className="font-mono text-sm font-bold text-white">{benefit.title}</div>
              <div className="text-xs text-zinc-400 mt-1">{benefit.desc}</div>
            </div>
          ))}
        </div>

        {/* Departments Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {departments.map((dept, i) => (
            <div 
              key={i} 
              className={`border p-6 group cursor-pointer transition-all ${
                selectedDept === i 
                  ? 'border-cyan-500 bg-cyan-500/10' 
                  : 'border-zinc-800 hover:border-zinc-600 bg-zinc-800/30'
              }`}
              onClick={() => setSelectedDept(selectedDept === i ? null : i)}
            >
              <h3 className={`text-lg font-bold font-mono mb-2 transition-colors ${
                selectedDept === i ? 'text-cyan-400' : 'group-hover:text-cyan-400'
              }`}>
                {dept.title}
              </h3>
              <div className="flex justify-between items-center text-zinc-500 text-sm mb-3">
                <span>{dept.roles} Open Positions</span>
                <span className={`transition-transform ${selectedDept === i ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </div>
              
              {selectedDept === i && (
                <div className="pt-3 border-t border-zinc-700 animate-fadeIn">
                  <p className="text-xs text-zinc-400 mb-3">{dept.description}</p>
                  <div className="space-y-1">
                    {dept.positions.map((pos, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                        <span className="text-zinc-300">{pos}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Application Modal Trigger */}
        {showApplication && (
          <div className="mt-8 p-6 bg-zinc-800 border border-zinc-700">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-bold font-mono">Apply Now</h4>
              <button 
                onClick={() => setShowApplication(false)}
                className="text-zinc-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-zinc-400 mb-4">
              Ready to join the mission? Submit your application to careers@absolutdefense.com or explore our open positions.
            </p>
            <div className="flex gap-4">
              <a 
                href="mailto:careers@absolutdefense.com"
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-mono uppercase tracking-wider transition-colors"
              >
                Email Resume
              </a>
              <button 
                onClick={() => setShowApplication(false)}
                className="px-4 py-2 border border-zinc-600 hover:border-zinc-400 text-zinc-300 text-sm font-mono uppercase tracking-wider transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
