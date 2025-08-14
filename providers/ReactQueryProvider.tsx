'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

// Optimized QueryClient configuration for better performance
const createQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      // Prevent unnecessary refetches for better performance
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (renamed from cacheTime)
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: 'always',
      retry: (failureCount, error: any) => {
        // Avoid retries for 4xx errors
        if (error?.status >= 400 && error?.status < 500) return false;
        return failureCount < 2;
      },
    },
  },
});

export function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => createQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}