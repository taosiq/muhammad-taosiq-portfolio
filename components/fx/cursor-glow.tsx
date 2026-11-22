"use client"

import { useEffect, useRef } from "react"
import { prefersReducedMotion } from "@/lib/motion"

// A targeting ring that trails the mouse and locks on to links/buttons.
// Desktop (fine pointer) only; the normal cursor stays visible.
export function CursorGlow() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || prefersReducedMotion()) return
    const ring = ringRef.current
    const dot = dotRef.current
    if (!ring || !dot) return

    let x = -100
    let y = -100
    let rx = -100
    let ry = -100
    let frame = 0
    let active = false

    let scale = 1

    const loop = () => {
      rx += (x - rx) * 0.18
      ry += (y - ry) * 0.18
      scale += ((active ? 1.8 : 1) - scale) * 0.15
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${scale})`
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      frame = requestAnimationFrame(loop)
    }

    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      ring.style.opacity = "1"
      dot.style.opacity = "1"
      const target = e.target as HTMLElement | null
      active = !!target?.closest("a, button, [data-cursor]")
      ring.dataset.active = active ? "1" : ""
    }
    const onLeave = () => {
      ring.style.opacity = "0"
      dot.style.opacity = "0"
    }

    frame = requestAnimationFrame(loop)
    window.addEventListener("pointermove", onMove, { passive: true })
    document.addEventListener("pointerleave", onLeave)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("pointermove", onMove)
      document.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[70] hidden md:block">
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-8 w-8 rounded-full border border-primary/60 opacity-0 transition-[opacity,border-color,background-color] duration-300 data-[active=1]:border-primary data-[active=1]:bg-primary/10"
      />
      <div ref={dotRef} className="absolute left-0 top-0 h-1 w-1 rounded-full bg-primary opacity-0 shadow-[0_0_8px_var(--primary)]" />
    </div>
  )
}
