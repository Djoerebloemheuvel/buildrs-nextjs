
import { memo } from 'react';

/**
 * Simplified AI core visual - much more performant
 * - Removed complex nested animations
 * - Uses simple CSS transforms
 * - GPU-accelerated with translate3d
 */
const MinimalAICore = memo(() => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none hero-gpu-layer">
      {/* Main core circle */}
      <div 
        className="relative w-64 h-64 md:w-80 md:h-80 hero-glow-subtle"
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Core background */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: `
              radial-gradient(circle at center, 
                rgba(34, 211, 238, 0.1) 0%,
                rgba(147, 51, 234, 0.05) 50%,
                transparent 70%
              )
            `,
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        />
        
        {/* Simple pulsing center */}
        <div 
          className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full hero-glow-subtle"
          style={{
            background: 'rgba(34, 211, 238, 0.6)',
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)',
            willChange: 'transform, opacity'
          }}
        />
        
        {/* Minimal circuit lines */}
        <div className="absolute inset-8 opacity-30">
          <div 
            className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(34, 211, 238, 0.4), transparent)'
            }}
          />
          <div 
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(147, 51, 234, 0.4), transparent)'
            }}
          />
        </div>
      </div>
    </div>
  );
});

MinimalAICore.displayName = 'MinimalAICore';

export default MinimalAICore;
