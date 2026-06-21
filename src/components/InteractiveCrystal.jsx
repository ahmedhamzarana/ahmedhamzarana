import { useEffect, useRef, useState } from 'react';

export default function InteractiveCrystal() {
  const canvasRef = useRef(null);
  const rotationRef = useRef({ x: 0.5, y: 0.5, z: 0 });
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const mouseHoverRef = useRef({ x: 0, y: 0, active: false });
  const targetRotationRef = useRef({ x: 0.5, y: 0.5, z: 0 });

  // 3D vertices of a beautiful double-pyramid star geodesic shape (like a faceted diamond crystal)
  const baseVertices = [
    // Octahedron/Bipyramid vertices
    { x: 0, y: 1.6, z: 0 },   // Top apex
    { x: 0, y: -1.6, z: 0 },  // Bottom apex
    { x: 1, y: 0, z: 1 },
    { x: -1, y: 0, z: 1 },
    { x: -1, y: 0, z: -1 },
    { x: 1, y: 0, z: -1 },
    // Outer floating orbital vertices for high-tech look
    { x: 1.5, y: 0.5, z: 0 },
    { x: -1.5, y: -0.5, z: 0 },
    { x: 0, y: 0.5, z: 1.5 },
    { x: 0, y: -0.5, z: -1.5 },
  ];

  // Connection edges to draw neon wireframe lines
  const edges = [
    [0, 2], [0, 3], [0, 4], [0, 5], // Top py
    [1, 2], [1, 3], [1, 4], [1, 5], // Bottom py
    [2, 3], [3, 4], [4, 5], [5, 2], // Mid ring
    // Outer floating connector modules
    [2, 6], [5, 6], [0, 6], [1, 6],
    [3, 7], [4, 7], [0, 7], [1, 7],
    [2, 8], [3, 8], [0, 8], [1, 8],
    [4, 9], [5, 9], [0, 9], [1, 9]
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = 460;
    let height = canvas.height = 460;

    let resizeAnimationFrameId;
    let resizeObserver;
    const handleResizeFallback = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = canvas.width = parent.clientWidth;
        height = canvas.height = parent.clientHeight;
      }
    };

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver((entries) => {
        if (resizeAnimationFrameId) cancelAnimationFrame(resizeAnimationFrameId);
        resizeAnimationFrameId = requestAnimationFrame(() => {
          for (const entry of entries) {
            const w = Math.floor(entry.contentRect.width);
            const h = Math.floor(entry.contentRect.height);
            if (w > 0 && h > 0 && (canvas.width !== w || canvas.height !== h)) {
              width = canvas.width = w;
              height = canvas.height = h;
            }
          }
        });
      });
      resizeObserver.observe(canvas.parentElement || document.body);
    } else {
      window.addEventListener('resize', handleResizeFallback);
    }

    // Track mouse-hover for gentle magnetic drag / rotational bias
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centX = width / 2;
      const centY = height / 2;
      
      mouseHoverRef.current = {
        x: (x - centX) / (width / 2),
        y: (y - centY) / (height / 2),
        active: true
      };

      if (isDraggingRef.current) {
        const deltaX = e.clientX - previousMousePositionRef.current.x;
        const deltaY = e.clientY - previousMousePositionRef.current.y;

        targetRotationRef.current.y += deltaX * 0.007;
        targetRotationRef.current.x += deltaY * 0.007;

        previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUpOrLeave = () => {
      isDraggingRef.current = false;
      mouseHoverRef.current.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUpOrLeave);

    let angleX = 0.005;
    let angleY = 0.004;
    let pulseAngle = 0;
    let animationFrameId;

    const rotateX = (vertex, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: vertex.x,
        y: vertex.y * cos - vertex.z * sin,
        z: vertex.y * sin + vertex.z * cos
      };
    };

    const rotateY = (vertex, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: vertex.x * cos + vertex.z * sin,
        y: vertex.y,
        z: -vertex.x * sin + vertex.z * cos
      };
    };

    const rotateZ = (vertex, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: vertex.x * cos - vertex.y * sin,
        y: vertex.x * sin + vertex.y * cos,
        z: vertex.z
      };
    };

    // Particles floating around the crystal orb
    const particleCount = 20;
    const orbitalParticles = [];
    for (let i = 0; i < particleCount; i++) {
      orbitalParticles.push({
        angle: Math.random() * Math.PI * 2,
        speed: 0.008 + Math.random() * 0.012,
        radius: 1.6 + Math.random() * 0.8,
        yHeight: (Math.random() - 0.5) * 1.8,
        size: Math.random() * 2 + 1,
        seed: Math.random()
      });
    }

    // Animation Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Auto-rotation when not dragging
      if (!isDraggingRef.current) {
        // Rotate crystal naturally
        targetRotationRef.current.y += angleY;
        targetRotationRef.current.x += angleX * 0.5;

        // Apply magnetic attraction bias if cursor is hovering
        if (mouseHoverRef.current.active) {
          targetRotationRef.current.y += (mouseHoverRef.current.x * 0.08 - targetRotationRef.current.y) * 0.02;
          targetRotationRef.current.x += (mouseHoverRef.current.y * 0.08 - targetRotationRef.current.x) * 0.02;
        }
      }

      // Smooth inertia springs for rotations
      rotationRef.current.x += (targetRotationRef.current.x - rotationRef.current.x) * 0.1;
      rotationRef.current.y += (targetRotationRef.current.y - rotationRef.current.y) * 0.1;
      rotationRef.current.z += (targetRotationRef.current.z - rotationRef.current.z) * 0.1;

      pulseAngle += 0.03;
      const pulseFactor = 1 + Math.sin(pulseAngle) * 0.04; // pulsing scale glow

      const centerX = width / 2;
      const centerY = height / 2;
      const scale = Math.min(width, height) * 0.32 * pulseFactor;

      // Project vertices to 2D
      const projected = baseVertices.map((v) => {
        // 1. Rotate
        let r = rotateY(v, rotationRef.current.y);
        r = rotateX(r, rotationRef.current.x);
        r = rotateZ(r, rotationRef.current.z);

        // 2. Simple perspective projection
        const distance = 4;
        const perspective = distance / (distance - r.z);
        
        return {
          px: centerX + r.x * scale * perspective,
          py: centerY + r.y * scale * perspective,
          zValue: r.z,
          x3d: r.x,
          y3d: r.y
        };
      });

      // Draw subtle ambient orange/yellow radial vector shadow background
      const radGlow = ctx.createRadialGradient(centerX, centerY, scale * 0.1, centerX, centerY, scale * 1.5);
      radGlow.addColorStop(0, 'rgba(255, 214, 10, 0.045)');
      radGlow.addColorStop(0.5, 'rgba(255, 166, 0, 0.01)');
      radGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, scale * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Render glowing aura wire ring
      ctx.strokeStyle = 'rgba(255, 214, 10, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, scale * 1.1, 0, Math.PI * 2);
      ctx.stroke();

      // Draw Edges with Z-Depth transparency mapping
      edges.forEach(([u, v]) => {
        const p1 = projected[u];
        const p2 = projected[v];

        // Map depth to line opacity and thickness
        const avgZ = (p1.zValue + p2.zValue) / 2;
        const opacity = Math.max(0.1, Math.min(0.85, 0.45 + avgZ * 0.25));
        const thickness = Math.max(0.7, Math.min(2.5, 1.45 + avgZ * 0.5));

        // Draw double line (glow effect)
        ctx.strokeStyle = `rgba(255, 214, 10, ${opacity * 0.15})`;
        ctx.lineWidth = thickness * 3.5;
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();

        ctx.strokeStyle = `rgba(255, 214, 10, ${opacity})`;
        ctx.lineWidth = thickness;
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();
      });

      // Draw Joint Nodes
      projected.forEach((p, idx) => {
        const size = idx < 6 ? 4 : 2; // apex vertices larger
        const animGlow = Math.max(0.2, Math.min(0.9, 0.5 + p.zValue * 0.3));

        // Outer glow
        ctx.fillStyle = `rgba(255, 214, 10, ${animGlow * 0.18})`;
        ctx.beginPath();
        ctx.arc(p.px, p.py, size * 2.8, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = `rgba(255, 255, 255, ${animGlow * 0.95})`;
        ctx.beginPath();
        ctx.arc(p.px, p.py, size, 0, Math.PI * 2);
        ctx.fill();

        // Joint cross hair coordinate text (high-tech feel)
        if (idx === 0 && mouseHoverRef.current.active) {
          ctx.fillStyle = 'rgba(255, 214, 10, 0.6)';
          ctx.font = '8px monospace';
          ctx.fillText(`ROT_Y: ${rotationRef.current.y.toFixed(2)}`, p.px + 12, p.py - 6);
        }
      });

      // Update & Draw orbital floating dust particles
      orbitalParticles.forEach((part) => {
        part.angle += part.speed;
        
        // 3D calculation
        const px3d = Math.cos(part.angle) * part.radius;
        const pz3d = Math.sin(part.angle) * part.radius;
        const py3d = part.yHeight + Math.sin(part.angle * 2 + part.seed) * 0.15;

        // Apply rotation matrix
        let r = rotateY({ x: px3d, y: py3d, z: pz3d }, rotationRef.current.y);
        r = rotateX(r, rotationRef.current.x);

        const distance = 4;
        const perspective = distance / (distance - r.z);

        const px = centerX + r.x * scale * perspective;
        const py = centerY + r.y * scale * perspective;

        const pOpacity = Math.max(0.05, Math.min(0.7, 0.35 + r.z * 0.22));

        // Draw glowing particle
        ctx.fillStyle = `rgba(255, 214, 10, ${pOpacity})`;
        ctx.beginPath();
        const pRadius = Math.max(0.2, part.size * (r.z + 1.8));
        ctx.arc(px, py, pRadius, 0, Math.PI * 2);
        ctx.fill();

        // Connected vector trace lines to nodes for extra visual texture
        if (mouseHoverRef.current.active && part.seed > 0.75) {
          const closestNode = projected[0];
          ctx.strokeStyle = `rgba(255, 166, 0, ${pOpacity * 0.18})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(closestNode.px, closestNode.py);
          ctx.stroke();
        }
      });

      // HUD Orbit Circle Label
      ctx.strokeStyle = 'rgba(255, 214, 10, 0.05)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.arc(centerX, centerY, scale * 1.35, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = 'rgba(110, 110, 115, 0.45)';
      ctx.font = '7px monospace';
      ctx.fillText('VERTEX MATRIX MODULE RENDER_V3', centerX - 62, centerY + scale * 1.45);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resizeAnimationFrameId) cancelAnimationFrame(resizeAnimationFrameId);
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', handleResizeFallback);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUpOrLeave);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none cursor-grab active:cursor-grabbing">
      {/* Absolute back halo glow light */}
      <div className="absolute w-72 h-72 bg-yellow-400/5 rounded-full blur-[90px] animate-pulse pointer-events-none z-0" />
      
      {/* Secondary slow rotating technical visual grid lines */}
      <div className="absolute inset-4 border border-dashed border-white/5 rounded-full pointer-events-none animate-[spin_50s_linear_infinite] z-0" />
      <div className="absolute inset-16 border border-dashed border-yellow-500/5 rounded-full pointer-events-none animate-[spin_32s_linear_infinite_reverse] z-0" />
      
      {/* Core interactive HTML5 rendering engine canvas */}
      <canvas
        ref={canvasRef}
        className="relative z-10 w-full h-full max-w-[460px] max-h-[460px] aspect-square block transition-all"
        style={{ filter: 'drop-shadow(0 0 15px rgba(255,214,10,0.12))' }}
      />
    </div>
  );
}
