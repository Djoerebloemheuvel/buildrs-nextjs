import { Metadata } from 'next';
import ScrollHeader from '@/components/ScrollHeader';
import CustomSaaSExplained from '@/components/saas/CustomSaaSExplained';
import CustomSaaSFeaturePair from '@/components/saas/CustomSaaSFeaturePair';
import CustomSaaSFinalCTA from '@/components/saas/CustomSaaSFinalCTA';
import CustomSaaSHero from '@/components/saas/CustomSaaSHero';
import CustomSaaSNewHero from '@/components/saas/CustomSaaSNewHero';
import CustomSaaSOverview from '@/components/saas/CustomSaaSOverview';
import { Cloud, Code, Database, Lock, Palette, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Custom AI SaaS | Op Maat Gemaakte AI Software Oplossingen',
  description: 'Laat uw unieke AI SaaS platform bouwen door experts. Van concept tot lancering - scalable, secure en volledig aangepast aan uw bedrijfsbehoeften.',
  keywords: 'custom AI SaaS, AI software development, SaaS platform development, AI oplossingen, custom software, Nederland',
  alternates: {
    canonical: '/custom-ai-saas',
  },
  openGraph: {
    title: 'Custom AI SaaS | Op Maat Gemaakte AI Software Oplossingen - Buildrs.AI',
    description: 'Laat uw unieke AI SaaS platform bouwen door experts. Van concept tot lancering - scalable, secure en volledig aangepast aan uw bedrijfsbehoeften.',
    url: '/custom-ai-saas',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom AI SaaS Development",
  "description": "Op maat gemaakte AI SaaS platformen en software oplossingen",
  "provider": {
    "@type": "Organization",
    "name": "Buildrs.AI",
    "url": "https://buildrs.ai"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Nederland"
  },
  "serviceType": "Custom AI SaaS Development",
  "category": "Technology Services"
};

export default function CustomAISaaSPage() {
  const saasFeatures = [
    {
      icon: Code,
      title: 'Custom Development',
      subtitle: 'Volledig op maat ontwikkeld voor uw specifieke behoeften',
      accent: 'from-blue-400/20 via-blue-500/30 to-cyan-400/20',
      glowColor: 'shadow-blue-500/20',
      borderGlow: 'border-blue-400/30',
      iconGlow: 'text-blue-300',
      delay: 0
    },
    {
      icon: Cloud,
      title: 'Cloud Native',
      subtitle: 'Schaalbare architectuur voor wereldwijde implementatie',
      accent: 'from-purple-400/20 via-purple-500/30 to-pink-400/20',
      glowColor: 'shadow-purple-500/20',
      borderGlow: 'border-purple-400/30',
      iconGlow: 'text-purple-300',
      delay: 100
    },
    {
      icon: Database,
      title: 'AI-Powered Backend',
      subtitle: 'Geavanceerde machine learning integraties',
      accent: 'from-green-400/20 via-emerald-500/30 to-teal-400/20',
      glowColor: 'shadow-emerald-500/20',
      borderGlow: 'border-emerald-400/30',
      iconGlow: 'text-emerald-300',
      delay: 200
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      subtitle: 'Bank-niveau beveiliging en compliance',
      accent: 'from-orange-400/20 via-red-500/30 to-pink-400/20',
      glowColor: 'shadow-orange-500/20',
      borderGlow: 'border-orange-400/30',
      iconGlow: 'text-orange-300',
      delay: 300
    },
    {
      icon: Palette,
      title: 'Custom UI/UX',
      subtitle: 'Intuïtieve interface die uw brand weerspiegelt',
      accent: 'from-indigo-400/20 via-blue-500/30 to-cyan-400/20',
      glowColor: 'shadow-indigo-500/20',
      borderGlow: 'border-indigo-400/30',
      iconGlow: 'text-indigo-300',
      delay: 400
    },
    {
      icon: Zap,
      title: 'Performance Optimized',
      subtitle: 'Lightning-fast performance en gebruikerservaring',
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

        {/* New Hero Section */}
        <CustomSaaSNewHero />

        {/* Original Hero Section */}
        <CustomSaaSHero />

        {/* Section 1 - What is Custom AI SaaS? */}
        <CustomSaaSExplained />

        {/* First 2 Feature Cards */}
        <CustomSaaSFeaturePair
          features={saasFeatures.slice(0, 2)}
          startIndex={0}
        />

        {/* Section 2 - SaaS Overview */}
        <CustomSaaSOverview />

        {/* Next 2 Feature Cards */}
        <CustomSaaSFeaturePair
          features={saasFeatures.slice(2, 4)}
          startIndex={2}
        />

        {/* Final 2 Feature Cards */}
        <CustomSaaSFeaturePair
          features={saasFeatures.slice(4, 6)}
          startIndex={4}
        />

        {/* Final CTA Section */}
        <CustomSaaSFinalCTA />
      </div>
    </>
  );
}