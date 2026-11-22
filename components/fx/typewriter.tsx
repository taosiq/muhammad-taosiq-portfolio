"use client"

import { useEffect, useState } from "react"
import { prefersReducedMotion } from "@/lib/motion"

// Types a word, pauses, deletes it, moves to the next one.
export function Typewriter({ words, startDelay = 0 }: { words: string[]; startDelay?: number }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(words[0])
  const [phase, setPhase] = useState<"idle" | "deleting" | "typing" | "holding">("idle")

  useEffect(() => {
    if (prefersReducedMotion()) return
    const t = setTimeout(() => setPhase("holding"), startDelay)
    return () => clearTimeout(t)
  }, [startDelay])

  useEffect(() => {
    if (phase === "idle") return
    const word = words[index]
    let t: ReturnType<typeof setTimeout>

    if (phase === "holding") {
      t = setTimeout(() => setPhase("deleting"), 2200)
    } else if (phase === "deleting") {
      if (text.length === 0) {
        setIndex((i) => (i + 1) % words.length)
        setPhase("typing")
      } else {
        t = setTimeout(() => setText(text.slice(0, -1)), 35)
      }
    } else if (phase === "typing") {
      if (text === word) {
        setPhase("holding")
      } else {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), 70)
      }
    }
    return () => clearTimeout(t)
  }, [phase, text, index, words])

  return (
    <span>
      {text}
      <span className="ml-0.5 inline-block w-[0.55em] animate-blink text-primary">▌</span>
    </span>
  )
}
