import { memo } from 'react';
import { 
  Brain, Database, Cpu, Zap, Target, Users
} from 'lucide-react';

/**
 * Performance-optimized floating icons
 * - Reduced from 8 to 6 icons for better performance
 * - Uses transform3d for GPU acceleration
 * - Memoized to prevent unnecessary re-renders
 */
const OptimizedFloatingIcons = memo(() => {
  const icons = [
    { Icon: Brain, position: 'top-1/4 left-1/4', delay: '0s', animation: 'hero-float-light' },
    { Icon: Database, position: 'top-1/3 right-1/4', delay: '0.5s', animation: 'hero-float-medium' },
    { Icon: Cpu, position: 'top-2/3 left-1/5', delay: '1s', animation: 'hero-float-strong' },
    { Icon: Zap, position: 'top-1/2 right-1/3', delay: '1.5s', animation: 'hero-float-light' },
    { Icon: Target, position: 'bottom-1/3 left-1/3', delay: '2s', animation: 'hero-float-medium' },
    { Icon: Users, position: 'bottom-1/4 right-1/5', delay: '2.5s', animation: 'hero-float-strong' }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map(({ Icon, position, delay, animation }, index) => (
        <div
          key={index}
          className={`absolute ${position} hero-gpu-layer`}
          style={{ 
            animationDelay: delay,
            willChange: 'transform'
          }}
        >
          <div 
            className={`
              w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10
              flex items-center justify-center ${animation}
              transition-all duration-200 hover:bg-white/10 hover:border-white/20
            `}
            style={{ willChange: 'transform' }}
          >
            <Icon className="w-5 h-5 text-white/60" strokeWidth={1.5} />
          </div>
        </div>
      ))}
    </div>
  );
});

OptimizedFloatingIcons.displayName = 'OptimizedFloatingIcons';

export default OptimizedFloatingIcons;
