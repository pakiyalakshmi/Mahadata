"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type React from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const solutions = [
    { name: "EDI", href: "/solutions/edi" },
    { name: "Database", href: "/solutions/database" },
    { name: "COBOL", href: "/solutions/cobol" },
    { name: "CICS", href: "/solutions/cics" },
    { name: "System Integration", href: "/solutions/system-integration" },
    { name: "ETL", href: "/solutions/etl" },
    { name: "Consulting", href: "/solutions/consulting" },
  ]

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-MqK7CVaRpnQwlAiqYy1KTulfOUFdtP.png"
                  alt="Mahadata Solutions Inc. Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink href="/">Home</NavLink>
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                Our Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {solutions.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <NavLink href="/industries">Industries</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-white/90 backdrop-blur-sm"
          >
            <div className="pt-2 pb-3 space-y-1">
              <MobileNavLink href="/">Home</MobileNavLink>
              {solutions.map((item) => (
                <MobileNavLink key={item.name} href={item.href}>
                  {item.name}
                </MobileNavLink>
              ))}
              <MobileNavLink href="/industries">Industries</MobileNavLink>
              <MobileNavLink href="/about">About Us</MobileNavLink>
              <MobileNavLink href="/contact">Contact Us</MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
  >
    {children}
  </Link>
)

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
  >
    {children}
  </Link>
)

export default Navbar

