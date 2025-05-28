"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter, usePathname } from "next/navigation"
import Logo from "@/components/logo"

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (sectionId: string) => {
    // If on homepage, scroll to section
    if (pathname === "/") {
      if (sectionId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
      setIsMobileMenuOpen(false)
    } else {
      // If on another page, navigate to homepage with hash
      router.push(sectionId === "top" ? "/" : `/#${sectionId}`)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-primary py-3 shadow-md" : "bg-primary py-5",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-white">
          <Logo variant="white" size="md" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleNavigation("top")}
            className="text-white hover:text-opacity-80 transition-colors bg-transparent border-none cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("services")}
            className="text-white hover:text-opacity-80 transition-colors bg-transparent border-none cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => handleNavigation("contact")}
            className="text-white hover:text-opacity-80 transition-colors bg-transparent border-none cursor-pointer"
          >
            Contact Us
          </button>
          <Button
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-opacity text-white font-medium"
            onClick={() => handleNavigation("services")}
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary py-4 px-4 absolute top-full left-0 right-0 shadow-md">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => handleNavigation("top")}
              className="text-white hover:text-opacity-80 transition-colors bg-transparent border-none cursor-pointer text-left"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("services")}
              className="text-white hover:text-opacity-80 transition-colors bg-transparent border-none cursor-pointer text-left"
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className="text-white hover:text-opacity-80 transition-colors bg-transparent border-none cursor-pointer text-left"
            >
              Contact Us
            </button>
            <Button
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-opacity text-white font-medium w-full"
              onClick={() => handleNavigation("services")}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
