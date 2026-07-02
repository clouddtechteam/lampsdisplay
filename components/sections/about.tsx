"use client"

import { useReveal } from "@/hooks/use-reveal"
import Image from "next/image"
import { Zap, Package, Shield, Headphones, ArrowRight } from "lucide-react"

const achievements = [
  { icon: Zap, title: "In-House Team", subtitle: "Design to installation" },
  { icon: Package, title: "Large Stock", subtitle: "Ready for fast delivery" },
  { icon: Shield, title: "Quality Assured", subtitle: "Warranty on all products" },
  { icon: Headphones, title: "After-Sales AMC", subtitle: "Maintenance contracts" },
]

export function AboutSection() {
  const { ref, isVisible } = useReveal()

  return (
    <section 
      ref={ref}
      id="about" 
      className={`py-32 sm:py-48 bg-[var(--bg-primary)] reveal-section ${isVisible ? "visible" : ""}`}
      aria-label="About Lamps plus"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--section-pad-x)]">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 relative items-start">
          
          {/* Left: Sticky Typography Headings */}
          <div className="lg:w-[45%] lg:sticky lg:top-40 flex flex-col">
            <p className="font-sans text-[0.7rem] font-bold tracking-[0.25em] text-[#E60000] uppercase mb-8">
              Who We Are
            </p>
            <h2 className="font-serif text-[clamp(3rem,5vw,5rem)] font-light leading-[1.05] text-white tracking-tight">
              Dubai's Legacy of <span className="font-medium italic">Excellence.</span>
            </h2>
            <div className="mt-12 flex flex-col gap-2 bg-[#111111] border border-white/5 rounded-[16px] px-8 py-6 w-fit">
              <span className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#E60000]">
                Head Office
              </span>
              <span className="font-sans text-[1rem] font-medium text-white tracking-wide">
                Lamps plus
              </span>
              <span className="font-sans text-[0.8rem] text-white/50">
                Dubai, UAE
              </span>
            </div>
          </div>

          {/* Right: Scrolling Story & Imagery */}
          <div className="lg:w-[55%] flex flex-col pb-16">
            
            {/* The Stunning Generated Image */}
            <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-[#111] mb-16 shadow-2xl">
              <Image 
                src="/images/premium_about_image.png"
                alt="Architectural LED display in luxury Dubai lobby"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                width={1200}
                height={900}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
            </div>

            {/* Editorial Story */}
            <div className="flex flex-col gap-8 font-sans text-[1.1rem] leading-[1.8] text-white/70">
              <p>
                After establishing ourselves as a well-known industry leader in Dubai for over 20 years, Lamps plus continues to deliver world-class standards. From our roots serving government ministries, international hotel chains, and stadiums, we deliver premium visual experiences.
              </p>
              <p>
                We began by projecting light onto building facades, bridges, and hotel exteriors — turning architecture into landmarks across the UAE. That obsession with quality and precision carries into everything we do today: indoor LED screens that command attention, outdoor displays built for the climate, and custom installations that no one else can deliver.
              </p>
              <p>
                Unlike resellers, we maintain full in-house capability. Our team designs, fabricates, installs, and services every project from start to finish. No subcontractors. No finger-pointing. Just accountable, professional service — backed by our direct supply chain that keeps your project on schedule.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 border-t border-white/10">
              {achievements.map((item) => (
                <div key={item.title} className="flex gap-5 items-start group">
                  <div className="p-3 rounded-full bg-white/5 border border-white/5 transition-colors group-hover:bg-[#E60000]/10 group-hover:border-[#E60000]/30 mt-1">
                    <item.icon className="w-5 h-5 text-white/50 group-hover:text-[#E60000] transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-sans text-[1.05rem] font-medium text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[0.85rem] text-white/50 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 font-sans text-[0.8rem] font-bold tracking-[0.2em] uppercase text-white hover:text-[#E60000] transition-colors"
              >
                <span className="w-8 h-[1px] bg-current" />
                Discuss Your Project
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
