"use client";

import React, { useEffect, useRef, useState } from "react";

type AnimatedPathProps = {
  pathD: string;
  numPoints?: number;
  delay?: number;
  showDots?: boolean;
  dotRadius?: number;
};

const AnimatedPath: React.FC<AnimatedPathProps> = ({
  pathD,
  numPoints = 1000,
  delay = 2,
  showDots = false,
  dotRadius = 2,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [polylinePoints, setPolylinePoints] = useState<string>("");

  useEffect(() => {
    if (!svgRef.current || !pathRef.current) return;

    const path = pathRef.current;
    const totalLength = path.getTotalLength();

    const points: { x: number; y: number }[] = [];

    for (let i = numPoints; i >= 0; i--) {
      const p = path.getPointAtLength((i / numPoints) * totalLength);
      points.push({ x: p.x, y: p.y });
    }

    // Desenhar linha animando ponto a ponto
    points.forEach((point, i) => {
      setTimeout(() => {
        setPolylinePoints((prev) => `${prev} ${point.x},${point.y}`);
        if (showDots) {
          const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          circle.setAttribute("cx", point.x.toString());
          circle.setAttribute("cy", point.y.toString());
          circle.setAttribute("r", dotRadius.toString());
          circle.setAttribute("fill", "black");
          circle.style.opacity = "0";
          circle.style.transition = "opacity 0.3s ease-in-out";
          svgRef.current?.appendChild(circle);

          setTimeout(() => {
            circle.style.opacity = "1";
          }, 10);
        }
      }, i * delay);
    });
  }, [pathD, numPoints, delay, showDots, dotRadius]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 604.92 299.79"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
    >
      <path ref={pathRef} d={pathD} fill="none" stroke="none" />

      <polyline
        points={polylinePoints}
        fill="none"
        stroke="black"
        strokeWidth="10"
      />
    </svg>
  );
};

export default AnimatedPath;
