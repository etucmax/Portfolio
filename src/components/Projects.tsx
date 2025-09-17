import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub } from 'react-icons/fa'
import ProjectModal from './ProjectModal'

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'Hospital Management System',
      description: 'Developed a comprehensive web-based system using PHP, MySQL, and Bootstrap to manage patient records, appointments, and hospital operations efficiently.',
      longDescription: 'A comprehensive web-based hospital management system designed to streamline healthcare operations. This system provides a complete solution for managing patient records, appointments, medical staff, and hospital resources. Built with a focus on user experience and data security.',
      image: '/api/placeholder/600/400',
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/etucmax/Hospital-Management-System',
      featured: true,
      role: 'Full Stack Developer',
      duration: '3 months',
      features: [
        'Patient registration and profile management',
        'Appointment scheduling system',
        'Medical staff management',
        'Inventory tracking for medical supplies',
        'Billing and payment processing',
        'Report generation and analytics',
        'Secure user authentication',
        'Responsive design for all devices'
      ],
      challenges: [
        'Complex database relationships between patients, doctors, and appointments',
        'Implementing secure user authentication and authorization',
        'Creating an intuitive user interface for non-technical users',
        'Optimizing database queries for large datasets'
      ],
      lessons: [
        'Learned advanced PHP OOP concepts and MVC architecture',
        'Gained experience in database design and optimization',
        'Improved skills in responsive web design',
        'Understanding of healthcare data privacy requirements'
      ]
    },
    {
      id: 2,
      title: 'Online Document Requesting System',
      description: 'Backend developer for a document request and tracking system. Implemented request processing, status tracking, and notification features using PHP and MySQL.',
      longDescription: 'A backend-focused document management system that handles document requests, processing, and tracking. The system provides a seamless workflow for document approval processes with real-time status updates and notifications.',
      image: '/api/placeholder/600/400',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'AJAX'],
      github: 'https://github.com/etucmax/document-request-system',
      featured: true,
      role: 'Backend Developer',
      duration: '2 months',
      features: [
        'Document request submission and processing',
        'Multi-level approval workflow',
        'Real-time status tracking',
        'Email notifications system',
        'Document version control',
        'User role management',
        'Request history and audit trail',
        'File upload and storage management'
      ],
      challenges: [
        'Designing efficient approval workflow logic',
        'Implementing real-time notifications without WebSockets',
        'Managing file uploads and storage efficiently',
        'Creating a scalable notification system'
      ],
      lessons: [
        'Deep understanding of PHP backend development',
        'Experience with workflow management systems',
        'Learned about file handling and storage optimization',
        'Improved skills in database transaction management'
      ]
    },
    {
      id: 3,
      title: 'Library Management System',
      description: 'Built a console-based C++ system for managing book records, student borrowing, and library operations with file-based data storage.',
      longDescription: 'A comprehensive console-based library management system built in C++ that handles all aspects of library operations including book cataloging, student management, borrowing/returning processes, and fine calculations.',
      image: '/api/placeholder/600/400',
      technologies: ['C++', 'File I/O', 'Data Structures', 'STL'],
      github: 'https://github.com/etucmax/Library-Management-System',
      featured: false,
      role: 'Software Developer',
      duration: '1 month',
      features: [
        'Book catalog management (add, edit, delete, search)',
        'Student registration and profile management',
        'Book borrowing and returning system',
        'Fine calculation for overdue books',
        'Report generation (borrowed books, overdue books)',
        'Data persistence using file I/O',
        'User-friendly console interface',
        'Input validation and error handling'
      ],
      challenges: [
        'Designing efficient data structures for book and student management',
        'Implementing file-based data persistence',
        'Creating a user-friendly console interface',
        'Handling complex borrowing and returning logic'
      ],
      lessons: [
        'Advanced C++ programming concepts',
        'File I/O operations and data persistence',
        'Data structure design and implementation',
        'Console application development best practices'
      ]
    },
    {
      id: 4,
      title: 'Expense Tracker',
      description: 'Created a C++ console application for tracking daily expenses with categories, date filtering, and expense reporting features.',
      longDescription: 'A personal finance management tool built in C++ that helps users track their daily expenses, categorize spending, and generate detailed reports. The system provides insights into spending patterns and helps with budget management.',
      image: '/api/placeholder/600/400',
      technologies: ['C++', 'File I/O', 'Data Management', 'STL'],
      github: 'https://github.com/etucmax/ExpenseTrackerSystem',
      featured: false,
      role: 'Software Developer',
      duration: '3 weeks',
      features: [
        'Daily expense entry and management',
        'Expense categorization (food, transport, entertainment, etc.)',
        'Date-based filtering and search',
        'Monthly and yearly expense reports',
        'Budget setting and tracking',
        'Data export functionality',
        'Expense trends analysis',
        'User-friendly menu system'
      ],
      challenges: [
        'Designing efficient data structures for expense tracking',
        'Implementing complex filtering and search algorithms',
        'Creating meaningful expense reports and analytics',
        'Ensuring data integrity and validation'
      ],
      lessons: [
        'Object-oriented programming in C++',
        'Algorithm design for data filtering and sorting',
        'File-based data management techniques',
        'User interface design for console applications'
      ]
    }
  ]

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

  const handleProjectClick = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-800">
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
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </motion.div>

          {/* Projects Grid - Compact Tile View */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.02 }}
                className="card overflow-hidden group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-32 bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl mb-1">🚀</div>
                      <div className="text-sm font-semibold px-2">{project.title}</div>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <FaGithub size={16} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content - Compact */}
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-bold mb-2 text-gray-800 dark:text-gray-200 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-3 text-xs sm:text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies - Compact */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Button - Compact */}
                  <div className="flex">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-primary text-center text-xs py-1.5 px-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub className="inline mr-1" size={12} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.a
              href="https://github.com/etucmax"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-3"
            >
              View More on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  )
}

export default Projects
