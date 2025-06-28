import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        
        {/* Left - Name and Role */}
        <div>
          <h2 className="text-xl font-semibold text-primary">Majedul Islam Nayem</h2>
          <p className="text-sm mt-2">Front-End Web Developer</p>
        </div>

        {/* Center - Contact Info */}
        <div>
          <h3 className="font-semibold">Contact</h3>
          <p className="text-sm mt-1">Email: <a className="link" href="mailto:majedulislam223311@gmail.com">majedulislam223311@gmail.com</a></p>
        </div>

        {/* Right - Social Icons */}
        <div>
          <h3 className="font-semibold">Follow Me</h3>
          <div className="flex justify-center sm:justify-start gap-4 mt-2 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="hover:text-blue-500" /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-gray-700" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-blue-400" /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t pt-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Majedul Islam Nayem. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
