import { Metadata } from 'next';
import ScrollHeader from '@/components/ScrollHeader';
import ConsultancyExplained from '@/components/consultancy/ConsultancyExplained';
import ConsultancyFeaturePair from '@/components/consultancy/ConsultancyFeaturePair';
import ConsultancyFinalCTA from '@/components/consultancy/ConsultancyFinalCTA';
import ConsultancyHero from '@/components/consultancy/ConsultancyHero';
import ConsultancyOverview from '@/components/consultancy/ConsultancyOverview';
import ConsultancySecondaryHero from '@/components/consultancy/ConsultancySecondaryHero';
import WhyBuildrsConsultancy from '@/components/consultancy/WhyBuildrsConsultancy';
import { BarChart, Brain, Lightbulb, Shield, Target, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Consultancy | Strategische AI Consultancy & Implementatie',
  description: 'Strategische AI consultancy voor bedrijfstransformatie. Van AI-strategie tot implementatie - expert advies voor succesvolle AI-adoptie.',
  keywords: 'AI consultancy, AI strategie, AI implementatie, machine learning consulting, AI transformatie, business intelligence, Nederland',
  alternates: {
    canonical: '/consultancy',
  },
  openGraph: {
    title: 'AI Consultancy | Strategische AI Consultancy & Implementatie - Buildrs.AI',
    description: 'Strategische AI consultancy voor bedrijfstransformatie. Van AI-strategie tot implementatie - expert advies voor succesvolle AI-adoptie.',
    url: '/consultancy',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Consultancy Services",
  "description": "Strategische AI consultancy en implementatie diensten",
  "provider": {
    "@type": "Organization",
    "name": "Buildrs.AI",
    "url": "https://buildrs.ai"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Nederland"
  },
  "serviceType": "AI Consultancy",
  "category": "Technology Consulting"
};

export default function ConsultancyPage() {
  const consultancyFeatures = [
    {
      icon: Brain,
      title: 'AI Strategie',
      subtitle: 'Ontwikkel een duidelijke roadmap voor AI-implementatie',
      accent: 'from-blue-400/20 via-blue-500/30 to-cyan-400/20',
      glowColor: 'shadow-blue-500/20',
      borderGlow: 'border-blue-400/30',
      iconGlow: 'text-blue-300',
      delay: 0
    },
    {
      icon: Target,
      title: 'Use Case Identificatie',
      subtitle: 'Vind de meest waardevolle AI-toepassingen voor uw business',
      accent: 'from-purple-400/20 via-purple-500/30 to-pink-400/20',
      glowColor: 'shadow-purple-500/20',
      borderGlow: 'border-purple-400/30',
      iconGlow: 'text-purple-300',
      delay: 100
    },
    {
      icon: BarChart,
      title: 'ROI Optimalisatie',
      subtitle: 'Maximale return op uw AI-investeringen',
      accent: 'from-green-400/20 via-emerald-500/30 to-teal-400/20',
      glowColor: 'shadow-emerald-500/20',
      borderGlow: 'border-emerald-400/30',
      iconGlow: 'text-emerald-300',
      delay: 200
    },
    {
      icon: Users,
      title: 'Team Training',
      subtitle: 'Bouw interne AI-expertise binnen uw organisatie',
      accent: 'from-orange-400/20 via-red-500/30 to-pink-400/20',
      glowColor: 'shadow-orange-500/20',
      borderGlow: 'border-orange-400/30',
      iconGlow: 'text-orange-300',
      delay: 300
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      subtitle: 'Identificeer en mitigeer AI-gerelateerde risicos',
      accent: 'from-indigo-400/20 via-blue-500/30 to-cyan-400/20',
      glowColor: 'shadow-indigo-500/20',
      borderGlow: 'border-indigo-400/30',
      iconGlow: 'text-indigo-300',
      delay: 400
    },
    {
      icon: Lightbulb,
      title: 'Innovation Workshops',
      subtitle: 'Brainstorm sessies voor AI-gedreven innovatie',
      accent: 'from-cyan-400/20 via-teal-500/30 to-blue-400/20',
      glowColor: 'shadow-cyan-500/20',
      borderGlow: 'border-cyan-400/30',
      iconGlow: 'text-cyan-300',
      delay: 500
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-premium-black">
        <ScrollHeader />

        {/* Secondary Hero Section */}
        <ConsultancySecondaryHero />

        {/* Primary Hero Section */}
        <ConsultancyHero />

        {/* Section 1 - What is AI Consultancy? */}
        <ConsultancyExplained />

        {/* First 2 Feature Cards */}
        <ConsultancyFeaturePair
          features={consultancyFeatures.slice(0, 2)}
          startIndex={0}
        />

        {/* Section 2 - Consultancy Overview */}
        <ConsultancyOverview />

        {/* Next 2 Feature Cards */}
        <ConsultancyFeaturePair
          features={consultancyFeatures.slice(2, 4)}
          startIndex={2}
        />

        {/* Section 3 - Why Buildrs Consultancy? */}
        <WhyBuildrsConsultancy />

        {/* Final 2 Feature Cards */}
        <ConsultancyFeaturePair
          features={consultancyFeatures.slice(4, 6)}
          startIndex={4}
        />

        {/* Final CTA Section */}
        <ConsultancyFinalCTA />
      </div>
    </>
  );
}