import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 p-4 z-20">
      <div className="flex justify-center">
        <ul className="flex space-x-8 text-white font-semibold">
        <li>
            <a href="#home" className="hover:text-cyan-500 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-500 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-500 transition duration-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-cyan-500 transition duration-300">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-500 transition duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-500 transition duration-300">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
