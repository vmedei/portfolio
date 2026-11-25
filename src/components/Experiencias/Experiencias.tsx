"use client";

import { motion } from "framer-motion";
import TecnologiasMarquee from "../TecnologiasMarquee";
import { useMobile } from "@/contexts/MobileContext";
import ExperienciaCard from "./ExperienciaCard";
import { experiencias } from "@/data/experiencias";

export default function Experiencias() {
    const { isMobile } = useMobile();

    const experienciasVariants = {
        initial: {
            opacity: 0,
            y: 50,
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut" as const,
            }
        }
    };

    return (
        <motion.div
            className={`${isMobile ? "h-auto" : "min-h-screen"}`}
            variants={experienciasVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ amount: 0.1 }}
        >
            <section
                id="experiencias"
                className="container mx-auto p-10 md:rounded-xl bg-base-200 flex flex-col justify-between gap-8 overflow-hidden"
            >
                <div className="flex justify-between items-center gap-10">
                    <h2 className="text-2xl md:text-3xl font-bold">Experiências</h2>
                    <TecnologiasMarquee gradientColor="#f5f5f5" />
                </div>

                <div className="divider" />

                {/* A ordem e o conteúdo vêm de src/data/experiencias.ts */}
                {experiencias.map((experiencia) => (
                    <ExperienciaCard key={experiencia.id} experiencia={experiencia} />
                ))}
            </section>
        </motion.div>
    );
}
