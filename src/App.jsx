import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Projects from './components/Projects';
import Careers from './components/Careers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300 font-sans selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Projects />
      <Careers />
      <Footer />
    </div>
  );
}

export default App;
