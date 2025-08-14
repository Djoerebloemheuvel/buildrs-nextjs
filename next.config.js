/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-slot',
      '@radix-ui/react-toast',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-dialog'
    ]
  },
  images: {
    domains: ['lovable.dev'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Performance optimizations
  swcMinify: true,
  
  // Webpack optimizations similar to Vite config
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          'react-vendor': {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react-vendor',
            chunks: 'all',
            priority: 10,
          },
          'ui-vendor': {
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            name: 'ui-vendor',
            chunks: 'all',
            priority: 9,
          },
          'animation-vendor': {
            test: /[\\/]node_modules[\\/](lucide-react|tailwind-merge|clsx|class-variance-authority)[\\/]/,
            name: 'animation-vendor',
            chunks: 'all',
            priority: 8,
          },
          'query-vendor': {
            test: /[\\/]node_modules[\\/]@tanstack[\\/]/,
            name: 'query-vendor',
            chunks: 'all',
            priority: 7,
          },
        },
      };
    }
    
    return config;
  },
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;