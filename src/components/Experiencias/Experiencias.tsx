"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TecnologiasMarquee from "../TecnologiasMarquee";
import Doama from "./Doama";
import Sigest from "./Sigest";
import FoodCampus from "./FoodCampus";
import PfAspofern from "./PfAspofern";

export default function Experiencias() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            if (typeof window !== 'undefined') {
                setIsMobile(window.innerWidth < 768); // 768px é o breakpoint md do Tailwind
            }
        };

        checkIsMobile();
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', checkIsMobile);
            return () => window.removeEventListener('resize', checkIsMobile);
        }
    }, []);

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

                {/* COMPONENTES SEM ANIMAÇÕES */}
                <Sigest />
                <Doama />
                <PfAspofern />
                <FoodCampus />
            </section>
        </motion.div>
    );
}
