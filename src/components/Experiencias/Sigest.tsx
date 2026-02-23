"use client";

import { RiNextjsFill } from "react-icons/ri";
import { SiNodedotjs, SiReact, SiMysql, SiPython, SiTailwindcss } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useMobile } from "@/contexts/MobileContext";

export default function Sigest() {

    const { isMobile } = useMobile();

    const handleVisitSite = () => {
        window.open("https://solucaotributos.com.br", "_blank");
    };

    // Ícones das tecnologias
    const iconesSigest = [
        { icon: SiReact, name: "React" },
        { icon: RiNextjsFill, name: "Next.js" },
        { icon: SiTailwindcss, name: "Tailwind" },
        { icon: SiNodedotjs, name: "Node.js" },
        { icon: SiMysql, name: "MySQL" },
        { icon: SiPython, name: "Python" },
    ];

    const sigestVariants = {
        initial: {
            opacity: 0,
            x: isMobile ? -5 : -50,
        },
        whileInView: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.4,
                ease: "easeOut" as const,
            }
        }
    };

    const sigestTextVariants = {
        initial: {
            opacity: 0,
            x: isMobile ? 5 : 50,
        },
        whileInView: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.6,
                ease: "easeOut" as const,
            }
        }
    };

    return (
        <div className="grid md:grid-cols-2 gap-2 md:gap-10 relative">
            {/* Vídeo do SIGEST */}
            <motion.div
                variants={sigestVariants}
                viewport={{ amount: 0.4 }}
                initial="initial"
                whileInView="whileInView"
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
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-4">
                    <div className="flex items-center gap-4">
                        <h3 className="whitespace-nowrap text-2xl font-bold">SIGEST</h3>
                        <button
                            onClick={handleVisitSite}
                            className="btn btn-sm btn-primary"
                        >
                            <ExternalLink className="w-5 h-5" />
                            Visitar Site
                        </button>
                    </div>
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
            </motion.div>

            {/* Texto do SIGEST */}
            <motion.div
                variants={sigestTextVariants}
                viewport={{ amount: 0.4 }}
                initial="initial"
                whileInView="whileInView"
                className="relative z-10"
            >
                <div className="flex gap-8 h-full">
                    <p className="hidden md:block font-bold text-base-content/70">
                        SOBRE
                    </p>

                    <div className="join join-vertical">
                        <div className="collapse collapse-arrow join-item border-base-300 border-b-2">
                            <input type="radio" name="my-accordion-7" defaultChecked />
                            <div className="collapse-title font-semibold">Contexto</div>
                            <div className="collapse-content text-sm text-justify text-base-content/70">O SIGEST é um sistema de contabilidade tributária focado na análise das transferências constitucionais realizadas pela União para estados e municípios. Sua principal função é realizar cálculos de auditoria a fim de identificar possíveis falhas nos repasses.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border-b-2">
                            <input type="radio" name="my-accordion-7" />
                            <div className="collapse-title font-semibold">Desafio e Solução</div>
                            <div className="collapse-content text-sm text-justify text-base-content/70">O desafio consistia na migração completa de um sistema legado desenvolvido em Delphi 7 para uma plataforma web moderna. A solução entregou tempo médio de resposta até 8x mais rápido, além de responsividade, fluidez e manutenção da totalidade das funcionalidades originais.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border-b-2">
                            <input type="radio" name="my-accordion-7" />
                            <div className="collapse-title font-semibold">Meu papel</div>
                            <div className="collapse-content text-sm text-justify text-base-content/70">Com atuação em liderança técnica na migração, desenvolvi e automatizei o processamento de dados, reduzindo o tempo médio de importação de 16 horas para poucos minutos. Implementei microsserviços e pipelines de CI/CD com GitHub Actions (build, testes e deploy em AWS), reduzindo o tempo de release de 2 horas para 10 minutos. Desenvolvi funcionalidades críticas para auditoria contábil, análise de repasses e tratamento de grandes volumes de dados fiscais, com integração a fontes públicas e privadas e regras contábeis por município.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300">
                            <input type="radio" name="my-accordion-7" />
                            <div className="collapse-title font-semibold">Resultado</div>
                            <div className="collapse-content text-sm text-justify text-base-content/70">Sistema em produção com resultados mensuráveis: tempo de resposta até 8x mais rápido que o legado, importação de dados de 16 horas para poucos minutos e pipeline de release de 2 horas para 10 minutos. Os municípios passaram a contar com auditoria de repasses federais mais rápida, detecção automática de inconsistências e controle total sobre as transferências constitucionais.</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
} 