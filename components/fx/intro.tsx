"use client"

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react"
import { certifications, featuredProjects, otherProjects, profile } from "@/lib/content"
import { cn } from "@/lib/utils"

// Opening animation: a tilted code window "runs" the portfolio in its terminal,
// turns into a browser showing a mini version of the site, straightens out and
// zooms in until it becomes the real page underneath.
// Plays once per browser session (see the inline script in app/layout.tsx).

type Phase = "enter" | "type" | "browser" | "flat" | "zoom" | "done"

const TIMELINE: [Phase, number][] = [
  ["type", 80],
  ["browser", 2050],
  ["flat", 2750],
  ["zoom", 3050],
  ["done", 3850],
]

const commands = [
  { text: "cd ~/muhammad-taosiq", delay: 0.25, dur: 0.5 },
  { text: "npm run launch", delay: 0.9, dur: 0.4 },
]

const projectCount = featuredProjects.length + otherProjects.length
const output = [
  { text: "▲ Next.js · starting portfolio", tone: "text-muted-foreground", delay: 1.4 },
  { text: "✓ Compiled successfully", tone: "text-emerald-400", delay: 1.55 },
  { text: `✓ Loaded ${projectCount} projects · ${certifications.length} certifications`, tone: "text-emerald-400", delay: 1.7 },
  { text: "→ Opening in browser…", tone: "text-primary", delay: 1.85 },
]

const windowTransform: Record<Phase, string> = {
  enter: "perspective(1600px) rotateX(30deg) rotateY(-20deg) rotateZ(5deg) translateY(80px) scale(0.8)",
  type: "perspective(1600px) rotateX(14deg) rotateY(-12deg) rotateZ(2deg) scale(0.95)",
  browser: "perspective(1600px) rotateX(10deg) rotateY(-8deg) rotateZ(1deg) scale(0.97)",
  flat: "perspective(1600px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)",
  zoom: "", // computed so the window covers the whole screen
  done: "",
}

