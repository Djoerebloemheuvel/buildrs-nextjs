
import { memo } from 'react';

/**
 * Highly optimized background component
 * - Uses CSS gradients instead of DOM manipulation
 * - GPU acceleration with transform3d
 * - Minimal repaints and reflows
 */
const PerformantBackground = memo(() => {
  return (
    <div className="fixed inset-0 -z-10 hero-gpu-layer overflow-hidden">
      {/* Base gradient - no animation for better performance */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 40%, rgba(6, 182, 212, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 20%, rgba(147, 51, 234, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 100% 80% at 50% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 60%),
            linear-gradient(135deg, #000000 0%, #0a0a0a 100%)
          `,
          willChange: 'auto'
        }}
      />

      {/* Subtle animated overlay - only one layer */}
      <div 
        className="absolute inset-0 opacity-30 hero-glow-subtle"
        style={{
          background: `
            radial-gradient(ellipse 120% 100% at 50% 50%, rgba(34, 211, 238, 0.05) 0%, transparent 70%)
          `,
          willChange: 'transform, opacity'
        }}
      />

      {/* Single optimized scan line */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div 
          className="absolute w-full h-px top-1/3 hero-scan-fast"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(34, 211, 238, 0.4), transparent)',
            willChange: 'transform, opacity'
          }}
        />
      </div>
    </div>
  );
});

PerformantBackground.displayName = 'PerformantBackground';

export default PerformantBackground;
