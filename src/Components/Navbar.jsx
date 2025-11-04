import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ currentSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "ABOUT US", index: 1 },
    { name: "PORTFOLIO", index: 2 },
    { name: "GALLERY", index: 3 },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (index) => {
    scrollToSection(index);
    setIsMenuOpen(false);
  };

  // Only show navbar on landing page or conditionally
  if (currentSection !== 0 && !isMenuOpen) {
    return null; // Or remove this if you want navbar always visible
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-4 md:px-8 py-3 text-white border-b-2 border-white bg-opacity-30 backdrop-blur-md">
        {/* Logo */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xl font-bold z-[201] cursor-pointer"
          onClick={() => handleNavClick(0)}
        >
          MyLogo
        </motion.div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex list-none gap-12 ml-100">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
                ease: "easeOut",
              }}
            >
              <button
                onClick={() => handleNavClick(item.index)}
                className="text-white font-medium text-sm tracking-wider hover:text-yellow-400 transition-colors duration-300 bg-transparent border-none cursor-pointer"
              >
                {item.name}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Contact Button */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="hidden md:block"
        >
          <button
            onClick={() => handleNavClick(4)}
            className="text-white text-sm font-medium bg-transparent px-6 py-2 tracking-wider transition-all duration-300 rounded hover:bg-white hover:text-black border-none cursor-pointer"
          >
            CONTACT
          </button>
        </motion.div>

        {/* Mobile Hamburger Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:hidden flex flex-col gap-1.5 p-2 z-[201] rounded transition-all duration-300 hover:bg-white hover:bg-opacity-10 border-none cursor-pointer"
          onClick={toggleMenu}
        >
          <motion.span
            className="block w-6 h-0.5 bg-white rounded"
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-white rounded"
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-white rounded"
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-98 backdrop-blur-xl z-[199]"
          >
            <div className="flex flex-col items-center justify-center h-full gap-10 px-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.index)}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="text-white text-3xl font-medium tracking-widest transition-all duration-300 hover:text-yellow-400 hover:translate-x-2 bg-transparent border-none cursor-pointer"
                >
                  {item.name}
                </motion.button>
              ))}

              <motion.button
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: "easeOut",
                }}
                onClick={() => handleNavClick(4)}
                className="mt-8 px-12 py-4 bg-white text-black border-2 border-white text-base font-semibold tracking-widest transition-all duration-300 rounded hover:bg-yellow-400 hover:border-yellow-400 hover:scale-105 cursor-pointer"
              >
                CONTACT
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
