"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)
  
  // Hardcoded to true to bypass any Next.js caching or intersection observer bugs.
  // The components will render with the "visible" class immediately.
  return { ref, isVisible: true }
}

