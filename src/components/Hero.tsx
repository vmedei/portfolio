"use client";

import { Download, Mail } from 'lucide-react';
import AnimatedPath from '@/components/AnimatedPath';
import { pathD } from '@/data/pathD';
import { motion } from 'framer-motion';
import { useReduzirMovimento } from '@/hooks/useReduzirMovimento';
import TextType from './ReactBits/TextType';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroProps {
    scrollToSection: (target: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
    const { idioma, t } = useLanguage();
    const reduzirMovimento = useReduzirMovimento();

    const heroVariants = {
        hidden: {
            opacity: 0,
            y: -50,
            transition: {
                duration: 0.25,
                type: "tween" as const,
                ease: "easeOut" as const
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.25,
                type: "tween" as const,
                ease: "easeOut" as const
            }
        },
    };

    const buttonCurriculoVariants = {
        hidden: {
            opacity: 0,
            x: 100,
            transition: {
                delay: 0.5,
                type: "tween" as const,
                ease: "easeOut" as const
            }
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.5,
                type: "tween" as const,
                ease: "easeOut" as const
            }
        },
    };

    const buttonContatoVariants = {
        hidden: {
            opacity: 0,
            x: 100,
            transition: {
                delay: 1,
                type: "tween" as const,
                ease: "easeOut" as const
            }
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 1,
                type: "tween" as const,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <section className="hero h-screen" id="home">
            <motion.div className="relative flex justify-between w-4/5 h-4/5" variants={heroVariants} initial="hidden" animate="visible" transition={{ duration: 0.5 }}>
                <div className="flex flex-col justify-around z-10">
                    <div>
                        {reduzirMovimento ? (
                            // Sem a digitação: mostra só o primeiro título, parado
                            <p className="md:text-5xl text-3xl font-bold text-base-content">{t.hero.titulos[0]}</p>
                        ) : (
                        <TextType
                            key={idioma}
                            text={t.hero.titulos}
                            textColors={['#000000']}
                            typingSpeed={50}
                            pauseDuration={1000}
                            showCursor={true}
                            cursorCharacter="|"
                            className="md:text-5xl text-3xl font-bold text-primary-content/70"
                        />
                        )}
                        <h1 className="md:text-4xl text-2xl font-medium italic text-primary-content/70">{t.hero.frase}</h1>
                    </div>
                    <div className="flex md:flex-row flex-col gap-10">
                        <motion.a
                            href={t.hero.curriculoArquivo}
                            download={t.hero.curriculoDownload}
                            className="btn btn-xl rounded-lg bg-primary/50 backdrop-blur-xs shadow-lg"
                            variants={buttonCurriculoVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5 }}
                        >
                            <Download className="w-4 h-4" />
                            {t.hero.curriculo}
                        </motion.a>
                        <motion.button
                            className="btn btn-xl rounded-lg bg-base-100/50 backdrop-blur-xs shadow-lg"
                            onClick={() => scrollToSection('#contact')}
                            variants={buttonContatoVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5 }}
                        >
                            <Mail className="w-4 h-4" />
                            {t.hero.contato}
                        </motion.button>
                    </div>
                </div>

                <div className='absolute inset-0 opacity-10'>
                    <AnimatedPath pathD={pathD} />
                </div>
            </motion.div>
        </section>
    );
} 