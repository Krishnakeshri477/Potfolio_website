import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

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
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Sitemap' , path: '/sitemap'}
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path} 
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.slice(3).map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path} 
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
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