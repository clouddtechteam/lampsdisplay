"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const featuredProjects = [
  { name: "Orimi Bolivard Nama", category: "Commercial & Residential", location: "Oman", image: "/images/proj_orimi_bolivard.png" },
  { name: "Sobha Construction", category: "High-End Construction", location: "UAE", image: "/images/proj_sobha_construction.png" },
  { name: "EGA", category: "Industrial", location: "UAE", image: "/images/proj_ega.png" },
  { name: "Project Menansco", category: "Commercial", location: "UAE", image: "/images/proj_menansco.png" },
]

export function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])
  const isHovering = useRef(false)
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Scroll-based auto-activation via IntersectionObserver — debounced to avoid rapid flipping
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    rowRefs.current.forEach((el, idx) => {
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isHovering.current) {
            // Clear any pending update and wait 150ms before committing
            if (debounceTimer.current) clearTimeout(debounceTimer.current)
            debounceTimer.current = setTimeout(() => {
              setActiveIndex(idx)
            }, 150)
          }
        },
        { threshold: 0.6 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((o) => o.disconnect())
      if (debounceTimer.current) clearTimeout(debounceTimer.current)
    }
  }, [])

  const handleMouseEnter = (idx: number) => {
    isHovering.current = true
    setActiveIndex(idx)
  }

  const handleMouseLeave = () => {
    isHovering.current = false
  }

  // Clicking the left image panel cycles to next project
  const handleImageClick = () => {
    setActiveIndex((prev) => (prev + 1) % featuredProjects.length)
  }

  const activeProject = featuredProjects[activeIndex]

  return (
    <section 
      id="projects" 
      className="py-24 sm:py-32 bg-[var(--bg-primary)]"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--section-pad-x)]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-12 border-b border-white/10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[#E60000]" />
              <p className="font-sans text-[0.75rem] font-bold tracking-[0.2em] text-[#E60000] uppercase">Our Work</p>
            </div>
            <h2 className="font-serif text-[clamp(3rem,5vw,4.5rem)] font-normal text-white leading-tight">
              Selected Projects
            </h2>
            <p className="mt-6 font-sans text-xl text-white/60 font-light max-w-xl leading-relaxed">
              A curated look at some of our recent installations across the UAE. Setting the standard for visual excellence.
            </p>
          </div>
          <a
            href="#contact"
            className="group flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full font-sans text-sm font-semibold text-white hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            View Full Portfolio <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Desktop Interactive Layout */}
        <div className="hidden lg:flex gap-20 relative items-start">
          
          {/* Left: Sticky Image — clicking cycles to next */}
          <div 
            className="w-1/2 sticky top-32 h-[75vh] overflow-hidden bg-white/5 rounded-[24px] cursor-pointer group/img shadow-[0_0_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
            onClick={handleImageClick}
            title="Click to see next project"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.name}
                initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0"
              >
                <Image 
                  src={activeProject.image}
                  alt={activeProject.name}
                  className="w-full h-full object-cover"
                  width={1000} height={1200}
                  priority
                />
                
                {/* Refined overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/40 transition-colors duration-500" />
                
                {/* View Project button on hover */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="opacity-0 group-hover/img:opacity-100 scale-90 group-hover/img:scale-100 transition-all duration-500 flex items-center gap-3 bg-[#E60000] text-white px-8 py-4 rounded-full font-sans text-sm font-bold tracking-wide shadow-2xl">
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom content info overlaid on image */}
                <div className="absolute bottom-0 left-0 right-0 p-10 translate-y-4 group-hover/img:translate-y-0 opacity-100 transition-all duration-500">
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full mb-4 border border-white/20">
                     <span className="w-2 h-2 rounded-full bg-[#E60000]" />
                     <span className="font-sans text-xs font-semibold text-white uppercase tracking-wider">{activeProject.category}</span>
                   </div>
                   <h3 className="font-serif text-4xl text-white mb-2">{activeProject.name}</h3>
                   <p className="font-sans text-white/70 text-sm flex items-center gap-2">
                     {activeProject.location} 
                   </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Project counter */}
            <div className="absolute top-8 right-8 z-10 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <span className="font-sans text-white text-sm font-medium">{String(activeIndex + 1).padStart(2, '0')}</span>
              <span className="font-sans text-white/40 text-sm">/ {String(featuredProjects.length).padStart(2, '0')}</span>
            </div>
          </div>

          {/* Right: Scrolling Project List */}
          <div 
            className="w-1/2 flex flex-col pb-32"
            onMouseLeave={handleMouseLeave}
          >
            {featuredProjects.map((project, idx) => {
              const isActive = activeIndex === idx
              return (
                <div 
                  key={project.name}
                  ref={(el) => { rowRefs.current[idx] = el }}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  className={`
                    relative py-8 lg:py-10 border-b border-white/10 cursor-pointer group transition-all duration-500 overflow-hidden
                    ${idx === 0 ? 'border-t border-white/10' : ''}
                  `}
                >
                  {/* Background highlight for active state */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-white/5 to-transparent transition-opacity duration-500 -z-10 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                  
                  {/* Active indicator line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#E60000] transition-transform duration-500 origin-top ${isActive ? 'scale-y-100' : 'scale-y-0'}`} />

                  <div className={`flex justify-between items-center px-6 lg:px-10 transition-transform duration-500 ${isActive ? 'translate-x-4' : 'group-hover:translate-x-2'}`}>
                    <div className="flex items-center gap-8">
                      {/* Numbering */}
                      <span className={`font-sans text-sm font-bold tracking-widest transition-colors duration-500 ${isActive ? 'text-[#E60000]' : 'text-white/20'}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className={`font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-normal transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/40'}`}>
                          {project.name}
                        </h3>
                        <div className={`mt-2 flex gap-4 font-sans text-sm tracking-widest transition-all duration-500 ${isActive ? 'text-white/60 opacity-100' : 'text-white/30 opacity-0 h-0 overflow-hidden'}`}>
                          <span className="uppercase">{project.category}</span>
                          <span className="opacity-50">—</span>
                          <span className="uppercase">{project.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 ${isActive ? 'border-white/20 bg-white/5 text-white scale-100' : 'border-transparent text-white/0 scale-75'}`}>
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col gap-12 mt-12">
          {featuredProjects.map((project, idx) => (
            <div key={project.name} className="group flex flex-col gap-5">
              <div className="relative aspect-[4/3] bg-white/5 rounded-[20px] overflow-hidden shadow-xl ring-1 ring-white/10">
                <Image 
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  width={600} height={450}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <span className="font-sans text-white/80 text-xs tracking-widest">{String(idx + 1).padStart(2, '0')}</span>
                </div>
              </div>
              <div className="px-2">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-sans text-[0.65rem] font-bold text-[#E60000] uppercase tracking-widest">{project.category}</span>
                  <span className="w-4 h-[1px] bg-white/20" />
                  <span className="font-sans text-[0.65rem] text-white/50 uppercase tracking-widest">{project.location}</span>
                </div>
                <h3 className="font-serif text-3xl font-normal text-white mb-2 leading-tight">{project.name}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
