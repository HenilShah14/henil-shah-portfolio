import { motion } from 'motion/react';
import { futureGoals } from '../data/portfolioData';
import { Hammer, BookOpen, TrendingUp, Compass, Target } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Hammer,
  BookOpen,
  TrendingUp,
};

export default function FutureGoals() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#080A10]/40 border-t border-white/[0.05]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-cyan-400 mb-3 uppercase tracking-widest">
            <Target className="w-3.5 h-3.5" />
            <span>VISION &amp; ASPIRATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight mb-4">
            What&apos;s Next?
          </h2>

          <div className="max-w-2xl p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md mb-2">
            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
              &ldquo;I&apos;m at the beginning of my development journey. My goal is to keep learning,
              build meaningful projects, contribute to the developer community, and gradually grow into
              a skilled software developer.&rdquo;
            </p>
          </div>
        </div>

        {/* 3 Pillar Cards: BUILD, LEARN, GROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {futureGoals.map((goal, idx) => {
            const Icon = iconMap[goal.iconName] || Compass;
            return (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative p-8 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/30 transition-all shadow-inner">
                      <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </div>

                    <span className="font-mono text-xs text-gray-400 font-semibold group-hover:text-cyan-400 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-white mb-2 tracking-wide group-hover:text-cyan-300 transition-colors">
                    {goal.title}
                  </h3>

                  <div className="text-xs font-mono text-cyan-400/90 mb-3 font-medium">
                    {goal.highlight}
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed font-normal">
                    {goal.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>TARGET</span>
                  <span className="text-cyan-400/80 font-medium">ONGOING</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
