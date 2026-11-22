"use client"

import { useRef, type CSSProperties, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
  className?: string
  style?: CSSProperties
  /** subtle 3D tilt toward the cursor */
  tilt?: boolean
  corners?: boolean
}

// Glass card with a cursor-following spotlight, HUD corners and optional tilt.
export function HoloCard({ children, className, style, tilt = false, corners = true }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el || e.pointerType !== "mouse") return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty("--mx", `${x}px`)
    el.style.setProperty("--my", `${y}px`)
    if (tilt) {
      const rx = (y / rect.height - 0.5) * -5
      const ry = (x / rect.width - 0.5) * 5
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`
    }
  }

  const onLeave = () => {
    if (tilt && ref.current) ref.current.style.transform = ""
  }

  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} className={cn("holo-card group", className)} style={style}>
      {corners && <span className="hud-corners" />}
      {children}
    </div>
  )
}
