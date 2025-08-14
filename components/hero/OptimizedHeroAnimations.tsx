
const OptimizedHeroAnimations = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* GPU-accelerated entrance animations */
        @keyframes hero-entrance {
          0% { 
            opacity: 0; 
            transform: translate3d(0, 20px, 0) scale(0.98); 
          }
          100% { 
            opacity: 1; 
            transform: translate3d(0, 0, 0) scale(1); 
          }
        }

        /* Optimized floating animations with transform3d */
        @keyframes hero-float-light {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -8px, 0); }
        }

        @keyframes hero-float-medium {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -12px, 0); }
        }

        @keyframes hero-float-strong {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -16px, 0); }
        }

        /* GPU-optimized glow effects */
        @keyframes hero-glow-subtle {
          0%, 100% { 
            opacity: 0.6;
            transform: translate3d(-50%, -50%, 0) scale(1);
          }
          50% { 
            opacity: 1;
            transform: translate3d(-50%, -50%, 0) scale(1.02);
          }
        }

        /* Optimized scan effects */
        @keyframes hero-scan-fast {
          0% { transform: translate3d(-100%, 0, 0); opacity: 0; }
          10%, 90% { opacity: 0.6; }
          100% { transform: translate3d(200%, 0, 0); opacity: 0; }
        }

        /* Apply optimized animations */
        .hero-entrance {
          animation: hero-entrance 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          will-change: transform, opacity;
        }

        .hero-float-light {
          animation: hero-float-light 4s ease-in-out infinite;
          will-change: transform;
        }

        .hero-float-medium {
          animation: hero-float-medium 6s ease-in-out infinite;
          will-change: transform;
        }

        .hero-float-strong {
          animation: hero-float-strong 8s ease-in-out infinite;
          will-change: transform;
        }

        .hero-glow-subtle {
          animation: hero-glow-subtle 3s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .hero-scan-fast {
          animation: hero-scan-fast 12s linear infinite;
          will-change: transform, opacity;
        }

        /* Hover optimizations */
        .hero-hover-scale {
          transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }

        .hero-hover-scale:hover {
          transform: translate3d(0, -2px, 0) scale(1.02);
        }

        /* Performance optimizations */
        .hero-gpu-layer {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .hero-float-light,
          .hero-float-medium,
          .hero-float-strong {
            animation-duration: 2s;
          }
          
          .hero-entrance {
            animation-duration: 0.4s;
          }
        }
      `
    }} />
  );
};

export default OptimizedHeroAnimations;
