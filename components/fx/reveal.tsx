"use client"

import { createElement, type CSSProperties, type ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  as?: "div" | "li" | "section" | "article"
  style?: CSSProperties
}

// Fades, un-blurs and lifts its children into place when scrolled into view.
export function Reveal({ children, className, delay = 0, as = "div", style }: Props) {
  const { ref, isVisible } = useScrollAnimation()
  return createElement(
    as,
    {
      ref,
      className: cn("reveal", isVisible && "is-visible", className),
      style: { transitionDelay: `${delay}ms`, ...style },
    },
    children,
  )
}
