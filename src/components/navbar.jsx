import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 p-4 z-20 font-montserrat">
      <div className="relative max-w-6xl mx-auto flex items-center justify-center">
        {/* Hamburger menu for mobile */}
        <div className="absolute right-4 md:hidden mt-5">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav Links */}
        <ul
          className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-white font-semibold
                      absolute md:static top-0 md:top-auto left-0 right-0 bg-black bg-opacity-90 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out
                      ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:opacity-100 md:pointer-events-auto`}
        >
          {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact Me'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                className="hover:text-cyan-500 transition duration-300 block text-center"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
