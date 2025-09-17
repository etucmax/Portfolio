import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  show: boolean
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-dark-900"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="cat-runner" aria-label="Loading" />
            <div className="text-gray-600 dark:text-gray-300 font-medium">Loading...</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen


