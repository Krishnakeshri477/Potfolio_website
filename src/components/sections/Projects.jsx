// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import AnimatedBackground from '../ui/AnimatedBackground';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React, Tailwind CSS, and Vite.",
      tags: ["React", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/Krishnakeshri477/potfolio_website",
      liveUrl: "",
      image: "/Screenshot 2025-05-10 034915.png"
    },
    {
      id: 2,
      title: "DSA-Visualizer",
      description: "Interactive Data Structures and Algorithms visualizer with step-by-step animations and real-time code execution.",
      tags: ["React", "Vite", "Tailwind CSS"],
      githubUrl: "https://github.com/Krishnakeshri477/DSA_Visualizer.git",
      liveUrl: "https://dsa-visulizer.netlify.app/",
      image: "/Screenshot 2025-05-10 033822.png"
    },
    {
      id: 3,
      title: "AI Interviewer",
      description: "It provides users with personalized questions, evaluates their responses, and offers instant feedback to improve communication, technical, and problem-solving skills.It helps candidates practice effectively and gain confidence before facing real interviews.",
      tags: ["React","Express","Node","MongoDB"],
      githubUrl: "https://github.com/Krishnakeshri477/AI-Interview-Prepration-Platform",
      liveUrl: "",
      image: "/Screenshot 2025-09-21 134642.png"
    },
    {
      id: 4,
      title: "Jharkhand Government Scheme",
      description:"Explore our government scheme website for direct links to apply, video tutorials for guidance, and a list of required documents—all in one place!",
      tags: ["React", "Tailwind CSS", "Node.js", "Express" , "MongoDB"],
      githubUrl: "https://github.com/Krishnakeshri477/hackthon",
      liveUrl: "",
      image: "/Screenshot 2025-05-12 232946.png"
    }
  ];

  return (
    <section className="py-20 px-4 min-h-screen bg-gray-50 dark:bg-gray-900 relative overflow-hidden">

      <AnimatedBackground 
        opacity={5}
        darkOpacity={3} 
        color="blue" 
        darkColor="purple" 
      />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve specific problems and showcase different skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
