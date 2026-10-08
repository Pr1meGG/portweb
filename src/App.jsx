import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import ProjectsSection from './components/ProjectsSection';
import HiringPillars from './components/HiringPillars';
import TechArsenal from './components/TechArsenal';
import AboutPhilosophy from './components/AboutPhilosophy';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cyber-dark text-zinc-100 selection:bg-cyber-lime selection:text-cyber-dark overflow-x-hidden">
      {/* Floating Y2K Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <MarqueeTicker />
        <ProjectsSection />
        <HiringPillars />
        <TechArsenal />
        <AboutPhilosophy />
        <ContactSection />
      </main>

      {/* Retro Terminal Footer */}
      <Footer />
    </div>
  );
}
