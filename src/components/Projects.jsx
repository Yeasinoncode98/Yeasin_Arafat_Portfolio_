import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(false);
    const sectionRef = useRef(null);
    const projectCardsRef = useRef([]);

    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(sectionRef.current.querySelector('h2'), {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                opacity: 0,
                y: -50,
                duration: 1,
                ease: 'power3.out'
            });

            projectCardsRef.current.forEach((card, index) => {
                if (card) {
                    gsap.from(card, {
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                        },
                        opacity: 0,
                        y: 80,
                        scale: 0.8,
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: 'power3.out'
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [showAll]);

    const handleViewAll = () => {
        if (showAll) {
            setShowAll(false);
        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setShowAll(true);
            }, 1500);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5 }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.3 }
        }
    };

    return (
        <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
            <div className="max-w-7xl mx-auto">
                <motion.h2 
                    className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16 text-slate-800 dark:text-white"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[#f59e0b]">My Featured Projects</span>
                </motion.h2>

                <motion.div 
                    id="project-grid" 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project, index) => (
                            <motion.div 
                                key={index} 
                                ref={el => projectCardsRef.current[index] = el}
                                className="bg-card-light dark:bg-card-dark rounded-xl shadow-2xl overflow-hidden flex flex-col relative project-card-animate"
                                variants={cardVariants}
                                whileHover={{ y: -10, scale: 1.03 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                layout
                            >
                                <motion.div 
                                    className="project-img-border border-4 border-gray-200 dark:border-gray-600 rounded-lg m-2 transition-all duration-300 overflow-hidden"
                                    whileHover={{ borderColor: '#f59e0b' }}
                                >
                                    <motion.img 
                                        alt={`Screenshot of ${project.title}`}
                                        className="w-full h-48 object-cover rounded-md object-center"
                                        src={project.image}
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x200/f59e0b/ffffff?text=Image+Unavailable'; }}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <motion.h3 
                                        className="text-2xl font-bold text-slate-800 dark:text-white mb-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <p className="text-text-light dark:text-text-dark text-sm leading-relaxed flex-grow mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tag, i) => (
                                            <motion.span 
                                                key={i} 
                                                className="text-xs font-medium text-slate-700 dark:text-primary bg-slate-200 dark:bg-transparent border border-slate-400 dark:border-primary rounded-full px-3 py-1"
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                transition={{ type: 'spring', stiffness: 400 }}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>

                                    <div className="mt-auto flex justify-around items-center space-x-2">
                                        <motion.a 
                                            className="flex-1 text-center text-xs sm:text-sm font-semibold text-white px-3 py-2 rounded-full shadow-lg gradient-button"
                                            href={project.live} target="_blank" rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Live
                                        </motion.a>
                                        <motion.a 
                                            className="flex-1 text-center text-xs sm:text-sm font-semibold text-white px-3 py-2 rounded-full shadow-lg gradient-button"
                                            href={project.client} target="_blank" rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Client
                                        </motion.a>
                                        <motion.a 
                                            className="flex-1 text-center text-xs sm:text-sm font-semibold text-white px-3 py-2 rounded-full shadow-lg gradient-button"
                                            href={project.server} target="_blank" rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Server
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <motion.button
                        id="view-all-button"
                        onClick={handleViewAll}
                        disabled={loading}
                        className="inline-flex items-center gradient-button text-white font-semibold rounded-full px-8 py-3 shadow-xl text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                    >
                        <span id="button-text">{loading ? 'Loading More...' : (showAll ? 'Show Less' : 'View All Projects')}</span>
                        {loading && <div id="loading-spinner" className="ml-3 w-5 h-5 border-4 border-solid border-white rounded-full spinner"></div>}
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
