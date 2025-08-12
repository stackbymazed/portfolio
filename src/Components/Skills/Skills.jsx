import React from 'react';
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
} from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';
import { MdDeviceHub } from 'react-icons/md';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500 text-6xl" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600 text-6xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-6xl" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500 text-6xl" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-800 text-6xl" /> },
  { name: 'React', icon: <FaReact className="text-blue-400 text-6xl" /> },
  { name: 'DOM', icon: <TbBrandJavascript className="text-yellow-400 text-6xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-6xl" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-600 text-6xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-6xl" /> },
  { name: 'Firebase Auth', icon: <SiFirebase className="text-yellow-500 text-6xl" /> },
  { name: 'JWT', icon: <SiJsonwebtokens className="text-red-500 text-6xl" /> },
  { name: 'Python', icon: <FaPython className="text-blue-600 text-6xl" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white text-6xl" /> },
  { name: 'Similar', icon: <MdDeviceHub className="text-indigo-400 text-6xl" /> },
];

const Skills = () => {
  return (
    <section className="bg-[#4B0082] py-16 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-4xl font-bold mb-12 flex items-center justify-center gap-3">
          <FaLaptopCode className="text-white text-4xl" />
          <span>
            Skills & <span className="text-yellow-400">Abilities</span>
          </span>
        </h2>

        <div className="bg-[#2a104b] rounded-lg p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 text-white font-bold">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center cursor-pointer bg-black bg-opacity-20 rounded-lg p-4
                         hover:shadow-lg hover:bg-opacity-30 transition duration-300 ease-in-out h-40"
            >
              {skill.icon}
              <p className="mt-3 text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
