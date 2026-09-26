import { motion } from 'motion/react';
import { learningJourney } from '../data/portfolioData';
import { JourneyStep } from '../types';
import { Milestone, CheckCircle2, CircleDot, ArrowRight, Compass } from 'lucide-react';

export default function LearningJourney() {
  return (
    <section id="journey" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#080A10]/40 border-t border-white/[0.05]">
      {/* Background glow node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-cyan-400 mb-3 uppercase tracking-widest">
            <Milestone className="w-3.5 h-3.5" />
            <span>PROGRESS TIMELINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight mb-4">
            My Learning Journey
          </h2>

          <p className="max-w-xl text-gray-400 text-sm sm:text-base font-normal">
            Step by step progression from first principles in code to modern systems and emerging technologies.
          </p>
        </div>

        {/* Interactive Connected Timeline */}
        <div className="relative">
          {/* Vertical Connecting Glowing Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#0066FF] via-[#00E5FF] to-indigo-500/40 opacity-70 shadow-[0_0_12px_#00E5FF]" />

          <div className="space-y-10 sm:space-y-12">
            {learningJourney.map((step, idx) => (
              <TimelineCard key={step.step} step={step} index={idx} />
            ))}
          </div>
        </div>

        {/* Milestone Footer Callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.08] text-xs font-mono text-gray-400">
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>Currently focused on Phase 03 &amp; 04 while solving foundational problems</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ step, index }: { step: JourneyStep; index: number }) {
  const isEven = index % 2 === 0;
  const isCurrent = step.status === 'current';
  const isUpcoming = step.status === 'upcoming';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
        isEven ? 'sm:flex-row-reverse' : ''
      }`}
    >
      {/* Center Glowing Node Icon */}
      <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#050505] border-2 border-cyan-400 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(0,229,255,0.6)]">
        {step.status === 'completed' ? (
          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
        ) : isCurrent ? (
          <CircleDot className="w-4 h-4 text-cyan-300 animate-pulse" />
        ) : (
          <div className="w-2 h-2 rounded-full bg-indigo-400/60" />
        )}
      </div>

      {/* Card Body - Alternating left and right on desktop, aligned on mobile */}
      <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
        <div
          className={`p-6 sm:p-7 rounded-2xl backdrop-blur-lg border transition-all duration-300 ${
            isCurrent
              ? 'bg-white/[0.05] border-cyan-400/40 shadow-[0_0_30px_rgba(0,229,255,0.15)]'
              : isUpcoming
              ? 'bg-white/[0.02] border-white/[0.06] opacity-90'
              : 'bg-white/[0.03] border-white/[0.08] hover:border-cyan-400/30'
          }`}
        >
          {/* Step Tag & Index */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="font-mono text-2xl font-bold text-white/30 tracking-tight">
              {step.step}
            </span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                {step.tag}
              </span>
              {isCurrent && (
                <span className="font-mono text-[10px] text-amber-300 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 animate-pulse">
                  IN PROGRESS
                </span>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-2 flex items-center gap-2">
            <span>{step.title}</span>
            {isCurrent && <ArrowRight className="w-4 h-4 text-cyan-400" />}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-300 leading-relaxed font-normal">
            {step.description}
          </p>

          {/* Micro Status Footer */}
          <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-gray-400">
            <span>MILESTONE {step.step}</span>
            <span className="uppercase text-gray-400">
              STATUS: {step.status}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
