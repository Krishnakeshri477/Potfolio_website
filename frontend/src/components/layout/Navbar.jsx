/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/Krishnakeshri477', name: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/krishna-keshri-ab78662b9/', name: 'LinkedIn' },
    { icon: <SiLeetcode />, url: 'https://leetcode.com/u/Krishna9999999/', name: 'LeetCode'},
    { icon: <FiMail />, url: 'mailto:krishnakeshri9510ib@gmail.com', name: 'Email' }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-sm backdrop-blur-md dark:bg-gray-900/90' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          onClick={closeMenu}
        >
          PORTFOLIO
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                        : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4 ml-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-xl"
                whileHover={{ y: -3 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </nav>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg z-40 transition-all duration-300 ease-in-out dark:bg-gray-900/95 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        aria-hidden={!isOpen}
      >
        <div className="container mx-auto px-4 py-8 h-full flex flex-col">
          <ul className="flex flex-col space-y-6 mt-20">
            {navLinks.map((link) => (
              <motion.li 
                key={link.name}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * navLinks.indexOf(link) }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) => 
                    `block text-2xl font-medium transition-colors ${
                      isActive 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                    }`
                  }
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              </motion.li>
            ))}
          </ul>

          <div className="flex space-x-6 mt-auto mb-10 justify-center">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-2xl"
                onClick={closeMenu}
                whileHover={{ scale: 1.1 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;