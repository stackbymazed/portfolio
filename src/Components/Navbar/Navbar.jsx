import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Education", path: "#education" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  const [activeLink, setActiveLink] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-white/40 backdrop-blur-lg shadow-md z-50 px-6 lg:px-16 flex items-center justify-between h-16 border-b border-white/20"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="font-extrabold text-2xl bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text cursor-pointer"
      >
        Nayem<span className="text-indigo-600">.Io</span>
      </motion.div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 items-center">
        {navItems.map((item) => (
          <motion.li
            key={item.name}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <HashLink
              smooth
              to={`/${item.path}`}
              onClick={() => setActiveLink(item.path)}
              className={`relative pb-1 text-sm font-semibold tracking-wide transition duration-300 ${
                activeLink === item.path
                  ? "text-indigo-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-indigo-600"
                  : "text-gray-800 hover:text-indigo-500"
              }`}
            >
              {item.name}
            </HashLink>
          </motion.li>
        ))}

        {/* Resume Button */}
        <motion.li whileHover={{ scale: 1.05 }}>
          <a
            href="https://drive.google.com/file/d/13SVUHkWFsS3yLFGr_sVuyQ6-mahWX0EJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md hover:shadow-lg transition-all text-sm font-semibold"
          >
            Resume
          </a>
        </motion.li>
      </ul>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden text-2xl text-gray-800 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-3/4 h-full bg-white/80 backdrop-blur-md shadow-2xl z-50 flex flex-col items-center justify-center space-y-8"
          >
            {navItems.map((item) => (
              <HashLink
                key={item.name}
                smooth
                to={`/${item.path}`}
                onClick={() => {
                  setActiveLink(item.path);
                  setMenuOpen(false);
                }}
                className={`text-xl font-semibold ${
                  activeLink === item.path
                    ? "text-indigo-600 underline"
                    : "text-gray-800 hover:text-indigo-600"
                }`}
              >
                {item.name}
              </HashLink>
            ))}
            <a
              href="https://drive.google.com/file/d/13SVUHkWFsS3yLFGr_sVuyQ6-mahWX0EJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg font-semibold shadow-lg"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
