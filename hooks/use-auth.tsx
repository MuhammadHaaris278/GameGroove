"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type User = {
  username: string
  email: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Load auth state from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const storedUser = localStorage.getItem("gamegroove-user")
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser)
        setIsAuthenticated(true)
      } catch (e) {
        console.error("Failed to parse user data from localStorage")
      }
    }
  }, [])

  // Save auth state to localStorage when it changes
  useEffect(() => {
    if (mounted && user) {
      localStorage.setItem("gamegroove-user", JSON.stringify(user))
    }
  }, [user, mounted])

  const login = async (email: string, password: string): Promise<boolean> => {
    // For demo purposes, we'll use hardcoded credentials
    if (email === "admin@gamegroove.com" && password === "password123") {
      const newUser = {
        username: "admin",
        email: "admin@gamegroove.com",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/team-member-1-Yx9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd.jpg",
      }
      setUser(newUser)
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("gamegroove-user")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return context
}
