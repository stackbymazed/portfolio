import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const educationData = [
  {
    image: "https://i.ibb.co/tPBppQW5/download-15.jpg",
    title: "Diploma in Engineering (Computer Science and Technology)",
    institution: "Institute of Computer Science & Technology | ICST",
    period: "2022 - 2026",
    status: "Pursuing",
  },
  {
    image: "https://i.ibb.co/MkkhdcMM/download-16.jpg",
    title: "SSC (Science | Informatic Practices)",
    institution: "Char Fakira High School | CFHS",
    period: "2017 - 2022",
    status: "Completed",
  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden"
    >
      {/* Glowing Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold flex items-center gap-3 text-gray-100">
            <FaGraduationCap className="text-indigo-400 text-4xl" />
            My <span className="text-indigo-500">Education</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl">
            Education is not the learning of facts, but the training of the mind to think.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-8">
          {educationData.map(({ image, title, institution, period, status }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row bg-gray-900/60 rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-indigo-500/30 transition"
            >
              {/* Image Section */}
              <motion.div
                className="sm:w-1/3 w-full relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </motion.div>

              {/* Text Content */}
              <div className="sm:w-2/3 w-full p-6 flex flex-col justify-center text-left">
                <h3 className="text-2xl font-bold text-indigo-400 mb-2">{title}</h3>
                <p className="text-gray-300 text-base mb-3">{institution}</p>
                <div className="flex items-center gap-2 text-gray-400">
                  <FaCalendarAlt className="text-indigo-400" />
                  <span className="text-sm sm:text-base">
                    {period} |{" "}
                    <span
                      className={`${
                        status === "Pursuing"
                          ? "text-yellow-400"
                          : "text-green-400"
                      } font-semibold`}
                    >
                      {status}
                    </span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
