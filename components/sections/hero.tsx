"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import Image from "next/image"

const heroSlides = [
  {
    src: "/images/hero-slide-1.jpg",
    alt: "Outdoor LED screen installation at a live event venue",
    tag: "Live Events",
    headline: "We Power Dubai's\nBiggest Moments",
    sub: "Premium LED screens for events, retail, stadiums & more.",
  },
  {
    src: "/images/hero-slide-2.jpg",
    alt: "Beachfront festival LED display screen",
    tag: "Festivals & Culture",
    headline: "Outdoor Screens\nThat Command Attention",
    sub: "Weatherproof, ultra-bright displays built for the UAE climate.",
  },
  {
    src: "/images/hero-slide-3.jpg",
    alt: "Outdoor LED screen at a sports venue pub",
    tag: "Sports Venues",
    headline: "Immersive Screens\nFor Every Crowd",
    sub: "From sports bars to stadiums — we deliver unforgettable visuals.",
  },
]

const SLIDE_DURATION = 3000

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setProgress(0)
  }, [])

  // Progress bar ticker
  useEffect(() => {
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          return 100
        }
        return p + (100 / (SLIDE_DURATION / 50))
      })
    }, 50)
    return () => clearInterval(interval)
  }, [currentSlide])

  // Auto advance
  useEffect(() => {
    const timer = setTimeout(nextSlide, SLIDE_DURATION)
    return () => clearTimeout(timer)
  }, [currentSlide, nextSlide])

  const slide = heroSlides[currentSlide]

  return (
    <div
      ref={containerRef}
      id="home"
      className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black"
      aria-label="Lamps plus - LED Screen Supplier in Dubai"
      style={{ position: "relative" }}
    >
      {/* Background Slides */}
      <motion.div style={{ y }} className="absolute inset-0 h-[120%] w-full -top-[10%]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={currentSlide === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-layer cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/50 z-[1]" />
      </motion.div>

      {/* Main Content — Left Aligned for premium editorial look */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="absolute inset-0 z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-20"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Tag pill */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-[#E60000]" />
              <span className="font-sans text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#E60000]">
                {slide.tag}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans text-[clamp(2.8rem,6vw,5.5rem)] font-black leading-[1.05] tracking-tight text-white mb-6 whitespace-pre-line">
              {slide.headline}
            </h1>

            {/* Sub text */}
            <p className="font-sans text-[clamp(1rem,1.5vw,1.2rem)] font-light leading-relaxed text-white/75 mb-10 max-w-xl">
              {slide.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E60000] text-white font-sans text-[0.9rem] font-semibold rounded-full hover:bg-[#CC0000] transition-all duration-200 shadow-[0_0_30px_rgba(230,0,0,0.35)] hover:shadow-[0_0_40px_rgba(230,0,0,0.5)] hover:scale-[1.03]"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-sans text-[0.9rem] font-medium rounded-full hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                View Our Work
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Bottom Bar — Slide controls + company name */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-8 md:px-16 lg:px-24 pb-8 flex items-end justify-between">
        {/* Left: company tag + slide dots */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="relative h-[3px] rounded-full overflow-hidden transition-all duration-300"
                style={{ width: i === currentSlide ? "48px" : "24px", background: "rgba(255,255,255,0.25)" }}
              >
                {i === currentSlide && (
                  <motion.span
                    key={currentSlide}
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0, ease: "linear" }}
                    className="absolute left-0 top-0 h-full bg-[#E60000] rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>
          <p className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/40">
            Lamps plus · Dubai, UAE
          </p>
        </div>

        {/* Right: Scroll down cue */}
        <a
          href="#about"
          className="flex flex-col items-center gap-2 group"
          aria-label="Scroll down"
        >
          <span className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/40 group-hover:text-white/70 transition-colors">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-white/40 group-hover:text-white/70 animate-bounce transition-colors" />
        </a>
      </div>

      {/* Slide number indicator — top right */}
      <div className="absolute top-8 right-8 md:right-16 z-20 flex items-center gap-3">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentSlide}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            className="font-sans text-[2.5rem] font-black text-white/10 leading-none tabular-nums"
          >
            0{currentSlide + 1}
          </motion.span>
        </AnimatePresence>
        <span className="font-sans text-[0.75rem] text-white/25">/ 0{heroSlides.length}</span>
      </div>
    </div>
  )
}
