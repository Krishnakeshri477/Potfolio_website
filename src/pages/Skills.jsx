/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaServer, FaCode, FaJava, FaPython, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiCss3, SiHtml5, SiC, SiCplusplus, SiKubernetes, SiRedux, SiGithubactions , SiNextdotjs} from 'react-icons/si';
import AnimatedBackground from '../components/ui/AnimatedBackground';


const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-zinc-300 text-3xl" />,
      color: "from-blue-400 to-blue-600",
      skills: [
        { name: "HTML", icon: <SiHtml5 className='text-orange-500 text-2xl' /> },
        { name: "CSS", icon: <SiCss3 className='text-blue-500 text-2xl' /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-2xl" /> },
        { name: "React.js", icon: <FaReact className="text-blue-400 text-2xl" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white text-2xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-2xl" /> }
      ]
    },

    {
      title: "Backend",
      icon: <FaNodeJs className="text-zinc-700 text-3xl" />,
      color: "from-green-400 to-green-600",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-gray-200 text-2xl" /> },
        { name: "REST APIs", icon: <FaServer className="text-gray-500 text-2xl" /> }
      ]
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-zinc-550 text-3xl" />,
      color: "from-purple-400 to-purple-600",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-2xl" /> },
        { name: "SQL", icon: <FaDatabase className="text-blue-600 text-2xl" /> }
      ]
    },
    {
      title: "Languages",
      icon: <FaCode className="text-zinc-300 text-3xl" />,
      color: "from-red-400 to-red-600",
      skills: [
        { name: "C", icon: <SiC className="text-blue-700 text-2xl" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-500 text-2xl" /> },
        { name: "Java", icon: <FaJava className="text-red-500 text-2xl" /> },
        { name: "Python", icon: <FaPython className="text-blue-400 text-2xl" /> }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <FaDocker className="text-zinc-900 text-3xl" />,
      color: "from-cyan-400 to-cyan-600",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600 text-2xl" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-400 text-2xl" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500 text-2xl" /> },
        { name: "CI/CD", icon: <SiGithubactions className="text-gray-700 dark:text-gray-300 text-2xl" /> }
      ]
    },
    {
      title: "State Management",
      icon: <SiRedux className="text-zinc-700 text-3xl" />,
      color: "from-violet-400 to-violet-600",
      skills: [
        { name: "Redux", icon: <SiRedux className="text-purple-500 text-2xl" /> },
        { name: "Context API", icon: <FaReact className="text-blue-500 text-2xl" /> }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
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
            My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing applications
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
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg mr-4 bg-gradient-to-br ${category.color} shadow-md`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <div className="mb-2">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                      {skill.name}
                    </span>
                  </motion.div>
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