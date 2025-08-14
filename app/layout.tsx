import { Inter } from 'next/font/google';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';
import AccessibilitySkipLink from '@/components/AccessibilitySkipLink';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://buildrs.ai'),
  title: {
    default: 'Buildrs.AI - Elite AI Engineering Studio | Custom AI SaaS & Automatisering',
    template: '%s | Buildrs.AI'
  },
  description: 'Premium AI-oplossingen voor visionairs: Custom AI SaaS, intelligente automatisering en strategische AI-consultancy. Transformeer uw business met autonome AI-systemen van de hoogste kwaliteit.',
  keywords: 'AI automatisering, Custom AI SaaS, AI consultancy, Autonomous AI Agents, AI engineering, machine learning, Nederland, business transformation',
  authors: [{ name: 'Buildrs.AI' }],
  creator: 'Buildrs.AI',
  publisher: 'Buildrs.AI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://buildrs.ai',
    siteName: 'Buildrs.AI',
    title: 'Buildrs.AI - Elite AI Engineering Studio',
    description: 'Premium AI-oplossingen voor visionairs: Custom AI SaaS, intelligente automatisering en strategische AI-consultancy. Transformeer uw business met autonome AI-systemen.',
    images: [
      {
        url: 'https://lovable.dev/opengraph-image-p98pqg.png',
        width: 1200,
        height: 630,
        alt: 'Buildrs.AI - Elite AI Engineering Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@buildrs_ai',
    creator: '@buildrs_ai',
    title: 'Buildrs.AI - Elite AI Engineering Studio',
    description: 'Premium AI-oplossingen: Custom AI SaaS, automatisering en consultancy voor business transformatie.',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
  verification: {
    google: 'google-site-verification-id',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//lovable.dev" />
      </head>
      <body className={inter.className}>
        <AccessibilitySkipLink />
        <PerformanceMonitor />
        <ReactQueryProvider>
          <TooltipProvider>
            <main id="main-content" role="main" className="min-h-screen">
              {children}
            </main>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}