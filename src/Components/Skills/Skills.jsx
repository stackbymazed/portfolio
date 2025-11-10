import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaPython,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiReactrouter,
} from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400 text-6xl" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500 text-6xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-6xl" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500 text-6xl" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-300 text-6xl" /> },
  { name: 'React', icon: <FaReact className="text-blue-400 text-6xl" /> },
  { name: 'DOM', icon: <TbBrandJavascript className="text-yellow-400 text-6xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-6xl" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-400 text-6xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400 text-6xl" /> },
  { name: 'Firebase Auth', icon: <SiFirebase className="text-yellow-500 text-6xl" /> },
  { name: 'JWT', icon: <SiJsonwebtokens className="text-red-500 text-6xl" /> },
  { name: 'Python', icon: <FaPython className="text-blue-500 text-6xl" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white text-6xl" /> },
  { name: 'Typescript', icon: <SiTypescript className="text-indigo-400 text-6xl" /> },
  { name: 'React Router', icon: <SiReactrouter className="text-pink-500 text-6xl" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden"
    >
      {/* Background Glow Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Header */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white mb-12 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <FaLaptopCode className="text-indigo-400 text-4xl" />
          <span>
            Skills & <span className="text-indigo-500">Abilities</span>
          </span>
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          className="bg-gray-800/40 rounded-2xl p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-white font-semibold shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center justify-center bg-gray-900/30 rounded-xl p-5 hover:bg-gray-900/50 transition duration-300 cursor-pointer h-40 border border-gray-700/50 shadow-md"
              whileHover={{
                scale: 1.1,
                rotate: 3,
                boxShadow: '0px 0px 20px rgba(99,102,241,0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
              >
                {skill.icon}
              </motion.div>
              <p className="mt-3 text-lg tracking-wide">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
