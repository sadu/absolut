import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <span className="font-bold text-xl tracking-tighter uppercase font-mono">Absolut<span className="text-cyan-500">Defense</span></span>
            </div>
            <p className="text-zinc-400 text-sm max-w-sm">
              Pioneering the future of defense with advanced autonomy, sensor fusion, and kinetic capabilities. Redefining deterrence for a complex world.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Air Dominance</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Maritime Systems</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Ground Robotics</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">C4ISR</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Newsroom</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Investor Relations</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-900 text-center text-xs text-zinc-600 font-mono">
            &copy; {new Date().getFullYear()} Absolut Defense Systems. All rights reserved. <br/>
            RESTRICTED ACCESS // AUTHORIZED PERSONNEL ONLY
        </div>
      </div>
    </footer>
  );
}
