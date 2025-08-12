import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Education", path: "#education" },
    { name: "Work", path: "#work" },
    { name: "Experience", path: "#experience" },
    { name: "Contact", path: "#contact" },
  ];

  // Active link track করার জন্য state
  const [activeLink, setActiveLink] = useState("#home");

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 lg:px-20 flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="font-bold text-lg">Nayem.Io</span>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-6 ">
        {navItems.map((item) => (
          <li key={item.name}>
            <HashLink
              smooth
              to={`/${item.path}`}
              onClick={() => setActiveLink(item.path)} 
              className={`relative pb-1 transition-all duration-300 font-bold ${
                activeLink === item.path
                  ? "text-blue-600 font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              }`}
            >
              {item.name}
            </HashLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
