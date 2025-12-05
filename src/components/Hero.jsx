import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Hero = () => {
    const heroRef = useRef(null);
    const imageRef = useRef(null);
    const skillTagsRef = useRef([]);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(70);

    const phrases = [
        "a computer engineering student with a strong focus on web development, aiming to build innovative and user-friendly websites.",
        "a full-stack developer specializing in the MERN stack.",
        "a problem-solver ready to take on new challenges.",
    ];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

            if (isDeleting) {
                setTypingSpeed(40);
            } else {
                setTypingSpeed(70);
            }

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, phrases, typingSpeed]);

    useEffect(() => {
        // GSAP animations for hero section
        const ctx = gsap.context(() => {
            gsap.from(heroRef.current.querySelector('h1'), {
                opacity: 0,
                y: -50,
                duration: 1,
                ease: 'power3.out'
            });

            gsap.from(heroRef.current.querySelector('.typing-text'), {
                opacity: 0,
                y: 20,
                duration: 0.8,
                delay: 0.3,
                ease: 'power2.out'
            });

            gsap.from(heroRef.current.querySelectorAll('.hero-button'), {
                opacity: 0,
                scale: 0.8,
                duration: 0.6,
                delay: 0.6,
                stagger: 0.1,
                ease: 'back.out(1.7)'
            });

            // Animate profile image
            gsap.from(imageRef.current, {
                opacity: 0,
                scale: 0.5,
                duration: 1.2,
                delay: 0.4,
                ease: 'elastic.out(1, 0.5)'
            });

            // Animate skill tags with floating effect
            skillTagsRef.current.forEach((tag, index) => {
                if (tag) {
                    gsap.from(tag, {
                        opacity: 0,
                        scale: 0,
                        duration: 0.6,
                        delay: 0.8 + index * 0.1,
                        ease: 'back.out(1.7)'
                    });

                    gsap.to(tag, {
                        y: '+=15',
                        duration: 2 + index * 0.3,
                        repeat: -1,
                        yoyo: true,
                        ease: 'sine.inOut'
                    });
                }
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="home" className="flex items-center py-12 md:py-20 pt-32 md:pt-40 min-h-screen" ref={heroRef}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                        Hi, I'm <span className="text-primary">Yeasin Arafat</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 min-h-24 typing-text">
                        <span className="inline-block text-2xl">I'm {text}<span className="cursor"></span></span>
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6">
                        <a className="hero-button bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-primary/50 transition-shadow"
                            href="https://drive.google.com/file/d/1eWzkyhI-tugrHdaVVWfTcUDsnrhUCLdk/view?usp=sharing"
                            target="_blank" rel="noreferrer">
                            Download Resume
                            <span className="material-symbols-outlined">download</span>
                        </a>
                        <div className="flex items-center gap-4 hero-button">
                            <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                                href="https://github.com/Yeasinoncode98" target="_blank" aria-label="GitHub" rel="noreferrer">
                                <svg aria-hidden="true" className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                                    <path clipRule="evenodd"
                                        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                                        fillRule="evenodd"></path>
                                </svg>
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                                href="https://www.linkedin.com/in/yeasin-arafat-2b73a4392/" target="_blank"
                                aria-label="LinkedIn" rel="noreferrer">
                                <svg aria-hidden="true" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
                                    </path>
                                </svg>
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                                href="https://www.facebook.com/share/1ANMTjR9N7/?mibextid=wwXIfr" target="_blank"
                                aria-label="Facebook" rel="noreferrer">
                                <svg aria-hidden="true" className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2.04c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zm1.016 10.354h-1.932v5.837h-2.988v-5.837h-1.423v-2.77h1.423v-1.881c0-2.531 1.427-4.026 4.048-4.026 1.182 0 2.537.221 2.537.221v2.93h-1.796c-1.045 0-1.354.654-1.354 1.319v1.95h2.488l-.396 2.77h-2.091v5.837z">
                                    </path>
                                </svg>
                                <span className="sr-only">Facebook</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center items-center h-96 lg:h-full lg:min-h-[500px]" ref={imageRef}>
                    <div className="absolute w-80 h-80 md:w-96 md:h-96 border-2 border-dashed border-primary/50 rounded-full animate-spin-20s"></div>
                    <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden p-2 bg-gradient-to-r from-amber-400 to-orange-500 shadow-2xl">
                        <div className="relative w-full h-full rounded-full bg-background-light dark:bg-background-dark p-2">
                            <img alt="Portrait of Yeasin Arafat" className="w-full h-full object-cover rounded-full"
                                src="https://i.postimg.cc/5937k5hN/Whats-App-Image-2025-11-19-at-4-38-28-AM.jpg"
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/500x500/0A192F/FBBF24?text=Yeasin+Arafat'; }} />
                        </div>
                    </div>

                    <span ref={el => skillTagsRef.current[0] = el} className="skill-tag" style={{ top: '25%', left: '20%' }}>
                        <div className="px-4 py-1 rounded-full text-sm shadow-lg glowing-skill">Tailwind CSS</div>
                    </span>
                    <span ref={el => skillTagsRef.current[1] = el} className="skill-tag" style={{ top: '15%', left: '70%' }}>
                        <div className="px-4 py-1 rounded-full text-sm shadow-lg green-glowing-skill">Next.js</div>
                    </span>
                    <span ref={el => skillTagsRef.current[2] = el} className="skill-tag" style={{ top: '30%', left: '95%' }}>
                        <div className="px-4 py-1 rounded-full text-sm shadow-lg green-glowing-skill">Express.js</div>
                    </span>
                    <span ref={el => skillTagsRef.current[3] = el} className="skill-tag" style={{ top: '70%', left: '90%' }}>
                        <div className="px-4 py-1 rounded-full text-sm shadow-lg green-glowing-skill">Node.js</div>
                    </span>
                    <span ref={el => skillTagsRef.current[4] = el} className="skill-tag" style={{ top: '95%', left: '65%' }}>
                        <div className="px-4 py-1 rounded-full text-sm shadow-lg glowing-skill">TypeScript</div>
                    </span>
                    <span ref={el => skillTagsRef.current[5] = el} className="skill-tag" style={{ top: '85%', left: '10%' }}>
                        <div className="px-4 py-1 rounded-full text-sm shadow-lg green-glowing-skill">MongoDB</div>
                    </span>
                    <span ref={el => skillTagsRef.current[6] = el} className="skill-tag" style={{ top: '50%', left: '5%' }}>
                        <div className="px-4 py-1 rounded-full text-sm shadow-lg glowing-skill">React</div>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
