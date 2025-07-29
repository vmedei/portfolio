"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import TecnologiasMarquee from "../TecnologiasMarquee";
import Doama from "./Doama";
import Sigest from "./Sigest";
import FoodCampus from "./FoodCampus";
import PfAspofern from "./PfAspofern";

// COMPONENTES REGISTRADOS
const componentes = [Sigest, Doama, PfAspofern,  FoodCampus]; // Adicione ou remova aqui
const numComponentes = componentes.length;

type AnimationProps = {
  leftDivOpacity: MotionValue<number>;
  leftDivX: MotionValue<number>;
  rightDivOpacity: MotionValue<number>;
  rightDivX: MotionValue<number>;
};

export default function Experiencias() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Gera intervalos de animação com base no índice
  const gerarAnimacao = (index: number): AnimationProps => {
    const inicio = 0.15;
    const fim = 0.80;
    const step = (fim - inicio) / numComponentes;

    const base = inicio + index * step;

    // Esses fatores (0.4, 0.7) definem o momento da transição dentro do step
    const middle = base + step * 0.4;
    const end = base + step * 0.7;

    return {
        leftDivOpacity: useTransform(scrollYProgress, [base, middle], [0, 1]),
        leftDivX: useTransform(scrollYProgress, [base, middle], [-100, 0]),
        rightDivOpacity: useTransform(scrollYProgress, [middle, end], [0, 1]),
        rightDivX: useTransform(scrollYProgress, [middle, end], [100, 0])
    };
};

  const experienciaOpacity = useTransform(scrollYProgress, [0.1, 0.15], [0, 1]);
  const experienciaY = useTransform(scrollYProgress, [0.1, 0.15], [0, 100]);

  const calcularAltura = () => {
    if (containerRef.current) {
      const sectionHeight = containerRef.current.scrollHeight;
      const windowHeight = window.innerHeight;
      const calculatedHeight = Math.max(sectionHeight, windowHeight * 2);
      return `${calculatedHeight}px`;
    }
    return "230vh";
  };

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity: experienciaOpacity, y: experienciaY }}
      className={`h-[${calcularAltura()}]`}
    >
      <section
        id="experiencias"
        className="sticky top-24 container mx-auto p-10 md:rounded-xl bg-base-300 flex flex-col justify-between gap-4 overflow-hidden"
      >
        <div className="flex justify-between items-center gap-10">
          <h2 className="text-3xl font-bold">Experiências</h2>
          <TecnologiasMarquee gradientColor="#ebebeb" />
        </div>

        <div className="divider" />

        {/* MAPEAMENTO AUTOMÁTICO DOS COMPONENTES */}
        {componentes.map((Componente, index) => {
          const anim = gerarAnimacao(index);
          return (
            <Componente
              key={index}
              leftDivOpacity={anim.leftDivOpacity}
              leftDivX={anim.leftDivX}
              rightDivOpacity={anim.rightDivOpacity}
              rightDivX={anim.rightDivX}
            />
          );
        })}
      </section>
    </motion.div>
  );
}
