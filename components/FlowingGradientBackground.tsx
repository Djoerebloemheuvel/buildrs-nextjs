'use client';
import { useEffect, useRef, useMemo, memo } from 'react';

const FlowingGradientBackground = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoize orb configurations to prevent recreation
  const orbConfigs = useMemo(() => [
    { delay: 0, size: '400px', position: { x: '10%', y: '20%' }, colors: ['rgba(6, 182, 212, 0.3)', 'rgba(59, 130, 246, 0.2)'] },
    { delay: 2, size: '300px', position: { x: '70%', y: '10%' }, colors: ['rgba(147, 51, 234, 0.3)', 'rgba(219, 39, 119, 0.2)'] },
    { delay: 4, size: '350px', position: { x: '20%', y: '70%' }, colors: ['rgba(16, 185, 129, 0.3)', 'rgba(6, 182, 212, 0.2)'] },
    { delay: 6, size: '250px', position: { x: '80%', y: '60%' }, colors: ['rgba(249, 115, 22, 0.3)', 'rgba(239, 68, 68, 0.2)'] },
    { delay: 1, size: '200px', position: { x: '50%', y: '40%' }, colors: ['rgba(139, 92, 246, 0.2)', 'rgba(168, 85, 247, 0.1)'] }
  ], []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Optimized orb creation with reduced DOM operations
    const createOrb = (config: typeof orbConfigs[0]) => {
      const orb = document.createElement('div');
      
      // Apply all styles at once to minimize repaints
      Object.assign(orb.style, {
        position: 'absolute',
        width: config.size,
        height: config.size,
        left: config.position.x,
        top: config.position.y,
        background: `radial-gradient(circle, ${config.colors[0]}, ${config.colors[1]}, transparent)`,
        borderRadius: '50%',
        filter: 'blur(48px)', // Use blur(48px) instead of blur-3xl for better performance
        opacity: '0.2',
        animationName: 'pulse',
        animationDuration: `${8 + Math.random() * 4}s`,
        animationDelay: `${config.delay}s`,
        animationIterationCount: 'infinite',
        willChange: 'opacity, transform', // GPU acceleration hint
        transform: 'translateZ(0)' // Force hardware acceleration
      });
      
      container.appendChild(orb);
      return orb;
    };

    // Create orbs
    const orbs = orbConfigs.map(config => createOrb(config));

    return () => {
      orbs.forEach(orb => {
        if (container.contains(orb)) {
          container.removeChild(orb);
        }
      });
    };
  }, [orbConfigs]);

  // Memoized styles to prevent recalculation
  const scanLineStyle = useMemo(() => ({
    animation: 'slideDown 15s linear infinite',
    top: '0%',
    willChange: 'transform'
  }), []);

  const scanLineDelayedStyle = useMemo(() => ({
    animation: 'slideDown 20s linear infinite',
    animationDelay: '5s',
    top: '0%',
    willChange: 'transform'
  }), []);

  return (
    <>
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />
      
      {/* Optimized mesh gradient overlay with GPU acceleration */}
      <div className="absolute inset-0 opacity-30 will-change-transform" style={{ transform: 'translateZ(0)' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-pink-500/10 animate-pulse" style={{ animationDuration: '8s', willChange: 'opacity' }} />
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-blue-500/10 to-orange-500/5 animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s', willChange: 'opacity' }} />
      </div>
      
      {/* Optimized scanlines with reduced opacity for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" style={scanLineStyle} />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" style={scanLineDelayedStyle} />
      </div>
      
      {/* Optimized keyframes with transform3d for GPU acceleration */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideDown {
            0% { transform: translate3d(0, -100vh, 0); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translate3d(0, 100vh, 0); opacity: 0; }
          }
        `
      }} />
    </>
  );
});

FlowingGradientBackground.displayName = 'FlowingGradientBackground';

export default FlowingGradientBackground;
