"use client"

import type React from "react"
import { motion } from "framer-motion"

interface SolutionLayoutProps {
  content: React.ReactNode
}

const SolutionLayout: React.FC<SolutionLayoutProps> = ({ content }) => {
  return (
    <div className="min-h-screen pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white bg-opacity-90 shadow-lg overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">{content}</div>
        </div>
      </motion.div>
      <footer className="bg-white bg-opacity-90 mt-12 py-6 text-center text-sm text-gray-500">
        MahaData Solutions Inc. © {new Date().getFullYear()} All Rights Reserved | Powered by Rhema Infotech
      </footer>
    </div>
  )
}

export default SolutionLayout

