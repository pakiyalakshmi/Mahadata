"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="relative text-white min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngtree-software-developer-conducting-quality-check-on-3d-gaming-software-and-application-image_3771481.jpg-39wSahmkViIXGLylbrprMniztsHKcs.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <span className="block xl:inline">WELCOME TO</span>{" "}
            <span className="block text-blue-300 xl:inline">MAHADATA SOLUTIONS INC.</span>
          </h1>
          <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            We assure you, you will be valued for the work you do on a reasonable compensation. We will strive to put
            you with the best client where you could show up your abilities and skills.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
          >
            <div className="rounded-md shadow">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                href="/about"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero

