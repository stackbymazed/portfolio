import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router';
import { ParticlesBackground } from '../ParticlesBackground/ParticlesBackground';

const Banner = () => {
  return (
    <section className="relative min-h-screen text-black lg:pt-30 pb-20 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden lg:mb-8 lg:mt-12 lg:mx-20">
      
      {/* Particles Background */}
      {/* <ParticlesBackground /> */}

      {/* Banner Content */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 relative z-10">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-4xl sm:text-5xl font-semibold text-gray-700 mb-2">Hi There,</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-gray-700">
            I'm <span>Majedul <span className="text-indigo-500">Islam</span></span>
          </h1>
          <h2 className="text-2xl sm:text-3xl mb-6 max-w-md mx-auto lg:mx-0 text-gray-700">
            I am Into <span className="text-orange-500">Frontend Developer</span>
          </h2>

          {/* Button */}
          <NavLink to="contact">
            <button className="px-8 sm:px-10 py-3 text-lg rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg hover:shadow-xl transition flex items-center gap-2 mx-auto lg:mx-0">
              About Me <FaUser />
            </button>
          </NavLink>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-5 mt-6">
            <div className="rounded-full p-3 bg-black">
              <a href="https://www.facebook.com/majedulislam.nayem" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white text-blue-500 transition">
                <FaFacebook size={20} />
              </a>
            </div>
            <div className="rounded-full p-3 bg-black">
              <a href="https://www.linkedin.com/in/mazedul-islam22/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white text-blue-400 transition">
                <FaLinkedin size={20} />
              </a>
            </div>
            <div className="rounded-full p-3 bg-black">
              <a href="https://github.com/stackbymazed" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white text-blue-400 transition">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://i.ibb.co/998jGgWD/Air-Brush-20240201194436-2.jpg"
            alt="Profile"
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 object-cover rounded-full border-4 border-primary shadow-xl bg-yellow-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
