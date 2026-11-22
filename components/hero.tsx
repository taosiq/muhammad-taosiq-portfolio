"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, Award, Github, Linkedin, Mail } from "lucide-react"
import { ScrambleText } from "@/components/fx/scramble-text"
import { Typewriter } from "@/components/fx/typewriter"
import { whenIntroDone } from "@/lib/motion"
import { certifications, featuredProjects, otherProjects, profile } from "@/lib/content"
import { cn } from "@/lib/utils"

const stats = [
  { value: "97.81%", label: "Model accuracy" },
  { value: `${featuredProjects.length + otherProjects.length}`, label: "Projects built" },
  { value: `${certifications.length}`, label: "Certifications" },
  { value: "NUST", label: "BS CS '25" },
]

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Start the hero's entrance as the opening intro hands over.
  useEffect(() => whenIntroDone(() => setIsLoaded(true)), [])

  const enter = (step: number) => ({
    className: cn(
      "transition-all duration-700 ease-out",
      isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
    ),
    style: { transitionDelay: `${step * 110}ms` },
  })

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20 md:px-10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <div {...enter(0)}>
            <p className="mb-6 inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/5 px-3 py-1.5 font-mono text-xs text-primary">
              <span className="text-muted-foreground">~/portfolio $</span> ./hello_world.sh
            </p>
          </div>

          <h1 className={cn("font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl xl:text-8xl", enter(1).className)} style={enter(1).style}>
            {isLoaded ? (
              <ScrambleText text={profile.name} trigger="mount" duration={1100} className="text-gradient" />
            ) : (
              <span className="text-gradient">{profile.name}</span>
            )}
          </h1>

          <p className={cn("mt-6 font-mono text-lg text-foreground md:text-2xl", enter(2).className)} style={enter(2).style}>
            <span className="text-primary">&gt;</span>{" "}
            {isLoaded ? <Typewriter words={profile.roles} startDelay={1400} /> : <span>{profile.roles[0]}</span>}
          </p>
          <p className={cn("mt-2 text-base text-muted-foreground", enter(2).className)} style={enter(2).style}>
            {profile.title}
          </p>

          <p className={cn("mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground text-pretty", enter(3).className)} style={enter(3).style}>
            I build accessible, pixel-perfect digital experiences for the web. Specializing in{" "}
            <span className="font-medium text-foreground">AI &amp; Deep Learning</span>,{" "}
            <span className="font-medium text-foreground">Full-Stack Development</span>, and{" "}
            <span className="font-medium text-foreground">Mobile Applications</span>.
          </p>

          <p className={cn("mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty", enter(4).className)} style={enter(4).style}>
            Graduate from <span className="text-foreground">NUST, Pakistan</span>, now an{" "}
            <span className="font-medium text-primary">MSc Industrial Engineering</span> student at{" "}
            <span className="text-foreground">Beykent University, Istanbul</span>. Seeking internships, full-time or
            remote roles in software development.
          </p>

          <div className={cn("mt-10 flex flex-wrap gap-4", enter(5).className)} style={enter(5).style}>
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-primary px-7 py-3.5 font-mono text-base font-semibold text-primary-foreground shadow-[0_0_30px_-5px_var(--primary)] transition-shadow hover:shadow-[0_0_45px_-2px_var(--primary)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-7 py-3.5 font-mono text-base text-primary transition-all hover:bg-primary/10 hover:border-primary"
            >
              Contact Me
            </a>
            <a
              href="#certifications"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-3.5 font-mono text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              <Award className="h-4 w-4" />
              Certifications
            </a>
          </div>

          <div className={cn("mt-10 flex items-center gap-3", enter(6).className)} style={enter(6).style}>
            {[
              { icon: Github, href: profile.github, label: "GitHub" },
              { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_20px_-4px_var(--primary)]"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
            <span className="ml-2 hidden h-px w-24 bg-gradient-to-r from-border to-transparent sm:block" />
          </div>

          <dl className={cn("mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4", enter(7).className)} style={enter(7).style}>
            {stats.map((s) => (
              <div key={s.label} className="bg-background/80 px-5 py-5 backdrop-blur">
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.label}</dt>
                <dd className="mt-1 font-display text-3xl font-bold text-foreground">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* HUD portrait */}
        <div
          className={cn(
            "order-1 flex justify-center transition-all duration-1000 ease-out lg:order-2 lg:justify-end",
            isLoaded ? "scale-100 opacity-100" : "scale-90 opacity-0",
          )}
        >
          <div className="relative aspect-square w-64 md:w-80 lg:w-[26rem]">
            <div className="absolute inset-[10%] rounded-full bg-primary/20 blur-3xl" />

            <svg className="absolute inset-0 animate-spin-slow" viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <linearGradient id="hud-ring" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="49" fill="none" stroke="url(#hud-ring)" strokeWidth="0.35" strokeDasharray="22 5 3 5" />
            </svg>
            <svg className="absolute inset-[5%] animate-spin-reverse" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="49" fill="none" stroke="var(--primary)" strokeOpacity="0.45" strokeWidth="0.5" strokeDasharray="0.6 2.4" />
            </svg>
            <svg className="absolute inset-[9%] animate-spin-slower" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="49" fill="none" stroke="var(--accent)" strokeOpacity="0.6" strokeWidth="0.6" strokeDasharray="40 114" strokeLinecap="round" />
            </svg>

            {/* Orbiting node */}
            <div className="absolute inset-0 animate-spin-slower" aria-hidden="true">
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_14px_var(--primary)]" />
            </div>

            {/* Crosshair ticks */}
            {["top-0 left-1/2 h-4 w-px -translate-x-1/2", "bottom-0 left-1/2 h-4 w-px -translate-x-1/2", "left-0 top-1/2 h-px w-4 -translate-y-1/2", "right-0 top-1/2 h-px w-4 -translate-y-1/2"].map((pos) => (
              <span key={pos} className={cn("absolute bg-primary/70", pos)} aria-hidden="true" />
            ))}

            {/* Photo */}
            <div className="absolute inset-[14%] overflow-hidden rounded-full border border-primary/40 shadow-[0_0_60px_-10px_var(--primary)]">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                priority
                className="object-cover object-[50%_22%]"
                sizes="(max-width: 768px) 190px, (max-width: 1024px) 230px, 300px"
              />
              <div className="crt absolute inset-0" />
              <div className="scanline" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>

            {/* Floating HUD label */}
            <div className="absolute -left-2 bottom-[-7%] md:bottom-[1%] animate-float rounded-md border border-primary/30 bg-background/85 px-4 py-2.5 font-mono text-sm leading-relaxed text-muted-foreground backdrop-blur md:-left-6">
              <p>
                ID: <span className="text-primary">MT-NUST-25</span>
              </p>
              <p>
                ROLE: <span className="text-foreground">FULL-STACK / AI</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className={cn(
          "absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-xs tracking-[0.3em] text-muted-foreground transition-opacity duration-700 hover:text-primary md:flex [@media(max-height:1000px)]:!hidden",
          isLoaded ? "opacity-100" : "opacity-0",
        )}
        style={{ transitionDelay: "1000ms" }}
      >
        SCROLL
        <span className="relative h-10 w-px overflow-hidden bg-border">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-scan bg-primary" />
        </span>
      </a>
    </section>
  )
}
