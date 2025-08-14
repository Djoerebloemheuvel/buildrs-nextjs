
'use client';

import { useEffect, useState } from 'react';

export const useCanvasReady = (delay: number = 150) => {
  const [isCanvasReady, setIsCanvasReady] = useState(false);

  useEffect(() => {
    // Ensure the canvas is ready before showing
    const timer = setTimeout(() => {
      setIsCanvasReady(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isCanvasReady;
};
