"use client";

import Image from "next/image";
import { SiPython, SiReact, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { useMobile } from "@/contexts/MobileContext";

export default function PfAspofern() {
    const { isMobile } = useMobile();

    // Ícones das tecnologias
    const iconesPfAspofern = [
        { icon: SiReact, name: "React" },
        { icon: SiTailwindcss, name: "Tailwind" },
        { icon: SiPython, name: "Python" },
    ];

    const pfAspofernVariants = {
        initial: {
            opacity: 0,
            x: isMobile ? -5 : -50,
        },
        whileInView: {
            opacity: 1,
            x: 0,
            transition: {
                ease: "easeOut" as const,
            }
        }
    };

    const pfAspofernTextVariants = {
        initial: {
            opacity: 0,
            x: isMobile ? 5 : 50,
        },
        whileInView: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.2,
                ease: "easeOut" as const,
            }
        }
    };

    return (
        <div className="grid md:grid-cols-2 gap-2 md:gap-10">
            {/* Imagem do PF/Aspofern */}
            <motion.div variants={pfAspofernVariants} initial="initial" whileInView="whileInView" viewport={{ amount: 0.2 }}>
                <div className="group cursor-pointer">
                    <Image
                        src="/aspofern/PfAspofern.png"
                        alt="Aspofern - Sistema de gerenciamento de eventos"
                        width={800}
                        height={500}
                        className="object-cover rounded-lg w-full h-[150px] sm:h-[300px] md:h-[400px]"
                    />
                </div>

                {/* Info do projeto PF/Aspofern */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-4">
                    <h3 className="whitespace-nowrap text-2xl font-bold">Polícia Federal / Aspofern</h3>
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
            </motion.div>

            {/* Texto do PF/Aspofern */}
            <motion.div className="relative z-10" variants={pfAspofernTextVariants} initial="initial" whileInView="whileInView" viewport={{ amount: 0.2 }}>
                <div className="flex gap-8 h-full">
                    <p className="hidden md:block font-bold text-base-content/70">
                        SOBRE
                    </p>

                    <div className="join join-vertical">
                        <div className="collapse collapse-arrow join-item border-base-300 border-b-2">
                            <input type="radio" name="my-accordion-6" defaultChecked />
                            <div className="collapse-title font-semibold">Contexto</div>
                            <div className="collapse-content text-sm text-justify text-base-content/70">Sistema desenvolvido para a Associação dos Policiais Federais do Rio Grande do Norte, com foco em automatizar o processamento de dados financeiros por meio de scripts em Python.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border-b-2">
                            <input type="radio" name="my-accordion-6" />
                            <div className="collapse-title font-semibold">Desafio e Solução</div>
                            <div className="collapse-content text-sm text-justify text-base-content/70">A gestão financeira era realizada manualmente, o que demandava tempo e estava suscetível a erros. A solução foi a criação de um sistema que automatiza a coleta e o tratamento de dados de múltiplas fontes, aumentando a precisão e reduzindo o esforço operacional.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border-b-2">
                            <input type="radio" name="my-accordion-6" />
                            <div className="collapse-title font-semibold">Meu papel</div>
                            <div className="collapse-content text-sm text-justify text-base-content/70">Como desenvolvedor fullstack freelancer, fui responsável pela criação completa do sistema web para processamento de dados financeiros. Desenvolvi funcionalidades para tratamento de arquivos Excel brutos com exportação de relatórios em CSV, focando em segurança e desempenho utilizando Python, Django, Tailwind e SQLite.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300">
                            <input type="radio" name="my-accordion-6" />
                            <div className="collapse-title font-semibold">Resultado</div>
                            <div className="collapse-content text-sm text-justify text-base-content/70">O sistema está em operação e reduziu drasticamente o tempo de execução de processos, que passaram de semanas para minutos. A automatização trouxe eficiência e modernização à gestão da associação.</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
} 