"use client"

import Link from "next/link"
import { Github, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gaming-dark border-t border-gaming-highlight">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-gaming text-white mb-4">
              Game<span className="text-neon-blue">Groove</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Discover, organize, and share your favorite games with the GameGroove community.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com" className="text-gray-400 hover:text-neon-blue">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-neon-blue">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-neon-blue">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-neon-blue">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-neon-blue">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-gray-400 hover:text-neon-blue">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-400 hover:text-neon-blue">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-400 hover:text-neon-blue">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-neon-blue">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-neon-blue">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-neon-blue">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-neon-blue">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-neon-blue">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with the latest gaming news and features.</p>
            <form className="flex flex-col space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gaming-highlight border border-gaming-highlight rounded-md px-4 py-2 focus:outline-none focus:border-neon-blue"
              />
              <button
                type="submit"
                className="bg-neon-blue text-black font-medium rounded-md px-4 py-2 hover:bg-neon-blue/80 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gaming-highlight mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GameGroove. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
