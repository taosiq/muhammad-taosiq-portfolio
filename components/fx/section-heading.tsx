import { ScrambleText } from "@/components/fx/scramble-text"
import { Reveal } from "@/components/fx/reveal"

// "[01] // ABOUT" label that decrypts, a big title, and a line that draws in.
export function SectionHeading({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <Reveal className="mb-8 md:mb-10">
      <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-primary uppercase">
        <span className="text-muted-foreground">[{index}]</span>
        <span className="text-muted-foreground">//</span>
        <ScrambleText text={label} />
      </div>
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl xl:text-[2.75rem] text-balance">
        {title}
      </h2>
      <div className="mt-4 flex items-center gap-2">
        <span className="h-px w-16 bg-gradient-to-r from-primary to-accent" />
        <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
        <span className="h-px flex-1 max-w-xs bg-gradient-to-r from-border to-transparent" />
      </div>
    </Reveal>
  )
}
