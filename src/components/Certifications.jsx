import { motion } from "framer-motion";
import { certifications } from "../data/education";

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="certifications"
      className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
          Certifications
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Professional achievements and credentials
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="relative bg-card-light dark:bg-card-dark rounded-xl p-6 shadow-xl border border-gray-200 dark:border-gray-700/50 hover:border-primary/50 transition-all duration-300 flex flex-col"
            whileHover={{
              y: -8,
              boxShadow: "0 20px 40px -10px rgba(245, 158, 11, 0.3)",
            }}
          >
            {/* Certificate Icon */}
            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-white text-2xl">
                  {cert.icon}
                </span>
              </div>
            </motion.div>

            {/* Certificate Details */}
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-primary font-semibold mb-2">{cert.issuer}</p>

              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                <span className="material-symbols-outlined text-sm">
                  calendar_today
                </span>
                <span>{cert.date}</span>
              </div>

              <div className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                ID: {cert.credentialId}
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/30"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* View Certificate Button */}
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-2 w-full py-2 px-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Certificate</span>
              <span className="material-symbols-outlined text-sm">
                open_in_new
              </span>
            </motion.a>
          </motion.div>
        ))}
      </motion.div>

      {/* Add More Certifications CTA */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-gray-600 dark:text-gray-400 italic">
          Continuously learning and earning new certifications...
        </p>
      </motion.div>
    </section>
  );
};

export default Certifications;
