import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ShieldAlert, Zap, Terminal, Sparkles, CheckCheck } from 'lucide-react';

export default function AboutPhilosophy() {
  return (
    <section id="philosophy" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="p-8 sm:p-10 rounded-2xl bg-cyber-cardAlt border-2 border-cyber-cyan shadow-brutal-cyan">
        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyber-cyan/10 text-cyber-cyan font-mono text-xs font-bold border border-cyber-cyan/40 mb-3">
          <Zap className="w-3.5 h-3.5" />
          <span>MANIFESTO</span>
        </div>

        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-2">
          {portfolioData.philosophy.heading}
        </h2>

        <p className="text-cyber-lime font-mono text-base font-semibold mb-8 italic">
          "{portfolioData.philosophy.quote}"
        </p>

        {/* 3 Core Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.philosophy.points.map((point, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-cyber-dark/80 border border-zinc-700/80 hover:border-cyber-cyan transition-colors"
            >
              <div className="flex items-center gap-2 font-heading font-bold text-lg text-white mb-2">
                <CheckCheck className="w-5 h-5 text-cyber-cyan shrink-0" />
                <span>{point.title}</span>
              </div>
              <p className="text-zinc-300 text-sm font-body leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Operator Context Note */}
        <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping"></span>
            <span>Operating System: AI Orchestration + Deterministic Python & TS</span>
          </div>
          <div className="text-zinc-400">
            Targeting: AI Engineering & Production AI Systems
          </div>
        </div>
      </div>
    </section>
  );
}
