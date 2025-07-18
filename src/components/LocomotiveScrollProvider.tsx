"use client";

import { useEffect, useRef } from 'react';

interface LocomotiveScroll {
  destroy(): void;
  on(event: string, callback: (e: unknown) => void): void;
  off(event: string, callback: (e: unknown) => void): void;
  update(): void;
  scrollTo(target: string | number, options?: unknown): void;
}

interface LocomotiveScrollProviderProps {
  children: React.ReactNode;
}

export default function LocomotiveScrollProvider({ children }: LocomotiveScrollProviderProps) {
  const scrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    // Verificar se estamos no navegador
    if (typeof window === 'undefined') return;

    // Importação dinâmica para evitar SSR
    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;

        // Aguardar um pouco para garantir que o DOM está pronto
        setTimeout(() => {
          const container = document.querySelector('[data-scroll-container]');
          if (container) {
            scrollRef.current = new LocomotiveScroll({
              el: container as HTMLElement,
              smooth: true,
              multiplier: 1,
              lerp: 0.1,
              smartphone: {
                smooth: true,
                multiplier: 1,
                lerp: 0.1,
              },
              tablet: {
                smooth: true,
                multiplier: 1,
                lerp: 0.1,
              },
            });
          }
        }, 100);
      } catch (error) {
        console.error('Erro ao inicializar Locomotive Scroll:', error);
      }
    };

    initLocomotiveScroll();

    // Cleanup function
    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
      }
    };
  }, []);

  return <>{children}</>;
} 