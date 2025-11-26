"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])



  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-primary">EI</div>

        <div className="hidden md:flex items-center gap-8">
          <a href="/#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors capitalize">about</a>
          <a href="/#skills" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors capitalize">skills</a>
          <a href="/#experience" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors capitalize">experience</a>
          <a href="/#education" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors capitalize">education</a>
          <a href="/#projects" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors capitalize">projects</a>
          <a href="/security" className="text-sm font-medium text-blue-600 hover:text-primary transition-colors capitalize">security</a>
          <a href="/mcp-integration" className="text-sm font-medium text-cyan-600 hover:text-primary transition-colors capitalize">mcp integration</a>
          <a href="/#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors capitalize">contact</a>
        </div>

        <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-primary/10">
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </nav>
  )
}
