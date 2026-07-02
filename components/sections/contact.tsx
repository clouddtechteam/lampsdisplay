"use client"

import { useRef, useState, FormEvent } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle, AlertCircle, MessageSquare } from "lucide-react"

const serviceOptions = [
  "Select a service...",
  "Indoor LED Screen",
  "Outdoor LED Screen",
  "Rental / Event Screen",
  "Transparent LED Screen",
  "LCD Video Wall",
  "Custom LED Display",
  "Exterior / Architectural Lighting",
  "Audio-Visual System",
  "Gas Price / Taxi / Traffic LED",
  "After-Sales & Maintenance",
  "Other / Not Sure",
]

const locationOptions = [
  "Select location...",
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain",
  "Other (within UAE)",
  "Outside UAE",
]

const budgetOptions = [
  "Prefer not to say",
  "Under AED 5,000",
  "AED 5,000 – AED 20,000",
  "AED 20,000 – AED 100,000",
  "AED 100,000+",
]

const sourceOptions = [
  "How did you hear about us?",
  "Google Search",
  "Referral",
  "Social Media",
  "Existing Client",
  "Other",
]

const inputClass =
  "w-full px-4 py-3.5 bg-[#0a0a0a] border border-white/10 rounded-[12px] font-sans text-[0.9rem] text-white placeholder-white/25 focus:border-[#E60000]/60 focus:outline-none focus:ring-1 focus:ring-[#E60000]/30 transition-all duration-200"

