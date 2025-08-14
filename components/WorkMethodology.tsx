'use client';
import { useState, useEffect, useRef, useMemo } from 'react';
import { Target, Zap, Users, CheckCircle } from 'lucide-react';
import WorkMethodologyProcess from './WorkMethodologyProcess';
import HorizontalLightFlare from './HorizontalLightFlare';

interface MethodologyStep {
  id: number;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  color: string;
  glowColor: string;
  duration: string;
  deliverables: string[];
  accentColor: {
    primary: string;
    glow: string;
    border: string;
    subtle: string;
  };
}

/**
 * Work Methodology Section - Horizontal Process Flow Design
 * - Completely different from Approach section with horizontal workflow
 * - Interactive process steps with hover animations
 * - Modern card-based design instead of timeline
 * - Focus on process flow rather than principles
 * - Unique accent colors per step for enhanced visual branding
 * - Title animation matches Approach section exactly
 */
const WorkMethodology = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer for entrance animations - matching Approach section exactly
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            // Use requestAnimationFrame for smooth visual updates
            requestAnimationFrame(() => {
              setTimeout(() => setIsVisible(true), 50);
            });
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -5% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Methodology steps focused on practical workflow with unique accent colors
  const methodologySteps: MethodologyStep[] = useMemo(() => [
    {
      id: 1,
      phase: "Week 1-2",
      title: "Discovery & Strategie",
      subtitle: "Van gesprek tot concreet plan",
      description: "We starten met een diepgaande analyse van jullie bedrijfsprocessen. Geen lange documenten, maar direct bruikbare inzichten en een helder implementatieplan.",
      icon: Target,
      color: "from-emerald-400 to-teal-500", // Keep original for fallback
      glowColor: "emerald-400/25", // Keep original for fallback
      duration: "1-2 weken",
      deliverables: ["Strategisch plan", "Technische architectuur", "ROI projectie"],
      accentColor: {
        primary: "from-blue-500 to-cyan-600", // Consultancy page hero color
        glow: "blue-500/20",
        border: "border-blue-500/30",
        subtle: "blue-500/5"
      }
    },
    {
      id: 2,
      phase: "Dag 1-3", 
      title: "Rapid Prototype",
      subtitle: "Zichtbaar resultaat binnen 72 uur",
      description: "Binnen drie dagen hebben jullie een werkende proof-of-concept in handen. Zo kunnen jullie direct ervaren hoe de oplossing werkt en feedback geven.",
      icon: Zap,
      color: "from-yellow-400 to-orange-500", // Keep original for fallback
      glowColor: "yellow-400/25", // Keep original for fallback
      duration: "3 dagen",
      deliverables: ["Werkende demo", "User interface", "Feedback sessie"],
      accentColor: {
        primary: "from-purple-500 to-violet-600", // Custom AI SaaS hero color
        glow: "purple-500/20",
        border: "border-purple-500/30",
        subtle: "purple-500/5"
      }
    },
    {
      id: 3,
      phase: "Week 2-6",
      title: "Iteratieve Bouw", 
      subtitle: "Weekly demos, continue verbetering",
      description: "Elke week zien jullie nieuwe functionaliteiten. We bouwen stapsgewijs uit met jullie feedback, zodat het eindresultaat perfect aansluit bij jullie wensen.",
      icon: Users,
      color: "from-blue-400 to-indigo-500", // Keep original for fallback
      glowColor: "blue-400/25", // Keep original for fallback
      duration: "2-4 weken",
      deliverables: ["Weekly updates", "Live demonstraties", "Gebruikerstests"],
      accentColor: {
        primary: "from-emerald-400 to-teal-500", // Autonomous AI Agents hero color (mint green)
        glow: "emerald-400/20",
        border: "border-emerald-400/30",
        subtle: "emerald-400/5"
      }
    },
    {
      id: 4,
      phase: "Week 6-8",
      title: "Live & Optimalisatie",
      subtitle: "Van test naar productie",
      description: "We gaan live en optimaliseren direct op basis van echte data. Jullie team krijgt volledige training en we blijven monitoren voor perfecte prestaties.",
      icon: CheckCircle,
      color: "from-purple-400 to-pink-500", // Keep original for fallback
      glowColor: "purple-400/25", // Keep original for fallback
      duration: "1-2 weken",
      deliverables: ["Live deployment", "Team training", "Performance monitoring"],
      accentColor: {
        primary: "from-orange-500 to-amber-600", // New orange variant
        glow: "orange-500/20",
        border: "border-orange-500/30",
        subtle: "orange-500/5"
      }
    }
  ], []);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep(current => current >= methodologySteps.length ? 1 : current + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, methodologySteps.length]);

  const handleStepSelect = (stepId: number) => {
    setActiveStep(stepId);
    setIsPlaying(false);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 lg:py-20 px-4 overflow-hidden bg-black gpu-accelerated"
      aria-label="Onze werk methodologie - stap voor stap proces"
    >
      {/* Horizontal light flare at top for section separation */}
      <HorizontalLightFlare position="top" className="-top-8" />

      {/* Custom ambient glow underneath the flare line - scoped to this section only - 25% MORE INTENSE */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-80 pointer-events-none z-5">
        <div 
          className="w-full h-full opacity-25"
          style={{
            background: `radial-gradient(ellipse 100% 100% at 50% 0%, 
              rgba(34, 211, 238, 0.9) 0%, 
              rgba(59, 130, 246, 0.75) 30%, 
              rgba(147, 51, 234, 0.5) 50%, 
              rgba(34, 211, 238, 0.25) 70%, 
              transparent 100%
            )`,
            filter: 'blur(100px)'
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto z-10 gpu-accelerated">
        {/* Header styled exactly like Approach section with identical entrance animation */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Hero title - Identical to Approach section animation timing and easing */}
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
              Van visie naar uitvoering.
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
                Zo brengen we de principes tot leven.
              </span>
            </h2>
          </div>

          {/* Subtitle with identical entrance animation to Approach section */}
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

        {/* Horizontal process flow without entrance animations */}
        <WorkMethodologyProcess 
          steps={methodologySteps}
          activeStep={activeStep}
          onStepSelect={handleStepSelect}
        />
      </div>

      {/* Gradient fade to black effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-20" />
      
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
};

export default WorkMethodology;
