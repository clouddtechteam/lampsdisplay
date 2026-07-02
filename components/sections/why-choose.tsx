"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useEffect, useRef, useState } from "react"
import { Calendar, Users, Landmark, Package, Wrench, Award } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "20+ Years Dubai Experience",
    description: "Aztech has been operating in Dubai since before most of our competitors existed. That means deep supplier relationships, world-class product access, and a reputation built on results — not marketing. Now we bring that legacy to India.",
  },
  {
    icon: Users,
    title: "In-House Everything",
    description: "We do not subcontract. Our in-house team handles design, fabrication, installation, cabling, configuration, and after-sales — giving you a single accountable partner for the entire project lifecycle.",
  },
  {
    icon: Landmark,
    title: "Government-Grade Track Record",
    description: "Our portfolio includes ADNOC HQ, RTA Dubai, Parliament Palace Abu Dhabi, and Ajman Municipality. When institutions demand the highest reliability, they call Aztech.",
  },
  {
    icon: Package,
    title: "Direct Dubai Supply Chain",
    description: "We maintain a direct supply chain from Dubai with substantial inventory across all major product lines. That means your project starts on schedule — not after a lengthy wait for an import shipment.",
  },
  {
    icon: Wrench,
    title: "After-Sales & AMC",
    description: "Installation day is not the end of our relationship. We offer Annual Maintenance Contracts (AMC), emergency response, remote monitoring, spare parts supply, and firmware updates.",
  },
  {
    icon: Award,
    title: "Trusted by 500+ Clients",
    description: "From hypermarkets to hospitals, from schools to stadiums — 500+ clients across the UAE and India have trusted Aztech. Our growth has been entirely referral and repeat — the most honest measure of quality.",
  },
]

export function WhyChooseSection() {
  const { ref, isVisible } = useReveal()

  return (
    <section 
      ref={ref}
      className={`section-padding bg-[var(--bg-tertiary)] reveal-section ${isVisible ? "visible" : ""}`}
      aria-label="Why choose Aztech"
    >
      <div className="max-w-[var(--container-max)] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="eyebrow !text-white/80 mb-3 tracking-[0.2em]">THE AZTECH DIFFERENCE</p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.15] text-white mb-4">
            Why Serious Buyers Choose Aztech
          </h2>
          <p className="font-sans text-[1rem] leading-[1.75] text-white/70 max-w-[600px] mx-auto">
            With the growing LED market in India, here is what makes Aztech the choice for businesses who cannot afford to get it wrong.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-[var(--radius-md)] border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 group"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 bg-white/10 rounded-[8px] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              
              <h3 className="font-sans text-[1.05rem] font-semibold text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="font-sans text-[0.9rem] leading-[1.7] text-white/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
