import React from 'react';
import { FaReact, FaUser } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Header with Logo and Title */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <FaUser className="text-blue-600 text-4xl" />
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            About <span className="text-purple-600">Me</span>
          </h2>
        </div>

        {/* Main Content: Image & Text side by side and center-aligned */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:px-20">
          {/* Profile Image */}
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src="https://i.ibb.co/qFY7XSYf/Air-Brush-20240201194436-2.jpg"
              alt="Majedul Islam"
              className="rounded-lg shadow-lg w-4/5 sm:w-3/5 md:w-full max-w-sm object-cover"
            />
          </div>

          {/* Text Info */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">I'm Majedul Islam</h3>
            <p className="text-blue-700 font-semibold mb-4 text-lg sm:text-xl">
              Front-End Developer
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
              I am a passionate Front-End Developer from <span className="font-semibold">Feni, Bangladesh</span>.
              I love turning complex problems into simple, beautiful, and intuitive user interfaces.
              Currently learning and growing my skills in <span className="font-semibold">React, Tailwind CSS, and JavaScript</span>,
              and I’m working towards becoming a Full-Stack Developer.
            </p>

            <p className="text-gray-800 font-medium mb-2">
              <span className="text-blue-700 font-semibold">Email:</span> majedulislam223311@gmail.com
            </p>
            <p className="text-gray-800 font-medium mb-6">
              <span className="text-blue-700 font-semibold">Place:</span> Noakhali, Companiganj
            </p>

            {/* Resume Button with Icon */}
            <a
              href="https://drive.google.com/file/d/1MI_hWKpJVUjTNC2wskCkd7Cnzot69y1D/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-blue-800 transition mx-auto md:mx-0"
            >
              {/* <FaReact className="text-white text-xl" /> */}
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
