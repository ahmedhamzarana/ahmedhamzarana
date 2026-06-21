import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 280, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target || !(target instanceof Element)) {
        setIsHoveringClickable(false);
        return;
      }
      
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        (typeof target.closest === 'function' && (
          target.closest('button') || 
          target.closest('a') ||
          target.closest('[role="button"]')
        )) ||
        (target instanceof HTMLElement && target.style && target.style.cursor === 'pointer');
        
      setIsHoveringClickable(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50">
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHoveringClickable ? 2.2 : 1,
          borderColor: isHoveringClickable ? 'rgba(255, 214, 10, 0.6)' : 'rgba(255, 214, 10, 0.18)',
          backgroundColor: isHoveringClickable ? 'rgba(255, 214, 10, 0.08)' : 'rgba(255, 214, 10, 0)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className="absolute w-8 h-8 rounded-full border border-[#FFD60A]/15 pointer-events-none flex items-center justify-center shadow-[0_0_15px_rgba(255,214,10,0.06)]"
      />

      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHoveringClickable ? 0.6 : 1,
        }}
        className="absolute w-2 h-2 rounded-full bg-[#FFD60A] shadow-[0_0_12px_#FFD60A] pointer-events-none"
      />
    </div>
  );
}
