"use client";

import { RiNextjsFill } from "react-icons/ri";
import { SiNodedotjs, SiReact, SiMysql, SiPython, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Sigest() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768); // 768px é o breakpoint md do Tailwind
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

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
            x: isMobile ? 0 : -50,
            y: isMobile ? -50 : 0,
        },
        whileInView: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                delay: 0.4,
                ease: "easeOut" as const,
            }
        }
    };

    const sigestTextVariants = {
        initial: {
            opacity: 0,
            x: isMobile ? 0 : 50,
            y: isMobile ? -50 : 0,
        },
        whileInView: {
            opacity: 1,
            x: 0,
            y: 0,
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
                    <h3 className="whitespace-nowrap text-2xl font-bold">SIGEST</h3>
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
                            <div className="collapse-content text-sm text-justify text-base-content/70">O desafio consistia na migração completa de um sistema legado desenvolvido em Delphi 7 para uma plataforma web moderna. A solução envolveu não apenas a modernização da interface, mas também a adoção de práticas atuais de desenvolvimento, com foco em responsividade, fluidez e manutenção da totalidade das funcionalidades originais.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border-b-2">
                            <input type="radio" name="my-accordion-7" />
                            <div className="collapse-title font-semibold">Meu papel</div>
                            <div className="collapse-content text-sm text-justify text-base-content/70">Como Tech Lead, fui responsável pela liderança técnica na reconstrução completa do sistema, definindo arquitetura, tomando decisões estratégicas e distribuindo tarefas em equipe multidisciplinar. Desenvolvi funcionalidades críticas para auditoria contábil, análise de repasses de tributos e tratamento de grandes volumes de dados fiscais. Implementei integração com diversas fontes de dados públicas e privadas, aplicando regras contábeis específicas de cada município.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300">
                            <input type="radio" name="my-accordion-7" />
                            <div className="collapse-title font-semibold">Resultado</div>
                            <div className="collapse-content text-sm text-justify text-base-content/70">O novo sistema foi implementado com êxito e já está em produção, oferecendo aos municípios uma ferramenta robusta para auditoria de repasses federais. Com funcionalidades avançadas, o sistema realiza a detecção automática de inconsistências e proporciona controle total sobre as transferências constitucionais.</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
} 