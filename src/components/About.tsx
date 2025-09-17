import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const stats = [
    { number: '4th', label: 'Year BSIT Student' },
    { number: '4+', label: 'Projects Completed' },
    { number: '8+', label: 'Technologies Used' },
    { number: '3+', label: 'Years Programming' },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <div>
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              About <span className="gradient-text">Me</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
              I'm a 4th year Bachelor of Science in Information Technology student with a passion 
              for backend development. I specialize in building robust server-side applications, 
              database management systems, and API development using various programming languages.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
              My expertise includes PHP, MySQL, C++, and various web technologies. I enjoy solving 
              complex problems through efficient code and well-structured database designs. Currently 
              focused on expanding my knowledge in system architecture and database optimization.
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image/Visual */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <div className="text-xl font-semibold">Code & Create</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
              >
                JS
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold"
              >
                TS
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
