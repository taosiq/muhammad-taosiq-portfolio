"use client"

import { useState } from "react"
import { Check, Copy, Send } from "lucide-react"
import { HoloCard } from "@/components/fx/holo-card"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeading } from "@/components/fx/section-heading"
import { contactInfo, profile } from "@/lib/content"

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="06" label="Contact" title="Let's Connect" />

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              I&apos;m actively seeking{" "}
              <span className="font-medium text-foreground">internships, full-time or remote roles</span> in software
              development. Whether you have a question, want to discuss a project, or explore opportunities - feel free
              to reach out!
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-primary px-7 py-3.5 font-mono text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-5px_var(--primary)] transition-shadow hover:shadow-[0_0_45px_-2px_var(--primary)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                Say Hello
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-5 py-3.5 font-mono text-sm text-primary transition-all hover:border-primary hover:bg-primary/10"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied!" : "Copy email"}
              </button>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <HoloCard className="overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">visitor@taosiq: ~</span>
              </div>
              <div className="p-5 font-mono text-sm">
                <p className="text-muted-foreground">
                  <span className="text-emerald-400">visitor@taosiq</span>:<span className="text-accent">~</span>$ contact --list
                </p>
                <ul className="mt-4 space-y-1">
                  {contactInfo.map((item) => {
                    const external = item.href?.startsWith("http")
                    const body = (
                      <>
                        <item.icon className="h-4 w-4 shrink-0 text-primary" />
                        <span className="w-20 shrink-0 text-muted-foreground">{item.label.toLowerCase()}</span>
                        <span className="text-muted-foreground/50">→</span>
                        <span className="truncate text-foreground transition-colors group-hover/row:text-primary">{item.value}</span>
                      </>
                    )
                    return (
                      <li key={item.label}>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="group/row flex items-center gap-3 rounded-md px-2 py-2.5 transition-colors hover:bg-primary/5"
                          >
                            {body}
                          </a>
                        ) : (
                          <div className="flex items-center gap-3 px-2 py-2.5">{body}</div>
                        )}
                      </li>
                    )
                  })}
                </ul>
                <p className="mt-4 text-muted-foreground">
                  <span className="text-emerald-400">visitor@taosiq</span>:<span className="text-accent">~</span>${" "}
                  <span className="animate-blink text-primary">▌</span>
                </p>
              </div>
            </HoloCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
