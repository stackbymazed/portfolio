import { useState } from "react";
import { FaLaptopCode, FaEye, FaCode } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Online-Group-Study",
    description: "A simple and effective way to learn together with classmates. Join study groups, share notes, participate in live discussions, and prepare for exams more efficiently",
    image: "https://i.ibb.co/3yNSKrZx/Screenshot-2025-06-28-135823.png",
    liveLink: "https://assignment-11-e732e.web.app/",
    code: {
      frontend: "https://github.com/stackbymazed/Online-Group-Study-Client",
      backend: "https://github.com/stackbymazed/Online-Group-Study-Server",
    },
  },
  {
    title: "BhromonBarta",
    description: "A platform to share your travel experiences, tips, and destination stories. Discover new places, plan trips, and connect with fellow travelers",
    image: "https://i.ibb.co.com/C57hMGyJ/Screenshot-2025-08-12-223640.png",
    liveLink: "https://bhromonbarta-6cc68.web.app/",
    code: {
      frontend: "https://github.com/stackbymazed/BhromonBarta",
      backend: "https://github.com/stackbymazed/BhromonBarta",
    },
  },
  {
    title: "Roommate-Finder",
    description: "Find a trustworthy and compatible roommate quickly. Match based on budget, location, and lifestyle to find the perfect living companion.",
    image: "https://i.ibb.co/tTPmjLcL/Screenshot-2025-06-28-135054.png",
    liveLink: "https://roommate-finder-5dc65.web.app/",
    code: {
      frontend: "https://github.com/stackbymazed/Roommate-Finder-Client",
      backend: "https://github.com/stackbymazed/Roommate-Finder-Server",
    },
  },
];

const overlayVariants = {
  initial: { y: "100%" },
  hover: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const textVariants = {
  initial: { opacity: 0, y: 20 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const modalContent = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { y: 50, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

const ProjectsMade = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div id="projects" className="bg-[#060242] text-white py-12 min-h-screen">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold flex justify-center items-center gap-3">
          <FaLaptopCode />
          Projects <span className="text-yellow-400">Made</span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-8 px-5">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="relative rounded shadow-lg group cursor-pointer overflow-hidden"
            initial="initial"
            whileHover="hover"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Title always visible below image */}
            <h3 className="mt-3 text-xl font-bold text-yellow-400 text-center">
              {project.title}
            </h3>

            {/* Animated Overlay with description and buttons on hover */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-5 flex flex-col items-center gap-3"
              variants={overlayVariants}
            >
              {/* Description */}
              <motion.p
                className="text-xl text-gray-300 text-center"
                variants={textVariants}
              >
                {project.title}
              </motion.p>
              <motion.p
                className="text-sm text-gray-300 text-center"
                variants={textVariants}
              >
                {project.description}
              </motion.p>

              {/* Buttons */}
              <motion.div className="flex gap-4 mt-2" variants={textVariants}>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded font-semibold text-sm transition flex items-center gap-2"
                >
                  <FaEye /> View
                </a>
                <button
                  onClick={() => openModal(project)}
                  className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded font-semibold text-sm transition flex items-center gap-2"
                >
                  <FaCode /> Code
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm bg-black"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          >
            <motion.div
              className="bg-[#12183b] rounded-lg p-6 w-11/12 max-w-md relative"
              variants={modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-400 text-center">
                {selectedProject.title} - Code Repositories
              </h3>

              <div className="flex flex-col gap-4">
                <a
                  href={selectedProject.code.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded font-semibold text-center transition"
                >
                  Frontend Repo
                </a>
                <a
                  href={selectedProject.code.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded font-semibold text-center transition"
                >
                  Backend Repo
                </a>
              </div>

              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-300 hover:text-yellow-400 text-xl font-bold"
                aria-label="Close modal"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsMade;
