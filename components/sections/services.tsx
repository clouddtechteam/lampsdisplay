"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"
import Image from "next/image"

const services = [
  {
    id: "supply",
    tag: "01 — Supply",
    title: "Premium LED Displays",
    description: "We supply the full spectrum of LED screen types — indoor, outdoor, specialty, rental and niche displays. All products come with manufacturer warranty, locally-stocked for fast dispatch across UAE.",
    specs: ["P1.2 to P10 pixel pitch", "1000–8000 nits brightness", "UAE-stocked, fast dispatch"],
    image: "/images/service_components_1774782522853.webp",
    colSpan: "lg:col-span-8",
    layout: "horizontal"
  },
  {
    id: "fabrication",
    tag: "02 — Fabrication",
    title: "Custom Design & Build",
    description: "Our in-house design team creates LED solutions for any shape, size, and architectural constraint.",
    specs: ["Curved & spherical", "Structural drawings", "In-house fabrication"],
    image: "/images/service_software_1774782562265.webp",
    colSpan: "lg:col-span-4",
    layout: "vertical"
  },
  {
    id: "installation",
    tag: "03 — Installation",
    title: "Professional Integration",
    description: "Certified installation teams managing site surveys, structural mounts, and final commissioning.",
    specs: ["Site surveys included", "Certified engineers", "Full commissioning"],
    image: "/images/service_install_1774782503987.webp",
    colSpan: "lg:col-span-4",
    layout: "vertical"
  },
  {
    id: "facade",
    tag: "04 — Architectural",
    title: "Facade LED Lighting",
    description: "Transforming the faces of buildings, bridges, and hotels with programmable LED profiles.",
    specs: ["DALI & DMX control", "IP67/IP68 rated", "Custom color temp"],
    image: "/images/service_facade_1774782541436.webp",
    colSpan: "lg:col-span-4",
    layout: "vertical"
  },
  {
    id: "maintenance",
    tag: "05 — Support",
    title: "Ongoing Maintenance",
    description: "Protecting your investment with Annual Maintenance Contracts covering emergency callouts and repairs.",
    specs: ["AMC available", "24hr response SLA", "UAE spare parts stock"],
    image: "/images/service_maintenance_1774782580512.webp",
    colSpan: "lg:col-span-4",
    layout: "vertical"
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] as const }
  }
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" })

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 lg:py-32 bg-[var(--bg-primary)] relative overflow-hidden"
      aria-label="Our services"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--section-pad-x)] relative z-10 w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-24 max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-[var(--accent)]" />
            <p className="font-sans text-[0.75rem] font-bold tracking-[0.2em] text-[var(--accent)] uppercase">
              Our Expertise
            </p>
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,4vw,4.5rem)] font-normal text-[var(--text-primary)] leading-[1.1] tracking-tight">
            Comprehensive <br />
            <span className="text-[var(--text-muted)] italic">LED Solutions.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`
                group bg-[var(--bg-dark)] border border-[var(--border-light)] rounded-[var(--radius-lg)] overflow-hidden flex shadow-sm hover:shadow-[var(--shadow-hover)] transition-shadow duration-500
                ${service.colSpan}
                ${service.layout === 'horizontal' ? 'flex-col md:flex-row' : 'flex-col'}
              `}
            >
              {/* Content Side */}
              <div className={`
                p-8 lg:p-12 flex flex-col justify-between
                ${service.layout === 'horizontal' ? 'md:w-1/2 order-2 md:order-1' : 'flex-1 order-2'}
              `}>
                <div>
                  <span className="inline-block font-sans text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[var(--accent)] mb-5">
                    {service.tag}
                  </span>

                  <h3 className="font-serif text-[clamp(1.5rem,2vw,2rem)] font-normal text-[var(--text-primary)] leading-tight mb-4">
                    {service.title}
                  </h3>

                  <p className="font-sans text-[0.95rem] text-[var(--text-body)] leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-3">
                  {service.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[var(--accent-light)] flex items-center justify-center shrink-0 mt-[2px]">
                        <Check className="w-3 h-3 text-[var(--accent)]" />
                      </div>
                      <span className="font-sans text-[0.85rem] text-[var(--text-secondary)]">
                        {spec}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Side */}
              <div className={`
                relative overflow-hidden shrink-0
                ${service.layout === 'horizontal' ? 'md:w-1/2 min-h-[320px] order-1 md:order-2' : 'h-[260px] w-full order-1'}
              `}>
                <Image
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-105"
                  fill
                  sizes={service.layout === 'horizontal' ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
                  loading={idx < 2 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-80" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
