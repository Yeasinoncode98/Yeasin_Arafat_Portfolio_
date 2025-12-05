import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const Header = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            let current = 'home';

            if (window.scrollY < 100) {
                current = 'home';
            } else {
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    const sectionHeight = section.offsetHeight;
                    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                        current = section.getAttribute('id');
                    }
                });
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headerRef.current, {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
        }, headerRef);

        return () => ctx.revert();
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        if (id === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.querySelector(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const navLinks = [
        { name: 'Home', href: '#', id: 'home' },
        { name: 'About', href: '#about-me', id: 'about-me' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Education', href: '#education', id: 'education' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    return (
        <motion.header 
            ref={headerRef}
            className="py-6 fixed top-0 left-0 right-0 w-full z-50 bg-gray-950/90 backdrop-blur-md border-b border-primary/20"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8">
                <motion.a 
                    className="text-xl font-bold text-gray-900 dark:text-white" 
                    href="#" 
                    onClick={(e) => scrollToSection(e, '#')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <h1 className="text-primary text-3xl">YEASIN ARAFAT</h1>
                </motion.a>

                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className={`nav-link text-gray-600 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors font-medium relative ${activeSection === link.id ? 'active' : ''}`}
                            data-section={link.id}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            whileHover={{ y: -2 }}
                        >
                            {link.name}
                            <span className="active-indicator"></span>
                        </motion.a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <motion.a
                        className="hidden sm:flex bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-full font-semibold items-center gap-2 shadow-lg hover:shadow-primary/50 transition-shadow"
                        href="#contact"
                        onClick={(e) => scrollToSection(e, '#contact')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Contact Me
                        <span className="material-symbols-outlined text-xl">chat_bubble</span>
                    </motion.a>

                    <motion.button
                        id="mobile-menu-button"
                        className={`md:hidden flex flex-col justify-center items-center w-12 h-12 bg-primary/10 border-2 border-primary rounded-lg hover:bg-primary/20 hover:border-primary transition-all gap-1.5 ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.span 
                            className="w-6 h-0.5 bg-primary rounded-full"
                            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        ></motion.span>
                        <motion.span 
                            className="w-6 h-0.5 bg-primary rounded-full"
                            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        ></motion.span>
                        <motion.span 
                            className="w-6 h-0.5 bg-primary rounded-full"
                            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        ></motion.span>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        id="mobile-menu" 
                        className="md:hidden absolute top-full left-0 right-0 bg-gray-950/95 backdrop-blur-md border-b border-primary/20"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="flex flex-col py-4">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className={`mobile-nav-link text-gray-100 hover:text-primary hover:bg-primary/10 px-6 py-3 transition-all relative ${activeSection === link.id ? 'active' : ''}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    {link.name}
                                    <span className="mobile-active-dot"></span>
                                </motion.a>
                            ))}
                            <motion.a 
                                className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 mx-6 mt-2"
                                href="#contact" 
                                onClick={(e) => scrollToSection(e, '#contact')}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Me
                                <span className="material-symbols-outlined text-xl">chat_bubble</span>
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
