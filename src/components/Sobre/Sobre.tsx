import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Trajetoria from "./Trajetoria";
import { useMobile } from "@/contexts/MobileContext";
import { useLanguage } from "@/contexts/LanguageContext";

interface SobreProps {
    scrollToSection: (target: string) => void;
}

export default function Sobre({ scrollToSection }: SobreProps) {

    const { isMobile } = useMobile();
    const { t } = useLanguage();
    const [exibirTrajetoria, setExibirTrajetoria] = useState(false);

    const handleClick = () => {
        setExibirTrajetoria(true);

        // Delay para garantir que o componente de trajetória seja exibido
        setTimeout(() => {
            scrollToSection('#sobre');
        }, 100);
    }

    const imageVariants = {
        initial: {
            opacity: 0,
            x: isMobile ? -5 : -50,
        },
        whileInView: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.2,
                ease: "easeOut" as const,
            }
        }
    };

    const textVariants = {
        initial: {
            opacity: 0,
            x: isMobile ? 5 : 50,
        },
        whileInView: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.2,
                ease: "easeOut" as const,
                delay: 0.2
            }
        },
        exit: {
            opacity: 0,
            x: isMobile ? -5 : -50,
            transition: {
                duration: 0.2,
                ease: "easeInOut" as const
            }
        }
    };

    return (
        <section className="flex flex-col md:flex-row gap-10 justify-center items-center min-h-screen" id="sobre">
            <AnimatePresence mode="wait">
                {!exibirTrajetoria ? (
                    <>
                        <motion.div
                            key="image"
                            variants={imageVariants}
                            initial="initial"
                            whileInView="whileInView"
                            exit={{
                                opacity: 0,
                                x: -100,
                                transition: {
                                    duration: 0.4,
                                    ease: "easeInOut" as const
                                }
                            }}
                            viewport={{ amount: 0.3 }}
                        >
                            <Image src="/sobre/vinicius.png" alt={t.sobre.foto} width={400} height={400} />
                        </motion.div>

                        <motion.div
                            key="text"
                            className="md:w-1/2 p-4 flex flex-col gap-6"
                            variants={textVariants}
                            initial="initial"
                            whileInView="whileInView"
                            exit="exit"
                            viewport={{ amount: 0.3 }}
                        >
                            <p className="hidden md:block font-bold text-base-content/50">
                                {t.sobre.rotulo}
                            </p>

                            {t.sobre.paragrafos.map((paragrafo, i) => (
                                <p key={i} className="text-justify text-2xl">
                                    {paragrafo.map((trecho, j) =>
                                        trecho.destaque ? (
                                            <span key={j} className="font-bold">{trecho.texto}</span>
                                        ) : (
                                            <span key={j}>{trecho.texto}</span>
                                        )
                                    )}
                                </p>
                            ))}

                            <div className="flex">
                                <button
                                    className="btn btn-secondary"
                                    onClick={handleClick}
                                >
                                    {t.sobre.botaoTrajetoria}
                                    <ArrowRight className="w-4 h-4"  />
                                </button>
                            </div>

                        </motion.div>
                    </>
                ) : (
                    <motion.div
                        key="trajectory"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut" as const
                        }}
                        className="w-full"
                    >
                        <Trajetoria onBack={() => setExibirTrajetoria(false)} scrollToSection={scrollToSection} />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}