/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaServer, FaCode, FaJava, FaPython,FaGitAlt,FaDocker} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiCss3, SiHtml5, SiC, SiCplusplus,SiKubernetes,SiRedux,SiGithubactions} from 'react-icons/si';
import AnimatedBackground from '../components/ui/AnimatedBackground';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-blue-500 text-3xl" />,
      skills: [
        { name: "HTML", level: 90, icon: <SiHtml5 className='text-orange-500'/>},
        { name: "css", level:90, icon: <SiCss3 className='text-blue-500'/>},
        { name: "JavaScript", level: 85, icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React", level: 90, icon: <FaReact className="text-blue-500" /> },
        { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-cyan-400" /> }
      ]
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="text-green-500 text-3xl" />,
      skills: [
        { name: "Node.js", level: 85, icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", level: 80, icon: <SiExpress className="text-black dark:text-white" /> },
        { name: "REST APIs", level: 55, icon: <FaServer className="text-gray-500" /> }
      ]
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-purple-500 text-3xl" />,
      skills: [
        { name: "MongoDB", level: 80, icon: <SiMongodb className="text-green-600" /> },
        { name: "SQL", level: 40, icon: <FaDatabase className="text-blue-600" /> }
      ]
    },
    {
      title: "Languages",
      icon: <FaCode className="text-red-500 text-3xl" />,
      skills: [
        { name: "C", level: 90, icon: <SiC className="text-blue-700" /> },
        { name: "C++", level: 90, icon: <SiCplusplus className="text-blue-500" /> },
        { name: "Java", level: 75, icon: <FaJava className="text-red-500" /> },
        { name: "Python", level: 60, icon: <FaPython className="text-blue-400" /> }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <FaDocker className="text-blue-400 text-3xl" />,
      color: "from-cyan-400 to-cyan-600",
      skills: [
        { name: "Git", level: 85, icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Docker", level: 70, icon: <FaDocker className="text-blue-400" /> },
        { name: "Kubernetes", level: 50, icon: <SiKubernetes className="text-blue-500" /> },
        { name: "CI/CD", level: 60, icon: <SiGithubactions className="text-gray-700 dark:text-gray-300" /> }
      ]
    },
    {
      title: "State Management",
      icon: <SiRedux className="text-purple-500 text-3xl" />,
      color: "from-violet-400 to-violet-600",
      skills: [
        { name: "Redux", level: 80, icon: <SiRedux className="text-purple-500" /> },
        { name: "Context API", level: 85, icon: <FaReact className="text-blue-500" /> }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Add AnimatedBackground here */}
      <AnimatedBackground 
        opacity={3}
        darkOpacity={2} 
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
            My Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <span className="mr-2">{skill.icon}</span>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 + skillIndex * 0.05 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
