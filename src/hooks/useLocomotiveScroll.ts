import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export const useLocomotiveScroll = () => {
  const scrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    // Inicializar Locomotive Scroll
    scrollRef.current = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]') as HTMLElement,
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

    // Cleanup function
    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
      }
    };
  }, []);

  return scrollRef.current;
}; 