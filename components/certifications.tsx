"use client"

import Image from "next/image"
import { BadgeCheck, ExternalLink } from "lucide-react"
import { HoloCard } from "@/components/fx/holo-card"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeading } from "@/components/fx/section-heading"
import { certifications } from "@/lib/content"

export function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="05" label="Certifications" title="Professional Credentials & Achievements" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={(index % 3) * 100}>
              <HoloCard className="flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-muted">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="crt absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="scanline opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-70" />
                  <span className="absolute left-3 top-3 rounded border border-primary/30 bg-background/80 px-2 py-0.5 font-mono text-xs text-primary backdrop-blur">
                    CERT_{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="line-clamp-2 font-display font-semibold text-foreground transition-colors group-hover:text-primary">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>

                  {cert.score && (
                    <div className="mt-3 rounded-md border border-primary/20 bg-primary/5 p-3">
                      <p className="font-mono text-sm font-medium text-primary">{cert.score}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{cert.details}</p>
                    </div>
                  )}

                  <div className="mt-auto flex items-center justify-between pt-4 font-mono text-xs">
                    <span className="text-muted-foreground">{cert.date}</span>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded border border-primary/30 px-2.5 py-1 text-primary transition-all hover:bg-primary/10 hover:shadow-[0_0_14px_-4px_var(--primary)]"
                    >
                      <BadgeCheck className="h-3.5 w-3.5" />
                      Verify
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </HoloCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
