import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-semibold" : "hover:text-primary"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-primary font-semibold" : "hover:text-primary"}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "text-primary font-semibold" : "hover:text-primary"}>
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink  className={({ isActive }) => isActive ? "text-primary font-semibold" : "hover:text-primary"}>
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-primary font-semibold" : "hover:text-primary"}>
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md fixed top-0 left-0 z-50 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <NavLink to="/" className="text-xl font-bold text-primary">Nayem.dev</NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end">
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Navbar;
