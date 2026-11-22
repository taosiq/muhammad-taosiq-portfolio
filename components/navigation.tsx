"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { navItems, profile } from "@/lib/content"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const ids = navItems.map((item) => item.href.slice(1))
    let ticking = false
    const update = () => {
      ticking = false
      setIsScrolled(window.scrollY > 40)
      let current = ""
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 160) current = id
      }
      setActiveSection(current)
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled ? "border-b border-primary/10 bg-background/70 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#home" className="group flex items-center gap-2 font-mono text-lg font-bold" aria-label="Home">
          <span className="text-primary">&lt;</span>
          <span className="text-foreground transition-colors group-hover:text-primary">{profile.initials}</span>
          <span className="text-primary">/&gt;</span>
          <span className="animate-blink text-primary">_</span>
        </a>

        <ul className="hidden items-center gap-1 font-mono text-[13px] md:flex">
          {navItems.map((item, i) => {
            const active = activeSection === item.href.slice(1)
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "relative block px-3 py-2 transition-colors duration-300",
                    active ? "text-primary" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span className="mr-1 text-primary/60">0{i + 1}.</span>
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-gradient-to-r from-primary to-accent transition-transform duration-500",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 font-mono text-[11px] text-primary lg:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          OPEN TO WORK
        </div>

        <button
          className="rounded-lg border border-border p-2 text-foreground transition-colors hover:border-primary/50 hover:text-primary md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-b border-primary/10 bg-background/95 backdrop-blur-xl transition-all duration-500 md:hidden",
          isMobileMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0 border-transparent",
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-4 font-mono">
          {navItems.map((item, i) => (
            <li
              key={item.href}
              className={cn("transition-all duration-500", isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0")}
              style={{ transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : "0ms" }}
            >
              <a
                href={item.href}
                className={cn(
                  "block rounded-lg px-4 py-3 transition-colors",
                  activeSection === item.href.slice(1) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mr-2 text-primary/60">0{i + 1}.</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
