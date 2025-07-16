/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/ui/AnimatedBackground';

const Experience = () => {
  const experiences = [
    {
      logo: "/dp.jpg",
      company: "Bluestock Finetech",
      role: "Software Developer Intern",
      duration: "June 2025 - July 2025",
      description: [
        "Developed responsive web applications using React.js",
        "Collaborated with UX designers to implement pixel-perfect interfaces",
        "Optimized application performance, reducing load times by 40% by the help of Redux",
        "Implemented RESTful APIs with Node.js and Express.js",
      ],
      skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS"]
    }
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-gray-900">
      {/* Animated Background */}
      <AnimatedBackground 
        opacity={5} 
        darkOpacity={3} 
        color="blue" 
        darkColor="purple" 
      />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey through different roles and companies that shaped my career
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
          
          {/* Experience Items */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}
              >
                {/* Timeline dot */}
                <div className={`hidden md:flex absolute top-0 items-center justify-center w-8 h-8 rounded-full bg-blue-500 dark:bg-purple-600 shadow-lg transform ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`}>
                  <div className="w-3 h-3 bg-white dark:bg-gray-100 rounded-full"></div>
                </div>

                {/* Experience Card */}
                <div className={`bg-gray-50 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm overflow-hidden">
                        {exp.logo ? (
                          <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain p-2" />
                        ) : (
                          <span className="text-2xl font-bold text-gray-400">{exp.company.charAt(0)}</span>
                        )}
                      </div>
                    </div>

                    {/* Experience Details */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
                        <span className="text-sm font-medium text-blue-600 dark:text-purple-400">{exp.duration}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">{exp.company}</h4>
                      
                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-500 dark:text-purple-400 mr-2 mt-1">•</span>
                            <span className="text-gray-600 dark:text-gray-400">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-purple-900/50 text-blue-800 dark:text-purple-200 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
