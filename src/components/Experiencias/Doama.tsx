"use client";

import { doamaImages } from "@/data/imagensCarrossel";
import Slider from "react-slick";
import Image from "next/image";
import { SiNodedotjs, SiPostgresql, SiSvelte, SiTailwindcss } from "react-icons/si";

export default function Doama() {

    // Configurações do React Slick
    const sliderSettings = {
        dots: true,
        arrows: true,
        infinite: doamaImages.length > 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ],
        className: "w-[300px] sm:w-[600px] md:w-full",
    };

    // Ícones das tecnologias
    const iconesDoama = [
        { icon: SiSvelte, name: "Svelte" },
        { icon: SiTailwindcss, name: "Tailwind" },
        { icon: SiNodedotjs, name: "Node.js" },
        { icon: SiPostgresql, name: "PostgreSQL" },
    ];

    return (
        <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col items-center w-full">
                {/* Slider do DOAMA */}
                    <Slider {...sliderSettings}>
                        {doamaImages.map((imagem, index) => (
                            <div key={index}>
                                <Image
                                    src={imagem.src}
                                    alt={`${imagem.alt}`}
                                    width={800}
                                    height={500}
                                    className="object-contain rounded-lg"
                                    priority={index === 0}
                                />
                            </div>
                        ))}
                    </Slider>
                {/* Info do projeto DOAMA */}
                <div className="mt-8 w-full">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                        <h3 className="whitespace-nowrap text-2xl font-bold">Doama</h3>
                        <div className="flex gap-4">
                            {iconesDoama.map((icone, index) => (
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
            </div>


            {/* Texto do DOAMA */}
            <div className="relative z-10">
                <div className="flex gap-8 h-full">
                    <p className="font-bold text-base-content/70">
                        SOBRE
                    </p>
                    <div className="flex flex-col gap-6 h-full w-full">
                        <p className="text-justify text-base-content/70">
                            <span className="font-bold text-base-content">Contexto: </span>
                            O Doama foi desenvolvido com o objetivo de modernizar e simplificar a gestão de doadoras e doações de leite materno, com foco no uso por secretarias municipais de saúde. Criado na UFRN, o sistema oferece suporte a bancos de leite e profissionais da área, contribuindo para o controle eficiente desse recurso essencial à sobrevivência de recém-nascidos.
                        </p>

                        <p className="text-justify text-base-content/70">
                            <span className="font-bold text-base-content">Desafio e Solução: </span>
                            O principal desafio era conceber uma plataforma intuitiva, segura e eficaz, capaz de integrar doadoras, profissionais de saúde e bancos de leite, garantindo a rastreabilidade das doações e o controle preciso do estoque. A solução foi um sistema web robusto, que permite o cadastro, o monitoramento e a comunicação entre todos os envolvidos no processo.
                        </p>

                        <p className="text-justify text-base-content/70">
                            <span className="font-bold text-base-content">Resultado: </span>
                            O Doama foi desenvolvido com êxito, atendendo aos critérios de usabilidade, segurança e integração. Embora ainda não esteja em operação oficial, o sistema já demonstrou sua viabilidade e está em fase de avaliação para adoção por diversos municípios.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}
