import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Sparkles, Terminal, Mail, ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: "#projects", label: "systems" },
    { href: "#impact", label: "impact" },
    { href: "#skills", label: "arsenal" },
    { href: "#philosophy", label: "manifesto" },
    { href: "#contact", label: "connect" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-200">
      <div className={`max-w-6xl mx-auto flex items-center justify-between px-5 py-3 rounded-xl border-2 transition-all duration-300 ${
        scrolled
          ? 'bg-cyber-card/90 backdrop-blur-md border-cyber-border shadow-brutal-lime'
          : 'bg-cyber-card/60 backdrop-blur-sm border-zinc-800 shadow-brutal-dark'
      }`}>
        {/* Logo / Handle */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-white text-cyber-dark font-heading font-bold text-lg flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_#fff] group-hover:rotate-6 transition-transform overflow-hidden">
            <img src="/YUTA.jpeg" alt="Nitz" className="block w-full h-full object-cover rounded-md" />
          </div>
          <div>
            <span className="font-heading font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
              {portfolioData.personal.handle}
              <span className="text-xs px-2 py-0.5 rounded-full bg-cyber-pink/20 text-cyber-pink border border-cyber-pink/50 font-mono font-normal">
                v2026
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs text-zinc-300">
          {links.map(l => (
            <a key={l.href} href={l.href} className="px-3 py-1.5 rounded-lg hover:text-cyber-lime hover:bg-cyber-dark/80 transition-colors">{l.label}</a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden btn-brutal p-1.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-200"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="absolute top-full right-4 mt-2 rounded-xl bg-cyber-card border-2 border-zinc-700 shadow-brutal-lime py-2 px-4 flex flex-col gap-1 font-mono text-xs text-zinc-300 md:hidden">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-lg hover:text-cyber-lime hover:bg-cyber-dark/80 transition-colors">{l.label}</a>
            ))}
          </div>
        )}

        {/* CTA & GitHub Link */}
        <div className="flex items-center gap-2.5">
          <a
            href={`https://github.com/${portfolioData.personal.githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="btn-brutal hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-mono border border-zinc-700 hover:border-zinc-500 transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-cyber-lime" />
            <span>@{portfolioData.personal.githubUsername}</span>
          </a>

          <a
            href="#contact"
            className="btn-brutal px-4 py-1.5 rounded-lg bg-cyber-lime text-cyber-dark font-heading font-bold text-sm flex items-center gap-1.5 border-2 border-black shadow-brutal-white hover:bg-white transition-colors"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </header>
  );
}