const labelClass =
  "block font-sans text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white/40 mb-2"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg(null)

    const form = formRef.current!
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value.trim(),
      company: (form.elements.namedItem('company') as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem('email') as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value.trim(),
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      location: (form.elements.namedItem('location') as HTMLSelectElement).value,
      budget: (form.elements.namedItem('budget') as HTMLSelectElement).value,
      source: (form.elements.namedItem('source') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim(),
    }

    if (!data.name || !data.email || !data.phone || !data.service) {
      setErrorMsg('Please fill in all required fields.')
      setIsSubmitting(false)
      return
    }

    const subject = `New LED Enquiry: ${data.service} — ${data.name}${data.company ? ` (${data.company})` : ''}`
    const body = [
      `Name: ${data.name}`,
      data.company ? `Company: ${data.company}` : '',
      `Email: ${data.email}`,
      `Phone / WhatsApp: ${data.phone}`,
      `Service Required: ${data.service}`,
      data.location ? `Project Location: ${data.location}` : '',
      `Approximate Budget: ${data.budget}`,
      data.source ? `How They Heard: ${data.source}` : '',
      '',
      'Project Details / Message:',
      data.message || 'No message provided',
    ].filter(Boolean).join('\n')

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent('sales@lampsplusdisplay.com')}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`

    window.open(gmailUrl, '_blank')
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 lg:py-32 bg-[#050505] relative overflow-hidden"
      aria-label="Contact Lamps plus Dubai — Get a Free Quote"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 right-[-5%] w-[600px] h-[600px] bg-[#E60000] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-[#E60000] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--section-pad-x)] relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-20 max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-[#E60000]" />
            <p className="font-sans text-[0.75rem] font-bold tracking-[0.2em] text-[#E60000] uppercase">
              Get In Touch
            </p>
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,4vw,4.5rem)] font-normal text-white leading-[1.1] tracking-tight">
            Start Your <br />
            <span className="text-white/40 italic">Project Today.</span>
          </h2>
          <p className="mt-6 font-sans text-[1rem] text-white/50 leading-relaxed max-w-xl">
            Tell us about your LED screen project and we&apos;ll respond within 24 hours with a detailed proposal.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[38%_62%] gap-6 lg:gap-8 items-stretch">

          {/* LEFT — Contact info + Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col gap-6 h-full"
          >
            {/* Company card */}
            <div className="bg-[#111111] border border-white/5 rounded-[24px] p-8 flex flex-col gap-6">
              {/* Logo + name */}
              <a href="/" className="inline-flex items-center gap-3 w-fit hover:opacity-80 transition-opacity">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/lamps-plus-logo.svg"
                  alt="Lamps plus Logo"
                  width={36}
                  height={36}
                  className="w-9 h-9 object-contain"
                />
                <span className="font-serif text-[1.3rem] font-bold text-white tracking-tight">LAMPS PLUS</span>
              </a>

              <div className="h-[1px] bg-white/5" />

              {/* Contact details */}
              <div className="flex flex-col gap-5">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Alquoz+industrial+area+3+Near+Audi+Showroom+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#E60000]/10 group-hover:border-[#E60000]/30 transition-all">
                    <MapPin className="w-4 h-4 text-white/40 group-hover:text-[#E60000] transition-colors" />
                  </div>
                  <address className="font-sans text-[0.9rem] text-white/60 not-italic leading-relaxed group-hover:text-white/90 transition-colors">
                    Alquoz industrial area 3,<br />
                    Near Audi Showroom, Dubai
                  </address>
                </a>

                <a href="tel:+917356780866" className="flex items-center gap-4 group">
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#E60000]/10 group-hover:border-[#E60000]/30 transition-all">
                    <Phone className="w-4 h-4 text-white/40 group-hover:text-[#E60000] transition-colors" />
                  </div>
                  <span className="font-sans text-[0.9rem] text-white/60 group-hover:text-white/90 transition-colors">
                    +91 73567 80866
                  </span>
                </a>

                <a
                  href="https://wa.me/971561425339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/10 group-hover:border-[#25D366]/30 transition-all">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white/40 group-hover:text-[#25D366] transition-colors" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="font-sans text-[0.9rem] text-white/60 group-hover:text-white/90 transition-colors">
                    +971 56 142 5339
                  </span>
                </a>

                <a href="mailto:sales@lampsplusdisplay.com" className="flex items-center gap-4 group">
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#E60000]/10 group-hover:border-[#E60000]/30 transition-all">
                    <Mail className="w-4 h-4 text-white/40 group-hover:text-[#E60000] transition-colors" />
                  </div>
                  <span className="font-sans text-[0.9rem] text-white/60 group-hover:text-white/90 transition-colors">
                    sales@lampsplusdisplay.com
                  </span>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-white/40" />
                  </div>
                  <span className="font-sans text-[0.9rem] text-white/60">
                    Mon–Sat: 8:00 AM – 6:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-[24px] overflow-hidden border border-white/5 flex-1 min-h-[220px]">
              <iframe
                title="Lamps plus office location in Dubai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14446.591244589258!2d55.2255!3d25.1432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6a1e34b8c6bb%3A0x8bbd30c51e06c7e3!2sAl%20Quoz%20Industrial%20Area%203%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/971561425339?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20LED%20screens."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-[#111111] border border-white/5 rounded-[24px] p-6 hover:border-[#25D366]/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#25D366]" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-sans text-[0.85rem] font-semibold text-white mb-0.5">Prefer WhatsApp?</p>
                <p className="font-sans text-[0.8rem] text-white/50">Chat with our team instantly</p>
              </div>
              <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#25D366] group-hover:translate-x-1 transition-all duration-300" />
            </a>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="bg-[#111111] border border-white/5 rounded-[24px] p-8 lg:p-12 flex flex-col"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
                <div className="w-16 h-16 rounded-full bg-[#E60000]/10 border border-[#E60000]/20 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-[#E60000]" />
                </div>
                <div>
                  <h3 className="font-serif text-[1.6rem] font-normal text-white mb-3">Gmail Opened!</h3>
                  <p className="font-sans text-[0.95rem] text-white/60 leading-relaxed max-w-md">
                    A Gmail compose window has opened with your enquiry pre-filled. Just hit <strong className="text-white">Send</strong> and our team at <strong className="text-white">sales@lampsplusdisplay.com</strong> will get back to you within 24 hours.
                  </p>
                </div>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 font-sans text-[0.85rem] font-bold tracking-[0.15em] uppercase text-white/50 hover:text-[#E60000] transition-colors"
                >
                  <span className="w-6 h-[1px] bg-current" />
                  Explore our projects
                </a>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-9 h-9 rounded-full bg-[#E60000]/10 border border-[#E60000]/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 text-[#E60000]" />
                  </div>
                  <h3 className="font-serif text-[1.4rem] font-normal text-white">
                    Send Us a Project Enquiry
                  </h3>
                </div>

                <div className="grid gap-6 flex-1">
                  {/* Name & Company */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Full Name <span className="text-[#E60000]">*</span>
                      </label>
                      <input type="text" id="name" name="name" required className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>Company Name</label>
                      <input type="text" id="company" name="company" className={inputClass} />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email Address <span className="text-[#E60000]">*</span>
                      </label>
                      <input type="email" id="email" name="email" required className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone / WhatsApp <span className="text-[#E60000]">*</span>
                      </label>
                      <input type="tel" id="phone" name="phone" required placeholder="+971 XXXXX XXXXX" className={inputClass} />
                    </div>
                  </div>

                  {/* Service & Location */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="service" className={labelClass}>
                        Service Required <span className="text-[#E60000]">*</span>
                      </label>
                      <select id="service" name="service" required className={inputClass}>
                        {serviceOptions.map((o) => (
                          <option key={o} value={o === "Select a service..." ? "" : o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="location" className={labelClass}>Project Location</label>
                      <select id="location" name="location" className={inputClass}>
                        {locationOptions.map((o) => (
                          <option key={o} value={o === "Select location..." ? "" : o}>{o}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget & Source */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="budget" className={labelClass}>Approximate Budget</label>
                      <select id="budget" name="budget" className={inputClass}>
                        {budgetOptions.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="source" className={labelClass}>How Did You Hear About Us?</label>
                      <select id="source" name="source" className={inputClass}>
                        {sourceOptions.map((o) => (
                          <option key={o} value={o === "How did you hear about us?" ? "" : o}>{o}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={labelClass}>Project Details / Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project — screen size, location, viewing distance, timeline..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Error */}
                  {errorMsg && (
                    <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-[12px] px-4 py-3">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      <p className="font-sans text-[0.85rem] leading-[1.5]">{errorMsg}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#E60000] text-white font-sans text-[0.9rem] font-semibold tracking-[0.04em] rounded-[14px] hover:bg-[#CC0000] hover:-translate-y-[1px] transition-all duration-200 shadow-[0_0_30px_rgba(230,0,0,0.3)] hover:shadow-[0_0_40px_rgba(230,0,0,0.5)] disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                  >
                    {isSubmitting ? "Sending…" : "Send My Enquiry"}
                  </button>

                  <p className="font-sans text-[0.75rem] text-white/25 text-center">
                    We respond within 24 hours · Your information is private and never shared
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
