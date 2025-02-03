"use client"

import { Database, FileText, Server, GitBranch, BarChart, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal } from "./ScrollReveal"

const solutions = [
  { name: "EDI", icon: FileText },
  { name: "Database", icon: Database },
  { name: "COBOL", icon: Server },
  { name: "CICS", icon: Server },
  { name: "System Integration", icon: GitBranch },
  { name: "ETL", icon: BarChart },
  { name: "Consulting", icon: FileText },
  { name: "Encounter Processing Solution", icon: Zap },
]

const Solutions = () => {
  return (
    <div className="relative bg-white/80 backdrop-blur-sm py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal width="100%">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Solutions</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              We offer solutions in
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <ScrollReveal
                key={solution.name}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative bg-white p-6 rounded-lg shadow-xl">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-600 rounded-lg">
                        <solution.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">{solution.name}</h3>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solutions

