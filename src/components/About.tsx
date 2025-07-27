import { motion } from "framer-motion";
import { Code, Palette, Smartphone } from 'lucide-react';

const About = () => {
    // Variantes para os cards
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
        hover: {
            y: -10,
            scale: 1.05,
            transition: {
                duration: 0.3,
            },
        },
    };

    // Variantes para os ícones
    const iconVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "backOut",
            },
        },
        hover: {
            rotate: 360,
            transition: {
                duration: 0.6,
            },
        },
    };

    const cards = [
        {
            icon: Code,
            title: "Desenvolvimento",
            description: "Criação de aplicações web modernas e responsivas",
        },
        {
            icon: Palette,
            title: "Design",
            description: "Interfaces intuitivas e experiências de usuário excepcionais",
        },
        {
            icon: Smartphone,
            title: "Mobile",
            description: "Aplicações móveis nativas e híbridas",
        },
    ];

    return (
        <section className="py-20" id="about">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2 
                        className="text-3xl font-bold mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Sobre Mim
                    </motion.h2>
                    <motion.p 
                        className="text-base-content/70 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Sou um desenvolvedor apaixonado por criar soluções inovadoras e experiências de usuário excepcionais.
                        Especializado em tecnologias modernas e sempre em busca de novos desafios.
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            className="card bg-base-200 shadow-xl"
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <div className="card-body text-center">
                                <motion.div
                                    variants={iconVariants}
                                    whileHover="hover"
                                >
                                    <card.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                                </motion.div>
                                <h3 className="card-title justify-center">{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About; 