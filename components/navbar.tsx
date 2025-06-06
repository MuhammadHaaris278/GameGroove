"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Cart from "@/components/cart"
import UserMenu from "@/components/user-menu"
import { useAuth } from "@/hooks/use-auth"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Games", href: "/games" },
  { name: "Features", href: "/features" },
  { name: "Community", href: "/community" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-gaming-dark/90 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-gaming text-white">
                Game<span className="text-neon-blue">Groove</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-neon-blue relative py-2",
                      pathname === link.href ? "text-neon-blue" : "text-gray-300",
                    )}
                  >
                    {link.name}
                    {pathname === link.href && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-blue" />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Auth and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <Cart />

            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <>
                <Link href="/signin">
                  <Button variant="ghost" className="text-white hover:text-neon-blue">
                    Sign In
                  </Button>
                </Link>

                <Link href="/signup">
                  <Button className="neon-button">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <Cart />

            {isAuthenticated && <UserMenu />}

            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gaming-dark/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                  pathname === link.href
                    ? "text-neon-blue bg-gaming-highlight"
                    : "text-gray-300 hover:bg-gaming-highlight hover:text-neon-blue",
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {!isAuthenticated && (
              <div className="border-t border-gaming-highlight my-2 pt-2">
                <Link
                  href="/signin"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gaming-highlight hover:text-neon-blue"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gaming-highlight hover:text-neon-blue"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
