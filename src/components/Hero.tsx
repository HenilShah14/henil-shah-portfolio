import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowDown,
  Sparkles,
  Send,
  Compass,
  GraduationCap,
  Code2,
  Rocket,
} from 'lucide-react';
import { personalInfo, rotatingTitles } from '../data/portfolioData';
import HeroThreeScene from './HeroThreeScene';

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  // Static profile photo — fixed asset, no upload/cache logic
  const photoSrc = `${import.meta.env.BASE_URL}henil-profile.png`;

  // Subtle title cycler
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050505]"
    >
      {/* 3D Visual Environment (Positioned behind content, non-blocking) */}
      <HeroThreeScene className="z-0" />

      {/* Subtle tech grid overlay */}
      <div className="absolute inset-0 tech-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Radial depth light gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-transparent blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto flex flex-col items-center text-center mb-16"
        >
          {/* Circular Profile Photo Container with Neon Border */}
          <div
            className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden p-1.5 bg-gradient-to-b from-cyan-400/50 via-blue-500/30 to-purple-600/40 border-2 border-cyan-400/50 shadow-[0_0_35px_rgba(0,229,255,0.35)] ring-2 ring-blue-500/25 mb-8 hover:scale-105 transition-transform duration-500 relative select-none"
            style={{ borderRadius: '50%', overflow: 'hidden' }}
          >
            {/* Inner Circular Area with Dark Background */}
            <div
              className="w-full h-full rounded-full overflow-hidden relative bg-[#080A10] flex items-center justify-center"
              style={{ borderRadius: '50%', overflow: 'hidden' }}
            >
              <img
                src={photoSrc}
                alt="Henil Shah"
                referrerPolicy="no-referrer"
                draggable={false}
                className="w-full h-full object-cover select-none"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: '50%',
                }}
              />
            </div>

            {/* Neon Circular Border Overlay */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none border-2 border-cyan-400/50 ring-2 ring-blue-500/25"
              style={{ borderRadius: '50%', zIndex: 10 }}
            />
          </div>

          {/* Small Label Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs text-gray-300 tracking-widest uppercase">
              HELLO, I&apos;M
            </span>
          </div>

          {/* Main Heading: HENIL SHAH */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4">
            <span className="block font-heading tracking-tight">HENIL SHAH</span>
          </h1>

          {/* Professional Title & Dynamic Role */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6 text-xl sm:text-2xl font-heading text-gray-300">
            <span className="text-cyan-400 font-semibold">{personalInfo.title}</span>
            <span className="text-gray-600">•</span>
            <div className="h-8 sm:h-9 overflow-hidden inline-flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingTitles[titleIndex]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="font-mono text-base sm:text-lg text-indigo-300/90 font-medium px-3 py-0.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20"
                >
                  {rotatingTitles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Tagline */}
          <p className="max-w-2xl text-base sm:text-lg text-gray-400 font-normal leading-relaxed mb-8">
            &ldquo;{personalInfo.tagline}&rdquo;
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
            {/* EXPLORE MY JOURNEY */}
            <button
              onClick={() => scrollToSection('journey')}
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-semibold tracking-wider text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_25px_rgba(0,229,255,0.35)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer w-full sm:w-auto"
            >
              <Compass className="w-4 h-4 text-black transition-transform group-hover:rotate-45" />
              <span>EXPLORE MY JOURNEY</span>
            </button>

            {/* LET'S CONNECT */}
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-semibold tracking-wider text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,229,255,0.2)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer w-full sm:w-auto"
            >
              <Send className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span>LET&apos;S CONNECT</span>
            </button>
          </div>

          {/* Quick Status Subline */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] w-full max-w-xl flex items-center justify-between text-xs font-mono text-gray-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>STAGE: 1ST YEAR BTECH</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>FOCUS: CORE CS &amp; CODE</span>
            </div>
          </div>
        </motion.div>

        {/* 3 Core Highlight Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-5xl">
          {/* 1. Academic Track */}
          <div className="group p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] hover:border-cyan-400/30 transition-all duration-300 backdrop-blur-md flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1 font-semibold">
              STAGE
            </span>
            <h3 className="text-white font-semibold text-sm sm:text-base font-heading">
              1st Year B.Tech
            </h3>
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">
              Computer Science &amp; Engineering in progress
            </p>
          </div>

          {/* 2. Primary Focus */}
          <div className="group p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] hover:border-indigo-400/30 transition-all duration-300 backdrop-blur-md flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider mb-1 font-semibold">
              FOCUS
            </span>
            <h3 className="text-white font-semibold text-sm sm:text-base font-heading">
              Core Foundations
            </h3>
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">
              Programming fundamentals, logic &amp; web crafting
            </p>
          </div>

          {/* 3. Mindset & Drive */}
          <div className="group p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] hover:border-emerald-400/30 transition-all duration-300 backdrop-blur-md flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-110 transition-transform">
              <Rocket className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1 font-semibold">
              TRAJECTORY
            </span>
            <h3 className="text-white font-semibold text-sm sm:text-base font-heading">
              Curious &amp; Consistent
            </h3>
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">
              Exploring AI/ML, building projects, and learning daily
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-1 focus:outline-none cursor-pointer"
          aria-label="Scroll to About section"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">SCROLL</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-cyan-400" />
          </motion.div>
        </button>
      </div>
    </section>
  );
}

