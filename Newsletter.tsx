"use client"

import { useState } from "react"

const Newsletter = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Subscribed:", email)
    // Reset form after submission
    setEmail("")
  }

  return (
    <div className="bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Our Newsletter</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Subscribe to Newsletter & Get Update and News
          </p>
        </div>
        <div className="mt-10">
          <form onSubmit={handleSubmit} className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
              placeholder="Your email address"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter

