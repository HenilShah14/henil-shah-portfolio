import { useState } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, Send, MessageSquare, Sparkles, Clock, Globe } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.emailPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      {/* Background cyan/electric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-cyan-400 mb-3 uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>DIRECT INBOX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight mb-4">
            Let&apos;s Connect
          </h2>

          <p className="max-w-xl text-gray-400 text-sm sm:text-base font-normal leading-relaxed">
            &ldquo;I&apos;m always open to learning, exploring new ideas, and connecting with peers, developers, and mentors.&rdquo;
          </p>
        </div>

        {/* Central Glassmorphic Direct Email Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative p-8 sm:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/[0.09] shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden"
        >
          {/* Subtle Top Border Glow Gradient */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent opacity-60" />

          {/* Main Email Box */}
          <div className="flex flex-col items-center text-center">
            {/* Mail Icon Avatar */}
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(0,229,255,0.2)]">
              <Mail className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1 font-semibold">
              PRIMARY COMMUNICATION
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-2">
              Send a Direct Message
            </h3>

            <p className="text-sm text-gray-400 max-w-md mb-6 leading-relaxed">
              Feel free to reach out for project ideas, learning exchanges, technical queries, or just to say hello!
            </p>

            {/* Email Address Pill Display */}
            <div className="w-full max-w-md p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between gap-3 mb-6">
              <span className="font-mono text-sm sm:text-base text-gray-200 truncate pl-2">
                {personalInfo.emailPlaceholder}
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-all cursor-pointer shrink-0"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-md">
              <a
                href={`mailto:${personalInfo.emailPlaceholder}`}
                className="w-full py-3.5 px-6 rounded-xl font-mono text-xs sm:text-sm font-semibold tracking-wider text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_25px_rgba(0,229,255,0.35)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>OPEN EMAIL CLIENT</span>
              </a>
            </div>

            {/* Meta Features Row */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-gray-400">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Open for Discussions</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Location: India</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
