// Shared helpers for the animations.

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// How long the hero should wait so its intro starts as the boot screen fades.
export function introDelay() {
  if (typeof document === "undefined") return 0
  return document.documentElement.dataset.booted ? 150 : 1750
}
