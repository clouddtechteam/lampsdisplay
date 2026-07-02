
import { Phone, Linkedin, Instagram, Facebook } from "lucide-react"

const products = [
  { label: "LED Displays", href: "/?category=led-displays#products" },
  { label: "Control", href: "/?category=control#products" },
  { label: "LCD Video Walls", href: "/?category=lcd-video-walls#products" },
  { label: "LCD Digital Signage", href: "/?category=lcd-digital-signage#products" },
]

const solutions = [
  { label: "Retail & Malls", href: "/#solutions" },
  { label: "Corporate", href: "/#solutions" },
  { label: "Hospitality", href: "/#solutions" },
  { label: "Healthcare", href: "/#solutions" },
  { label: "Education", href: "/#solutions" },
  { label: "Government", href: "/#solutions" },
  { label: "Events", href: "/#solutions" },
  { label: "Sports", href: "/#solutions" },
  { label: "Conference Room", href: "/#solutions" },
  { label: "Monitoring Center", href: "/#solutions" },
]

const company = [
  { label: "About Lamps plus", href: "/#about" },
  { label: "Our Projects", href: "/#projects" },
  { label: "Our Services", href: "/#services" },
  { label: "Blog & Resources", href: "/#blog" },
  { label: "Contact Us", href: "/#contact" },
]

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/aztechled", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/aztechled", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/aztechled", label: "Facebook" },
]

export function Footer() {
  return (
    <footer className="bg-[var(--bg-primary)] pt-10 border-t border-[var(--border-light)]">
      <div className="px-[var(--section-pad-x)]">
        <div className="max-w-[var(--container-max)] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 pb-8">
            {/* Brand Column */}
            <div className="lg:col-span-1.5 md:col-span-2 lg:col-span-1">
              <div className="flex flex-col mb-5">
              <a href="/" className="inline-flex items-center gap-2 mb-3 hover:opacity-80 transition-opacity w-fit">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/lamps-plus-logo.svg"
                  alt="Lamps plus Logo"
                  width={36}
                  height={36}
                  className="w-9 h-9 object-contain flex-shrink-0"
                />
                <span className="font-sans text-[1.1rem] font-bold text-[var(--text-primary)] tracking-tight">Lamps plus</span>
              </a>
              </div>
              
              <p className="font-sans text-[0.82rem] leading-[1.7] text-[var(--text-secondary)] mb-4 max-w-[220px]">
                Dubai's premier LED screen specialists. We design, supply, install and service high-quality visual experiences for every project.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 shadow-sm"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Products Column */}
            <div>
              <h3 className="font-sans text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-light)]">
                Products
              </h3>
              <ul className="flex flex-col gap-2.5">
                {products.map((product) => (
                  <li key={product.label}>
                    <a href={product.href} className="font-sans text-[0.85rem] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                      {product.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="/#products" className="font-sans text-[0.85rem] font-semibold text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mt-2 inline-block">
                    View All Products →
                  </a>
                </li>
              </ul>
            </div>

            {/* Solutions Column */}
            <div>
              <h3 className="font-sans text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-light)]">
                Solutions
              </h3>
              <ul className="flex flex-col gap-2.5">
                {solutions.map((solution) => (
                  <li key={solution.label}>
                    <a href={solution.href} className="font-sans text-[0.85rem] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                      {solution.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-sans text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-light)]">
                Company
              </h3>
              <ul className="flex flex-col gap-2.5">
                {company.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="font-sans text-[0.85rem] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-sans text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-light)]">
                Contact Us
              </h3>
              <address className="not-italic font-sans text-[0.82rem] text-[var(--text-secondary)] leading-[1.7] mb-4">
                Alquoz industrial area 3,<br />
                Near Audi Showroom,<br />
                Dubai
              </address>
              <p className="font-sans text-[0.82rem] text-[var(--text-secondary)] mb-4">
                Mon–Sat: 8:00 AM – 6:00 PM
              </p>
              <a 
                              href="https://wa.me/971561425339?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20LED%20screens."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-sans text-[0.85rem] font-bold px-4 py-3 rounded-lg hover:bg-[#1da851] hover:-translate-y-[1px] transition-all shadow-md shadow-[#25d366]/20 w-full justify-center"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Get a WhatsApp Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[var(--bg-primary)] border-t border-[var(--border-light)]">
        <div className="px-[var(--section-pad-x)] py-4 pb-24 md:pb-6">
          <div className="max-w-[var(--container-max)] mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 text-center md:text-left">
            <div className="flex flex-col gap-1.5">
              <p className="font-sans text-[0.8rem] font-medium text-[var(--text-secondary)]">
                © 2026 Lamps plus. All Rights Reserved.
              </p>
              <p className="font-sans text-[0.75rem] text-[var(--text-secondary)]/70 hidden sm:block">
                Head Office: <span className="font-medium text-[var(--text-secondary)]">Lamps plus, Dubai</span>
              </p>
            </div>
            <div className="flex flex-col gap-1.5 lg:text-right">
              <p className="font-sans text-[0.75rem] font-medium text-[var(--text-secondary)] hidden lg:block">
                LED Screen Dubai | Digital Signage Dubai | Outdoor LED Displays
              </p>
              <p className="font-sans text-[0.75rem] font-medium text-[var(--text-secondary)]/70">
                Dubai Expertise · Premium Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
