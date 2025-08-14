import { Metadata } from 'next';
import { Suspense } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import WorkMethodology from '@/components/WorkMethodology';
import EndingCTA from '@/components/EndingCTA';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Buildrs.AI",
  "description": "Premium AI consultancy en development services. Custom AI SaaS, automatisering en strategische AI consultancy.",
  "url": "https://buildrs.ai",
  "logo": "https://buildrs.ai/logo.png",
  "sameAs": [
    "https://linkedin.com/company/buildrs-ai"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+31-6-12345678",
    "contactType": "customer service",
    "availableLanguage": "Dutch"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "NL",
    "addressLocality": "Amsterdam"
  },
  "service": [
    {
      "@type": "Service",
      "name": "AI Automations",
      "description": "Intelligente workflow automatisering met AI"
    },
    {
      "@type": "Service", 
      "name": "Custom AI SaaS",
      "description": "Op maat gemaakte AI software oplossingen"
    },
    {
      "@type": "Service",
      "name": "AI Consultancy",
      "description": "Strategische AI consultancy en implementatie"
    },
    {
      "@type": "Service",
      "name": "Autonomous AI Agents",
      "description": "Zelfstandige AI agents voor bedrijfsprocessen"
    }
  ]
};

export const metadata: Metadata = {
  title: 'Buildrs.AI | Premium AI Consultancy & Development',
  description: 'Premium AI consultancy en development services. Custom AI SaaS, automatisering en strategische AI consultancy. Van idee tot implementatie.',
  keywords: 'AI consultancy, AI development, custom AI SaaS, AI automatisering, machine learning, artificial intelligence, Netherlands',
  alternates: {
    canonical: '/',
  },
};

// Optimized loading component for suspense fallback
const LoadingSpinner = () => (
  <div className="min-h-screen bg-premium-black flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-premium-gold will-change-transform"></div>
  </div>
);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Original Hero loads immediately for LCP optimization */}
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>
      
      {/* Below-the-fold content with progressive loading */}
      <Suspense fallback={<div className="h-4" />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<div className="h-4" />}>
        <Approach />
      </Suspense>
      
      <Suspense fallback={<div className="h-4" />}>
        <WorkMethodology />
      </Suspense>
      
      <Suspense fallback={<div className="h-4" />}>
        <EndingCTA />
      </Suspense>
    </>
  );
}