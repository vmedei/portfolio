"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Midia } from "@/data/experiencias";

const sliderBase = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    // Ajusta a altura a cada imagem (há prints em retrato, como o do WhatsApp)
    adaptiveHeight: true,
    responsive: [{ breakpoint: 768, settings: { dots: true, arrows: false } }],
};

export default function ExperienciaMidia({ midia }: { midia: Midia }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (midia.tipo === "video") {
        return (
            <div className="aspect-video bg-base-200 rounded-lg overflow-hidden w-full">
                <video controls preload="none" className="w-full h-full object-cover" poster={midia.poster}>
                    <source src={midia.src} type="video/mp4" />
                    Seu navegador não suporta vídeos.
                </video>
            </div>
        );
    }

    if (midia.tipo === "imagem") {
        return (
            <Image
                src={midia.imagem.src}
                alt={midia.imagem.alt}
                width={800}
                height={500}
                className="object-cover rounded-lg w-full h-[150px] sm:h-[300px] md:h-[400px]"
            />
        );
    }

    // O react-slick depende do window, então o carrossel só é montado no cliente
    if (!isClient) {
        return (
            <div className="flex justify-center items-center h-64 bg-base-200 rounded-lg w-full">
                <div className="loading loading-spinner loading-lg"></div>
            </div>
        );
    }

    return (
        <div className="w-[300px] sm:w-[500px] md:w-full">
            <Slider {...sliderBase} infinite={midia.imagens.length > 1}>
                {midia.imagens.map((imagem, index) => (
                    <div key={imagem.src} className="px-2">
                        <Image
                            src={imagem.src}
                            alt={imagem.alt}
                            width={800}
                            height={500}
                            className="object-contain rounded-lg w-full h-auto max-h-[420px]"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
