"use client"

import { ScrollReveal } from "./ScrollReveal"
import { motion } from "framer-motion"

const Clients = () => {
  return (
    <div className="relative bg-white/80 backdrop-blur-sm py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal width="100%">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Clients</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Your Satisfaction is Our Priority
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal width="100%">
          <motion.div
            className="mt-10 bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-lg text-gray-700">
              MahaData will strive to provide the best experience for you, our clients. We wish to create solutions
              tending to all of your specific needs. We believe client satisfaction is the most important part of our
              business and we will make sure that you are content with our product.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  )
}

export default Clients

