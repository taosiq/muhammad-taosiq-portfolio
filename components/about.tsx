"use client"

import { HoloCard } from "@/components/fx/holo-card"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeading } from "@/components/fx/section-heading"
import { highlights } from "@/lib/content"

// Syntax-highlighted "source file" describing the profile.
const code: { k?: string; v?: string; c?: string; raw?: string }[] = [
  { raw: "const taosiq = {" },
  { k: "current", v: '"MSc Industrial Engineering"', c: "// Beykent University" },
  { k: "location", v: '"Istanbul, Türkiye"' },
  { k: "degree", v: '"BS Computer Science"', c: "// NUST, Pakistan" },
  { k: "scholarship", v: '"Allama Iqbal (Fully Funded)"' },
  { k: "focus", v: '["AI/DL", "Full-Stack", "Mobile"]' },
  { k: "languages", v: '["Dari", "Urdu", "English"]' },
  { k: "lookingFor", v: '["Internship", "Full-time", "Remote"]' },
  { k: "openToRemote", v: "true" },
  { raw: "}" },
]

export function About() {
  return (
    <section id="about" className="relative px-6 py-14 md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="01" label="About" title="Passionate about building impactful technology" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p className="text-pretty">
              I am a Computer Science graduate from the{" "}
              <span className="font-medium text-foreground">National University of Sciences and Technology (NUST)</span>,
              Pakistan. I was honored to receive a{" "}
              <span className="font-medium text-primary">Fully Funded Allama Iqbal Scholarship</span> for my
              undergraduate studies, recognizing academic excellence.
            </p>
            <p className="text-pretty">
              My expertise spans <span className="text-foreground">Deep Learning &amp; Computer Vision</span>,{" "}
              <span className="text-foreground">Full-Stack Web Development</span>, and{" "}
              <span className="text-foreground">Mobile App Development</span>. I have a strong interest in workflow
              automation, API integration, and emerging AI technologies.
            </p>
            <p className="text-pretty">
              Currently a Master&apos;s student in{" "}
              <span className="font-medium text-primary">MSc Industrial Engineering</span> at{" "}
              <span className="font-medium text-foreground">Beykent University, Istanbul</span>, and seeking
              opportunities such as internships, full-time or remote roles in the{" "}
              <span className="text-foreground">software development</span> sector.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <HoloCard className="overflow-hidden" tilt>
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">profile.ts</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-sm leading-7">
                {code.map((line, i) => (
                  <div key={i} className="flex">
                    <span className="mr-5 w-5 shrink-0 select-none text-right text-muted-foreground/40">{i + 1}</span>
                    {line.raw ? (
                      <span>
                        {line.raw.startsWith("const") ? (
                          <>
                            <span className="text-accent">const</span> <span className="text-foreground">taosiq</span>{" "}
                            <span className="text-muted-foreground">= {"{"}</span>
                          </>
                        ) : (
                          <span className="text-muted-foreground">{line.raw}</span>
                        )}
                      </span>
                    ) : (
                      <span className="pl-4">
                        <span className="text-sky-300">{line.k}</span>
                        <span className="text-muted-foreground">: </span>
                        <span className={line.v === "true" ? "text-accent" : "text-primary"}>{line.v}</span>
                        <span className="text-muted-foreground">,</span>
                        {line.c && <span className="ml-3 text-muted-foreground/50">{line.c}</span>}
                      </span>
                    )}
                  </div>
                ))}
              </pre>
            </HoloCard>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <HoloCard className="h-full p-5" tilt>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground/60">0{index + 1}</span>
                </div>
                <h3 className="font-mono text-[0.8125rem] uppercase tracking-widest text-muted-foreground">{item.title}</h3>
                <p className="mt-1 font-display text-lg font-semibold text-foreground">{item.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                {item.extra && <p className="text-sm text-muted-foreground">{item.extra}</p>}
              </HoloCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
