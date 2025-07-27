"use client";

import { motion, MotionValue } from "framer-motion";
import { RiNextjsFill } from "react-icons/ri";
import { SiNodedotjs, SiPostgresql, SiReact, SiExpress, SiMysql, SiPython, SiTailwindcss } from "react-icons/si";

interface SigestProps {
    leftDivOpacity: MotionValue<number>;
    leftDivX: MotionValue<number>;
    rightDivOpacity: MotionValue<number>;
    rightDivX: MotionValue<number>;
}

export default function Sigest({ leftDivOpacity, leftDivX, rightDivOpacity, rightDivX }: SigestProps) {
    // Ícones das tecnologias
    const iconesSigest = [
        { icon: SiReact, name: "React" },
        { icon: RiNextjsFill, name: "Next.js" },
        { icon: SiTailwindcss, name: "Tailwind" },
        { icon: SiNodedotjs, name: "Node.js" },
        { icon: SiMysql, name: "MySQL" },
        { icon: SiPython, name: "Python" },
    ];

    return (
        <div className="grid md:grid-cols-2 gap-10 relative">
            {/* Vídeo do SIGEST */}
            <motion.div
                style={{
                    opacity: leftDivOpacity,
                    x: leftDivX
                }}
            >
                <div className="aspect-video bg-base-200 rounded-lg overflow-hidden">
                    <video
                        controls
                        className="w-full h-full object-cover"
                        poster="/sigest/Sigest_1.png"
                    >
                        <source src="/sigest/Sigest.mp4" type="video/mp4" />
                        Seu navegador não suporta vídeos.
                    </video>
                </div>

                {/* Info do projeto SIGEST */}
                <div className="mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                        <h3 className="whitespace-nowrap text-2xl font-bold w-1/2">SIGEST</h3>
                        <div className="flex gap-4">
                            {iconesSigest.map((icone, index) => (
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

            {/* Texto do SIGEST */}
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
                            O SIGEST é um sistema de gestão empresarial desenvolvido para otimizar processos administrativos e operacionais, oferecendo controle completo sobre recursos, funcionários e operações da empresa.
                        </p>

                        <p className="text-justify text-base-content/70">
                            <span className="font-bold text-base-content">Desafio e Solução: </span>
                            O principal desafio era centralizar informações dispersas e automatizar processos manuais. A solução foi criar uma plataforma integrada que conecta todos os departamentos em um único sistema.
                        </p>

                        <p className="text-justify text-base-content/70">
                            <span className="font-bold text-base-content">Resultado: </span>
                            Sistema implementado com sucesso, resultando em 40% de redução no tempo de processos administrativos e melhor controle de dados empresariais.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
} 