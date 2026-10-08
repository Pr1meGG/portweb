import React from 'react';

export default function MarqueeTicker() {
  const items = [
    "⚡ OPS & AI SYSTEMS",
    "🎯 DETERMINISTIC PIPELINES",
    "👾 AI AGENT ORCHESTRATION",
    "🚀 ZERO AI SLOP",
    "🛡️ AST VERIFICATION",
    "🔥 DETERMINISTIC GUARDRAILS",
    "⚡ OPS & AI SYSTEMS",
    "🎯 DETERMINISTIC PIPELINES",
    "👾 AI AGENT ORCHESTRATION",
    "🚀 ZERO AI SLOP",
    "🛡️ AST VERIFICATION",
    "🔥 DETERMINISTIC GUARDRAILS",
  ];

  return (
    <div className="w-full bg-cyber-lime text-cyber-dark py-2.5 overflow-hidden border-y-2 border-black font-heading font-black text-sm tracking-wider uppercase select-none my-8">
      <div className="flex w-max animate-marquee space-x-8 will-change-transform">
        {items.map((item, idx) => (
          <span key={idx} className="flex items-center gap-3">
            <span>{item}</span>
            <span className="text-black font-mono">///</span>
          </span>
        ))}
      </div>
    </div>
  );
}
