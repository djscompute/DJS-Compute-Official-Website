"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Projects", href: "/projects" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // **FIX**: We only need to track the item being hovered.
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <>
  {/* Center fixed navbar on md+ by using left-1/2 and translate-x-1/2 (margin auto doesn't center fixed) */}
  <nav className="fixed top-0 left-0 z-50 w-full md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 md:max-w-3xl">
        <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-none md:rounded-full px-4 sm:px-6 py-3 shadow-2xl shadow-purple-900/50 drop-shadow-md">
          <div className="flex items-center justify-between md:justify-between">
            {/* Desktop Navigation */}
            <div
              className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8 flex-1 relative"
              onMouseLeave={() => setHoveredItem(null)}
            >
              {navItems.map(item => {
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onMouseEnter={() => setHoveredItem(item.href)}
                    className={`relative z-10 px-4 py-2 rounded-full text-base lg:text-lg font-medium transition-colors duration-300 ${
                      // **FIX**: Simplified text color logic. Active is always black.
                      // Others are faded white, becoming solid white on hover.
                      isActive ? "text-black" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {/* ACTIVE INDICATOR */}
                    {/* This now STAYS with the active link and doesn't move on hover. */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-white shadow-lg rounded-full -z-10"
                        layoutId="active-nav-indicator"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* HOVER INDICATOR */}
                    {/* This is a SEPARATE indicator for the hover effect on non-active items. */}
                    {hoveredItem === item.href && !isActive && (
                      <motion.div
                        className="absolute inset-0 bg-white/10 shadow-lg shadow-purple-500/50 rounded-full -z-10"
                        layoutId="hover-nav-indicator"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}

                    {item.name}
                  </Link>
                )
              })}
            </div>

            {/* XP Boost button (desktop) */}
            <Link
              href="https://djs-compute-xp-boost.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="XP Boost Halloween event"
              title="XP Boost"
              className="hidden md:inline-flex shrink-0 items-center gap-2 px-4 py-2 h-11 lg:h-12 rounded-full group relative bg-gradient-to-b from-orange-500 to-orange-700 border-2 border-orange-400 hover:from-orange-400 hover:to-orange-600 hover:border-yellow-300 transition-all duration-300 shadow-lg"
              style={{
                boxShadow: "0 0 24px rgba(249, 115, 22, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.3)"
              }}
            >
              {/* icon + text with Jolly Lodger font */}
              <Image
                src="/xpboost/pumpkin.png"
                alt="XP Boost"
                width={24}
                height={24}
                className="w-6 h-6 lg:w-7 lg:h-7 drop-shadow-md"
              />
              <span className="font-black uppercase text-white tracking-widest text-sm lg:text-base" style={{ fontFamily: '"Jolly Lodger", system-ui', textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>XP BOOST</span>
            </Link>

            {/* XP Boost button (mobile) */}
            <Link
              href="https://djs-compute-xp-boost.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="XP Boost Halloween event"
              className="md:hidden relative mr-1 w-10 h-10 rounded-full inline-flex shrink-0 items-center justify-center bg-gradient-to-b from-orange-500 to-orange-700 border-2 border-orange-400 hover:from-orange-400 hover:to-orange-600 hover:border-yellow-300 transition-all duration-300"
              style={{
                boxShadow: "0 0 20px rgba(249, 115, 22, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
              }}
            >
              <Image src="/xpboost/pumpkin.svg" alt="XP Boost" width={20} height={20} className="w-5 h-5 drop-shadow-md" />
            </Link>

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

      {/* Full-screen Mobile Navigation Modal (no changes needed) */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-lg"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative z-50 flex flex-col items-center justify-center min-h-screen p-8">
            <div className="flex flex-col space-y-8 text-center w-full animate-slideDown">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-8 py-4 rounded-2xl text-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    pathname === item.href
                      ? "bg-white text-black shadow-2xl"
                      : "text-white/90 hover:text-white hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/30"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
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