import React from 'react';
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
} from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500 text-3xl" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600 text-3xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-3xl" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500 text-3xl" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-800 text-3xl" /> },
  { name: 'React', icon: <FaReact className="text-blue-400 text-3xl" /> },
  { name: 'DOM', icon: <TbBrandJavascript className="text-yellow-400 text-3xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-3xl" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-600 text-3xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-3xl" /> },
  { name: 'Firebase Auth', icon: <SiFirebase className="text-yellow-500 text-3xl" /> },
  { name: 'JWT', icon: <SiJsonwebtokens className="text-red-500 text-3xl" /> },
  { name: 'Python', icon: <FaPython className="text-blue-600 text-3xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className=" py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-10">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-md transition p-5 text-gray-800 font-semibold text-center border border-gray-200 flex flex-col items-center"
            >
              {skill.icon}
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
