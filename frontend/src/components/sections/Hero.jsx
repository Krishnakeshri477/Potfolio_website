import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Button from '../ui/Button';

const Hero = () => {
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

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Krishna Keshri</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              Full Stack Developer
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              I build exceptional digital experiences with modern technologies.
              Currently specializing in React, Node.js, and cloud platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="mailto:krishnakeshri9510ib@gmail.com">
                <Button variant="primary" size="medium">
                  Contact Me
                </Button>
              </a>
              <a href="/Krishna_web_dev.pdf" download="Krishna_web_dev.pdf" >
                <Button variant="secondary" size="medium" >
                  <FaFileDownload className="mr-2" /> Download CV
                </Button>
              </a>
            </div>
            
            {/* Social links */}
            <div className="flex justify-center lg:justify-start gap-4 mt-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Right column - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Replace with your image or illustration */}
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                {/* Placeholder - replace with your image */}
                <div className="w-full h-full flex items-center justify-center text-4xl">
                  <img 
                    src="/your-profile-image.jpg" // Add correct image path here
                    alt="Krishna Keshri"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-blue-400/10 dark:bg-blue-400/5 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-purple-400/10 dark:bg-purple-400/5 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
            className="w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
