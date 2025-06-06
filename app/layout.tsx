import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"
import { CartProvider } from "@/hooks/use-cart"
import { AuthProvider } from "@/hooks/use-auth"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

// Custom gaming font
const gamingFont = localFont({
  src: "../public/fonts/Azonix.otf",
  variable: "--font-gaming",
  display: "swap",
})

export const metadata: Metadata = {
  title: "GameGroove | Discover Games. Build Hype. Game Together.",
  description: "Discover, organize, and share PC and console games with GameGroove.",
  keywords: "games, gaming, discovery, PC games, console games, community",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${gamingFont.variable} font-sans min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <CartProvider>
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
              <ScrollToTop />
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
