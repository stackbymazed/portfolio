import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, images, liveLink, githubLink }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 max-w-full mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Left Side: Image Slider */}
        <div className="lg:w-1/2 w-full rounded overflow-hidden">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Project screenshot ${idx + 1}`}
                className="w-full h-80 md:h-96 object-cover rounded"
              />
            ))}
          </Slider>
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 w-full text-left">
          <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
          <p className="text-gray-700 mb-6">{description}</p>

          <div className="flex gap-4 flex-wrap">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex items-center gap-2"
            >
              Live Site <FaExternalLinkAlt />
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline flex items-center gap-2"
            >
              GitHub <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
