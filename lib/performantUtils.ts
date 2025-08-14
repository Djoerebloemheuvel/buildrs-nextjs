
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Simple LRU cache for className combinations - properly typed
const classNameCache = new Map<string, string>();
const maxCacheSize = 100; // Reduced cache size for better memory usage

export function cn(...inputs: ClassValue[]) {
  // Early returns for common cases
  if (inputs.length === 0) return "";
  if (inputs.length === 1 && typeof inputs[0] === 'string') {
    return inputs[0];
  }

  // Create simple cache key
  const key = inputs.join('|');
  
  // Check cache first - properly handle the string | undefined return type
  const cachedResult = classNameCache.get(key);
  if (cachedResult !== undefined) {
    return cachedResult;
  }

  // Compute result - twMerge always returns a string, never undefined
  const result = twMerge(clsx(inputs));

  // Manage cache size
  if (classNameCache.size >= maxCacheSize) {
    const firstKey = classNameCache.keys().next().value;
    if (firstKey !== undefined) {
      classNameCache.delete(firstKey);
    }
  }

  // Cache the result - both key and result are guaranteed strings
  classNameCache.set(key, result);

  return result;
}

// Performance monitoring utilities
export const perfUtils = {
  // Debounce scroll events
  debounce: <T extends (...args: any[]) => void>(fn: T, delay: number): T => {
    let timeoutId: NodeJS.Timeout;
    return ((...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    }) as T;
  },

  // Throttle resize events  
  throttle: <T extends (...args: any[]) => void>(fn: T, delay: number): T => {
    let lastCall = 0;
    return ((...args: any[]) => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        fn(...args);
      }
    }) as T;
  },

  // Check if element is in viewport (intersection observer alternative)
  isInViewport: (element: Element): boolean => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  // Force GPU layer creation
  createGPULayer: (element: HTMLElement): void => {
    element.style.transform = 'translateZ(0)';
    element.style.backfaceVisibility = 'hidden';
    element.style.willChange = 'transform';
  }
};
