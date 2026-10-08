import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Copy, Check, Send, Github, Linkedin, Twitter, ArrowUpRight, MessageSquareCode } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [msgSent, setMsgSent] = useState(false);
  const [quickMsg, setQuickMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendQuickNote = (e) => {
    e.preventDefault();
    if (!quickMsg.trim()) return;
    const subject = encodeURIComponent("Let's connect / Project Discussion");
    const body = encodeURIComponent(quickMsg);
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
    setMsgSent(true);
  };

  const getSocialIcon = (name) => {
    switch (name) {
      case 'GitHub':
        return <Github className="w-5 h-5" />;
      case 'LinkedIn':
        return <Linkedin className="w-5 h-5" />;
      case 'Twitter / X':
        return <Twitter className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="rounded-2xl bg-cyber-card border-2 border-cyber-yellow shadow-brutal-yellow p-8 sm:p-12 relative overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyber-yellow/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-3xl">
          {/* Header */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyber-yellow/10 text-cyber-yellow font-mono text-xs font-bold border border-cyber-yellow/40 mb-3">
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>LET'S BUILD SOMETHING RELIABLE</span>
          </div>

          <h2 className="font-heading font-bold text-4xl sm:text-6xl text-white tracking-tight mb-4">
            Connect with <span className="text-cyber-yellow">{portfolioData.personal.handle}</span>.
          </h2>

          <p className="text-zinc-300 font-body text-base sm:text-lg mb-8 leading-relaxed">
            Interested in collaborating, discussing AI systems architecture, or hiring for high-impact software engineering roles? Send a note or reach out directly.
          </p>

          {/* 1-Click Copy Box */}
          <div className="p-4 rounded-xl bg-cyber-dark border-2 border-zinc-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyber-yellow/20 text-cyber-yellow flex items-center justify-center font-mono font-bold border border-cyber-yellow/50">
                @
              </div>
              <div>
                <span className="text-xs text-zinc-400 font-mono block">Direct Inbox</span>
                <span className="font-mono text-sm sm:text-base font-bold text-white selection:bg-cyber-yellow selection:text-black">
                  {portfolioData.personal.email}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="btn-brutal px-4 py-2 rounded-lg bg-cyber-yellow text-cyber-dark font-mono text-xs font-bold flex items-center gap-1.5 border border-black shadow-[2px_2px_0px_0px_#fff] hover:bg-white transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied! 🎉</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="btn-brutal px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs font-semibold flex items-center gap-1 border border-zinc-600 transition-colors"
              >
                <span>Compose</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Note Input */}
          <form onSubmit={handleSendQuickNote} className="mb-8">
            <label className="block font-mono text-xs text-zinc-400 mb-2 font-semibold">
              Drop a quick message (launches your mail client):
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={quickMsg}
                onChange={(e) => setQuickMsg(e.target.value)}
                placeholder="Hey Nitz, saw OpsPulse/ACQR and wanted to discuss..."
                className="flex-1 px-4 py-3 rounded-xl bg-cyber-dark border border-zinc-700 focus:border-cyber-yellow focus:outline-none font-mono text-sm text-white placeholder-zinc-500"
              />
              <button
                type="submit"
                className="btn-brutal px-6 py-3 rounded-xl bg-cyber-lime text-cyber-dark font-heading font-bold text-sm flex items-center justify-center gap-2 border-2 border-black shadow-[2px_2px_0px_0px_#fff] hover:bg-white transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Send Note</span>
              </button>
            </div>
          </form>

          {/* Social Network Grid */}
          <div className="pt-6 border-t border-zinc-800/80">
            <span className="font-mono text-xs text-zinc-500 block mb-3 uppercase tracking-wider">
              Network Links
            </span>
            <div className="flex flex-wrap gap-3">
              {portfolioData.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-brutal px-4 py-2 rounded-lg bg-cyber-dark border border-zinc-700 hover:border-cyber-yellow text-zinc-300 hover:text-white font-mono text-xs flex items-center gap-2 transition-colors shadow-sm"
                >
                  {getSocialIcon(social.name)}
                  <span>{social.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
