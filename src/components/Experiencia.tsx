import { Smartphone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

import { doamaImages } from "@/data/imagensCarrossel";

interface ExperienciaProps {
    isExperienciaVisible: boolean;
}

const Experiencia = ({ isExperienciaVisible }: ExperienciaProps) => {
    const [isSwiperOpen, setIsSwiperOpen] = useState(false);
    const [swiperIndex, setSwiperIndex] = useState(0);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const openSwiper = (index: number) => {
        setSwiperIndex(index);
        setIsSwiperOpen(true);
    };

    const closeSwiper = () => {
        setIsSwiperOpen(false);
    };

    const openVideoModal = () => {
        setIsVideoModalOpen(true);
    };

    const closeVideoModal = () => {
        setIsVideoModalOpen(false);
    };

    return (
        <section id="experiencia" className="">
            <div className={`container mx-auto space-y-6 p-10 md:rounded-xl bg-base-300 transition-all duration-800 ease-in-out 
                md:${isExperienciaVisible ? 'max-w-3/5' : 'max-w-4/5'
            }`}>
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">Experiências</h2>
                    <p className="text-base-content/70 max-w-2xl mx-auto">
                        Alguns dos projetos que desenvolvi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card Doama com carrossel */}
                    <div
                        className="card bg-base-200 shadow-xl w-80 mx-auto hover:scale-110 md:origin-left transition-all duration-300 cursor-pointer group"
                        onClick={() => openSwiper(0)}
                    >
                        <div className="card-body text-center">
                            <div className="relative h-40 flex">
                                <Image
                                    src="/doama/Doama_1.jpg"
                                    alt="Doama"
                                    width={300}
                                    height={200}
                                    className="rounded-lg shadow-md group-hover:opacity-80 transition-opacity object-cover"
                                />
                                {/* Indicador de múltiplas imagens */}
                                {doamaImages.length > 1 && (
                                    <div className="absolute top-2 right-2 bg-base-100 opacity-50 rounded-full p-2 text-xs font-semibold">
                                        +{doamaImages.length - 1}
                                    </div>
                                )}
                            </div>
                            <h3 className="card-title justify-center">Doama</h3>
                            <p>Sistema de gerenciamento de doações e doadoras de leite materno</p>
                        </div>
                    </div>

                    {/* Card Sigest com vídeo */}
                    <div 
                        className="card bg-base-200 shadow-xl w-80 mx-auto hover:scale-110 transition-all duration-300 cursor-pointer group"
                        onClick={openVideoModal}
                    >
                        <div className="card-body text-center">
                            <div className="relative h-40 flex">
                                <Image
                                    src="/sigest/Sigest_1.png"
                                    alt="Sigest"
                                    width={300}
                                    height={200}
                                    className="rounded-lg shadow-md group-hover:opacity-80 transition-opacity object-cover"
                                />
                                {/* Badge indicando que é vídeo */}
                                <div className="absolute top-2 right-2 bg-base-100 opacity-50 rounded-full px-2 py-1 text-xs font-semibold text-primary-content">
                                    VÍDEO
                                </div>
                            </div>
                            <h3 className="card-title justify-center">Sigest</h3>
                            <p>Sistema integrado de gestão de transferências tributárias</p>
                        </div>
                    </div>

                    <div className="card bg-base-200 shadow-xl w-80 mx-auto hover:scale-110 md:origin-right transition-all duration-300">
                        <div className="card-body text-center">
                            <Smartphone className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h3 className="card-title justify-center">Mobile</h3>
                            <p>Aplicações móveis nativas e híbridas</p>
                        </div>
                    </div>
                </div>

                {/* Modal Swiper para imagens */}
                <div className={`modal ${isSwiperOpen ? 'modal-open' : ''}`}>
                    <div className="modal-box max-w-6xl w-full p-4 relative">
                        {/* Botão de fechar */}
                        <button 
                            onClick={closeSwiper}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-50 bg-base-100 opacity-70 hover:opacity-100"
                        >
                            ✕
                        </button>
                        
                        {/* Swiper Container */}
                        <div className="w-full md:h-[70vh]">
                            <Swiper
                                modules={[Navigation, Pagination, Keyboard]}
                                initialSlide={swiperIndex}
                                navigation={true}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                keyboard={{
                                    enabled: true,
                                }}
                                loop={doamaImages.length > 1}
                                className="h-full rounded-lg"
                            >
                                {doamaImages.map((image, index) => (
                                    <SwiperSlide key={index} className="flex items-center justify-center">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <Image
                                                src={image.src}
                                                alt={image.alt || `Imagem ${index + 1}`}
                                                width={800}
                                                height={600}
                                                className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        
                        {/* Info do projeto */}
                        <div className="mt-4 text-center">
                            <h3 className="text-xl font-bold">Doama - Sistema de Gestão</h3>
                            <p className="text-base-content/70 mt-2">
                                Sistema completo de gerenciamento de doações e doadoras de leite materno
                            </p>
                        </div>
                    </div>
                    
                    {/* Backdrop */}
                    <div className="modal-backdrop" onClick={closeSwiper}>
                        <button>close</button>
                    </div>
                </div>

                {/* Modal de Vídeo usando DaisyUI */}
                <div className={`modal ${isVideoModalOpen ? 'modal-open' : ''}`}>
                    <div className="modal-box max-w-4xl w-full p-10 relative ">
                        {/* Botão de fechar */}
                        <button 
                            onClick={closeVideoModal}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 bg-base-100 opacity-50 hover:opacity-80"
                        >
                            ✕
                        </button>
                        
                        {/* Container do vídeo responsivo */}
                        <div className="relative w-full h-0 pb-[56.25%]">
                            {isVideoModalOpen && (
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                                    src="/sigest/Sigest.mp4"
                                    title="Sigest - Demonstração"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            )}
                        </div>

                        {/* Info do projeto */}
                        <div className="mt-4 text-center">
                            <h3 className="text-xl font-bold">Sigest - Sistema Integrado</h3>
                            <p className="text-base-content/70 mt-2">
                                Sistema completo de gestão de transferências tributárias
                            </p>
                        </div>
                    </div>
                    
                    {/* Backdrop */}
                    <div className="modal-backdrop" onClick={closeVideoModal}>
                        <button>close</button>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Experiencia;