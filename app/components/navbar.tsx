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
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-4xl">
      <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-4 sm:px-6 py-3 shadow-2xl shadow-purple-900/50 drop-shadow-md">
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-3 rounded-full text-base font-medium transition-all duration-300 text-center ${
                    isActive(item.href)
                      ? "bg-white text-black shadow-lg"
                      : "text-white/80 hover:text-white hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
