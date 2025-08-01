"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';

type AnimatedPathProps = {
  pathD: string;
  animationType?: 'loop' | 'hover';
  duration?: number;
  pauseDuration?: number;
  size?: string;
};

const AnimatedPath: React.FC<AnimatedPathProps> = ({
  pathD,
  animationType = 'loop',
  duration = 2000,
  pauseDuration = 1000,
  size = 'full'
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);

      // Oculta o traço a partir do final
      pathRef.current.style.strokeDasharray = length.toString();
      pathRef.current.style.strokeDashoffset = (-length).toString();
    }
  }, [pathD]);

  const animacaoInserir = useCallback(async () => {
    if (!pathRef.current) return;

    // Mostrar do final para o início
    pathRef.current.style.transition = `stroke-dashoffset ${duration}ms ease-in-out`;
    pathRef.current.style.strokeDashoffset = '0';
  }, [duration, pathRef]);

  const animacaoRemover = useCallback(async () => {
    if (!pathRef.current) return;
    pathRef.current.style.transition = `stroke-dashoffset ${duration}ms ease-in-out`;
    pathRef.current.style.strokeDashoffset = (pathLength).toString();
  }, [duration, pathLength, pathRef]);

  const animacaoReset = useCallback(async (length: number) => {
    if (!pathRef.current) return;
    pathRef.current.style.transition = 'none';
    pathRef.current.style.strokeDashoffset = (-length).toString();
  }, [pathRef]);

  // Animação inicial única
  useEffect(() => {
    if (pathLength > 0 && !isInitialized && animationType === 'hover') {
      const initializeAnimation = async () => {
        if (!pathRef.current) return;
        await animacaoInserir();
        setIsInitialized(true);
      };
      initializeAnimation();
    }
  }, [pathLength, isInitialized, animationType, animacaoInserir]);

  // Animação de loop contínuo (para animationType === 'loop')
  useEffect(() => {
    let isActive = true;

    const startAnimation = async () => {
      if (animationType === 'loop') {
        // Loop contínuo
        while (isActive) {
          if (!pathRef.current) return;

          const length = pathRef.current.getTotalLength();

          animacaoInserir();

          await new Promise((resolve) => setTimeout(resolve, duration + pauseDuration));

          animacaoRemover();

          await new Promise((resolve) => setTimeout(resolve, duration + pauseDuration));

          animacaoReset(length);
        }
      }
    };

    if (pathLength > 0 && animationType === 'loop') {
      startAnimation();
    }

    return () => {
      isActive = false;
    };
  }, [pathLength, animacaoInserir, animacaoRemover, animacaoReset, animationType, duration, pauseDuration]);

  // Função para animação de hover
  const handleHover = useCallback(async () => {
    if (animationType === 'hover' && pathRef.current) {
      const length = pathRef.current.getTotalLength();
      
      // Remove a animação
      await animacaoRemover();
      
      // Aguarda um pouco
      await new Promise((resolve) => setTimeout(resolve, 100));
      
      // Reseta
      await animacaoReset(length);
      
      // Aguarda um pouco
      await new Promise((resolve) => setTimeout(resolve, 100));
      
      // Insere novamente
      await animacaoInserir();
      
    }
  }, [animationType, animacaoRemover, animacaoReset, animacaoInserir]);

  return (
    <div 
      className={`w-${size} h-${size} flex items-center justify-center`}
      onMouseEnter={handleHover}
    >
      <svg
        width="600"
        height="300"
        viewBox="0 0 620 300"
        className="w-full max-w-3xl h-auto"
      >
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke="#000"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default AnimatedPath;