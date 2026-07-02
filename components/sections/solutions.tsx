"use client"

import { useReveal } from "@/hooks/use-reveal"
import Image from "next/image"
import { 
  ShoppingBag, Building2, Hotel, Heart, 
  GraduationCap, Landmark, PartyPopper, Trophy,
  ArrowRight, Presentation, Monitor
} from "lucide-react"

const industries = [
  {
    id: "retail",
    icon: ShoppingBag,
    name: "Retail & Malls",
    projects: 14,
    description: "High-footfall retail environments demand displays that stop shoppers mid-step. From entrance fascias to in-aisle promotion screens.",
    image: "/images/portfolio_mall_1774782384373.webp",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: "corporate",
    icon: Building2,
    name: "Corporate",
    projects: 8,
    description: "Lobby video walls and boardroom displays communicating authority and professionalism.",
    image: "/images/portfolio-corporate.jpg",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "hospitality",
    icon: Hotel,
    name: "Hospitality",
    projects: 9,
    description: "Enhancing guest experience without disrupting the ambiance of luxury hotels.",
    image: "/images/portfolio_hotel_1774782425884.webp",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "healthcare",
    icon: Heart,
    name: "Healthcare",
    projects: 4,
    description: "Patient information systems and reliable wayfinding screens performing 24/7.",
    image: "/images/proj_zulekha.webp",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "education",
    icon: GraduationCap,
    name: "Education",
    projects: 3,
    description: "Interactive displays enhancing modern learning environments and auditoriums.",
    image: "/images/proj_gems.webp",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "government",
    icon: Landmark,
    name: "Government",
    projects: 7,
    description: "Prestigious installations demanding the highest standard of reliability and compliance.",
    image: "/images/portfolio_gov_1774782461132.webp",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: "events",
    icon: PartyPopper,
    name: "Events",
    projects: 6,
    description: "Modular rental screens for events of any scale, from brand activations to concerts.",
    image: "/images/portfolio-concert.jpg",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "sports",
    icon: Trophy,
    name: "Sports",
    projects: 2,
    description: "Stadium installations requiring maximum brightness and structural integrity.",
    image: "/images/portfolio_stadium_1774782441665.webp",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "conference",
    icon: Presentation,
    name: "Conference Room",
    projects: 5,
    description: "Redefine the meeting scene with diverse display solutions and efficient interaction tools, improving office experience and work efficiency.",
    image: "/images/portfolio-corporate.jpg",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: "monitoring",
    icon: Monitor,
    name: "Monitoring Center",
    projects: 3,
    description: "Integrates display, control, scheduling, and modular room systems for a new generation of reliable monitoring center solutions.",
    image: "/images/portfolio_gov_1774782461132.webp",
    gridClass: "md:col-span-2 md:row-span-1",
  },
]

export function SolutionsSection() {
  const { ref, isVisible } = useReveal()

  return (
    <section 
      ref={ref}
      id="solutions" 
      className={`py-24 sm:py-32 bg-[var(--bg-primary)] reveal-section ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--section-pad-x)]">
        
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-normal text-white mb-6">
            Where we work.
          </h2>
          <p className="font-sans text-lg text-white/60">
            We have delivered robust LED solutions across 8 major sectors in the UAE. From single-screen retail installations to sprawling government command centers.
          </p>
        </div>

        {/* Organic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 auto-rows-[280px]">
          {industries.map((industry) => (
            <div 
              key={industry.id}
              className={`group flex flex-col ${industry.gridClass}`}
            >
              <div className="relative flex-grow overflow-hidden bg-white/5 w-full h-full">
                <Image 
                  src={industry.image}
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-[1.03]"
                  width={800} height={600}
                  loading="lazy"
                />
              </div>
              
              <div className="pt-4 flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-xl font-normal text-white">{industry.name}</h3>
                  <p className="font-sans text-sm text-white/50 mt-1 max-w-[90%]">
                    {industry.description}
                  </p>
                </div>
                <div className="shrink-0 pt-1">
                  <industry.icon className="w-5 h-5 text-white/30" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
