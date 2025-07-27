import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
    // Variantes para os botões de contato
    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
        hover: {
            scale: 1.1,
            y: -5,
            transition: {
                duration: 0.2,
            },
        },
        tap: {
            scale: 0.95,
        },
    };

    const socialLinks = [
        {
            icon: Github,
            href: "#",
            label: "GitHub",
        },
        {
            icon: Linkedin,
            href: "#",
            label: "LinkedIn",
        },
        {
            icon: Mail,
            href: "#",
            label: "Email",
        },
    ];

    return (
        <section className="py-20 bg-base-200" id="contact">
            <div className="container mx-auto px-4 text-center">
                <motion.h2 
                    className="text-3xl font-bold mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Vamos Conversar?
                </motion.h2>
                
                <motion.div 
                    className="flex gap-6 justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            className="btn btn-circle btn-outline"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            aria-label={link.label}
                        >
                            <link.icon className="w-6 h-6" />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact; 