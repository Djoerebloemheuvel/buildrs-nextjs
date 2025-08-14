import { Metadata } from 'next';
import ScrollHeader from '@/components/ScrollHeader';
import AgentExplained from '@/components/agents/AgentExplained';
import AgentFeaturePair from '@/components/agents/AgentFeaturePair';
import AgentFinalCTA from '@/components/agents/AgentFinalCTA';
import AgentOverview from '@/components/agents/AgentOverview';
import AgentPrimaryHero from '@/components/agents/AgentPrimaryHero';
import AgentSecondaryHero from '@/components/agents/AgentSecondaryHero';
import WhyBuildrsAgents from '@/components/agents/WhyBuildrsAgents';
import { Brain, Cog, Network, Shield, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Autonomous AI Agents | Zelfstandige AI Assistenten',
  description: 'Ervaar de toekomst met autonome AI agents die zelfstandig denken, beslissen en handelen. 24/7 operationeel voor maximale bedrijfsefficiëntie.',
  keywords: 'autonomous AI agents, AI assistenten, zelfstandige AI, intelligent agents, AI automation, machine learning agents, Nederland',
  alternates: {
    canonical: '/autonomous-ai-agents',
  },
  openGraph: {
    title: 'Autonomous AI Agents | Zelfstandige AI Assistenten - Buildrs.AI',
    description: 'Ervaar de toekomst met autonome AI agents die zelfstandig denken, beslissen en handelen. 24/7 operationeel voor maximale bedrijfsefficiëntie.',
    url: '/autonomous-ai-agents',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Autonomous AI Agents Services",
  "description": "Zelfstandige AI agents voor bedrijfsprocessen en automatisering",
  "provider": {
    "@type": "Organization",
    "name": "Buildrs.AI",
    "url": "https://buildrs.ai"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Nederland"
  },
  "serviceType": "Autonomous AI Agents",
  "category": "Technology Services"
};

export default function AutonomousAIAgentsPage() {
  const agentFeatures = [
    {
      icon: Brain,
      title: 'Zelfstandig beslissen',
      subtitle: 'Agents die denken, redeneren en acties uitvoeren zonder menselijke input',
      accent: 'from-teal-400/20 via-blue-500/30 to-emerald-400/20',
      glowColor: 'shadow-teal-500/20',
      borderGlow: 'border-teal-400/30',
      iconGlow: 'text-teal-300',
      delay: 0
    },
    {
      icon: Network,
      title: 'Multi-tool integratie',
      subtitle: 'Werkt naadloos samen met CRM, e-mail, agenda en externe systemen',
      accent: 'from-blue-400/20 via-cyan-500/30 to-teal-400/20',
      glowColor: 'shadow-blue-500/20',
      borderGlow: 'border-blue-400/30',
      iconGlow: 'text-blue-300',
      delay: 100
    },
    {
      icon: Zap,
      title: '24/7 operationeel',
      subtitle: 'Altijd alert, altijd actief - geen pauzes, geen fouten',
      accent: 'from-cyan-400/20 via-teal-500/30 to-blue-400/20',
      glowColor: 'shadow-cyan-500/20',
      borderGlow: 'border-cyan-400/30',
      iconGlow: 'text-cyan-300',
      delay: 200
    },
    {
      icon: Users,
      title: 'Natuurlijke communicatie',
      subtitle: 'Communiceert vloeiend met teams en klanten in perfecte context',
      accent: 'from-emerald-400/20 via-teal-500/30 to-blue-400/20',
      glowColor: 'shadow-emerald-500/20',
      borderGlow: 'border-emerald-400/30',
      iconGlow: 'text-emerald-300',
      delay: 300
    },
    {
      icon: Shield,
      title: 'Veilig & betrouwbaar',
      subtitle: 'Werkt binnen strikte parameters met volledige audit trail',
      accent: 'from-purple-400/20 via-blue-500/30 to-teal-400/20',
      glowColor: 'shadow-purple-500/20',
      borderGlow: 'border-purple-400/30',
      iconGlow: 'text-purple-300',
      delay: 400
    },
    {
      icon: Cog,
      title: 'Continu leren',
      subtitle: 'Wordt elke dag beter door feedback en ervaring',
      accent: 'from-orange-400/20 via-red-500/30 to-pink-400/20',
      glowColor: 'shadow-orange-500/20',
      borderGlow: 'border-orange-400/30',
      iconGlow: 'text-orange-300',
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
        <AgentSecondaryHero />

        {/* Primary Hero Section */}
        <AgentPrimaryHero />

        {/* Section 1 - Wat zijn Autonomous AI Agents? */}
        <AgentExplained />

        {/* First 2 Feature Cards */}
        <AgentFeaturePair
          features={agentFeatures.slice(0, 2)}
          startIndex={0}
        />

        {/* Section 2 - Agent Overview */}
        <AgentOverview />

        {/* Next 2 Feature Cards */}
        <AgentFeaturePair
          features={agentFeatures.slice(2, 4)}
          startIndex={2}
        />

        {/* Section 3 - Waarom Buildrs Agents? */}
        <WhyBuildrsAgents />

        {/* Final 2 Feature Cards */}
        <AgentFeaturePair
          features={agentFeatures.slice(4, 6)}
          startIndex={4}
        />

        {/* Final CTA Section */}
        <AgentFinalCTA />
      </div>
    </>
  );
}