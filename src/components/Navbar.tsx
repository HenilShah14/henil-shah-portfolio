import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Simple active section detection
      const sections = ['home', 'about', 'skills', 'journey', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#050505]/75 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.7)]'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0066FF] to-[#00E5FF] flex items-center justify-center text-black font-mono font-bold text-sm shadow-[0_0_15px_rgba(0,229,255,0.4)] group-hover:shadow-[0_0_25px_rgba(0,229,255,0.7)] transition-shadow">
              H
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold tracking-wider text-white text-base sm:text-lg flex items-center gap-1.5">
                {personalInfo.displayName.toUpperCase()}
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </span>
              <span className="text-[10px] font-mono text-gray-400 tracking-wider hidden sm:block">
                BTECH DEVELOPER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 tracking-wide ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/30 to-cyan-500/30 border border-cyan-400/40 -z-10 shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA: Connect */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/30 hover:border-cyan-400/60 shadow-[0_0_15px_rgba(0,229,255,0.15)] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Glass Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 pt-24 px-6 pb-8 bg-[#050505]/95 backdrop-blur-2xl border-b border-white/10 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-2">
              <div className="pb-4 mb-2 border-b border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>NAVIGATION</span>
                <span className="text-cyan-400">STATUS: ONLINE</span>
              </div>

              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="flex items-center justify-between py-3.5 px-4 rounded-xl text-lg font-heading font-medium text-white hover:bg-white/[0.06] hover:text-cyan-400 border border-transparent hover:border-cyan-500/20 transition-all"
                >
                  <span>{item.name}</span>
                  <span className="font-mono text-xs text-gray-500">0{idx + 1}</span>
                </motion.a>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>HENIL SHAH • 1ST YEAR BTECH</span>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-black font-semibold text-center text-sm shadow-lg shadow-cyan-500/25"
              >
                LET&apos;S CONNECT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
