"use client"

import { useEffect, useRef, useState } from "react"
import { prefersReducedMotion } from "@/lib/motion"
import { cn } from "@/lib/utils"

const GLYPHS = "!<>-_\\/[]{}=+*^?#01アイウエオ$%&"

type Props = {
  text: string
  className?: string
  /** ms before decoding starts once triggered */
  delay?: number
  /** total decode time in ms */
  duration?: number
  /** start when scrolled into view (default) or immediately on mount */
  trigger?: "view" | "mount"
}

// "Decrypts" text: random glyphs resolve left-to-right into the real string.
// The real text is rendered on the server, so search engines and screen
// readers always get it.
export function ScrambleText({ text, className, delay = 0, duration = 900, trigger = "view" }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [output, setOutput] = useState(text)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    let frame = 0
    let timer: ReturnType<typeof setTimeout>
    let observer: IntersectionObserver | undefined

    const run = () => {
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration)
        const revealed = Math.floor(progress * text.length)
        let next = ""
        for (let i = 0; i < text.length; i++) {
          const ch = text[i]
          if (ch === " " || i < revealed) next += ch
          else next += GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        }
        setOutput(next)
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }

    const begin = () => {
      timer = setTimeout(run, delay)
    }

    if (trigger === "mount") {
      // Hide the real text until decoding starts, so it doesn't flash.
      setOutput(text.replace(/\S/g, " "))
      begin()
    } else {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            observer?.disconnect()
            begin()
          }
        },
        { threshold: 0.6 },
      )
      observer.observe(el)
    }

    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(timer)
      observer?.disconnect()
    }
  }, [text, delay, duration, trigger])

  return (
    <span ref={ref}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className={cn("whitespace-pre-wrap", className)}>
        {output}
      </span>
    </span>
  )
}
