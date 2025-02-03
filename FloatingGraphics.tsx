"use client"

import { motion } from "framer-motion"

export function FloatingGraphics() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          y: [50, 0, 50],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

