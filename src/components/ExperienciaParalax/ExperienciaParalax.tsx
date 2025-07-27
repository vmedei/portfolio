"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TecnologiasMarquee from "../TecnologiasMarquee";
import Doama from "./Doama";
import Sigest from "./Sigest";
import FoodCampus from "./FoodCampus";

export default function ExperienciaParalax() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // DOAMA - Primeira seção (15% a 30% do scroll)
    const doamaLeftDivOpacity = useTransform(scrollYProgress, [0.15, 0.20], [0, 1]);
    const doamaLeftDivX = useTransform(scrollYProgress, [0.15, 0.20], [-100, 0]);
    
    const doamaRightDivOpacity = useTransform(scrollYProgress, [0.17, 0.22], [0, 1]);
    const doamaRightDivX = useTransform(scrollYProgress, [0.17, 0.22], [100, 0]);

    // SIGEST - Segunda seção (30% a 60% do scroll)
    const sigestLeftDivOpacity = useTransform(scrollYProgress, [0.30, 0.35], [0, 1]);
    const sigestLeftDivX = useTransform(scrollYProgress, [0.30, 0.35], [-100, 0]);
    
    const sigestRightDivOpacity = useTransform(scrollYProgress, [0.32, 0.37], [0, 1]);
    const sigestRightDivX = useTransform(scrollYProgress, [0.32, 0.37], [100, 0]);

    // FOODCAMPUS - Terceira seção (60% a 90% do scroll)
    const foodCampusLeftDivOpacity = useTransform(scrollYProgress, [0.60, 0.65], [0, 1]);
    const foodCampusLeftDivX = useTransform(scrollYProgress, [0.60, 0.65], [-100, 0]);
    
    const foodCampusRightDivOpacity = useTransform(scrollYProgress, [0.62, 0.67], [0, 1]);
    const foodCampusRightDivX = useTransform(scrollYProgress, [0.62, 0.67], [100, 0]);

    const calcularAltura = () => {
        if (containerRef.current) {
            const sectionHeight = containerRef.current.scrollHeight;
            const windowHeight = window.innerHeight;
            const calculatedHeight = Math.max(sectionHeight, windowHeight * 2);
            return `${calculatedHeight}px`;
        }
        return "230vh";
    }

    return (
        <div ref={containerRef} className={`h-[${calcularAltura()}] border border-red-400`}>
            <section
                id="experiencia-paralax"
                className="sticky top-24 container mx-auto p-10 md:rounded-xl bg-base-300 flex flex-col justify-between gap-4 overflow-hidden"
            >
                <div className="flex justify-between items-center gap-10">
                    <h2 className="text-3xl font-bold">Experiências</h2>
                    <TecnologiasMarquee gradientColor="#ebebeb" />
                </div>

                <div className="divider" />

                {/* SEÇÃO DOAMA */}
                <Doama
                    leftDivOpacity={doamaLeftDivOpacity}
                    leftDivX={doamaLeftDivX}
                    rightDivOpacity={doamaRightDivOpacity}
                    rightDivX={doamaRightDivX}
                />

                {/* SEÇÃO SIGEST */}
                <Sigest
                    leftDivOpacity={sigestLeftDivOpacity}
                    leftDivX={sigestLeftDivX}
                    rightDivOpacity={sigestRightDivOpacity}
                    rightDivX={sigestRightDivX}
                />

                {/* SEÇÃO FOODCAMPUS */}
                <FoodCampus
                    leftDivOpacity={foodCampusLeftDivOpacity}
                    leftDivX={foodCampusLeftDivX}
                    rightDivOpacity={foodCampusRightDivOpacity}
                    rightDivX={foodCampusRightDivX}
                />
            </section>
        </div>
    );
}