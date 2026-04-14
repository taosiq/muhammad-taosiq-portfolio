"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/taosiq", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mtaosiq", label: "LinkedIn" },
  { icon: Mail, href: "mailto:taosiqmuhammad@gmail.com", label: "Email" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 px-6 md:px-12 lg:px-24 border-t border-border bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1">
              Designed & Built with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> by{" "}
              <span className="text-foreground font-medium">Muhammad Taosiq</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
