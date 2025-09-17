import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaDownload } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false)
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

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/etucmax', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/jastrelacebu', label: 'LinkedIn' },
    { icon: FaFacebook, href: 'https://facebook.com/https.jastrel.me', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://twitter.com/etucmaxsenpai_', label: 'Twitter' },
    { icon: HiMail, href: 'mailto:jastrelacebu.30@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-dark-700 flex items-center justify-center">
                {!imageError ? (
                  <img 
                    src={`${import.meta.env.BASE_URL}MyPic.jpg`} 
                    alt="Jastrel Acebu" 
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <span className="text-2xl sm:text-4xl font-bold text-primary-600">JA</span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Jastrel Acebu</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
            Backend Developer
          </motion.p>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            4th Year BSIT Student passionate about backend development and system architecture. 
            I specialize in building robust server-side solutions and database management systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3"
            >
              View My Work
            </motion.button>
            <motion.a
              href={`${import.meta.env.BASE_URL}CV2_AcebuJastrel.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 flex items-center justify-center gap-2"
            >
              <FaDownload />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-4 sm:space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
