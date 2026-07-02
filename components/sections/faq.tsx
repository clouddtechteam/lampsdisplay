"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: "faq-1",
    question: "What is the price of an LED screen in Dubai?",
    answer:
      "LED screen prices in Dubai vary based on size, pixel pitch and type. Indoor LED screens start from AED 10,000, while large outdoor billboard displays range from AED 50,000 to AED 200,000+. Contact Lamps plus for a free custom quote.",
  },
  {
    id: "faq-2",
    question: "Does Lamps plus supply outdoor LED screens in UAE?",
    answer:
      "Yes. Lamps plus supplies weatherproof outdoor DIP and SMD LED displays rated up to 5000 nits for the UAE climate, suitable for billboards, building facades, and roadside signage across Dubai, Abu Dhabi, Sharjah and all Emirates.",
  },
  {
    id: "faq-3",
    question: "What is pixel pitch and which one should I choose?",
    answer:
      "Pixel pitch is the distance in millimetres between LED clusters. A smaller number (e.g. P1.2) means higher resolution suitable for close viewing indoors. A larger number (e.g. P6 or P10) is ideal for outdoor billboards viewed from a distance. Lamps plus stocks P1.2 to P10.",
  },
  {
    id: "faq-4",
    question: "Does Lamps plus provide installation services in Dubai?",
    answer:
      "Yes. Lamps plus has a full in-house installation team that handles site survey, structural mounting, cable routing, screen assembly, controller configuration and final commissioning. No subcontractors are used.",
  },
  {
    id: "faq-5",
    question: "Do you offer maintenance contracts for LED screens?",
    answer:
      "Yes. Lamps plus offers Annual Maintenance Contracts (AMC) covering preventive maintenance, emergency callouts, spare parts supply, remote monitoring and firmware updates with a 24-hour response SLA.",
  },
]

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section
      id="faq"
      className="section-padding bg-[var(--bg-primary)]"
      aria-label="Frequently Asked Questions about LED screens in UAE"
    >
      <div className="max-w-[var(--container-max)] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">LED SCREEN BUYERS GUIDE</p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.15] text-[var(--text-primary)] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-[1rem] leading-[1.75] text-[var(--text-secondary)] max-w-[600px] mx-auto">
            Common questions from UAE buyers about LED screens
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-[800px] mx-auto">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className="border-b border-[var(--border-light)] last:border-b-0"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${faq.id}-answer`}
                  id={`${faq.id}-btn`}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                >
                  <span className="font-sans text-[1rem] font-semibold text-[var(--text-primary)] leading-[1.5] group-hover:text-[var(--accent)] transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--accent-mid)] shrink-0 mt-[2px] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`${faq.id}-answer`}
                  role="region"
                  aria-labelledby={`${faq.id}-btn`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100 pb-5" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-sans text-[0.95rem] leading-[1.8] text-[var(--text-body)]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="font-sans text-[0.9rem] text-[var(--text-secondary)] mb-4">
            Have a question not answered above?
          </p>
          <a
            href="#contact"
            aria-label="Contact Lamps plus with your LED screen questions"
            className="inline-flex items-center px-6 py-3 bg-transparent border-[1.5px] border-[var(--accent)] text-[var(--accent)] font-sans text-[0.9rem] font-semibold rounded-[var(--radius-sm)] hover:bg-[var(--accent)] hover:text-white transition-all duration-200"
          >
            Ask Us Directly
          </a>
        </div>
      </div>
    </section>
  )
}
