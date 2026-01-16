import React from 'react';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden"
    >
      {/* Background Glow Animation */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <FaUser className="text-indigo-400 text-4xl" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100">
            About <span className="text-indigo-500">Me</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 lg:gap-16">
          {/* Profile Image */}
          <motion.div
            className="flex-1 flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              {/* Outer Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 blur-xl opacity-60 group-hover:opacity-80 transition"
                animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>

              <motion.img
                src="https://i.ibb.co/qFY7XSYf/Air-Brush-20240201194436-2.jpg"
                alt="Mazedul Islam"
                className="relative rounded-xl shadow-2xl w-64 sm:w-80 md:w-96 object-cover border-4 border-indigo-600"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 150 }}
              />
            </div>
          </motion.div>

          {/* Text Info */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-100">
              I'm <span className="text-indigo-400">Majedul Islam</span>
            </h3>
            <p className="text-indigo-400 font-semibold mb-4 text-lg sm:text-xl">
              Front-End Developer
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
              I am a passionate Front-End Developer from{" "}
              <span className="font-semibold text-indigo-400">Feni, Bangladesh</span>.
              I love turning complex problems into beautiful and intuitive user interfaces.
              Currently learning and growing my skills in{" "}
              <span className="font-semibold text-indigo-400">
                React, Tailwind CSS, and JavaScript
              </span>
              , aiming to become a Full-Stack Developer soon.
            </p>

            <div className="text-gray-300 mb-6 space-y-2">
              <p>
                <span className="text-indigo-400 font-semibold">Email:</span>{" "}
                majedulislam223311@gmail.com
              </p>
              <p>
                <span className="text-indigo-400 font-semibold">Place:</span>{" "}
                Noakhali, Companiganj   
              </p>
            </div>

            {/* Resume Button */}
            <motion.a
              href="https://drive.google.com/file/d/13SVUHkWFsS3yLFGr_sVuyQ6-mahWX0EJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-lg font-semibold shadow-lg hover:shadow-indigo-500/50 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
