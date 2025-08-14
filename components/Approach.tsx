'use client';

import { useEffect, useRef, useState, memo, useCallback } from 'react';
import AppleNebulaBackground from './AppleNebulaBackground';
import AppleTimeline from './AppleTimeline';
import HorizontalLightFlare from './HorizontalLightFlare';
import HorizontalLightFlareAnimations from './HorizontalLightFlareAnimations';

const Approach = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Memoize the intersection callback to prevent recreation
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isVisible) {
        // Use requestAnimationFrame for smooth visual updates
        requestAnimationFrame(() => {
          setTimeout(() => setIsVisible(true), 50);
        });
      }
    });
  }, [isVisible]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Create observer only once
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        handleIntersection,
        {
          threshold: 0.15,
          rootMargin: '0px 0px -5% 0px'
        }
      );
    }

    const currentSection = sectionRef.current;
    observerRef.current.observe(currentSection);

    return () => {
      if (observerRef.current && currentSection) {
        observerRef.current.unobserve(currentSection);
      }
    };
  }, [handleIntersection]);

  // Cleanup observer on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 pb-32 lg:pb-40 px-4 overflow-hidden bg-black gpu-accelerated"
    >
      {/* Include light flare animations */}
      <HorizontalLightFlareAnimations />

      {/* Enhanced nebula background with GPU acceleration */}
      <AppleNebulaBackground />

      {/* Content container with GPU acceleration */}
      <div className="relative max-w-6xl mx-auto z-10 gpu-accelerated">
        {/* Apple-inspired header with refined typography */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Hero title - Optimized premium entrance */}
          <div className="mb-8">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4 transition-all duration-1000 ease-out gpu-accelerated ${
              isVisible
                ? 'opacity-100 translate-y-0 blur-none'
                : 'opacity-0 translate-y-1 blur-sm'
            }`}
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
              transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              willChange: 'transform, opacity, filter'
            }}>
              Gebouwd op principes.
            </h2>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight transition-all duration-1000 ease-out gpu-accelerated ${
              isVisible
                ? 'opacity-100 translate-y-0 blur-none'
                : 'opacity-0 translate-y-1 blur-sm'
            }`}
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
              transitionDelay: '150ms',
              transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              willChange: 'transform, opacity, filter'
            }}>
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Gedreven door resultaat.
              </span>
            </h2>
          </div>

          {/* Subtitle with optimized entrance */}
          <p className={`text-white/55 text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed transition-all duration-1000 ease-out gpu-accelerated ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-0.5'
          }`}
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
            transitionDelay: '300ms',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            willChange: 'transform, opacity'
          }}>
            Dit zijn de vier principes waarmee we elk project tot een succes maken.
          </p>
        </div>

        {/* Apple-style vertical timeline with optimized animation */}
        <AppleTimeline isVisible={isVisible} />
      </div>

      {/* Horizontal light flare at bottom for section separation */}
      <HorizontalLightFlare position="bottom" className="-bottom-8" />
      
      {/* GPU acceleration styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
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

Approach.displayName = 'Approach';

export default Approach;
