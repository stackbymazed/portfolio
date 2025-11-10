import { useState } from "react";
import { FaLaptopCode, FaEye, FaCode } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Online-Group-Study",
    description:
      "Learn together with classmates — join study groups, share notes, participate in discussions, and prepare efficiently.",
    image: "https://i.ibb.co/3yNSKrZx/Screenshot-2025-06-28-135823.png",
    liveLink: "https://assignment-11-e732e.web.app/",
    code: {
      frontend: "https://github.com/stackbymazed/Online-Group-Study-Client",
      backend: "https://github.com/stackbymazed/Online-Group-Study-Server",
    },
  },
  {
    title: "BhromonBarta",
    description:
      "A travel storytelling platform — share your travel stories, plan trips, and discover hidden destinations.",
    image: "https://i.ibb.co/C57hMGyJ/Screenshot-2025-08-12-223640.png",
    liveLink: "https://bhromonbarta-6cc68.web.app/",
    code: {
      frontend: "https://github.com/stackbymazed/BhromonBarta",
      backend: "https://github.com/stackbymazed/BhromonBarta",
    },
  },
  {
    title: "Roommate-Finder",
    description:
      "Find the perfect roommate by matching based on budget, location, and lifestyle preferences.",
    image: "https://i.ibb.co/tTPmjLcL/Screenshot-2025-06-28-135054.png",
    liveLink: "https://roommate-finder-5dc65.web.app/",
    code: {
      frontend: "https://github.com/stackbymazed/Roommate-Finder-Client",
      backend: "https://github.com/stackbymazed/Roommate-Finder-Server",
    },
  },
];

// Overlay animation
const overlayVariants = {
  initial: { opacity: 0, y: 100 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
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
    <section
      id="projects"
      className="relative bg-gradient-to-br from-[#05031a] via-[#0a0228] to-black text-white py-24 overflow-hidden"
    >
      {/* Animated Floating Glows */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-80 h-80 bg-indigo-600 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-96 h-96 bg-purple-700 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -80, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold flex justify-center items-center gap-3">
            <FaLaptopCode className="text-indigo-400" />
            Projects <span className="text-yellow-400">Made</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            My best creations — powered by design, functionality, and animation.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="relative group rounded-2xl overflow-hidden bg-gray-800/30 backdrop-blur-lg border border-gray-700 hover:border-indigo-500/40 transition-all duration-500 shadow-lg hover:shadow-indigo-500/30"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.03 }}
            >
              {/* Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Overlay */}
              <motion.div
                variants={overlayVariants}
                initial="initial"
                whileHover="hover"
                className="absolute inset-0 bg-black/85 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition-all"
              >
                <motion.h3
                  className="text-2xl font-bold text-yellow-400 mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 text-sm mb-5"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.description}
                </motion.p>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded font-semibold text-sm flex items-center gap-2"
                  >
                    <FaEye /> Live
                  </a>
                  <button
                    onClick={() => openModal(project)}
                    className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded font-semibold text-sm flex items-center gap-2"
                  >
                    <FaCode /> Code
                  </button>
                </div>
              </motion.div>

              {/* Title */}
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-indigo-300">
                  {project.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {modalOpen && selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 w-11/12 max-w-md border border-gray-700 shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold mb-4 text-yellow-400 text-center">
                  {selectedProject.title} — Repositories
                </h3>

                <div className="flex flex-col gap-4">
                  <a
                    href={selectedProject.code.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold text-center transition"
                  >
                    Frontend Repo
                  </a>
                  <a
                    href={selectedProject.code.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded-lg font-semibold text-center transition"
                  >
                    Backend Repo
                  </a>
                </div>

                <button
                  onClick={closeModal}
                  className="absolute top-3 right-4 text-gray-400 hover:text-yellow-400 text-2xl font-bold"
                >
                  &times;
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsMade;
