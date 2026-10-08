import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Cpu, ShieldCheck, Zap, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HiringPillars() {
  const getIcon = (iconName, color) => {
    const iconClass = "w-6 h-6";
    switch (iconName) {
      case 'Cpu':
        return <Cpu className={`${iconClass} text-cyber-lime`} />;
      case 'ShieldCheck':
        return <ShieldCheck className={`${iconClass} text-cyber-pink`} />;
      case 'Zap':
        return <Zap className={`${iconClass} text-cyber-cyan`} />;
      default:
        return <Layers className={`${iconClass} text-cyber-yellow`} />;
    }
  };

  const getBorderColor = (color) => {
    switch (color) {
      case 'lime':
        return 'border-cyber-lime shadow-brutal-lime hover:border-white';
      case 'pink':
        return 'border-cyber-pink shadow-brutal-pink hover:border-white';
      case 'cyan':
        return 'border-cyber-cyan shadow-brutal-cyan hover:border-white';
      default:
        return 'border-cyber-yellow shadow-brutal-yellow hover:border-white';
    }
  };

  return (
    <section id="impact" className="py-16 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-10 pb-4 border-b-2 border-zinc-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyber-lime/10 text-cyber-lime font-mono text-xs font-bold border border-cyber-lime/40 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>WHAT I BRING TO YOUR TEAM</span>
        </div>
        <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight">
          Engineered for <span className="text-cyber-lime">High-Output</span> Impact
        </h2>
        <p className="font-body text-zinc-400 text-sm mt-2 max-w-2xl">
          I don't just prompt AI to write code — I build structured agentic harnesses, deterministic safety guardrails, and systems that hold up under verification.
        </p>
      </div>

      {/* 4 Core Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.hiringPillars.map((pillar, idx) => (
          <div
            key={idx}
            className={`p-6 sm:p-8 rounded-2xl bg-cyber-card border-2 ${getBorderColor(pillar.color)} transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyber-dark border-2 border-zinc-700 flex items-center justify-center shadow-[2px_2px_0px_0px_#fff]">
                  {getIcon(pillar.icon, pillar.color)}
                </div>
                <span className="font-mono text-xs text-zinc-500 font-bold">
                  PILLAR [{String(idx + 1).padStart(2, '0')}]
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-white mb-1">
                {pillar.title}
              </h3>
              <p className="font-mono text-xs text-cyber-pink font-semibold mb-3">
                {pillar.subtitle}
              </p>
              <p className="text-zinc-300 font-body text-sm leading-relaxed mb-6">
                {pillar.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-mono text-zinc-400">
              <CheckCircle2 className="w-4 h-4 text-cyber-lime" />
              <span>Verified through real codebase artifacts</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
