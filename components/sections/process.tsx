"use client"

import { useEffect, useRef, useState } from "react"
import { useReveal } from "@/hooks/use-reveal"

const steps = [
  {
    number: 1,
    title: "Enquiry",
    description: "Contact us by phone, WhatsApp, or web form. Tell us your project type, location, and rough display dimensions.",
  },
  {
    number: 2,
    title: "Site Survey",
    description: "Our technical team visits your site (or reviews your architectural drawings) to assess mounting, power, and environmental conditions.",
  },
  {
    number: 3,
    title: "Quotation",
    description: "We prepare a detailed proposal with product specifications, pixel pitch recommendation, structural notes, and transparent pricing — typically within 48 hours.",
  },
  {
    number: 4,
    title: "Installation",
    description: "Our certified installation team manages the complete setup: mounting structure, cable routing, screen assembly, controller configuration.",
  },
  {
    number: 5,
    title: "Support",
    description: "Post-installation: full handover training, warranty documentation, and ongoing AMC support options.",
  },
]

export function ProcessSection() {
  const { ref, isVisible } = useReveal()

  return (
    <section 
      ref={ref}
      className={`section-padding bg-[var(--bg-primary)] reveal-section ${isVisible ? "visible" : ""}`}
      aria-label="How we work"
    >
      <div className="max-w-[var(--container-max)] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-3">HOW IT WORKS</p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.15] text-[var(--text-primary)]">
            From Enquiry to Installation in 5 Steps
          </h2>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-6 left-[10%] right-[10%] h-[1px] bg-[var(--border-medium)]">
            <div 
              className={`absolute top-0 left-0 h-full bg-[var(--accent)] timeline-line ${isVisible ? "visible" : ""}`}
            />
          </div>
          
          {/* Steps */}
          <div className="relative grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="flex flex-col items-center text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Circle */}
                <div className="w-12 h-12 rounded-full border-[1.5px] border-[var(--border-medium)] bg-white flex items-center justify-center mb-4 relative z-10">
                  <span className="font-sans text-[1.1rem] font-semibold text-[var(--accent)]">
                    {step.number}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="font-sans text-[0.9rem] font-semibold text-[var(--text-primary)] mb-2">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="font-sans text-[0.82rem] leading-[1.6] text-[var(--text-secondary)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile (vertical accordion style) */}
        <div className="lg:hidden flex flex-col gap-6">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-[1.5px] border-[var(--border-medium)] bg-white flex items-center justify-center shrink-0">
                  <span className="font-sans text-[1rem] font-semibold text-[var(--accent)]">
                    {step.number}
                  </span>
                </div>
                {step.number < steps.length && (
                  <div className="w-[1px] flex-1 bg-[var(--border-medium)] mt-2" />
                )}
              </div>
              <div className="pb-6">
                <h3 className="font-sans text-[0.9rem] font-semibold text-[var(--text-primary)] mb-1">
                  {step.title}
                </h3>
                <p className="font-sans text-[0.82rem] leading-[1.6] text-[var(--text-secondary)]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
