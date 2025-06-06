"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { LogOut, User, Settings, Heart, ShoppingBag, ChevronDown } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"

export default function UserMenu() {
  const { user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    logout()
    setIsOpen(false)
    router.push("/")
  }

  if (!user) return null

  return (
    <div className="relative">
      <button className="flex items-center space-x-2 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gaming-highlight">
          <Image
            src={user.avatar || "/placeholder.svg?height=32&width=32"}
            alt={user.username}
            fill
            className="object-cover"
            sizes="32px"
          />
        </div>
        <span className="hidden md:inline-block text-white">{user.username}</span>
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-gaming-card rounded-md shadow-lg border border-gaming-highlight overflow-hidden z-50">
          <div className="p-4 border-b border-gaming-highlight">
            <p className="font-medium text-white">{user.username}</p>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>
          <div className="py-2">
            <Link
              href="/profile"
              className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gaming-highlight hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <User className="h-4 w-4 mr-2" />
              Profile
            </Link>
            <Link
              href="/orders"
              className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gaming-highlight hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Orders
            </Link>
            <Link
              href="/wishlist"
              className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gaming-highlight hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <Heart className="h-4 w-4 mr-2" />
              Wishlist
            </Link>
            <Link
              href="/settings"
              className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gaming-highlight hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Link>
          </div>
          <div className="py-2 border-t border-gaming-highlight">
            <button
              onClick={handleLogout}
              className="flex w-full items-center px-4 py-2 text-sm text-red-400 hover:bg-gaming-highlight hover:text-red-300"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
