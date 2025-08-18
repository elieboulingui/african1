"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe, Radio } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const languages = [
    { code: "fr", name: "Français" },
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
    { code: "sw", name: "Kiswahili" },
    { code: "pt", name: "Português" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary rounded-full p-2">
              <Radio className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground font-poppins">Africa N1</h1>
              <p className="text-xs text-muted-foreground">Radio Internationale</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#programmes" className="text-foreground hover:text-primary transition-colors">
              Programmes
            </a>
            <a href="#actualites" className="text-foreground hover:text-primary transition-colors">
              Actualités
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <select className="bg-transparent text-sm text-foreground border-none focus:outline-none">
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#accueil" className="text-foreground hover:text-primary transition-colors">
                Accueil
              </a>
              <a href="#programmes" className="text-foreground hover:text-primary transition-colors">
                Programmes
              </a>
              <a href="#actualites" className="text-foreground hover:text-primary transition-colors">
                Actualités
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <div className="pt-2 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Langues:</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="text-left text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
