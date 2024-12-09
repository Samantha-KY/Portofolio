import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-primary/80 backdrop-blur-lg shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-accent"
          >
            Samantha Murera Kayitete
          </motion.div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
