import { motion } from 'motion/react';
import { personalInfo, aboutCards } from '../data/portfolioData';
import { BookOpen, Compass, TrendingUp, Terminal, ShieldCheck } from 'lucide-react';

const icons = [BookOpen, Compass, TrendingUp];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#080A10]/50 border-t border-white/[0.05]">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-cyan-400 mb-3 uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" />
            <span>AUTHENTIC PERSPECTIVE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight mb-6">
            About Me
          </h2>

          <div className="max-w-3xl p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#0066FF] to-[#00E5FF]" />
            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed text-center sm:text-left">
              &ldquo;{personalInfo.bio}&rdquo;
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/[0.06] text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Honest First-Year Journey</span>
              </span>
              <span>Degree: B.Tech in Progress</span>
            </div>
          </div>
        </div>

        {/* Three Interactive Pillar Cards: 01 LEARN, 02 EXPLORE, 03 GROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {aboutCards.map((card, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative p-8 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] hover:border-cyan-400/30 transition-all duration-300 backdrop-blur-lg flex flex-col justify-between"
              >
                {/* Top Subtle Number & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-white/20 group-hover:text-cyan-400/60 transition-colors">
                    {card.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/30 transition-all shadow-inner">
                    <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </div>
                </div>

                {/* Card Title & Content */}
                <div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3 tracking-wide group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Subtle bottom edge glow on hover */}
                <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-gray-500 group-hover:text-gray-400 transition-colors">
                  <span>PILLAR {card.number}</span>
                  <span className="text-cyan-400/70 opacity-0 group-hover:opacity-100 transition-opacity">
                    ACTIVE FOCUS
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
