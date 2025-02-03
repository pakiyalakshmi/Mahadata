"use client"

import { motion } from "framer-motion"
import type React from "react"

const Consultants = () => {
  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.location.href = "mailto:?subject=Resume%20Submission&body=Please%20attach%20your%20resume%20here."
  }

  return (
    <div className="bg-white bg-opacity-80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:text-center"
        >
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Consultants</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            This is your place
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
            <li>If you are innovative.</li>
            <li>If you have good problem-solving skills.</li>
          </ul>
          <p className="mt-4 text-lg text-gray-700">
            We assure that you will be valued for the work you do on a reasonable compensation. We will strive to put
            you with the best client where you can show your abilities and skills.
          </p>
          <div className="mt-6">
            <motion.a
              href="#"
              onClick={handleResumeClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Click here to send your resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Consultants

