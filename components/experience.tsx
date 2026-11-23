"use client"

import { useEffect, useRef } from "react"
import { Briefcase, ExternalLink, MapPin } from "lucide-react"
import { HoloCard } from "@/components/fx/holo-card"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeading } from "@/components/fx/section-heading"
import { experiences } from "@/lib/content"

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)

  // The timeline line "charges up" as you scroll through the section.
  useEffect(() => {
    let ticking = false
    const update = () => {
      ticking = false
      const track = trackRef.current
      const fill = fillRef.current
      if (!track || !fill) return
      const rect = track.getBoundingClientRect()
      const start = window.innerHeight * 0.7
      const progress = Math.min(1, Math.max(0, (start - rect.top) / rect.height))
      fill.style.transform = `scaleY(${progress})`
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
    <section id="experience" className="relative px-6 py-14 md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="02" label="Experience" title="Professional Journey" />

        <div ref={trackRef} className="relative">
          {/* Track + animated fill */}
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-border md:left-[calc(12rem+7px)]" aria-hidden="true">
            <div
              ref={fillRef}
              className="h-full w-full origin-top bg-gradient-to-b from-primary via-sky-400 to-accent shadow-[0_0_10px_var(--primary)]"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          <ol className="space-y-12">
            {experiences.map((exp, index) => (
              <Reveal as="li" key={exp.title} delay={index * 150} className="relative grid grid-cols-1 gap-4 pl-10 md:grid-cols-[12rem_1fr] md:gap-12 md:pl-0">
                {/* Node */}
                <span
                  className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center md:left-[12rem]"
                  aria-hidden="true"
                >
                  <span className="absolute h-full w-full animate-ping-slow rounded-full bg-primary/40" />
                  <span className="h-[9px] w-[9px] rounded-full border-2 border-primary bg-background" />
                </span>

                <div className="font-mono text-sm md:pr-8 md:text-right">
                  <p className="text-primary">{exp.period}</p>
                  <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </p>
                </div>

                <HoloCard className="p-6 md:ml-8" tilt>
                  <div className="mb-5 flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="font-mono text-sm text-primary">
                        @{" "}
                        {exp.companyUrl ? (
                          <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
                            {exp.company}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : (
                          exp.company
                        )}
                      </p>
                    </div>
                  </div>

                  <ul className="mb-5 space-y-3 text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-base leading-relaxed">
                        <span className="mt-0.5 shrink-0 font-mono text-primary">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="rounded border border-primary/20 bg-primary/5 px-2.5 py-1 font-mono text-[0.8125rem] text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </HoloCard>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
