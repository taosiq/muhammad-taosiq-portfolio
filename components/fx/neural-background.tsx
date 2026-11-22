"use client"

import { useEffect, useRef } from "react"
import { prefersReducedMotion } from "@/lib/motion"

// A full-screen "neural network": drifting nodes that link up when close,
// and reach toward the mouse. Drawn on a canvas so it stays cheap.

type Node = { x: number; y: number; vx: number; vy: number; r: number }

const LINK_DIST = 140
const MOUSE_DIST = 200

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const reduced = prefersReducedMotion()
    let width = 0
    let height = 0
    let nodes: Node[] = []
    let frame = 0
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.round(Math.min(110, Math.max(35, (width * height) / 15000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.6,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const n of nodes) {
        if (!reduced) {
          // Gentle pull toward the cursor
          const dx = mouse.x - n.x
          const dy = mouse.y - n.y
          const d = Math.hypot(dx, dy)
          if (d < MOUSE_DIST && d > 1) {
            n.vx += (dx / d) * 0.012
            n.vy += (dy / d) * 0.012
          }
          n.vx *= 0.995
          n.vy *= 0.995
          const speed = Math.hypot(n.vx, n.vy)
          if (speed < 0.08) {
            n.vx += (Math.random() - 0.5) * 0.05
            n.vy += (Math.random() - 0.5) * 0.05
          }
          n.x += n.vx
          n.y += n.vy
          if (n.x < -20) n.x = width + 20
          if (n.x > width + 20) n.x = -20
          if (n.y < -20) n.y = height + 20
          if (n.y > height + 20) n.y = -20
        }
      }

      // Links between nodes
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < LINK_DIST * LINK_DIST) {
            const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.22
            ctx.strokeStyle = `rgba(56, 214, 245, ${alpha})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        // Links to the cursor
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y)
        if (md < MOUSE_DIST) {
          ctx.strokeStyle = `rgba(110, 140, 255, ${(1 - md / MOUSE_DIST) * 0.45})`
          ctx.lineWidth = 0.8
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }

      // Nodes
      for (const n of nodes) {
        ctx.fillStyle = "rgba(120, 230, 255, 0.75)"
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }

      if (!reduced) frame = requestAnimationFrame(draw)
    }

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }
    const onVisibility = () => {
      cancelAnimationFrame(frame)
      if (!document.hidden && !reduced) frame = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)
    window.addEventListener("pointermove", onMove, { passive: true })
    document.addEventListener("pointerleave", onLeave)
    document.addEventListener("visibilitychange", onVisibility)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", onMove)
      document.removeEventListener("pointerleave", onLeave)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="cyber-grid absolute inset-0" />
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 -right-40 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[120px]" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
