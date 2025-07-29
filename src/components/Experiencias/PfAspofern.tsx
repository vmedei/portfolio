"use client";

import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import { SiPython, SiReact, SiTailwindcss } from "react-icons/si";

interface PfAspofernProps {
    leftDivOpacity: MotionValue<number>;
    leftDivX: MotionValue<number>;
    rightDivOpacity: MotionValue<number>;
    rightDivX: MotionValue<number>;
}

export default function PfAspofern({ leftDivOpacity, leftDivX, rightDivOpacity, rightDivX }: PfAspofernProps) {
    // Ícones das tecnologias
    const iconesPfAspofern = [
        { icon: SiReact, name: "React" },
        { icon: SiTailwindcss, name: "Tailwind" },
        { icon: SiPython, name: "Python" },
    ];

    return (
        <div className="grid md:grid-cols-2 gap-10">
            {/* Imagem do PF/Aspofern */}
            <motion.div
                style={{
                    opacity: leftDivOpacity,
                    x: leftDivX
                }}
            >
                <div className="group cursor-pointer">
                    <Image
                        src="/aspofern/PfAspofern.png"
                        alt="Aspofern - Sistema de gerenciamento de eventos"
                        width={800}
                        height={500}
                        className="object-cover rounded-lg w-full h-[400px]"
                    />
                </div>

                {/* Info do projeto PF/Aspofern */}
                <div className="mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                        <h3 className="whitespace-nowrap text-2xl font-bold w-1/2">Polícia Federal / Aspofern</h3>
                        <div className="flex gap-4">
                            {iconesPfAspofern.map((icone, index) => (
                                <div key={index} title={icone.name} className="tooltip" data-tip={icone.name}>
                                    <icone.icon
                                        className="h-6 w-6 text-base-content opacity-50 hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="divider" />
                </div>
            </motion.div>

            {/* Texto do PF/Aspofern */}
            <motion.div
                style={{
                    opacity: rightDivOpacity,
                    x: rightDivX
                }}
                className="relative z-10"
            >
                <div className="flex gap-8 h-full">
                    <p className="font-bold text-base-content/70">
                        SOBRE
                    </p>
                    <div className="flex flex-col gap-6 h-full w-full">
                        <p className="text-justify text-base-content/70">
                            <span className="font-bold text-base-content">Contexto: </span>
                            Sistema desenvolvido para a Associação dos Policiais Federais do Rio Grande do Norte, com foco em automatizar o processamento de dados financeiros por meio de scripts em Python.
                        </p>

                        <p className="text-justify text-base-content/70">
                            <span className="font-bold text-base-content">Desafio e Solução: </span>
                            A gestão financeira era realizada manualmente, o que demandava tempo e estava suscetível a erros. A solução foi a criação de um sistema que automatiza a coleta e o tratamento de dados de múltiplas fontes, aumentando a precisão e reduzindo o esforço operacional.
                        </p>

                        <p className="text-justify text-base-content/70">
                            <span className="font-bold text-base-content">Resultado: </span>
                            O sistema está em operação e reduziu drasticamente o tempo de execução de processos, que passaram de semanas para minutos. A automatização trouxe eficiência e modernização à gestão da associação.
                        </p>

                    </div>
                </div>
            </motion.div>
        </div>
    );
} 