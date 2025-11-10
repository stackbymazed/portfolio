import React, { useState, useEffect, useRef } from "react";
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
  const drawerRef = useRef();

  // Close drawer on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between h-16 px-6 lg:px-16 bg-white/30 backdrop-blur-lg border-b border-white/20">
      {/* Logo */}
      <div className="font-extrabold text-2xl bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text cursor-pointer">
        Nayem<span className="text-indigo-600">.Io</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 items-center">
        {navItems.map((item) => (
          <li key={item.name}>
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
          </li>
        ))}
        <li>
          <a
            href="https://drive.google.com/file/d/13SVUHkWFsS3yLFGr_sVuyQ6-mahWX0EJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md hover:shadow-lg transition-all text-sm font-semibold"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-2xl text-gray-800 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={drawerRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-3/4 max-w-xs h-full z-50 flex flex-col items-center justify-center p-8
                       bg-gradient-to-b from-indigo-900 via-purple-900 to-black backdrop-blur-xl shadow-2xl border-l border-indigo-700/40 rounded-l-3xl"
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
                className={`text-xl font-semibold transition-colors my-2 ${
                  activeLink === item.path ? "text-yellow-400 underline" : "text-white hover:text-yellow-400"
                }`}
              >
                {item.name}
              </HashLink>
            ))}


            <a
              href="https://drive.google.com/file/d/13SVUHkWFsS3yLFGr_sVuyQ6-mahWX0EJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-6 py-2 bg-yellow-400 text-black rounded-lg font-semibold shadow-lg w-full text-center transition hover:bg-yellow-500"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
