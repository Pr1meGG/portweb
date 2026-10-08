import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Terminal, Heart } from 'lucide-react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(istString);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 border-t-2 border-zinc-800 bg-cyber-dark/95">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-zinc-400">
        {/* Left Info */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="w-6 h-6 rounded bg-cyber-lime text-cyber-dark font-heading font-bold flex items-center justify-center text-xs">
            ⚡
          </div>
          <span className="text-zinc-300 font-semibold">{portfolioData.personal.name}</span>
          <span className="text-zinc-600">|</span>
          <span>Visakhapatnam, IN</span>
          <span className="text-zinc-600">|</span>
          <span className="text-cyber-lime">IST: {time || 'Loading...'}</span>
        </div>

        {/* Center Philosophy */}
        <div className="text-zinc-500 text-center">
          Crafted with React, Tailwind & Zero-Slop Standard
        </div>

        {/* Right Back to Top */}
        <div>
          <button
            onClick={scrollToTop}
            className="btn-brutal px-3 py-1.5 rounded bg-zinc-900 border border-zinc-700 hover:border-cyber-lime text-zinc-200 hover:text-cyber-lime flex items-center gap-1.5 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
