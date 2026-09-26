import { personalInfo } from '../data/portfolioData';
import { Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 bg-[#050505] border-t border-white/[0.08] text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Personal Motto */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-heading font-bold text-lg text-white tracking-wider">
              {personalInfo.fullName.toUpperCase()}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </div>
          <p className="text-xs font-mono text-gray-500">
            &ldquo;Learning. Building. Growing.&rdquo;
          </p>
        </div>

        {/* Contact & Utility Actions */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${personalInfo.emailPlaceholder}`}
            aria-label="Email Henil Shah"
            className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 text-gray-300 hover:text-cyan-400 flex items-center justify-center transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 text-gray-300 hover:text-white flex items-center justify-center transition-all ml-1"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/[0.05] text-center text-xs font-mono text-gray-400">
        &copy; 2026 {personalInfo.fullName}. Built with curiosity and code.
      </div>
    </footer>
  );
}
