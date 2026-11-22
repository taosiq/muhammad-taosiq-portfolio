// Shared helpers for the animations.

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// Runs `cb` once the opening intro has finished (or right away if it was
// skipped / already seen this session). Returns a cleanup function.
export function whenIntroDone(cb: () => void) {
  let called = false
  const run = () => {
    if (called) return
    called = true
    cb()
  }
  const introDone =
    document.documentElement.dataset.booted || (window as unknown as { __introDone?: boolean }).__introDone
  if (introDone) {
    const t = setTimeout(run, 150)
    return () => clearTimeout(t)
  }
  window.addEventListener("intro:done", run, { once: true })
  const failsafe = setTimeout(run, 8000)
  return () => {
    window.removeEventListener("intro:done", run)
    clearTimeout(failsafe)
  }
}
