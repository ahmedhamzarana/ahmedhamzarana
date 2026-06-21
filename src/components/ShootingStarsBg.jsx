import { useEffect, useRef, useState } from 'react';

export default function ShootingStarsBg() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas size handling
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let resizeAnimationFrameId;
    let resizeObserver;
    const handleResizeFallback = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver((entries) => {
        if (resizeAnimationFrameId) cancelAnimationFrame(resizeAnimationFrameId);
        resizeAnimationFrameId = requestAnimationFrame(() => {
          for (const entry of entries) {
            const w = Math.floor(entry.contentRect.width || window.innerWidth);
            const h = Math.floor(entry.contentRect.height || window.innerHeight);
            if (w > 0 && h > 0 && (canvas.width !== w || canvas.height !== h)) {
              width = canvas.width = w;
              height = canvas.height = h;
            }
          }
        });
      });
      resizeObserver.observe(document.body);
    } else {
      window.addEventListener('resize', handleResizeFallback);
    }

    // Initialize floating stars
    const stars = [];
    const maxStars = 80;
    for (let i = 0; i < maxStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.7 + 0.1,
        twinkleSpeed: 0.01 + Math.random() * 0.02,
        twinklePhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
      });
    }

    // Initialize shooting stars
    const shootingStars = [];
    const maxShootingStars = 3;

    const createShootingStar = () => {
      const startOnTop = Math.random() > 0.5;
      return {
        x: startOnTop ? Math.random() * width * 1.2 : width + 50,
        y: startOnTop ? -50 : Math.random() * height * 0.5,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 8 + 6,
        theta: Math.PI * 0.85 + (Math.random() - 0.5) * 0.08,
        opacity: 0,
        width: Math.random() * 1.5 + 1.0,
        delay: Math.random() * 120,
        active: false,
      };
    };

    for (let i = 0; i < maxShootingStars; i++) {
      shootingStars.push(createShootingStar());
    }

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Static / Floating Twinkling Stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0) s.x = width;
        else if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        else if (s.y > height) s.y = 0;

        s.twinklePhase += s.twinkleSpeed;
        const currentOpacity = Math.max(0.1, Math.min(0.9, s.opacity + Math.sin(s.twinklePhase) * 0.2));

        ctx.fillStyle = `rgba(255, 214, 10, ${currentOpacity * 0.7})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw & Update Shooting Stars
      for (let i = 0; i < shootingStars.length; i++) {
        const ss = shootingStars[i];

        if (!ss.active) {
          if (ss.delay > 0) {
            ss.delay--;
          } else {
            ss.active = true;
          }
          continue;
        }

        const vx = ss.speed * Math.cos(ss.theta);
        const vy = ss.speed * Math.sin(ss.theta);

        ss.x += vx;
        ss.y += vy;

        if (ss.opacity < 0.9) {
          ss.opacity += 0.08;
        }

        if (ss.x < -100 || ss.y > height + 100 || ss.x > width + 100) {
          Object.assign(ss, createShootingStar());
          continue;
        }

        const tailX = ss.x - ss.length * Math.cos(ss.theta);
        const tailY = ss.y - ss.length * Math.sin(ss.theta);

        const gradient = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 214, 10, ${ss.opacity})`);
        gradient.addColorStop(0.1, `rgba(255, 214, 10, ${ss.opacity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(255, 166, 0, ${ss.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(255, 214, 10, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = ss.width;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        ctx.fillStyle = `rgba(255, 255, 255, ${ss.opacity * 0.9})`;
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, ss.width * 1.3, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resizeAnimationFrameId) cancelAnimationFrame(resizeAnimationFrameId);
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', handleResizeFallback);
      }
    };
  }, []);

  const mouseGlowStyle = {
    background: `radial-gradient(ellipse 600px 600px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 214, 10, 0.045) 0%, rgba(255, 214, 10, 0) 80%)`,
    position: 'fixed',
    inset: 0,
    pointerEvents: 'none',
    zIndex: 1,
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: '#000000' }}
        aria-hidden="true"
      />
      <div style={mouseGlowStyle} aria-hidden="true" />
      <div className="fixed inset-0 w-full h-full grid-bg opacity-30 pointer-events-none z-0" aria-hidden="true" />
    </>
  );
}
