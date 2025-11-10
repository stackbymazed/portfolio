import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, images, liveLink, githubLink }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <motion.div
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-[2px] hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-500"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-[#0f0f1b] rounded-2xl overflow-hidden flex flex-col lg:flex-row items-center gap-8 p-6 sm:p-8">
        {/* 🔹 Left: Image Carousel */}
        <motion.div
          className="lg:w-1/2 w-full rounded-xl overflow-hidden shadow-lg border border-gray-700"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div key={idx} className="relative">
                <img
                  src={img}
                  alt={`Project screenshot ${idx + 1}`}
                  className="w-full h-80 md:h-96 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 hover:opacity-100 transition duration-500"></div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* 🔹 Right: Text Content */}
        <div className="lg:w-1/2 w-full text-left">
          <h3 className="text-3xl font-bold text-yellow-400 mb-4 leading-tight">
            {title}
          </h3>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
            {description}
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg flex items-center gap-2 shadow-md transition-all duration-300"
            >
              <FaExternalLinkAlt /> Live Site
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-yellow-400 hover:bg-yellow-400 hover:text-black text-yellow-400 font-semibold px-5 py-2 rounded-lg flex items-center gap-2 transition-all duration-300"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
