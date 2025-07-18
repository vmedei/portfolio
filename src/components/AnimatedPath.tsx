"use client";

import React, { useEffect, useRef, useState } from 'react';

type AnimatedPathProps = {
  pathD: string;
  duration?: number;
  pauseDuration?: number;
};

const AnimatedPath: React.FC<AnimatedPathProps> = ({
  pathD,
  duration = 2000,
  pauseDuration = 1000,
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);

      // Oculta o traço a partir do final
      pathRef.current.style.strokeDasharray = length.toString();
      pathRef.current.style.strokeDashoffset = (-length).toString();
    }
  }, [pathD]);

  const animate = async () => {
    if (!pathRef.current) return;

    const length = pathRef.current.getTotalLength();

    // Mostrar do final para o início
    pathRef.current.style.transition = `stroke-dashoffset ${duration}ms ease-in-out`;
    pathRef.current.style.strokeDashoffset = '0';

    await new Promise((resolve) => setTimeout(resolve, duration + pauseDuration));

    // Remover do início para o final
    pathRef.current.style.transition = `stroke-dashoffset ${duration}ms ease-in-out`;
    pathRef.current.style.strokeDashoffset = (pathLength).toString();

    await new Promise((resolve) => setTimeout(resolve, duration + pauseDuration));

    // Reset - posiciona novamente no final para a próxima animação
    pathRef.current.style.transition = 'none';
    pathRef.current.style.strokeDashoffset = (-length).toString();
  };

  useEffect(() => {
    let isActive = true;

    const loop = async () => {
      while (isActive) {
        await animate();
      }
    };

    if (pathLength > 0) {
      loop();
    }

    return () => {
      isActive = false;
    };
  }, [pathLength]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg 
        width="600" 
        height="300" 
        viewBox="0 0 620 300"
        className="w-full max-w-2xl h-auto"
      >
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke="#000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default AnimatedPath;