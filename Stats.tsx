"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "./ScrollReveal"

const Stats = () => {
  return (
    <div className="relative bg-blue-600/90 backdrop-blur-sm py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal width="100%">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">MAHADATA SOLUTIONS</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-blue-200 sm:mt-4">
              We assure you, you will be valued for the work you do on a reasonable compensation. We will strive to put
              you with a best client where you could show up your abilities and skills.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <ScrollReveal>
              <motion.div
                className="relative bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <dt className="text-5xl font-extrabold text-white">99%</dt>
                <dd className="mt-2 text-lg font-medium text-blue-200">CUSTOMER SATISFACTION</dd>
                <dd className="mt-1 text-sm text-blue-300">Client satisfaction is our mission.</dd>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <motion.div
                className="relative bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <dt className="text-5xl font-extrabold text-white">99+</dt>
                <dd className="mt-2 text-lg font-medium text-blue-200">EFFICIENT & ECONOMIC</dd>
                <dd className="mt-1 text-sm text-blue-300">
                  Our goal is to provide top notch solutions on an affordable and economical budget pertaining to the
                  client's specific needs.
                </dd>
              </motion.div>
            </ScrollReveal>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Stats

