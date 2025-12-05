import { motion } from 'framer-motion';
import { educationData } from '../data/education';

const Education = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    return (
        <section id="education" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12 md:mb-16"
            >
                <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Education</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">My academic journey</p>
            </motion.div>

            <motion.div
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className="relative bg-card-light dark:bg-card-dark rounded-xl p-6 md:p-8 shadow-xl border border-gray-200 dark:border-gray-700/50 hover:border-primary/50 transition-all duration-300"
                        whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(245, 158, 11, 0.3)' }}
                    >
                        <div className="flex flex-col md:flex-row gap-6">
                            <motion.div 
                                className="flex-shrink-0"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="material-symbols-outlined text-white text-3xl">{edu.icon}</span>
                                </div>
                            </motion.div>

                            <div className="flex-grow">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-lg font-semibold text-primary mb-1">
                                            {edu.institution}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-sm">location_on</span>
                                            {edu.location}
                                        </p>
                                    </div>
                                    <motion.div 
                                        className="mt-2 md:mt-0"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/30">
                                            <span className="material-symbols-outlined text-sm">calendar_today</span>
                                            {edu.period}
                                        </span>
                                    </motion.div>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {edu.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Education;
