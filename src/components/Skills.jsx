import { useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const skillCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(sectionRef.current.querySelector('h2'), {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: 'back.out(1.7)'
      });


    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section
      id="skills"
      className="py-16 md:py-24 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8"
      ref={sectionRef}
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center text-white mb-16 uppercase tracking-wider text-primary"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-[#f59e0b]">My Skills Stack</span>
      </motion.h2>

      <div className="skill-section-container lg:max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
          {/* Front-End */}
          <motion.div
            className="skill-category"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-semibold text-center text-primary mb-8 tracking-wider"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              FRONT-END
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "HTML5", icon: "html" },
                { name: "CSS3", icon: "css" },
                { name: "Bootstrap", icon: "bootstrap" },
                { name: "Tailwind CSS", icon: "tailwind" },
                { name: "JavaScript", icon: "javascript" },
                { name: "React.js", icon: "react" },
                { name: "Redux", icon: "redux" },
                { name: "Next.js", icon: "nextjs" },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  ref={el => skillCardsRef.current[index] = el}
                  className="skill-card-bg bg-card-dark rounded-xl p-4 flex flex-col items-center justify-center space-y-2 transition-all duration-300 shadow-lg border border-gray-700/50 hover:border-primary/50 skill-card-glow"
                  variants={cardVariants}
                  animate={floatingAnimation}
                  whileHover={{ scale: 1.1, rotate: 5, borderColor: '#f59e0b' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.img
                    alt={`${skill.name} logo`}
                    className="h-12 w-12"
                    src={`https://skillicons.dev/icons?i=${skill.icon}`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  />
                  <p className="text-sm font-semibold text-gray-100">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Back-End */}
          <motion.div
            className="skill-category"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-semibold text-center text-primary mb-8 tracking-wider"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              BACK-END
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Node.js", icon: "nodejs" },
                { name: "Express.js", icon: "expressjs" },
                { name: "MongoDB", icon: "mongodb" },
                { name: "Firebase", icon: "firebase" },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  ref={el => skillCardsRef.current[8 + index] = el}
                  className="skill-card-bg bg-card-dark rounded-xl p-4 flex flex-col items-center justify-center space-y-2 transition-all duration-300 shadow-lg border border-gray-700/50 hover:border-primary/50 skill-card-glow"
                  variants={cardVariants}
                  animate={floatingAnimation}
                  whileHover={{ scale: 1.1, rotate: -5, borderColor: '#f59e0b' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.img
                    alt={`${skill.name} logo`}
                    className="h-12 w-12"
                    src={`https://skillicons.dev/icons?i=${skill.icon}`}
                    whileHover={{ scale: 1.2, rotate: -360 }}
                    transition={{ duration: 0.5 }}
                  />
                  <p className="text-sm font-semibold text-gray-100">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
              <div className="skill-card-bg bg-card-dark rounded-xl p-4 flex flex-col items-center justify-center space-y-2 opacity-30 cursor-not-allowed">
                <div className="h-10 w-10 bg-gray-600 rounded-full"></div>
                <p className="text-sm font-medium text-gray-400">
                  Future Skill
                </p>
              </div>
              <div className="skill-card-bg bg-card-dark rounded-xl p-4 flex flex-col items-center justify-center space-y-2 opacity-30 cursor-not-allowed">
                <div className="h-10 w-10 bg-gray-600 rounded-full"></div>
                <p className="text-sm font-medium text-gray-400">
                  Future Skill
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div
            className="skill-category"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-semibold text-center text-primary mb-8 tracking-wider"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              TOOLS & PLATFORMS
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  name: "GitHub",
                  icon: "github",
                  className: "dark:invert-0 invert",
                },
                { name: "Git", icon: "git" },
                { name: "VS Code", icon: "vscode" },
                { name: "Figma", icon: "figma" },
                { name: "NPM", icon: "npm" },
                { name: "Vercel", icon: "vercel" },
                { name: "Netlify", icon: "netlify" },
                { name: "Postman", icon: "postman" },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  ref={el => skillCardsRef.current[12 + index] = el}
                  className="skill-card-bg bg-card-dark rounded-xl p-4 flex flex-col items-center justify-center space-y-2 transition-all duration-300 shadow-lg border border-gray-700/50 hover:border-primary/50 skill-card-glow"
                  variants={cardVariants}
                  animate={floatingAnimation}
                  whileHover={{ scale: 1.1, rotate: 5, borderColor: '#f59e0b' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.img
                    alt={`${skill.name} logo`}
                    className={`h-12 w-12 ${skill.className || ""}`}
                    src={`https://skillicons.dev/icons?i=${skill.icon}`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  />
                  <p className="text-sm font-semibold text-gray-100">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
