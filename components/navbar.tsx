'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Track active section when on the homepage
  useEffect(() => {
    if (pathname !== '/') return

    const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact']
    const observers: IntersectionObserver[] = []

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    }

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        const observer = new IntersectionObserver(observerCallback, observerOptions)
        observer.observe(el)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [pathname])

  const navItems = [
    { label: 'Home', href: '/#home', id: 'home' },
    { label: 'About', href: '/#about', id: 'about' },
    { label: 'Skills', href: '/#skills', id: 'skills' },
    { label: 'Projects', href: '/#projects', id: 'projects' },
    { label: 'Education', href: '/#education', id: 'education' },
    { label: 'Certifications', href: '/#certifications', id: 'certifications' },
    { label: 'Contact', href: '/#contact', id: 'contact' },
  ]

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Personal Brand */}
          <Link
            href="/#home"
            className="group flex items-center gap-2.5 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          >
            <span className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm tracking-wider group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              FP
            </span>
            <span className="text-base sm:text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              Farrell Putra Prayoga
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navigasi Utama">
            {navItems.map((item) => {
              const isActive = pathname === '/' && activeSection === item.id
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium px-3 py-2 min-h-[44px] flex items-center rounded-md transition-colors ${
                    isActive
                      ? 'text-primary font-semibold bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-muted rounded-lg text-foreground transition-colors border border-transparent hover:border-border"
              aria-label={mounted && resolvedTheme === 'dark' ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
            >
              {mounted && resolvedTheme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-muted rounded-lg text-foreground transition-colors border border-transparent hover:border-border"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav
            className="lg:hidden border-t border-border py-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200"
            aria-label="Menu navigasi mobile"
          >
            {navItems.map((item) => {
              const isActive = pathname === '/' && activeSection === item.id
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block px-4 py-3 min-h-[44px] rounded-lg text-base font-medium transition-colors flex items-center ${
                    isActive
                      ? 'text-primary font-semibold bg-primary/10'
                      : 'text-foreground hover:bg-muted'
                  }`}
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        )}
      </div>
    </header>
  )
}
