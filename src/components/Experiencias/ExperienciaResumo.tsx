"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExperienciaTexto } from "@/data/experiencias";
import { useMobile } from "@/contexts/MobileContext";
import ExperienciaCabecalho from "./ExperienciaCabecalho";

// Experiência no mesmo formato visual das demais (carrossel, logos com tooltip e acordeão),
// montada a partir de src/data/experiencias.ts
export default function ExperienciaResumo({ experiencia }: { experiencia: ExperienciaTexto }) {
    const [isClient, setIsClient] = useState(false);
    const { isMobile } = useMobile();
    const grupo = `accordion-${experiencia.titulo.toLowerCase().replace(/\W+/g, "-")}`;

    useEffect(() => {
        setIsClient(true);
    }, []);

    const sliderSettings = {
        dots: true,
        arrows: true,
        infinite: experiencia.imagens.length > 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnHover: true,
        responsive: [{ breakpoint: 768, settings: { dots: true, arrows: false } }],
    };

    const secoes = [
        { titulo: "Contexto", conteudo: <p>{experiencia.resumo}</p> },
        {
            titulo: "Meu papel",
            conteudo: (
                <ul className="list-disc pl-5 flex flex-col gap-2">
                    {experiencia.destaques.map((destaque) => (
                        <li key={destaque}>{destaque}</li>
                    ))}
                </ul>
            ),
        },
        ...(experiencia.reconhecimento
            ? [{ titulo: "Reconhecimento", conteudo: <p>{experiencia.reconhecimento}</p> }]
            : []),
    ];

    return (
        <div>
            <ExperienciaCabecalho meta={experiencia} />

            <div className="grid md:grid-cols-2 gap-2 md:gap-10 relative">
                <motion.div
                    initial={{ opacity: 0, x: isMobile ? -5 : -50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { ease: "easeOut" } }}
                    viewport={{ amount: 0.2 }}
                    className="flex flex-col items-center"
                >
                    {isClient ? (
                        <div className="w-[300px] sm:w-[500px] md:w-full">
                            <Slider {...sliderSettings}>
                                {experiencia.imagens.map((imagem, index) => (
                                    <div key={imagem.src} className="px-2">
                                        <Image
                                            src={imagem.src}
                                            alt={imagem.alt}
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

                    <div className="mt-6 w-full">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                            <h3 className="whitespace-nowrap text-2xl font-bold">{experiencia.titulo}</h3>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                                {experiencia.tecnologias.map(({ nome, icone: Icone }) => (
                                    <div key={nome} title={nome} className="tooltip" data-tip={nome}>
                                        <Icone className="h-6 w-6 text-base-content opacity-50 hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="divider" />
                </motion.div>

                <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0, x: isMobile ? 5 : 50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, ease: "easeOut" } }}
                    viewport={{ amount: 0.2 }}
                >
                    <div className="flex gap-8 h-full">
                        <p className="hidden md:block font-bold text-base-content/70">SOBRE</p>

                        <div className="join join-vertical w-full">
                            {secoes.map((secao, index) => (
                                <div
                                    key={secao.titulo}
                                    className={`collapse collapse-arrow join-item border-base-300 ${index < secoes.length - 1 ? "border-b-2" : ""}`}
                                >
                                    <input type="radio" name={grupo} defaultChecked={index === 0} />
                                    <div className="collapse-title font-semibold">{secao.titulo}</div>
                                    <div className="collapse-content text-sm text-justify text-base-content/70">
                                        {secao.conteudo}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
