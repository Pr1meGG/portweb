import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Copy, Check, Terminal, Sparkles, Flame, ArrowDown, ExternalLink, Code2, Layers, ShieldCheck, MapPin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-16 px-4 overflow-hidden">
      {/* Background Subtle Cyber Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyber-lime/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-cyber-pink/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Floating Top Status Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyber-card border-2 border-cyber-lime text-cyber-lime font-mono text-xs font-semibold shadow-brutal-lime">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI SYSTEMS & AGENT ORCHESTRATION</span>
          </div>

          <a
            href={`https://github.com/${portfolioData.personal.githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyber-card border-2 border-cyber-pink text-cyber-pink font-mono text-xs font-semibold shadow-brutal-pink hover:bg-cyber-pink/10 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GITHUB: @{portfolioData.personal.githubUsername}</span>
          </a>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyber-card border-2 border-cyber-cyan text-cyber-cyan font-mono text-xs font-semibold shadow-brutal-cyan">
            <MapPin className="w-3.5 h-3.5" />
            <span>VIZAG, INDIA (IST)</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="relative mb-6">
          <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.08]">
            Building <span className="text-cyber-lime">AI-Native Systems</span> with deterministic reliability.
          </h1>
        </div>

        {/* Bio & Value Proposition */}
        <div className="max-w-3xl mb-10 space-y-3">
          <p className="text-lg sm:text-xl text-zinc-200 font-body leading-relaxed">
            I'm <strong className="text-white font-semibold">{portfolioData.personal.name} ({portfolioData.personal.handle})</strong>. I architect autonomous agent harnesses, Python/FastAPI backends, and deterministic data pipelines that constrain and verify AI behavior.
          </p>
          <div className="flex items-center gap-2 text-sm text-cyber-textMuted font-mono">
            <Terminal className="w-4 h-4 text-cyber-lime shrink-0" />
            <span>Graduated 2026 (B.Tech AI/ML) · Seeking AI Systems & Software Engineering opportunities.</span>
          </div>
        </div>

        {/* Action Button Strip */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          {/* Explore Projects Button */}
          <a
            href="#projects"
            className="btn-brutal px-6 py-3 rounded-xl bg-cyber-lime text-cyber-dark font-heading font-bold text-base flex items-center gap-2 border-2 border-black shadow-brutal-white hover:bg-white transition-all"
          >
            <Code2 className="w-5 h-5 stroke-[2.5]" />
            <span>Explore Systems</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          {/* GitHub Profile Button */}
          <a
            href={`https://github.com/${portfolioData.personal.githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="btn-brutal px-5 py-3 rounded-xl bg-zinc-900 text-white font-mono text-sm font-semibold flex items-center gap-2 border-2 border-zinc-700 shadow-brutal-cyan hover:border-cyber-cyan transition-all"
          >
            <Github className="w-4 h-4 text-cyber-cyan" />
            <span>GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </a>

          {/* Copy Email Button with Visual Feedback */}
          <button
            onClick={handleCopyEmail}
            className="btn-brutal px-5 py-3 rounded-xl bg-cyber-card text-white font-mono text-sm font-semibold flex items-center gap-2.5 border-2 border-zinc-700 shadow-brutal-pink hover:border-cyber-pink transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-cyber-lime" />
                <span className="text-cyber-lime font-bold">Email Copied! 🎉</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-cyber-pink" />
                <span>Copy Email ({portfolioData.personal.email})</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Y2K Stat Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {portfolioData.stats.map((stat, index) => {
            const shadowClass =
              stat.color === 'lime' ? 'border-cyber-lime shadow-brutal-lime text-cyber-lime' :
              stat.color === 'pink' ? 'border-cyber-pink shadow-brutal-pink text-cyber-pink' :
              stat.color === 'cyan' ? 'border-cyber-cyan shadow-brutal-cyan text-cyber-cyan' :
              'border-cyber-yellow shadow-brutal-yellow text-cyber-yellow';

            return (
              <div
                key={index}
                className={`p-4 rounded-xl bg-cyber-card border-2 ${shadowClass} transition-transform hover:-translate-y-1`}
              >
                <div className="font-heading font-bold text-3xl sm:text-4xl mb-1">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-zinc-400 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
