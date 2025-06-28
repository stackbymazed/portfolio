import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Banner = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* === Left Side: Text Content === */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Hi, I'm <span className="text-primary">Majedul Islam Nayem</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6 max-w-xl">
            A passionate Front-End Developer crafting responsive websites using React, TailwindCSS, and modern web technologies. Let's build something great together!
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-5 mb-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 transition">
              <FaFacebook />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white transition">
              <FaGithub />
            </a>
          </div>

          {/* Button */}
          <a href="#contact">
            <button className="btn btn-primary px-6 py-3 text-lg">Contact Me</button>
          </a>
        </div>

        {/* === Right Side: Image === */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://i.ibb.co/JR3YJsjK/IMG-2328-1-1-1.png"
            alt="Profile"
            className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full border-4 border-primary shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
