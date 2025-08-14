'use client';

import { LucideIcon } from 'lucide-react';
import { memo, useMemo } from 'react';

interface Feature {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  accent: string;
  glowColor: string;
  borderGlow: string;
  iconGlow: string;
  delay: number;
}

interface ConsultancyFeaturePairProps {
  features: Feature[];
  startIndex: number;
}

const ConsultancyFeaturePair = memo(({ features, startIndex }: ConsultancyFeaturePairProps) => {
  // Memoize background styles to prevent recalculation
  const backgroundStyles = useMemo(() => ({
    background: 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.95) 50%, #000000 100%)',
    willChange: 'transform',
    transform: 'translateZ(0)'
  }), []);

  const ambientLight1Style = useMemo(() => ({
    position: 'absolute' as const,
    top: '50%',
    left: '25%',
    width: '24rem',
    height: '24rem',
    background: 'rgba(59, 130, 246, 0.03)',
    borderRadius: '50%',
    filter: 'blur(48px)',
    transform: 'translateY(-50%)',
    animation: 'pulse 4s ease-in-out infinite',
    willChange: 'opacity'
  }), []);

  const ambientLight2Style = useMemo(() => ({
    position: 'absolute' as const,
    top: '33.333333%',
    right: '25%',
    width: '20rem',
    height: '20rem',
    background: 'rgba(147, 51, 234, 0.03)',
    borderRadius: '50%',
    filter: 'blur(48px)',
    animation: 'pulse 4s ease-in-out infinite',
    animationDelay: '2s',
    willChange: 'opacity'
  }), []);

  return (
    <section className="py-20 lg:py-32 px-4 relative overflow-hidden" style={backgroundStyles}>
      {/* Optimized background ambient lighting */}
      <div className="absolute inset-0">
        <div style={ambientLight1Style} />
        <div style={ambientLight2Style} />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {features.map((feature, index) => {
            // Create card background style for performance
            const accentColors = feature.accent
              .replace(/from-|via-|to-/g, '')
              .split(' ')
              .map(color => color.replace(/\/\d+/, match => `/${match.slice(1)}`))
              .join(', ');
            
            const cardBackgroundStyle = {
              background: `
                linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.01) 100%),
                linear-gradient(135deg, ${accentColors})
              `,
              animation: `consultancyCardEntrance 1s ease-out forwards ${feature.delay}ms`,
              willChange: 'transform, opacity'
            };

            return (
              <div 
                key={startIndex + index}
                data-automation-item
                data-index={startIndex + index}
                className="group relative"
              >
                {/* Premium card container with optimized styles */}
                <div className={`relative rounded-3xl backdrop-blur-xl border ${feature.borderGlow} p-8 lg:p-12 transition-all duration-700 hover:scale-105 hover:-translate-y-4 ${feature.glowColor} shadow-2xl gpu-accelerated`}
                     style={cardBackgroundStyle}>
                  
                  {/* Icon container with premium glow */}
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br ${feature.accent} border ${feature.borderGlow} backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${feature.glowColor} gpu-accelerated`}>
                      <feature.icon className={`w-10 h-10 lg:w-12 lg:h-12 ${feature.iconGlow} drop-shadow-lg transition-all duration-500 group-hover:rotate-12 gpu-accelerated`} />
                    </div>
                    
                    {/* Ambient icon glow with GPU acceleration */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accent} blur-xl opacity-40 group-hover:opacity-60 transition-all duration-500 scale-110 gpu-accelerated`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                      {feature.title}
                    </h3>
                    
                    <p className="text-premium-silver/80 text-lg leading-relaxed font-light">
                      {feature.subtitle}
                    </p>
                  </div>

                  {/* Premium accent line with GPU acceleration */}
                  <div className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent ${feature.iconGlow.replace('text-', 'via-')} to-transparent opacity-30 group-hover:opacity-60 transition-all duration-500 gpu-accelerated`} />
                  
                  {/* Corner accent with GPU acceleration */}
                  <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${feature.iconGlow.replace('text-', 'bg-')} opacity-40 group-hover:opacity-80 transition-all duration-500 gpu-accelerated`} />
                </div>

                {/* Floating ambient particles with optimized animations */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className={`absolute top-1/4 -right-2 w-1 h-1 ${feature.iconGlow.replace('text-', 'bg-')} rounded-full animate-pulse opacity-60 gpu-accelerated`} style={{ animationDelay: `${feature.delay + 1000}ms` }} />
                  <div className={`absolute bottom-1/3 -left-2 w-1.5 h-1.5 ${feature.iconGlow.replace('text-', 'bg-')} rounded-full animate-pulse opacity-40 gpu-accelerated`} style={{ animationDelay: `${feature.delay + 1500}ms` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Optimized keyframes with transform3d for GPU acceleration */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes consultancyCardEntrance {
            0% {
              opacity: 0;
              transform: translate3d(0, 40px, 0) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0) scale(1);
            }
          }
          
          .gpu-accelerated {
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
          }
        `
      }} />
    </section>
  );
});

ConsultancyFeaturePair.displayName = 'ConsultancyFeaturePair';

export default ConsultancyFeaturePair;
