"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 md:w-[70%] lg:w-[60%] md:max-w-4xl">
        <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-none md:rounded-full px-4 sm:px-6 py-3 shadow-2xl shadow-purple-900/50 drop-shadow-md">
          <div className="flex items-center justify-center md:justify-between">
            

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8 flex-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full text-base lg:text-lg font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? "bg-white text-black shadow-lg"
                      : "text-white/80 hover:text-white hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white/80 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Navigation Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-lg"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative z-50 flex flex-col items-center justify-center min-h-screen p-8">
            <div className="flex flex-col space-y-8 text-center">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-8 py-4 rounded-2xl text-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isActive(item.href)
                      ? "bg-white text-black shadow-2xl"
                      : "text-white/90 hover:text-white hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/30"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
