import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Software from './components/Software';
import Projects from './components/Projects';
import Telemetry from './components/Telemetry';
import Careers from './components/Careers';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import GovernanceModal from './components/GovernanceModal';

function App() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [governanceModalOpen, setGovernanceModalOpen] = useState(false);
  const [selectedGovernance, setSelectedGovernance] = useState(null);

  const handleOpenProjectModal = (projectId) => {
    setSelectedProject(projectId);
    setProjectModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setProjectModalOpen(false);
    setSelectedProject(null);
  };

  const handleOpenGovernanceModal = (type) => {
    setSelectedGovernance(type);
    setGovernanceModalOpen(true);
  };

  const handleCloseGovernanceModal = () => {
    setGovernanceModalOpen(false);
    setSelectedGovernance(null);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300 font-sans selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Software />
      <Projects onOpenModal={handleOpenProjectModal} />
      <Telemetry />
      <Careers />
      <Footer onOpenGovernance={handleOpenGovernanceModal} />
      
      {/* Modals */}
      <ProjectModal 
        projectId={selectedProject} 
        isOpen={projectModalOpen} 
        onClose={handleCloseProjectModal} 
      />
      <GovernanceModal 
        type={selectedGovernance} 
        isOpen={governanceModalOpen} 
        onClose={handleCloseGovernanceModal} 
      />
    </div>
  );
}

export default App;
