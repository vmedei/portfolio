import { motion } from "framer-motion";
import { Download, Mail } from 'lucide-react';
import AnimatedPath from './AnimatedPath';
import { pathD } from '@/data/pathD';

interface HeroProps {
    onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
    // Variantes de animação para o container principal
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3,
            },
        },
    };

    // Variantes para os elementos filhos
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    // Variantes para os botões
    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
        },
        hover: {
            scale: 1.05,
        },
        tap: {
            scale: 0.95,
        },
    };

    return (
        <section className="hero min-h-[75vh]">
            <motion.div
                className="relative flex justify-between w-3/4 h-3/4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    className="flex flex-col justify-around z-10"
                    variants={containerVariants}
                >
                    <motion.div 
                        variants={itemVariants}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h1 
                            className="md:text-5xl text-3xl font-bold"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            CRIO INTERFACES SIMPLES E MEMORÁVEIS
                        </motion.h1>
                        <motion.h1 
                            className="md:text-4xl text-2xl font-medium italic text-primary-content/70"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Transformando ideias em experiências digitais incríveis
                        </motion.h1>
                    </motion.div>

                    <motion.div 
                        className="flex md:flex-row flex-col gap-10"
                        variants={itemVariants}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.button 
                            className="btn btn-xl rounded-lg btn-primary"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            transition={{ duration: 0.5 }}
                        >
                            <Download className="w-4 h-4" />
                            Currículo
                        </motion.button>
                        
                        <motion.button 
                            className="btn btn-xl rounded-lg bg-base-100/50 backdrop-blur-xs shadow-lg"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={onContactClick}
                            transition={{ duration: 0.5 }}
                        >
                            <Mail className="w-4 h-4" />
                            Contato
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className='absolute inset-0 opacity-10'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                >
                    <AnimatedPath pathD={pathD} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero; 