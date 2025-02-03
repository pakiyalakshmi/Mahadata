"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-8 xl:col-span-2"
          >
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Features Menu</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/" className="text-base text-gray-300 hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-base text-gray-300 hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/career" className="text-base text-gray-300 hover:text-white">
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-base text-gray-300 hover:text-white">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Service Menu</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/solutions/edi" className="text-base text-gray-300 hover:text-white">
                      EDI
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/database" className="text-base text-gray-300 hover:text-white">
                      Database
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/cobol" className="text-base text-gray-300 hover:text-white">
                      COBOL
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/cics" className="text-base text-gray-300 hover:text-white">
                      CICS
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/system-integration" className="text-base text-gray-300 hover:text-white">
                      System Integration
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/etl" className="text-base text-gray-300 hover:text-white">
                      ETL
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/consulting" className="text-base text-gray-300 hover:text-white">
                      Consulting
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 xl:mt-0"
          >
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact Information</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center">
                <MapPin className="flex-shrink-0 h-6 w-6 text-gray-400" />
                <span className="ml-3 text-base text-gray-300">
                  4217 SAUBRANCH HILL ST RALEIGH, NORTH CAROLINA 27616 USA
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="flex-shrink-0 h-6 w-6 text-gray-400" />
                <span className="ml-3 text-base text-gray-300">sudhamahadata@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="flex-shrink-0 h-6 w-6 text-gray-400" />
                <span className="ml-3 text-base text-gray-300">+1 9199261414</span>
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 border-t border-gray-700 pt-8"
        >
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2023 Maha Data Solutions. All rights reserved. Powered by Rhema Infotech
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

