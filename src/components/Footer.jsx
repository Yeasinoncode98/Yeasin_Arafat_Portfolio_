import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer 
            className="mt-20 pt-8 border-t border-gray-700/50 text-center pb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-4xl mx-auto space-y-4">
                <motion.h4 
                    className="text-3xl font-extrabold text-yellow-400 tracking-wider"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    &lt;YEASIN ARAFAT/&gt;
                </motion.h4>
                <motion.p 
                    className="text-lg text-gray-300 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <span className="text-yellow-400">-----------</span> A Mern-Stack-Developer <span className="text-yellow-400">-----------</span>
                </motion.p>
                <motion.div 
                    className="pt-8 text-sm text-gray-400 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="order-2 sm:order-1">
                        © 2025 Developed with <span className="text-orange-500">⚡</span> by <span className="text-primary font-semibold">Yeasin Arafat</span>
                    </p>
                    <span className="hidden sm:inline order-2 text-gray-500">|</span>
                    <p className="order-3">
                        Made with <span className="text-red-500">❤️</span> in Bangladesh
                    </p>
                </motion.div>
                <motion.a 
                    href="#contact" 
                    className="fixed bottom-4 right-4 text-primary bg-gray-800 p-2 rounded-full shadow-lg z-50"
                    whileHover={{ scale: 1.1, backgroundColor: '#f59e0b', color: '#000' }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                >
                    <span className="material-symbols-outlined text-2xl">arrow_upward</span>
                </motion.a>
            </div>
        </motion.footer>
    );
};

export default Footer;
