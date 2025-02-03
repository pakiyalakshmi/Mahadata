"use client"

import { motion } from "framer-motion"
import Hero from "./components/Hero"
import Solutions from "./components/Solutions"
import Consultants from "./components/Consultants"
import Clients from "./components/Clients"
import Contact from "./components/Contact"
import Newsletter from "./components/Newsletter"
import Stats from "./components/Stats"

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <main className="min-h-screen">
      <motion.div {...fadeIn}>
        <Hero />
      </motion.div>
      <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
        <Solutions />
      </motion.div>
      <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
        <Consultants />
      </motion.div>
      <motion.div {...fadeIn} transition={{ delay: 0.6 }}>
        <Clients />
      </motion.div>
      <motion.div {...fadeIn} transition={{ delay: 0.8 }}>
        <Stats />
      </motion.div>
      <motion.div {...fadeIn} transition={{ delay: 1 }}>
        <Contact title="Have any questions or concerns?" />
      </motion.div>
      <motion.div {...fadeIn} transition={{ delay: 1.2 }}>
        <Newsletter />
      </motion.div>
    </main>
  )
}

