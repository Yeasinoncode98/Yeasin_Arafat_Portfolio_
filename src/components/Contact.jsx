import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const contactCardsRef = useRef([]);
    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

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

            contactCardsRef.current.forEach((card, index) => {
                if (card) {
                    gsap.from(card, {
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                        },
                        opacity: 0,
                        x: -50,
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: 'power2.out'
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // EmailJS configuration
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                console.error('EmailJS environment variables are missing!');
                toast.error('Configuration error. Please contact the administrator.');
                setIsSubmitting(false);
                return;
            }

            await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

            toast.success('Message sent successfully! I\'ll get back to you soon.');
            formRef.current.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            toast.error('Failed to send message. Please try again or email me directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-16 md:py-24 max-w-7xl mx-auto w-full relative overflow-hidden px-4 sm:px-6 lg:px-8" ref={sectionRef}>
            <motion.div
                className="text-center mb-12 md:mb-16"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl sm:text-5xl font-bold text-primary">Get In Touch</h2>
                <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Let's build something great together.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-gray-100" data-aos="fade-right">Contact Details</h3>
                        <div className="space-y-4">
                            <motion.a
                                ref={el => contactCardsRef.current[0] = el}
                                href="mailto:devoncode98@gmail.com"
                                className="group p-4 bg-card-dark rounded-xl border border-gray-600/30 dark:border-gray-700/50 flex items-center space-x-4 transition-all duration-300"
                                whileHover={{ y: -8, scale: 1.02, borderColor: '#f59e0b' }}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className="p-3 bg-gray-800/50 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                                    <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform duration-300">mail</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-100 group-hover:text-primary transition-colors">Email</h4>
                                    <p className="text-gray-400">devoncode98@gmail.com</p>
                                </div>
                            </motion.a>

                            <motion.a
                                ref={el => contactCardsRef.current[1] = el}
                                href="tel:+8801627800198"
                                className="group p-4 bg-card-dark rounded-xl border border-gray-600/30 dark:border-gray-700/50 flex items-center space-x-4 transition-all duration-300"
                                whileHover={{ y: -8, scale: 1.02, borderColor: '#f59e0b' }}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="p-3 bg-gray-800/50 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                                    <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform duration-300">call</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-100 group-hover:text-primary transition-colors">Phone</h4>
                                    <p className="text-gray-400">01627800198</p>
                                </div>
                            </motion.a>

                            <motion.div
                                ref={el => contactCardsRef.current[2] = el}
                                className="group p-4 bg-card-dark rounded-xl border border-gray-600/30 dark:border-gray-700/50 flex items-center space-x-4 transition-all duration-300"
                                whileHover={{ y: -8, scale: 1.02, borderColor: '#f59e0b' }}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="p-3 bg-gray-800/50 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                                    <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform duration-300">location_on</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-100 group-hover:text-primary transition-colors">Location</h4>
                                    <p className="text-gray-400">Daffodil Smart City, Birulia, Savar</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-3xl font-bold text-gray-100 mb-6">Follow Me</h3>
                        <div className="flex items-center justify-start gap-4">
                            <motion.a
                                href="https://github.com/Yeasinoncode98"
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 flex items-center justify-center bg-card-dark rounded-full border border-gray-600/30 dark:border-gray-700/50 group shadow-lg"
                                whileHover={{ scale: 1.15, y: -5, borderColor: '#f59e0b' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg aria-hidden="true" className="w-7 h-7 text-gray-400 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" fillRule="evenodd"></path>
                                </svg>
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/yeasin-arafat-2b73a4392/"
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 flex items-center justify-center bg-card-dark rounded-full border border-gray-600/30 dark:border-gray-700/50 group shadow-lg"
                                whileHover={{ scale: 1.15, y: -5, borderColor: '#f59e0b' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg aria-hidden="true" className="w-7 h-7 text-gray-400 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                </svg>
                            </motion.a>
                            <motion.a
                                href="https://mohonsharif.com/yeasinarafat-portfolio"
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 flex items-center justify-center bg-card-dark rounded-full border border-gray-600/30 dark:border-gray-700/50 group shadow-lg"
                                whileHover={{ scale: 1.15, y: -5, borderColor: '#f59e0b' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary text-3xl">language</span>
                            </motion.a>
                            <motion.a
                                href="https://www.facebook.com/share/1ANMTjR9N7/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 flex items-center justify-center bg-card-dark rounded-full border border-gray-600/30 dark:border-gray-700/50 group shadow-lg"
                                whileHover={{ scale: 1.15, y: -5, borderColor: '#f59e0b' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg aria-hidden="true" className="w-7 h-7 text-gray-400 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .732.593 1.324 1.325 1.324h11.493v-9.294h-3.176v-3.676h3.176v-2.127c0-3.14 1.884-4.85 4.706-4.85 1.332 0 2.472.099 2.805.143v3.259h-1.933c-1.516 0-1.815.722-1.815 1.782v2.348h3.637l-.475 3.676h-3.162v9.294h6.116c.732 0 1.325-.592 1.325-1.324v-21.351c0-.732-.593-1.325-1.325-1.325z" />
                                </svg>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="p-8 rounded-xl border border-primary/50 shadow-xl shadow-primary/10 bg-card-dark/70 transition-all duration-500"
                        whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(245, 158, 11, 0.25)' }}
                    >
                        <h3 className="text-3xl font-bold text-gray-100 mb-6">Send Me a Message</h3>
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="group">
                                    <label htmlFor="full-name" className="block text-sm font-medium text-gray-300 mb-1 group-hover:text-primary transition-colors">Full Name</label>
                                    <input id="full-name" type="text" name="full-name" placeholder="Your Full Name"
                                        className="w-full py-3 px-4 text-gray-200 bg-background-dark border-gray-700 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-gray-500" />
                                </div>
                                <div className="group">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 group-hover:text-primary transition-colors">Email Address</label>
                                    <input id="email" type="email" name="email" placeholder="Your Email"
                                        className="w-full py-3 px-4 text-gray-200 bg-background-dark border-gray-700 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-gray-500" />
                                </div>
                            </div>
                            <div className="group">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 group-hover:text-primary transition-colors">Message</label>
                                <textarea id="message" name="message" rows="4" placeholder="Tell me about your project, requirements..."
                                    className="w-full py-3 px-4 text-gray-200 bg-background-dark border-gray-700 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-gray-500"></textarea>
                            </div>
                            <div>
                                <motion.button
                                    type="submit"
                                    className="w-full py-3 px-4 text-base font-bold text-black bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 focus:ring-2 focus:ring-primary rounded-lg transition-all duration-300 shadow-lg"
                                    whileHover={{ y: -4, scale: 1.02, boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.5)' }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Message
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
