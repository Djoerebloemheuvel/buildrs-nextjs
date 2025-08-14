import { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact | Neem Contact Op - Buildrs.AI',
  description: 'Klaar om uw bedrijf te transformeren met AI? Neem contact op voor een vrijblijvend gesprek over uw AI-mogelijkheden.',
  keywords: 'contact, AI consultatie, AI advies, Buildrs.AI contact, Nederland',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Neem Contact Op - Buildrs.AI',
    description: 'Klaar om uw bedrijf te transformeren met AI? Neem contact op voor een vrijblijvend gesprek over uw AI-mogelijkheden.',
    url: '/contact',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact - Buildrs.AI",
  "description": "Neem contact op met Buildrs.AI voor AI consultancy en development services",
  "url": "https://buildrs.ai/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Buildrs.AI",
    "url": "https://buildrs.ai",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "Dutch"
    }
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Contact />
    </>
  );
}