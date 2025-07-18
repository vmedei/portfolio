import { useEffect, useRef } from 'react';

interface LocomotiveScroll {
  destroy(): void;
  on(event: string, callback: (e: unknown) => void): void;
  off(event: string, callback: (e: unknown) => void): void;
  update(): void;
  scrollTo(target: string | number, options?: unknown): void;
}

export const useLocomotiveScroll = () => {
  const scrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    // Verificar se estamos no navegador
    if (typeof window === 'undefined') return;

    // Aguardar um pouco para o Locomotive Scroll ser inicializado
    const timer = setTimeout(() => {
      const container = document.querySelector('[data-scroll-container]');
      const locomotive = (container as { __locomotive?: LocomotiveScroll }).__locomotive;
      if (container && locomotive) {
        scrollRef.current = locomotive;
      }
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return scrollRef.current;
}; 