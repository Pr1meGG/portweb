import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Cpu, Terminal, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';

export default function TechArsenal() {
  const getCategoryStyles = (color) => {
    switch (color) {
      case 'lime':
        return {
          border: 'border-cyber-lime',
          shadow: 'shadow-brutal-lime',
          text: 'text-cyber-lime',
          chipBg: 'bg-cyber-lime/10 border-cyber-lime/30 text-zinc-100 hover:border-cyber-lime',
        };
      case 'pink':
        return {
          border: 'border-cyber-pink',
          shadow: 'shadow-brutal-pink',
          text: 'text-cyber-pink',
          chipBg: 'bg-cyber-pink/10 border-cyber-pink/30 text-zinc-100 hover:border-cyber-pink',
        };
      case 'cyan':
        return {
          border: 'border-cyber-cyan',
          shadow: 'shadow-brutal-cyan',
          text: 'text-cyber-cyan',
          chipBg: 'bg-cyber-cyan/10 border-cyber-cyan/30 text-zinc-100 hover:border-cyber-cyan',
        };
      case 'yellow':
        return {
          border: 'border-cyber-yellow',
          shadow: 'shadow-brutal-yellow',
          text: 'text-cyber-yellow',
          chipBg: 'bg-cyber-yellow/10 border-cyber-yellow/30 text-zinc-100 hover:border-cyber-yellow',
        };
      default:
        return {
          border: 'border-zinc-700',
          shadow: 'shadow-brutal-white',
          text: 'text-white',
          chipBg: 'bg-zinc-800 border-zinc-700 text-zinc-200',
        };
    }
  };

  return (
    <section id="skills" className="py-16 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-10 pb-4 border-b-2 border-zinc-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyber-pink/10 text-cyber-pink font-mono text-xs font-bold border border-cyber-pink/40 mb-2">
          <Cpu className="w-3.5 h-3.5" />
          <span>ARSENAL & CORE CAPABILITIES</span>
        </div>
        <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight">
          Tech Stack & <span className="text-cyber-pink">Tooling</span>
        </h2>
        <p className="font-body text-zinc-400 text-sm mt-2 max-w-2xl">
          Real tools used in built projects — prioritizing deterministic execution, strong type bounds, and AI agent harnesses.
        </p>
      </div>

      {/* Grid of 4 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.skills.map((skillGroup, idx) => {
          const style = getCategoryStyles(skillGroup.color);

          return (
            <div
              key={idx}
              className={`p-6 rounded-xl bg-cyber-card border-2 ${style.border} ${style.shadow} transition-transform hover:-translate-y-1`}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
                <h3 className={`font-heading font-bold text-xl ${style.text} tracking-tight`}>
                  {skillGroup.category}
                </h3>
                <span className="font-mono text-xs text-zinc-500">
                  [{String(idx + 1).padStart(2, '0')}]
                </span>
              </div>

              {/* Chips Grid */}
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className={`px-3 py-1.5 rounded-lg border font-mono text-xs transition-all duration-150 flex items-center gap-1.5 ${style.chipBg}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
