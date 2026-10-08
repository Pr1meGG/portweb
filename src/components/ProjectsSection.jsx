import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ArchitectureModal from './ArchitectureModal';
import { FolderGit2, Sparkles, Layers, Terminal } from 'lucide-react';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = portfolioData.projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'flagship') return project.featured;
    if (filter === 'ai') return project.tech.some(t => t.includes('Agent') || t.includes('LLM') || t.includes('AST'));
    if (filter === 'backend') return project.tech.includes('Python') || project.tech.includes('FastAPI') || project.tech.includes('Flask');
    return true;
  });

  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b-2 border-zinc-800 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyber-lime/10 text-cyber-lime font-mono text-xs font-bold border border-cyber-lime/40 mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>SELECTED ENGINEERING ARTIFACTS</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Featured <span className="text-cyber-lime">Systems</span> & Builds
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          <button
            onClick={() => setFilter('all')}
            className={`btn-brutal px-3 py-1.5 rounded-lg border-2 font-semibold transition-all ${
              filter === 'all'
                ? 'bg-cyber-lime text-cyber-dark border-black shadow-[2px_2px_0px_0px_#fff]'
                : 'bg-cyber-card text-zinc-400 border-zinc-800 hover:border-zinc-600'
            }`}
          >
            All ({portfolioData.projects.length})
          </button>
          <button
            onClick={() => setFilter('flagship')}
            className={`btn-brutal px-3 py-1.5 rounded-lg border-2 font-semibold transition-all ${
              filter === 'flagship'
                ? 'bg-cyber-pink text-white border-black shadow-[2px_2px_0px_0px_#fff]'
                : 'bg-cyber-card text-zinc-400 border-zinc-800 hover:border-zinc-600'
            }`}
          >
            Flagships (1)
          </button>
          <button
            onClick={() => setFilter('ai')}
            className={`btn-brutal px-3 py-1.5 rounded-lg border-2 font-semibold transition-all ${
              filter === 'ai'
                ? 'bg-cyber-cyan text-cyber-dark border-black shadow-[2px_2px_0px_0px_#fff]'
                : 'bg-cyber-card text-zinc-400 border-zinc-800 hover:border-zinc-600'
            }`}
          >
            AI & Agents
          </button>
          <button
            onClick={() => setFilter('backend')}
            className={`btn-brutal px-3 py-1.5 rounded-lg border-2 font-semibold transition-all ${
              filter === 'backend'
                ? 'bg-cyber-yellow text-cyber-dark border-black shadow-[2px_2px_0px_0px_#fff]'
                : 'bg-cyber-card text-zinc-400 border-zinc-800 hover:border-zinc-600'
            }`}
          >
            Python & Backend
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onInspect={(p) => setActiveProject(p)}
          />
        ))}
      </div>

      {/* Architecture Deep Dive Modal */}
      <ArchitectureModal
        project={activeProject}
        isOpen={!!activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
