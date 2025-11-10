import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import profileImage from "../../assets/profile.png"; // tumaar local image path

const Banner = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-black overflow-hidden"
    >
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-20 left-[-100px] w-72 h-72 bg-indigo-600 rounded-full blur-3xl opacity-20"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-0 right-[-100px] w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      />

      {/* Banner Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-semibold text-gray-200 mb-2"
          >
            Hi There,
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-white"
          >
            I'm <span className="text-indigo-400">Majedul Islam</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl mb-6 max-w-md mx-auto lg:mx-0 text-gray-300"
          >
            A <span className="text-yellow-400 font-semibold">Frontend Developer</span> building
            modern & responsive web applications.
          </motion.h2>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center lg:justify-start gap-4 flex-wrap"
          >
            <a
              href="https://drive.google.com/file/d/13SVUHkWFsS3yLFGr_sVuyQ6-mahWX0EJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:scale-105 hover:shadow-xl transition transform flex items-center gap-2 font-semibold"
            >
              Resume <FaUser />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center lg:justify-start gap-5 mt-6"
          >
            <a
              href="https://www.facebook.com/majedulislam.nayem"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-blue-600 hover:text-white hover:bg-blue-600 transition transform hover:scale-110"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mazedul-islam22/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-blue-400 hover:text-white hover:bg-blue-400 transition transform hover:scale-110"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/stackbymazed"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-gray-800 hover:text-white hover:bg-gray-800 transition transform hover:scale-110"
            >
              <FaGithub size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <motion.div
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.5)]"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={profileImage}
              alt="Profile"
              className="object-cover w-full h-full"
            />
            {/* Animated ring effect */}
            <motion.div
              className="absolute inset-0 border-4 border-indigo-500 rounded-full animate-ping opacity-20"
              transition={{ repeat: Infinity, duration: 2 }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
