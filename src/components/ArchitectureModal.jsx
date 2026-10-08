import React from 'react';
import { X, CheckCircle2, ArrowRight, Github, ExternalLink, Cpu, Layers, ShieldCheck, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ArchitectureModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const arch = project.architecture || {
    problem: "Solving real-world system complexities with deterministic architecture.",
    solution: project.description,
    pipeline: [],
    tradeoffs: "Optimized for performance, testability, and deterministic output.",
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-cyber-dark/85 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.3 }}
          className="relative w-full max-w-3xl rounded-2xl bg-cyber-card border-2 border-cyber-lime shadow-brutal-lime z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Retro OS Window Titlebar */}
          <div className="window-bar px-5 py-3 flex items-center justify-between border-b-2 border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/90 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/90 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/90 inline-block"></span>
              <span className="ml-3 font-mono text-xs text-zinc-300 font-bold uppercase tracking-wider">
                ARCH_INSPECTOR · {project.id}.spec
              </span>
            </div>

            <button
              onClick={onClose}
              className="btn-brutal px-2 py-1 rounded bg-zinc-800 hover:bg-red-500 text-zinc-300 hover:text-white font-mono text-xs border border-zinc-700 transition-colors flex items-center gap-1"
            >
              <span>ESC</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {/* Header & Badges */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-zinc-800">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-cyber-lime/10 text-cyber-lime border border-cyber-lime/40 mb-2 inline-block">
                  {project.badge}
                </span>
                <h3 className="font-heading font-bold text-3xl text-white">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-cyber-pink mt-1">
                  {project.tagline}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-brutal inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-mono border border-zinc-700"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-cyber-dark border border-zinc-800">
                <div className="flex items-center gap-2 text-cyber-pink font-mono text-xs font-bold mb-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>THE PROBLEM</span>
                </div>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-body">
                  {arch.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cyber-dark border border-zinc-800">
                <div className="flex items-center gap-2 text-cyber-lime font-mono text-xs font-bold mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>THE ARCHITECTURE SOLUTION</span>
                </div>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-body">
                  {arch.solution}
                </p>
              </div>
            </div>

            {/* Visual Step-by-Step Pipeline */}
            {arch.pipeline && arch.pipeline.length > 0 && (
              <div>
                <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs font-bold mb-3 uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>Data Flow & Execution Pipeline</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {arch.pipeline.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-cyber-dark/90 border border-zinc-700/80 hover:border-cyber-cyan transition-colors relative"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-heading font-bold text-sm text-white">
                          {step.name}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-cyber-cyan/10 text-cyber-cyan font-mono text-[10px] font-bold border border-cyber-cyan/30">
                          STAGE {step.step}
                        </span>
                      </div>
                      <p className="text-zinc-400 font-mono text-xs leading-normal">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tradeoffs & Engineering Decisions */}
            <div className="p-4 rounded-xl bg-cyber-cardAlt border border-cyber-yellow/40">
              <div className="font-mono text-xs font-bold text-cyber-yellow mb-1.5 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>KEY ARCHITECTURAL TRADEOFF</span>
              </div>
              <p className="text-zinc-300 text-xs font-body leading-relaxed">
                {arch.tradeoffs}
              </p>
            </div>

            {/* Tech Stack List */}
            <div>
              <span className="font-mono text-xs text-zinc-500 block mb-2 uppercase tracking-wider">
                Technologies Employed
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700 text-zinc-300 font-mono text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-cyber-dark border-t border-zinc-800 flex items-center justify-between">
            <span className="font-mono text-[11px] text-zinc-500">
              Deterministic verification · Zero slop
            </span>
            <button
              onClick={onClose}
              className="btn-brutal px-4 py-1.5 rounded-lg bg-cyber-lime text-cyber-dark font-heading font-bold text-xs border border-black shadow-[2px_2px_0px_0px_#fff]"
            >
              Close Inspector
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
