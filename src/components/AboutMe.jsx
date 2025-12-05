import { motion } from 'framer-motion';

const AboutMe = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="about-me" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
                className="text-center mb-12 md:mb-16"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl sm:text-5xl font-bold text-primary">About Me</h2>
                <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">A dedicated developer & problem solver</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div 
                    className="flex justify-center lg:justify-end items-start h-full"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div 
                        className="p-4 bg-background-light dark:bg-gray-800/50 rounded-lg shadow-xl border border-primary/20 w-full max-w-[590px] lg:h-[470px]"
                        whileHover={{ scale: 1.02, rotate: 1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <img alt="Illustration of a developer coding on a modern computer"
                            className="w-full h-full object-cover rounded-lg"
                            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExam1zbG9jcG16YnY5ZHAxa2FoOTB1enZhdnk1c3VwZ3V1MTN6MTl0NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif" />
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="flex flex-col space-y-6 text-base md:text-lg leading-relaxed"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.p 
                        className="text-gray-700 dark:text-gray-300"
                        variants={itemVariants}
                    >
                        I am a passionate <span className="font-semibold text-primary">Full-Stack Developer</span> specializing in the **MERN (MongoDB, Express.js, React, Node.js) stack**. My goal is to craft highly **responsive**, **performant**, and **user-centric** web applications from the ground up.
                    </motion.p>

                    <motion.p 
                        className="text-gray-700 dark:text-gray-300"
                        variants={itemVariants}
                    >
                        My expertise spans both **Front-End Development** (React, Next.js, Tailwind CSS) and robust **Back-End Development** (Node.js, Express.js, MongoDB). I believe in clean code, architectural best practices, and continuous learning to keep up with the fast-paced tech world.
                    </motion.p>

                    <motion.div 
                        className="border-l-4 border-primary pl-4 py-2 bg-primary/10 rounded-r-lg"
                        variants={itemVariants}
                        whileHover={{ x: 10, borderLeftWidth: '6px' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <p className="italic text-gray-800 dark:text-gray-200">
                            "Turning complex technical challenges into simple, elegant, and impactful digital solutions is what drives me every day."
                        </p>
                    </motion.div>

                    <motion.p 
                        className="text-gray-700 dark:text-gray-300"
                        variants={itemVariants}
                    >
                        I am currently seeking opportunities that allow me to leverage my comprehensive skill set in a collaborative and innovation-driven environment. Let's build something amazing together!
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
