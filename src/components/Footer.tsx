import React from 'react'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  // Simplified footer: remove brand, social links, and quick links

  return (
    <footer className="bg-dark-800 dark:bg-dark-900 text-gray-300">
      <div className="container-max">
        <div className="py-6 border-t border-dark-700 dark:border-dark-800">
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
