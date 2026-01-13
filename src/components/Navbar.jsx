import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Software', href: '#software' },
  { label: 'Platforms', href: '#platforms' },
  { label: 'Careers', href: '#careers' },
  { label: 'Company', href: '#company' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll-spy: Track active section
  useEffect(() => {
    const sectionIds = ['capabilities', 'software', 'platforms', 'careers', 'company'];
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0.3, 0.6],
      rootMargin: '-80px 0px -40% 0px'
    });

    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Close menu on navigation
  const handleNavClick = (e, href) => {
    setIsMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <svg className="w-8 h-8 text-zinc-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span className="font-bold text-xl tracking-tighter uppercase font-mono">Absolut<span className="text-cyan-600 dark:text-cyan-400">Defense</span></span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2 text-sm font-medium font-mono uppercase tracking-wide transition-all border-b-2 ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-cyan-600 dark:text-cyan-400 border-cyan-500'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 border-transparent'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="#careers"
                onClick={(e) => handleNavClick(e, '#careers')}
                className="hidden md:block bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-sm text-sm font-bold uppercase tracking-wider hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Join Us
              </a>
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 text-zinc-900 dark:text-white"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Scrim/Backdrop */}
          <div 
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white dark:bg-zinc-900 shadow-2xl border-l border-zinc-200 dark:border-zinc-800 flex flex-col">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
              <span className="font-bold text-lg tracking-tighter uppercase font-mono text-zinc-900 dark:text-white">
                Menu
              </span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex-1 p-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-3 text-base font-mono uppercase tracking-wide transition-colors rounded-sm ${
                    activeSection === link.href.replace('#', '')
                      ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-l-2 border-cyan-500'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            
            {/* Drawer Footer */}
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
              <a
                href="#careers"
                onClick={(e) => handleNavClick(e, '#careers')}
                className="block w-full text-center bg-cyan-600 hover:bg-cyan-500 text-white py-3 font-bold uppercase tracking-wider transition-colors"
              >
                View Open Roles
              </a>
              <div className="mt-4 text-center text-xs text-zinc-500 font-mono">
                Absolut Defense Systems © 2026
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
