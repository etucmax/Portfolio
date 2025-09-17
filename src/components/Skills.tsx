import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaPython, 
  FaJs, 
  FaGitAlt,
  FaDatabase,
  FaLinux,
  FaFileAlt
} from 'react-icons/fa'
import { SiMysql, SiPhp, SiCplusplus, SiBootstrap, SiMicrosoftoffice } from 'react-icons/si'

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { name: 'PHP', icon: SiPhp, level: 80, color: 'text-purple-500' },
    { name: 'MySQL', icon: SiMysql, level: 85, color: 'text-blue-600' },
    { name: 'C++', icon: SiCplusplus, level: 70, color: 'text-blue-500' },
    { name: 'Python', icon: FaPython, level: 45, color: 'text-yellow-500' },
    { name: 'Java', icon: FaFileAlt, level: 40, color: 'text-red-500' },
    { name: 'JavaScript', icon: FaJs, level: 45, color: 'text-yellow-400' },
    { name: 'C', icon: FaFileAlt, level: 30, color: 'text-gray-600' },
    { name: 'Laravel', icon: SiPhp, level: 35, color: 'text-red-600' },
    { name: 'Bootstrap', icon: SiBootstrap, level: 60, color: 'text-purple-600' },
    { name: 'MariaDB', icon: SiMysql, level: 20, color: 'text-orange-500' },
    { name: 'Microsoft Office', icon: SiMicrosoftoffice, level: 60, color: 'text-blue-700' },
    { name: 'Linux OS', icon: FaLinux, level: 30, color: 'text-orange-600' },
    { name: 'Git & GitHub', icon: FaGitAlt, level: 60, color: 'text-gray-700' },
    { name: 'Database Design', icon: FaDatabase, level: 80, color: 'text-green-600' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card p-4 sm:p-6 text-center group cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  <skill.icon 
                    className={`text-3xl sm:text-4xl mb-2 sm:mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-200`} 
                  />
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1 sm:mb-2 text-sm sm:text-base">
                    {skill.name}
                  </h3>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-2 rounded-full bg-gradient-to-r from-primary-500 to-purple-500`}
                    />
                  </div>
                  
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Always Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and best practices to stay at the forefront of web development.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
