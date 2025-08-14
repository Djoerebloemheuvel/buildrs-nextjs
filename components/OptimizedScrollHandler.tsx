'use client';

import { memo, useEffect } from 'react';

/**
 * Optimized scroll behavior handler
 * - Uses native CSS scroll-behavior
 * - Passive event listeners
 * - Minimal JavaScript intervention
 */
const OptimizedScrollHandler = memo(() => {
  useEffect(() => {
    // Enable smooth scrolling globally
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add performance optimizations
    const style = document.createElement('style');
    style.textContent = `
      * {
        /* Optimize rendering */
        box-sizing: border-box;
      }
      
      html {
        /* Smooth scrolling with GPU acceleration */
        scroll-behavior: smooth;
        transform: translateZ(0);
      }
      
      body {
        /* Prevent layout shifts */
        overflow-x: hidden;
        /* GPU layer creation */
        will-change: scroll-position;
      }
      
      /* Optimize scroll containers */
      .scroll-container {
        contain: layout style paint;
        transform: translateZ(0);
      }
      
      /* Optimize animated elements */
      [class*="animate-"], [class*="hero-"] {
        contain: layout style paint;
        will-change: transform;
      }
      
      /* Reduce motion for better performance on mobile */
      @media (max-width: 768px) {
        .hero-float-light,
        .hero-float-medium, 
        .hero-float-strong {
          animation-duration: 2s !important;
        }
      }
      
      /* Performance optimizations for low-end devices */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.1s !important;
          animation-delay: 0s !important;
          transition-duration: 0.1s !important;
        }
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
});

OptimizedScrollHandler.displayName = 'OptimizedScrollHandler';

export default OptimizedScrollHandler;
