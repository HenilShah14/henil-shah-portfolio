import { motion } from 'motion/react';
import { exploringTopics } from '../data/portfolioData';
import {
  Cpu,
  Terminal,
  Layout,
  BrainCircuit,
  Layers,
  Compass,
  Activity,
  Code2,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Terminal,
  Layout,
  BrainCircuit,
  Layers,
  Compass,
};

export default function CurrentlyExploring() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-cyan-400 mb-3 uppercase tracking-widest">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>DEVELOPER RADAR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight mb-4">
            Currently Exploring
          </h2>

          <p className="max-w-xl text-gray-400 text-sm sm:text-base font-normal">
            Active domains of study, curiosity, and technical exploration outside classroom lectures.
          </p>
        </div>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exploringTopics.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Code2;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 sm:p-7 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Header */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/15 group-hover:border-cyan-400/30 transition-all shadow-inner">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/5">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed font-normal">
                    {item.focus}
                  </p>
                </div>

                {/* Dashboard-style Status Bar */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <span>ACTIVE STUDY</span>
                  </div>
                  <span className="text-gray-400 font-medium">MOD 0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
