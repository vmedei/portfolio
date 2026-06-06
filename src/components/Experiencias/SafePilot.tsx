"use client";

import { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { SafePilotImages } from "@/data/imagensCarrossel";
import { SiMui, SiNestjs, SiMongodb, SiRabbitmq, SiSwagger, SiJest, SiLeaflet } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { motion } from "framer-motion";
import { useMobile } from "@/contexts/MobileContext";

export default function SafePilot() {
    const [isClient, setIsClient] = useState(false);
    const { isMobile } = useMobile();

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Configurações do React Slick
    const sliderSettings = {
        dots: true,
        arrows: true,
        infinite: SafePilotImages.length > 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        pauseOnHover: true,
        className: "",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
    };

    // Ícones das tecnologias
    const iconesSafePilot = [
        { icon: SiLeaflet, name: "Leaflet" },
        { icon: SiMui, name: "Material UI" },
        { icon: SiNestjs, name: "NestJS" },
        { icon: SiMongodb, name: "MongoDB" },
        { icon: SiRabbitmq, name: "RabbitMQ" },
        { icon: FaAws, name: "AWS S3" },
        { icon: SiSwagger, name: "Swagger" },
        { icon: SiJest, name: "Jest" },
    ];

    const SafePilotVariants = {
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

    const SafePilotTextVariants = {
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
        <div className="grid md:grid-cols-2 gap-2 md:gap-10 relative">
            {/* Visual do SafePilot */}
            <motion.div variants={SafePilotVariants} initial="initial" whileInView="whileInView" viewport={{ amount: 0.2 }} className="flex flex-col items-center">
                {isClient ? (
                    <div className="w-[300px] sm:w-[500px] md:w-full">
                        <Slider {...sliderSettings}>
                            {SafePilotImages.map((imagem, index) => (
                                <div key={index} className="px-2">
                                    <Image
                                        src={imagem.src}
                                        alt={`${imagem.alt}`}
                                        width={800}
                                        height={500}
                                        className="object-contain rounded-lg w-full h-auto"
                                        priority={index === 0}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-64 bg-base-200 rounded-lg w-full">
                        <div className="loading loading-spinner loading-lg"></div>
                    </div>
                )}

                {/* Info do projeto SafePilot */}
                <div className="mt-6 w-full">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                        <h3 className="whitespace-nowrap text-2xl font-bold">SafePilot WEB</h3>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                            {iconesSafePilot.map((icone, index) => (
                                <div key={index} title={icone.name} className="tooltip" data-tip={icone.name}>
                                    <icone.icon
                                        className="h-6 w-6 text-base-content opacity-50 hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="divider" />
            </motion.div>

            {/* Texto do SafePilot */}
            <motion.div className="relative z-10" variants={SafePilotTextVariants} initial="initial" whileInView="whileInView" viewport={{ amount: 0.2 }}>
                <div className="flex gap-8 h-full">
                    <p className="hidden md:block font-bold text-base-content/70">
                        SOBRE
                    </p>

                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border-base-300 border-b-2">
                            <input type="radio" name="my-accordion-SafePilot" defaultChecked />
                            <div className="collapse-title font-semibold">Contexto</div>
                            <div className="collapse-content text-sm text-justify text-base-content/70">
                                Aplicação web voltada ao acompanhamento e análise de desempenho de motoristas, com mais de 10.000 usuários ativos. Desenvolvido no âmbito da UFRN, o projeto busca fornecer visualização e geolocalização precisas.
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border-b-2">
                            <input type="radio" name="my-accordion-SafePilot" />
                            <div className="collapse-title font-semibold">Desafio e Solução</div>
                            <div className="collapse-content text-sm text-justify text-base-content/70">
                                O desafio envolveu a substituição de componentes legados e a evolução das APIs para suportar o alto volume de acessos. A solução foi o redesign completo do frontend com Material UI, criando uma arquitetura moderna e modular. No backend, as APIs foram aprimoradas com NestJS, MongoDB/Mongoose e mensageria via RabbitMQ.
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border-b-2">
                            <input type="radio" name="my-accordion-SafePilot" />
                            <div className="collapse-title font-semibold">Meu papel</div>
                            <div className="collapse-content text-sm text-justify text-base-content/70">
                                Liderei o redesign completo do frontend, projetando e entregando uma biblioteca abrangente de componentes reutilizáveis, priorizando consistência visual, responsividade e acessibilidade. Trabalhei com recursos de visualização e geolocalização (Leaflet). Também atuei no desenvolvimento das APIs, armazenamento em AWS S3, exposição de endpoints com Swagger e garantia de cobertura via Jest.
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300">
                            <input type="radio" name="my-accordion-SafePilot" />
                            <div className="collapse-title font-semibold">Resultado</div>
                            <div className="collapse-content text-sm text-justify text-base-content/70">
                                Entrega de uma base de código escalável, com padrões de UI e diretrizes de legibilidade estabelecidos para futuras iterações. A aplicação suporta perfeitamente os mais de 10.000 usuários ativos, oferecendo uma experiência fluida para análise de desempenho de motoristas.
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
