"use client"

import { HoloCard } from "@/components/fx/holo-card"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeading } from "@/components/fx/section-heading"
import { skillCategories } from "@/lib/content"
import { cn } from "@/lib/utils"

const allSkills = skillCategories.flatMap((c) => c.skills)

function Ticker({ items, reverse }: { items: string[]; reverse?: boolean }) {
  // Content is duplicated so the loop is seamless.
  const loop = [...items, ...items]
  return (
    <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <ul className={cn("flex shrink-0 gap-3 pr-3", reverse ? "animate-marquee-reverse" : "animate-marquee")} aria-hidden="true">
        {loop.map((skill, i) => (
          <li
            key={`${skill}-${i}`}
            className="whitespace-nowrap rounded-md border border-border bg-card/60 px-4 py-2 font-mono text-sm text-muted-foreground"
          >
            <span className="mr-2 text-primary">◆</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Skills() {
  const half = Math.ceil(allSkills.length / 2)

  return (
    <section id="skills" className="relative py-14 md:py-16">
      <div className="px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading index="04" label="Skills" title="Technical Expertise" />
        </div>
      </div>

      <Reveal className="mb-14 space-y-3">
        <Ticker items={allSkills.slice(0, half)} />
        <Ticker items={allSkills.slice(half)} reverse />
      </Reveal>

      <div className="px-6 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Reveal key={category.id} delay={index * 100}>
            <HoloCard className="h-full p-6" tilt>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 transition-transform duration-500 group-hover:scale-110">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{category.title}</h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    module.<span className="text-primary">{category.id}</span> · {category.skills.length} loaded
                  </p>
                </div>
              </div>

              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="cursor-default rounded-md border border-border bg-secondary/60 px-3 py-1.5 text-sm text-secondary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_14px_-4px_var(--primary)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>

              {/* Decorative "load" bar */}
              <div className="mt-6 h-px w-full overflow-hidden bg-border">
                <div className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-1000 ease-out group-hover:scale-x-100" />
              </div>
            </HoloCard>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  )
}
