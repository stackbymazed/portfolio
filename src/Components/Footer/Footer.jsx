import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#05003b] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Left - Portfolio Intro */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Majed's Portfolio</h2>
          <p className="text-sm mb-2">
            Thank you for visiting my personal portfolio website. Connect with me over socials.
          </p>
          <p className="text-sm">
            Keep Rising 🚀. Connect with me over live chat!
          </p>
        </div>

        {/* Center - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#home" className="hover:underline">➤ Home</a></li>
            <li><a href="#about" className="hover:underline">➤ About</a></li>
            <li><a href="#skills" className="hover:underline">➤ Skills</a></li>
            <li><a href="#education" className="hover:underline">➤ Education</a></li>
            <li><a href="#work" className="hover:underline">➤ Work</a></li>
            <li><a href="#experience" className="hover:underline">➤ Experience</a></li>
          </ul>
        </div>

        {/* Right - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
          <p className="text-sm">📞 +880 01893679303</p>
          <p className="text-sm">📧 <a className="hover:underline" href="mailto:majedulislam223311@gmail.com">majedulislam223311@gmail.com</a></p>
          <p className="text-sm">📍Noakhali, BanglaDesh</p>
          <div className="flex justify-center md:justify-start gap-4 mt-3 text-lg">
            <a href="https://www.linkedin.com/in/mazedul-islam22/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/stackbymazed" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="mailto:majedulislam223311@gmail.com"><FaEnvelope /></a>
            {/* <a href="#" target="_blank" rel="noopener noreferrer"><FaTelegram /></a> */}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm">
        <p>
          Designed With <span className="text-red-500">❤</span> By <span className="text-orange-400">Majedul Islam Nayem</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
