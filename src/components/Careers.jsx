import React from 'react';

export default function Careers() {
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
            <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold uppercase tracking-widest transition-colors rounded-sm">
              View Open Roles
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/50 text-white font-bold uppercase tracking-widest transition-colors rounded-sm backdrop-blur-sm">
              Life at Absolut
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: "Software Engineering", roles: 12 },
                { title: "Autonomous Systems", roles: 8 },
                { title: "Hardware Design", roles: 5 }
            ].map((dept, i) => (
                <div key={i} className="border-t border-zinc-800 pt-6 group cursor-pointer hover:border-cyan-500/50 transition-colors">
                    <h3 className="text-xl font-bold font-mono mb-2 group-hover:text-cyan-400 transition-colors">{dept.title}</h3>
                    <div className="flex justify-between items-center text-zinc-500 text-sm">
                        <span>{dept.roles} Open Positions</span>
                        <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
