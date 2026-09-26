import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Snappy smooth spring physics for trailing cursor
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      );
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      const isInteractive = !!target.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer, .interactive-hover'
      );
      setIsHovered(isInteractive);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Precision Center Dot */}
      <motion.div
        aria-hidden="true"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-transform duration-100 ${
          isHovered
            ? 'w-2 h-2 bg-white scale-125'
            : 'w-2.5 h-2.5 bg-cyan-400 shadow-[0_0_12px_#00E5FF]'
        }`}
      />

      {/* Smooth Trailing Follower Ring */}
      <motion.div
        aria-hidden="true"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className={`fixed top-0 left-0 pointer-events-none z-40 rounded-full transition-all duration-300 ease-out ${
          isHovered
            ? 'w-11 h-11 border border-cyan-400/80 bg-cyan-400/15 backdrop-blur-[1px] shadow-[0_0_20px_rgba(0,229,255,0.4)]'
            : 'w-7 h-7 border border-white/25 bg-transparent'
        }`}
      />
    </>
  );
}
