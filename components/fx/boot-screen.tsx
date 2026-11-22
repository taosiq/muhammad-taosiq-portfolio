// Terminal-style boot screen. Pure CSS: it fades itself out after ~2s and is
// hidden entirely on repeat visits (see the inline script in app/layout.tsx).

const lines = [
  { text: "initializing kernel", delay: 0.1 },
  { text: "loading neural modules", delay: 0.4 },
  { text: "compiling projects", delay: 0.7 },
  { text: "establishing secure link", delay: 1.0 },
]

export function BootScreen() {
  return (
    <div
      aria-hidden="true"
      className="boot fixed inset-0 z-[100] flex items-center justify-center bg-background font-mono"
    >
      <div className="cyber-grid absolute inset-0 opacity-60" />
      <div className="relative w-[min(90vw,26rem)] text-sm">
        <p className="mb-4 text-primary glow-text tracking-[0.3em] text-xs">TAOSIQ.OS // v2.0</p>
        <ul className="space-y-1.5 text-muted-foreground">
          {lines.map((line) => (
            <li key={line.text} className="boot-line flex gap-2" style={{ animationDelay: `${line.delay}s` }}>
              <span className="text-primary">&gt;</span>
              <span className="flex-1 truncate">{line.text}</span>
              <span className="text-primary">[OK]</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 h-px w-full bg-border overflow-hidden">
          <div className="boot-bar h-full bg-gradient-to-r from-primary to-accent" />
        </div>
        <p className="boot-line mt-4 text-foreground tracking-[0.25em] text-xs" style={{ animationDelay: "1.35s" }}>
          ACCESS GRANTED<span className="animate-blink text-primary">_</span>
        </p>
      </div>
    </div>
  )
}
