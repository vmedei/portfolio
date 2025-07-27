import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.footer 
            className="footer footer-center p-10 bg-base-300 text-base-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <p>Copyright © 2024 - Todos os direitos reservados</p>
            </motion.div>
        </motion.footer>
    );
};

export default Footer; 