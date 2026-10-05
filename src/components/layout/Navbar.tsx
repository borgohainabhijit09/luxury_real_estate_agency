"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { EnquiryModal } from "@/components/ui/EnquiryModal"
import Link from "next/link"

const navLinks = [
  { label: "Properties", href: "/properties" },
  { label: "Collections", href: "/collections" },
  { label: "Destinations", href: "/destinations" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
          isScrolled
            ? "bg-obsidian/90 backdrop-blur-md py-4 border-b border-muted-border"
            : "bg-transparent py-6 md:py-8"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col z-50 cursor-pointer">
            <span className="font-serif text-2xl md:text-3xl tracking-wide text-warm-ivory uppercase leading-none">
              Aurelia
            </span>
            <span className="text-[9px] md:text-[10px] tracking-widest text-muted-ivory mt-1 uppercase">
              Dubai · Private Real Estate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-warm-ivory hover:text-champagne transition-colors duration-500 ease-out tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button 
              onClick={() => setIsEnquiryOpen(true)}
              className="text-sm text-champagne border border-muted-border hover:border-champagne px-6 py-2 transition-colors duration-500 uppercase tracking-widest"
            >
              Enquire
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-warm-ivory text-sm tracking-widest uppercase z-50 transition-colors duration-300 hover:text-champagne"
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col justify-center px-5"
          >
            <nav className="flex flex-col space-y-8 mt-16">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.7, ease: "easeOut" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-4xl text-warm-ivory hover:text-champagne transition-colors duration-500"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => setIsEnquiryOpen(true), 300);
                }}
                className="text-left font-sans text-sm text-champagne tracking-widest uppercase mt-8 pt-8 border-t border-muted-border"
              >
                Enquire
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  )
}
