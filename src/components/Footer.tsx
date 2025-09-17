import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaHeart } from 'react-icons/fa'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: FaFacebook, href: 'https://facebook.com/yourusername', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  ]

  return (
    <footer className="bg-dark-800 dark:bg-dark-900 text-gray-300">
      <div className="container-max">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold gradient-text mb-4"
              >
                Portfolio
              </motion.div>
              <p className="text-gray-400 mb-4">
                Creating beautiful, functional, and user-centered digital experiences.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-dark-700 dark:bg-dark-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-primary-900/20 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
              <div className="space-y-2 text-gray-400">
                <p>jastrelacebu.30@gmail.com</p>
                <p>+63 938 9554 366</p>
                <p>Brgy. #5 Davila Pasuquin Ilocos Norte, Philippines</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-700 dark:border-dark-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Jastrel Acebu. All rights reserved.
            </p>
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="text-gray-400 text-sm flex items-center"
            >
              Made with <FaHeart className="text-red-500 mx-1" /> using React & Tailwind CSS
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
