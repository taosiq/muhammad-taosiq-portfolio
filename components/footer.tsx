import { profile, socialLinks } from "@/lib/content"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-background/60 px-6 py-10 backdrop-blur md:px-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center font-mono text-xs text-muted-foreground md:text-left">
          <p>
            <span className="text-primary">&lt;/&gt;</span> Designed &amp; built by{" "}
            <span className="text-foreground">{profile.name}</span>
          </p>
          <p className="mt-1">&copy; {currentYear} All rights reserved. // Next.js · Tailwind · Vercel</p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_16px_-4px_var(--primary)]"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
