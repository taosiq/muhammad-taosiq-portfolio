"use client"

import { useEffect, useRef } from "react"

// Thin glowing bar at the very top that fills as you scroll.
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false
    const update = () => {
      ticking = false
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-0.5">
      <div
        ref={barRef}
        className="h-full origin-left bg-gradient-to-r from-primary via-sky-400 to-accent shadow-[0_0_12px_var(--primary)]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  )
}
