
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Optimized className utility with WeakMap for better garbage collection
const classNameCache = new WeakMap<object, Map<string, string>>();

// Create a cache key that's more memory efficient
const createCacheKey = (inputs: ClassValue[]): string => {
  return inputs
    .map(input => 
      typeof input === 'string' 
        ? input 
        : typeof input === 'object' && input !== null 
          ? JSON.stringify(input) 
          : String(input)
    )
    .join('|');
};

export function cn(...inputs: ClassValue[]) {
  // Early return for simple cases to avoid cache overhead
  if (inputs.length === 0) return "";
  if (inputs.length === 1 && typeof inputs[0] === 'string' && inputs[0].indexOf(' ') === -1) {
    return inputs[0];
  }

  const key = createCacheKey(inputs);
  
  // Use a more efficient cache strategy
  let cache = classNameCache.get(cn);
  if (!cache) {
    cache = new Map();
    classNameCache.set(cn, cache);
  }

  if (cache.has(key)) {
    const cachedResult = cache.get(key);
    return cachedResult || "";
  }

  const result = twMerge(clsx(inputs));

  // Limit cache size more efficiently
  if (cache.size > 500) {
    // Clear oldest entries (LRU-like behavior)
    const entries = Array.from(cache.entries());
    const keepCount = Math.floor(cache.size * 0.7); // Keep 70%
    cache.clear();
    entries.slice(-keepCount).forEach(([k, v]) => cache!.set(k, v));
  }

  cache.set(key, result);
  return result;
}