export function Intro() {
  const [phase, setPhase] = useState<Phase>("enter")
  const [hydrated, setHydrated] = useState(false)
  const [zoomScale, setZoomScale] = useState(4)
  const windowRef = useRef<HTMLDivElement>(null)
  const finished = useRef(false)

  const finish = useCallback(() => {
    if (finished.current) return
    finished.current = true
    document.documentElement.dataset.booted = "1"
    document.body.style.overflow = ""
    ;(window as unknown as { __introDone?: boolean }).__introDone = true
    window.dispatchEvent(new Event("intro:done"))
  }, [])

  const skip = useCallback(() => {
    finish()
    setPhase("done")
  }, [finish])

  useEffect(() => {
    setHydrated(true)
    // Already seen this session (or reduced motion): skip straight to the site.
    if (document.documentElement.dataset.booted) {
      finished.current = true
      setPhase("done")
      return
    }
    document.body.style.overflow = "hidden"
    window.scrollTo(0, 0)

    const timers = TIMELINE.map(([p, at]) =>
      setTimeout(() => {
        if (p === "zoom" && windowRef.current) {
          const r = windowRef.current.getBoundingClientRect()
          setZoomScale(Math.max(window.innerWidth / r.width, window.innerHeight / r.height) * 1.2)
          // Let the hero start its entrance while the zoom is still settling.
          setTimeout(finish, 350)
        }
        if (p === "done") finish()
        setPhase(p)
      }, at),
    )
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") skip()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      timers.forEach(clearTimeout)
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [finish, skip])

  if (phase === "done") return null

  const zooming = phase === "zoom"
  const showBrowser = phase === "browser" || phase === "flat" || zooming

  return (
    <div
      className={cn(
        "intro fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background transition-[background-color] duration-700",
        !hydrated && "intro-failsafe",
        zooming && "bg-transparent",
      )}
      onClick={skip}
      role="presentation"
    >
      <div
        className={cn("cyber-grid absolute inset-0 transition-opacity duration-500", zooming && "opacity-0")}
        aria-hidden="true"
      />
      <div
        className={cn(
          "absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[110px] transition-opacity duration-500",
          zooming && "opacity-0",
        )}
        aria-hidden="true"
      />

      {/* The window */}
      <div
        ref={windowRef}
        aria-hidden="true"
        className={cn(
          "relative aspect-[16/10] w-[min(92vw,760px)] overflow-hidden rounded-xl border border-primary/30 bg-card shadow-[0_40px_120px_-30px_oklch(0.82_0.14_205/0.45)]",
          phase === "enter" ? "opacity-0" : "opacity-100",
          zooming && "rounded-none border-transparent",
        )}
        style={{
          transform: zooming ? `scale(${zoomScale})` : windowTransform[phase],
          opacity: zooming ? 0 : undefined,
          transition: zooming
            ? "transform 0.8s cubic-bezier(0.7, 0, 0.3, 1), opacity 0.45s ease 0.35s, border-radius 0.4s"
            : "transform 1.1s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.6s ease",
        }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <div className="mx-auto flex h-6 w-[60%] items-center justify-center rounded-md bg-secondary/80 px-3 font-mono text-[10px] text-muted-foreground sm:text-[11px]">
            {showBrowser ? (
              <span className="truncate">
                <span className="text-emerald-400">🔒</span> muhammad-taosiq-portfolio.vercel.app
              </span>
            ) : (
              <span>taosiq — zsh</span>
            )}
          </div>
        </div>

        <div className="relative h-[calc(100%-2.75rem)]">
          {/* Terminal */}
          <div
            className={cn(
              "absolute inset-0 p-4 font-mono text-[10px] leading-relaxed transition-all duration-500 sm:p-6 sm:text-sm",
              showBrowser && "-translate-y-6 opacity-0",
            )}
          >
            {commands.map((c) => (
              <p key={c.text} className="text-foreground">
                <span className="text-emerald-400">visitor</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-accent">~</span>
                <span className="text-muted-foreground">$ </span>
                <span
                  className="type-line"
                  style={{ "--n": c.text.length, "--dur": `${c.dur}s`, "--delay": `${c.delay}s` } as CSSProperties}
                >
                  {c.text}
                </span>
              </p>
            ))}
            <div className="mt-2 space-y-0.5">
              {output.map((o) => (
                <p key={o.text} className={cn("intro-out-line", o.tone)} style={{ "--delay": `${o.delay}s` } as CSSProperties}>
                  {o.text}
                </p>
              ))}
            </div>
            <span className="mt-1 inline-block animate-blink text-primary">▌</span>
          </div>

          {/* Mini version of the site */}
          <div
            className={cn(
              "absolute inset-0 overflow-hidden bg-background transition-all duration-700 ease-out",
              showBrowser ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
            )}
          >
            <div className="cyber-grid absolute inset-0 opacity-70" />
            <div className="absolute -top-10 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative flex h-full items-center justify-between gap-4 px-[6%]">
              <div className="min-w-0">
                <p className="font-mono text-[8px] text-primary sm:text-[10px]">~/portfolio $ ./hello_world.sh</p>
                <p className="text-gradient mt-1 font-display text-xl font-bold leading-none sm:mt-2 sm:text-4xl">
                  {profile.name}
                </p>
                <p className="mt-1.5 font-mono text-[9px] text-foreground sm:mt-3 sm:text-sm">
                  <span className="text-primary">&gt;</span> {profile.roles[0]}
                </p>
                <div className="mt-2 flex gap-1.5 sm:mt-4 sm:gap-2">
                  <span className="rounded bg-primary px-2 py-0.5 font-mono text-[7px] font-semibold text-primary-foreground sm:px-3 sm:py-1.5 sm:text-[10px]">
                    View Projects →
                  </span>
                  <span className="rounded border border-primary/40 px-2 py-0.5 font-mono text-[7px] text-primary sm:px-3 sm:py-1.5 sm:text-[10px]">
                    Contact Me
                  </span>
                </div>
              </div>
              <div className="relative aspect-square w-[24%] shrink-0">
                <div className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-primary to-accent opacity-80" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={profile.photo} alt="" className="relative h-full w-full rounded-full object-cover object-[50%_25%]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          skip()
        }}
        className={cn(
          "absolute bottom-6 right-6 rounded-md border border-border bg-background/70 px-3 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur transition-all hover:border-primary/60 hover:text-primary",
          zooming && "opacity-0",
        )}
      >
        Skip intro ↵
      </button>
    </div>
  )
}
