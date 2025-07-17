/* eslint-disable no-unused-vars */
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';
import AnimatedBackground from '../ui/AnimatedBackground';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: <FaGithub />, 
      url: 'https://github.com/Krishnakeshri477',
      name: 'GitHub'
    },
    { 
      icon: <FaLinkedin />, 
      url: 'https://www.linkedin.com/in/krishna-keshri-ab78662b9/',
      name: 'LinkedIn'
    },
    { 
      icon: <SiLeetcode />, 
      url: 'https://leetcode.com/u/Krishna9999999/',
      name: 'LeetCode'
    },
    { 
      icon: <FaEnvelope />, 
      url: 'mailto:krishnakeshri9510ib@gmail.com',
      name: 'Email'
    }
  ];

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills' , path: '/skills'},
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
      {/* Add AnimatedBackground here */}
      <AnimatedBackground 
        opacity={10} 
        darkOpacity={5} 
        color="blue" 
        darkColor="purple" 
      />
      
      <div className="container mx-auto px-8 py-12 relative z-10">
        <div className="flex justify-between">
          {/* Branding */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              KRISHNA KESHRI
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Full-stack developer creating beautiful, functional web experiences. 
              Let's build something amazing together!
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-xl"
                  whileHover={{ y: -3 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {currentYear} KRISHNA KESHRI. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-4 md:mt-0">
            Built with React, Tailwind CSS, and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;