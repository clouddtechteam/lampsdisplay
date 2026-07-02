"use client"

import { useEffect, useRef, useState } from "react"
import { useReveal } from "@/hooks/use-reveal"

const stats = [
  { number: 20, suffix: "+", label: "Years of Industry Experience" },
  { number: 500, suffix: "+", label: "Satisfied Clients" },
  { number: 1000, suffix: "+", label: "Projects Delivered" },
  { number: 18, suffix: "+", label: "Product Categories" },
]

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(end)

  useEffect(() => {
    if (!start) return

    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    // Reset to 0 before animating
    setCount(0)
    requestAnimationFrame(animate)
  }, [end, duration, start])

  return count
}

function StatItem({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const count = useCountUp(stat.number, 2000, isVisible)
  
  const formattedCount = stat.number >= 1000 
    ? count.toLocaleString() 
    : count.toString()

  return (
    <div className="flex flex-col items-center text-center py-4 md:py-0">
      <div className="font-sans text-[clamp(3.5rem,5vw,5rem)] font-semibold text-[#5B9FD4] leading-none">
        {formattedCount}
        <span className="text-[0.75em]">{stat.suffix}</span>
      </div>
      <div className="font-sans text-[0.8rem] tracking-[0.15em] uppercase text-[rgba(255,255,255,0.5)] mt-2">
        {stat.label}
      </div>
    </div>
  )
}

export function StatsStrip() {
  const { ref, isVisible } = useReveal()

  return (
    <section 
      ref={ref}
      className="bg-[var(--bg-dark)] py-14 px-[var(--section-pad-x)]"
      aria-label="Company statistics"
    >
      <div className="max-w-[var(--container-max)] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className={`relative ${
                index < stats.length - 1 
                  ? "md:border-r md:border-[rgba(255,255,255,0.1)]" 
                  : ""
              }`}
            >
              <StatItem stat={stat} isVisible={isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
