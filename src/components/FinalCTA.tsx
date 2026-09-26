import { motion } from 'motion/react';
import { Send, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#080A10] border-t border-white/[0.05] overflow-hidden">
      {/* Cinematic ambient background glow rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] sm:w-[800px] h-[350px] bg-gradient-to-r from-[#0066FF]/15 via-[#00E5FF]/15 to-[#8B5CF6]/15 blur-3xl rounded-full opacity-60" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-cyan-400 mb-6 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LOOKING AHEAD</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight mb-6 leading-tight max-w-3xl">
            LET&apos;S BUILD SOMETHING MEANINGFUL SOMEDAY.
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-gray-400 font-normal mb-10 max-w-xl">
            &ldquo;Every developer starts somewhere. This is my beginning.&rdquo;
          </p>

          {/* Action Button */}
          <button
            onClick={scrollToContact}
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-mono text-sm font-semibold tracking-wider text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_45px_rgba(0,229,255,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <span>GET IN TOUCH</span>
            <Send className="w-4 h-4 text-black transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
