"use client"

import { useState } from "react"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import Image from "next/image"
import { blogPosts } from "@/lib/blog-posts"
import { motion, AnimatePresence } from "framer-motion"

export function BlogSection() {
  const { ref, isVisible } = useReveal()
  const [currentIndex, setCurrentIndex] = useState(0)

  const posts = blogPosts.slice(0, 6)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1))
  }

  return (
    <section 
      ref={ref}
      id="blog" 
      className={`py-32 sm:py-40 bg-[#050505] reveal-section ${isVisible ? "visible" : ""} overflow-hidden`}
      aria-label="Insights & Buying Guides"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--section-pad-x)] relative z-10">
        
        {/* Header — no controls here */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="font-sans text-[0.65rem] font-bold tracking-[0.25em] text-[#E60000] uppercase mb-4">
            KNOWLEDGE HUB
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-medium text-white leading-[1.05] tracking-tight">
            Insights & <span className="text-white/40 italic">Perspectives.</span>
          </h2>
        </motion.div>

        {/* Slider */}
        <div className="relative w-full">
          {/* Single Item Slider */}
          <div className="w-full h-[600px] lg:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -50, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-center"
              >
                {/* Left: Massive Image */}
                <div className="w-full lg:w-[55%] h-[300px] lg:h-full relative rounded-[24px] overflow-hidden bg-[#111] shadow-2xl group">
                  <a href={`/blog/${posts[currentIndex].slug}`} aria-label={`Read article: ${posts[currentIndex].title}`} tabIndex={-1}>
                    <Image 
                      src={posts[currentIndex].image} 
                      alt={posts[currentIndex].imageAlt || posts[currentIndex].title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="eager"
                      width={1000}
                      height={750}
                      priority
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute top-6 left-6">
                      <span className="inline-block font-sans text-[0.7rem] font-bold tracking-widest uppercase px-4 py-2 bg-black/60 backdrop-blur-md text-white rounded-full">
                        {posts[currentIndex].category}
                      </span>
                    </div>
                  </a>
                </div>
                
                {/* Right: Typography & Content */}
                <div className="w-full lg:w-[45%] flex flex-col">
                  <div className="flex items-center gap-4 text-white/40 font-sans text-[0.8rem] tracking-wider uppercase mb-6">
                    <span>{posts[currentIndex].date}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{posts[currentIndex].readTime}</span>
                  </div>
                  
                  <h3 className="font-serif text-[clamp(2rem,3vw,3rem)] font-medium text-white leading-[1.1] mb-6 hover:text-[#E60000] transition-colors">
                    <a href={`/blog/${posts[currentIndex].slug}`}>{posts[currentIndex].title}</a>
                  </h3>
                  
                  <p className="font-sans text-[1.1rem] text-white/50 leading-[1.7] line-clamp-4 mb-10 max-w-lg">
                    {posts[currentIndex].excerpt}
                  </p>
                  
                  <div className="mt-auto">
                    <a 
                      href={`/blog/${posts[currentIndex].slug}`}
                      className="inline-flex items-center gap-3 font-sans text-[0.85rem] font-bold tracking-[0.2em] uppercase text-white hover:text-[#E60000] transition-colors group"
                    >
                      <span className="w-10 h-[1px] bg-current" />
                      Read Full Article 
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Controls: Prev · Dots · Next */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={handlePrev}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-all duration-300 font-sans text-sm font-medium"
            aria-label="Previous article"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
            Prev
          </button>

          <div className="flex items-center gap-2.5">
            {posts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-500 rounded-full ${
                  currentIndex === idx 
                    ? "w-10 h-1.5 bg-[#E60000]" 
                    : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E60000] text-white hover:bg-white hover:text-black transition-all duration-300 font-sans text-sm font-semibold"
            aria-label="Next article"
          >
            Next
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

      </div>
    </section>
  )
}
