// components/SmoothScrollProvider.tsx
'use client';

import { createContext, useContext, useEffect, useRef, ReactNode } from 'react';
import Lenis from 'lenis';
import { MotionConfig, useReducedMotion } from 'framer-motion';

interface SmoothScrollContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | number, options?: { offset?: number; duration?: number }) => void;
  scrollToTop: () => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | undefined>(undefined);

export const useSmoothScroll = () => {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error('useSmoothScroll must be used within a SmoothScrollProvider');
  }
  return context;
};

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  const lenisRef = useRef<Lenis | null>(null);
  const reduzirMovimento = useReducedMotion();

  useEffect(() => {
    // Com "reduzir movimento" ligado, fica a rolagem nativa do navegador
    if (reduzirMovimento) return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduzirMovimento]);

  const scrollTo = (target: string | number, options?: { offset?: number; duration?: number }) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
      return;
    }
    // Sem o Lenis: pula direto para o ponto, sem animação
    const elemento = typeof target === 'string' ? document.querySelector(target) : null;
    const topo = elemento ? elemento.getBoundingClientRect().top + window.scrollY : typeof target === 'number' ? target : 0;
    window.scrollTo({ top: topo + (options?.offset ?? 0), behavior: 'auto' });
  };

  const scrollToTop = () => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { duration: 1.5 });
    else window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, scrollTo, scrollToTop }}>
      {/* reducedMotion="user": o framer-motion tira os deslocamentos quando a pessoa pede menos movimento */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </SmoothScrollContext.Provider>
  );
};