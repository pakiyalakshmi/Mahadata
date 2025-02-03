import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { FloatingGraphics } from "./components/FloatingGraphics"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mahadata Solutions Inc.",
  description: "Professional Data Solutions and Consulting",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <FloatingGraphics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

