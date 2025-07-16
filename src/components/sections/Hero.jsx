/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import Button from '../ui/Button';
import AnimatedBackground from '../ui/AnimatedBackground';

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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      
      <AnimatedBackground/>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Krishna Keshri</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 min-h-[1.5em]">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Devops Engineer',
                  2000,
                  'Software Engineer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              I build exceptional digital experiences with modern technologies.
              Currently specializing in React, Node.js, and cloud platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="mailto:krishnakeshri9510ib@gmail.com">
                <Button 
                  variant="primary" 
                  size="medium"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Contact Me
                </Button>
              </a>
              <a href="/Krishna_web_dev.pdf" download="Krishna_web_dev.pdf">
                <Button variant="secondary" size="medium">
                  <FaFileDownload className="mr-2" /> Download CV
                </Button>
              </a>
            </div>
            
            {/* Social links with tooltips */}
            <div className="flex justify-center lg:justify-start gap-4 mt-8">
              {socialLinks.map((social, index) => (
                <motion.div 
                  key={index}
                  className="relative group"
                  whileHover={{ y: -5 }}
                >
                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl p-2 rounded-full bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all"
                    whileHover={{ scale: 1.1 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right column - Image with 3D tilt effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="relative w-full max-w-md -top-8"
              whileHover={{
                rotateY: 5,
                rotateX: -5,
                transition: { duration: 0.5 }
              }}
            >
              <motion.div
                className="aspect-square rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl relative"
                initial={{ scale: 0.95 }}
                animate={{ 
                  scale: 1,
                  boxShadow: [
                    '0 0 0 0 rgba(99, 102, 241, 0.4)',
                    '0 0 0 20px rgba(99, 102, 241, 0)',
                  ]
                }}
                transition={{
                  scale: { duration: 0.5 },
                  boxShadow: { 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1 
                  }
                }}
              >
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D35AQHlSiohsaqUFA/profile-framedphoto-shrink_400_400/B4DZbQSrpCHoAg-/0/1747251280800?e=1750712400&v=beta&t=CteB4fGWACtaj6C7-FBn5rkO9_ArtTPApwUoDsEKeyE"
                  alt="Krishna Keshri"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-blue-400/10 dark:bg-blue-400/5 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-purple-400/10 dark:bg-purple-400/5 -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-14 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Scroll Down
        </div>
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center relative">
          <motion.div
            className="w-1 h-3 bg-blue-500 rounded-full absolute top-2"
            animate={{ y: [0, 10] }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
