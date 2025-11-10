import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaCommentDots,
  FaHeadset,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0228] via-[#12023d] to-black p-6 overflow-hidden"
    >
      {/* Floating Glows */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-indigo-600 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-700 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white flex justify-center items-center gap-3">
          <FaHeadset className="text-indigo-400" />
          Get In <span className="text-yellow-400">Touch</span>
        </h2>
        <p className="text-gray-400 mt-3 text-lg">
          Let’s connect and create something amazing together ✨
        </p>
      </motion.div>

      {/* Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-w-6xl w-full"
      >
        {/* Left Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 w-full flex items-center justify-center bg-gradient-to-br from-indigo-500/20 to-purple-600/10"
        >
          <img
            src="https://i.ibb.co/gbG9hyqm/man-having-conference-call-his-260nw-1706178394.png"
            alt="Contact Illustration"
            className="w-4/5 h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Right Form */}
        <div className="md:w-1/2 w-full p-8 md:p-12 text-white">
          <form className="space-y-5">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center border border-white/30 rounded-md px-3 py-3 bg-white/10 focus-within:bg-white/20 transition"
            >
              <FaUser className="text-gray-300 mr-3" />
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent focus:outline-none w-full text-white placeholder-gray-400"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center border border-white/30 rounded-md px-3 py-3 bg-white/10 focus-within:bg-white/20 transition"
            >
              <FaEnvelope className="text-gray-300 mr-3" />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent focus:outline-none w-full text-white placeholder-gray-400"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center border border-white/30 rounded-md px-3 py-3 bg-white/10 focus-within:bg-white/20 transition"
            >
              <FaPhone className="text-gray-300 mr-3" />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-transparent focus:outline-none w-full text-white placeholder-gray-400"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-start border border-white/30 rounded-md px-3 py-3 bg-white/10 focus-within:bg-white/20 transition"
            >
              <FaCommentDots className="text-gray-300 mr-3 mt-1" />
              <textarea
                placeholder="Your Message"
                className="bg-transparent focus:outline-none w-full text-white placeholder-gray-400 h-28 resize-none"
              ></textarea>
            </motion.div>

            <motion.div className="text-right" whileTap={{ scale: 0.95 }}>
              <button
                type="submit"
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-indigo-500/40"
              >
                Send Message <FaPaperPlane />
              </button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
