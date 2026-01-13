import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <svg className="w-8 h-8 text-zinc-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <span className="font-bold text-xl tracking-tighter uppercase font-mono">Absolut<span className="text-cyan-600 dark:text-cyan-400">Defense</span></span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Capabilities', 'Platforms', 'Software', 'Company'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium font-mono uppercase tracking-wide transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
             <button className="hidden md:block bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-sm text-sm font-bold uppercase tracking-wider hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
              Contact
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
