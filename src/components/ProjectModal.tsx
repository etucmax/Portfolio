import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaTimes, FaCalendarAlt, FaCode, FaRocket } from 'react-icons/fa'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  featured: boolean
  longDescription?: string
  features?: string[]
  challenges?: string[]
  lessons?: string[]
  duration?: string
  role?: string
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white dark:bg-dark-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <div className="w-full h-48 bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <div className="text-2xl font-bold">{project.title}</div>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-12rem)]">
              {/* Project Info */}
              <div className="grid lg:grid-cols-3 gap-6 mb-6">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                    {project.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    {project.longDescription || project.description}
                  </p>

                  {/* Features */}
                  {project.features && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200 flex items-center">
                        <FaRocket className="mr-2 text-primary-600" />
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200 flex items-center">
                      <FaCode className="mr-2 text-primary-600" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Details Sidebar */}
                <div className="space-y-4">
                  {/* Project Info Cards */}
                  {project.role && (
                    <div className="bg-gray-50 dark:bg-dark-700 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Role</h4>
                      <p className="text-gray-600 dark:text-gray-300">{project.role}</p>
                    </div>
                  )}

                  {project.duration && (
                    <div className="bg-gray-50 dark:bg-dark-700 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                        <FaCalendarAlt className="mr-2 text-primary-600" />
                        Duration
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">{project.duration}</p>
                    </div>
                  )}

                  {/* GitHub Link */}
                  <div className="bg-gray-50 dark:bg-dark-700 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Source Code</h4>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full text-center flex items-center justify-center gap-2"
                    >
                      <FaGithub />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Challenges & Lessons */}
              {(project.challenges || project.lessons) && (
                <div className="grid md:grid-cols-2 gap-6">
                  {project.challenges && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                        Challenges Faced
                      </h3>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.lessons && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                        Key Learnings
                      </h3>
                      <ul className="space-y-2">
                        {project.lessons.map((lesson, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600 dark:text-gray-300">{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
