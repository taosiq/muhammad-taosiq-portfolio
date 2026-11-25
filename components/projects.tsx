"use client"

import { ArrowUpRight, ExternalLink, FolderGit2, Github, Terminal } from "lucide-react"
import { HoloCard } from "@/components/fx/holo-card"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeading } from "@/components/fx/section-heading"
import { featuredProjects, otherProjects, type FeaturedProject } from "@/lib/content"
import { cn } from "@/lib/utils"

function ProjectLinks({ project }: { project: FeaturedProject }) {
  return (
    <div className="flex gap-2">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} on GitHub`}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-primary/60 hover:text-primary hover:shadow-[0_0_16px_-4px_var(--primary)]"
        >
          <Github className="h-4 w-4" />
        </a>
      )}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} live demo`}
          className="flex h-9 items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-3 font-mono text-xs text-primary transition-all hover:border-primary hover:shadow-[0_0_16px_-4px_var(--primary)]"
        >
          Live Demo
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  )
}

function FeaturedCard({ project, wide }: { project: FeaturedProject; wide?: boolean }) {
  return (
    <HoloCard className={cn("flex h-full flex-col overflow-hidden", project.highlight && "flow-border")} tilt={!wide}>
      {/* Window chrome */}
      <div className="flex items-center justify-between gap-3 border-b border-border bg-background/40 px-5 py-3">
        <div className="flex min-w-0 items-center gap-2 font-mono text-xs text-muted-foreground">
          <Terminal className="h-3.5 w-3.5 shrink-0 text-primary" />
          <span className="truncate">~/projects/{project.slug}</span>
        </div>
        <div className="flex shrink-0 items-center gap-2 font-mono text-xs">
          {project.highlight && (
            <span className="rounded border border-primary/40 bg-primary/10 px-2 py-0.5 tracking-widest text-primary">FEATURED</span>
          )}
          <span className="text-muted-foreground">{project.date}</span>
        </div>
      </div>

      <div className={cn("flex flex-1 flex-col gap-6 p-6", wide && "md:flex-row md:items-start md:gap-10 md:p-8")}>
        <div className="flex-1">
          <p className="font-mono text-xs text-primary">{project.context}</p>
          <h3
            className={cn(
              "mt-2 font-display font-bold text-foreground transition-colors group-hover:text-primary",
              wide ? "text-2xl md:text-3xl" : "text-xl",
            )}
          >
            {project.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{project.description}</p>
          {project.bullets && (
            <ul className="mt-4 space-y-2.5">
              {project.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                  <span className="mt-0.5 shrink-0 font-mono text-primary">▹</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded border border-primary/20 bg-primary/5 px-2.5 py-1 font-mono text-[0.8125rem] text-primary">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={cn("flex items-end justify-between gap-4", wide && "md:w-52 md:flex-col md:items-end")}>
          {project.metric ? (
            <div className={cn(wide && "md:text-right")}>
              <p className="font-display text-3xl font-bold text-gradient">{project.metric.value}</p>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{project.metric.label}</p>
            </div>
          ) : (
            <span />
          )}
          <ProjectLinks project={project} />
        </div>
      </div>
    </HoloCard>
  )
}

export function Projects() {
  const [first, ...rest] = featuredProjects

  return (
    <section id="projects" className="relative px-6 py-14 md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="03" label="Projects" title="Featured Work & Technical Projects" />

        <div className="space-y-6">
          {first && (
            <Reveal>
              <FeaturedCard project={first} wide />
            </Reveal>
          )}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {rest.map((project, index) => {
              // With an odd number of cards, the last one spans both columns so the grid has no gap.
              const spansRow = rest.length % 2 === 1 && index === rest.length - 1
              return (
                <Reveal key={project.slug} delay={index * 120} className={cn(spansRow && "md:col-span-2")}>
                  <FeaturedCard project={project} wide={spansRow} />
                </Reveal>
              )
            })}
          </div>
        </div>

        <Reveal className="mb-6 mt-20 flex items-center gap-3">
          <FolderGit2 className="h-5 w-5 text-primary" />
          <h3 className="font-display text-xl font-semibold text-foreground">Other Noteworthy Projects</h3>
          <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {otherProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <HoloCard className="flex h-full flex-col p-5 hover:-translate-y-1">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-primary/70">{`{ 0${index + 1} }`}</span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-all hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <h4 className="font-display font-semibold text-foreground transition-colors group-hover:text-primary">{project.title}</h4>
                <p className="mt-2 mb-3 flex-1 text-base leading-relaxed text-muted-foreground">{project.description}</p>
                <p className="mb-3 font-mono text-[0.8125rem] text-muted-foreground/70">{project.context}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="font-mono text-[0.8125rem] text-primary/80">
                      #{tech}
                    </span>
                  ))}
                </div>
              </HoloCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
