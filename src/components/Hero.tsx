"use client";

import { Download, Mail } from 'lucide-react';
import AnimatedPath from '@/components/AnimatedPath';
import { pathD } from '@/data/pathD';
import { motion } from 'framer-motion';
import TextType from './ReactBits/TextType';
import { FiGithub } from 'react-icons/fi';
import { PiLinkedinLogo } from 'react-icons/pi';

interface HeroProps {
    scrollToSection: (target: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {

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
                    <div className="flex flex-col gap-4">
                        <h1 className="flex flex-col gap-2">
                            <span className="md:text-6xl text-4xl font-bold text-primary-content/80">Vinicius Medeiros</span>
                            <span className="sr-only">Desenvolvedor Full Stack</span>
                            <TextType
                                as="span"
                                aria-hidden="true"
                                text={["DESENVOLVEDOR FULL STACK"]}
                                textColors={['#000000']}
                                typingSpeed={50}
                                loop={false}
                                showCursor={true}
                                cursorCharacter="|"
                                className="md:text-4xl text-2xl font-bold text-primary-content/70"
                            />
                        </h1>
                        <p className="md:text-2xl text-xl font-medium italic text-primary-content/70 max-w-3xl">
                            Modernizo sistemas e construo arquiteturas escaláveis com React, Node.js e TypeScript.
                        </p>
                        <div className="flex gap-4 text-primary-content/70">
                            <a href="https://linkedin.com/in/vmedei" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-base-content">
                                <PiLinkedinLogo className="w-7 h-7" />
                            </a>
                            <a href="https://github.com/vmedei" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-base-content">
                                <FiGithub className="w-7 h-7" />
                            </a>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-10">
                        <motion.a
                            href="/Vinicius Alves Medeiros.pdf"
                            download="Vinicius_Alves_Medeiros_Curriculo.pdf"
                            className="btn btn-xl rounded-lg bg-primary/50 backdrop-blur-xs shadow-lg"
                            variants={buttonCurriculoVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5 }}
                        >
                            <Download className="w-4 h-4" />
                            Currículo
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
                            Contato
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