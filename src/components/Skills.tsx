import { useState } from 'react';
import { motion } from 'motion/react';
import { skillsData } from '../data/portfolioData';
import { SkillItem } from '../types';
import {
  Code2,
  Binary,
  FileCode,
  Globe,
  Zap,
  GitBranch,
  Sparkles,
  Layers,
  Search,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Binary,
  Code2,
  FileCode,
  Globe,
  Zap,
  GitBranch,
  Sparkles,
};

const categories = ['ALL', 'PROGRAMMING', 'WEB', 'TOOLS', 'EXPLORING'] as const;
type CategoryFilter = (typeof categories)[number];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('ALL');

  const filteredSkills = skillsData.filter((skill) =>
    activeCategory === 'ALL' ? true : skill.category === activeCategory
  );

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-cyan-400 mb-3 uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight mb-4">
            Skills &amp; Technical Interests
          </h2>

          <p className="max-w-2xl text-gray-400 text-sm sm:text-base font-normal">
            Languages, web fundamentals, and developer tools I am actively studying and applying.
            Honestly presented with zero inflated metrics.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,229,255,0.15)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.04] border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <SkillCard key={skill.name} skill={skill} index={idx} />
          ))}
        </div>

        {/* Bottom Transparent Stage Note */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center max-w-xl mx-auto flex items-center justify-center gap-2 text-xs font-mono text-gray-400">
          <Search className="w-3.5 h-3.5 text-cyan-400" />
          <span>Continuous study: Currently solving algorithmic challenges in C++ &amp; Python</span>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: SkillItem; index: number }) {
  const Icon = iconMap[skill.iconName] || Code2;
  const isExploring = skill.category === 'EXPLORING';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ y: -5, scale: 1.01 }}
      className={`group relative p-6 rounded-2xl backdrop-blur-md transition-all duration-300 border ${
        isExploring
          ? 'bg-gradient-to-b from-indigo-950/20 to-black/40 border-indigo-500/30 hover:border-indigo-400/60 shadow-[0_0_20px_rgba(139,92,246,0.1)]'
          : 'bg-white/[0.03] hover:bg-white/[0.05] border-white/[0.08] hover:border-cyan-400/40 hover:shadow-[0_10px_25px_-5px_rgba(0,229,255,0.15)]'
      }`}
    >
      {/* Subtle corner tech light */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

      {/* Top Header: Icon and Category Tag */}
      <div className="flex items-center justify-between mb-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-inner ${
            isExploring
              ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 group-hover:bg-indigo-500/20 group-hover:scale-110'
              : 'bg-white/[0.04] text-cyan-400 border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/30 group-hover:scale-110'
          }`}
        >
          <Icon className="w-6 h-6" />
        </div>

        <div className="flex flex-col items-end">
          <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400">
            {skill.category}
          </span>
          <span
            className={`font-mono text-[11px] font-medium px-2 py-0.5 rounded-full mt-1 ${
              isExploring
                ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-400/30'
                : 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
            }`}
          >
            {skill.status}
          </span>
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
        {skill.name}
      </h3>

      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
        {skill.description}
      </p>

      {/* Subtle bottom indicator */}
      <div className="mt-5 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-gray-500">
        <span className="group-hover:text-gray-300 transition-colors">TRACK: FOUNDATIONAL</span>
        <span className="text-cyan-400/60 opacity-0 group-hover:opacity-100 transition-opacity">
          ACTIVE
        </span>
      </div>
    </motion.div>
  );
}
