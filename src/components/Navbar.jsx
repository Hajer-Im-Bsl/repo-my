import React, { useEffect } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  //? Every time menuOpen changes, this effect runs.
  useEffect(() => {
    //* This ensures that when a full-screen mobile menu is open, the background page can’t be scrolled.
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Hadjer Imene <span className="text-blue-500">BENSAOULA</span>
          </a>
          {/* //?Hamburger Menu for smaller screens
              //? only appears on small screens (md:hidden hides it on medium and larger screens).
          */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* 
          //? They are hidden on small screens (hidden md:flex) and only shown from md (medium breakpoint) upward.
          */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#academics"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Academics
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
