import React from 'react';
import { ExternalLink, Github, Sparkles, CheckCircle2, ChevronRight, Layers, ShieldCheck } from 'lucide-react';

export default function ProjectCard({ project, onInspect }) {
  const getBadgeStyle = (color) => {
    switch (color) {
      case 'lime':
        return 'bg-cyber-lime/10 text-cyber-lime border-cyber-lime';
      case 'pink':
        return 'bg-cyber-pink/10 text-cyber-pink border-cyber-pink';
      case 'cyan':
        return 'bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan';
      case 'yellow':
        return 'bg-cyber-yellow/10 text-cyber-yellow border-cyber-yellow';
      default:
        return 'bg-zinc-800 text-zinc-300 border-zinc-700';
    }
  };

  const getShadowStyle = (color) => {
    switch (color) {
      case 'lime':
        return 'hover:shadow-brutal-lime border-zinc-800 hover:border-cyber-lime';
      case 'pink':
        return 'hover:shadow-brutal-pink border-zinc-800 hover:border-cyber-pink';
      case 'cyan':
        return 'hover:shadow-brutal-cyan border-zinc-800 hover:border-cyber-cyan';
      case 'yellow':
        return 'hover:shadow-brutal-yellow border-zinc-800 hover:border-cyber-yellow';
      default:
        return 'hover:shadow-brutal-white border-zinc-800 hover:border-white';
    }
  };

  const hasLiveDemo = project.liveUrl && project.liveUrl !== "#";

  return (
    <div className={`group rounded-xl bg-cyber-card border-2 transition-all duration-200 overflow-hidden flex flex-col justify-between ${getShadowStyle(project.badgeColor)}`}>
      {/* Retro OS Window Titlebar */}
      <div className="window-bar px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
          <span className="ml-2 font-mono text-[11px] text-zinc-400 font-medium truncate max-w-[180px]">
            {project.id}.sys
          </span>
        </div>

        <div className="flex items-center gap-2">
          {project.verified && (
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/40">
              <ShieldCheck className="w-3 h-3" />
              <span>VERIFIED</span>
            </span>
          )}
          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider border ${getBadgeStyle(project.badgeColor)}`}>
            {project.badge}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Tagline */}
          <h3 className="font-heading font-bold text-2xl text-white group-hover:text-cyber-lime transition-colors mb-1 flex items-center gap-2">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-cyber-pink font-semibold mb-3">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-zinc-300 text-sm leading-relaxed mb-4 font-body">
            {project.description}
          </p>

          {/* Key Architecture Highlight */}
          <div className="p-3 rounded-lg bg-cyber-dark/80 border border-zinc-800 mb-5 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-cyber-lime shrink-0 mt-0.5" />
            <span className="text-xs font-mono text-zinc-300">
              <strong className="text-white">Core Strength:</strong> {project.highlight}
            </span>
          </div>
        </div>

        <div>
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((techItem, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded bg-zinc-900 border border-zinc-700/80 text-zinc-300 font-mono text-[11px]"
              >
                {techItem}
              </span>
            ))}
          </div>

          {/* Action Links & Deep Dive Button */}
          <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2">
            <button
              onClick={() => onInspect(project)}
              className="btn-brutal inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-dark hover:bg-zinc-800 text-cyber-cyan border border-cyber-cyan/50 hover:border-cyber-cyan text-xs font-mono font-bold shadow-sm transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>Inspect Architecture</span>
            </button>

            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-brutal inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-mono border border-zinc-700 hover:border-zinc-500 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              {hasLiveDemo ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-brutal inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyber-lime text-cyber-dark font-mono text-xs font-bold border border-black shadow-[2px_2px_0px_0px_#fff] hover:bg-white transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping"></span>
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
