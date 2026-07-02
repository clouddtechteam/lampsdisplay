import { ArrowRight } from "lucide-react"

const industries = [
  "Retail & Shopping Malls",
  "Corporate & Office",
  "Hospitality & Hotels",
  "Healthcare & Clinics",
  "Education & Schools",
  "Government & Public Sector",
  "Sports & Stadiums",
  "Events & Exhibitions",
  "Conference Room",
  "Monitoring Center",
]

const services = [
  "LED Screen Supply",
  "Custom Design & Fabrication",
  "Installation & Commissioning",
  "Exterior & Architectural Lighting",
  "AV Integrated Systems",
  "Screen Rental",
  "LED Maintenance & AMC",
  "Time / Temp Display Systems",
]

export function SolutionsDropdown() {
  return (
    <div className="px-[var(--section-pad-x)] py-8">
      <div className="max-w-[var(--container-max)] mx-auto">
        <div className="grid grid-cols-[1fr_1fr_1.2fr] gap-12">
          {/* By Industry */}
          <div>
            <h3 className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)] mb-4">
              By Industry
            </h3>
            <ul className="space-y-2.5">
              {industries.map((industry) => (
                <li key={industry}>
                  <a
                    href="#solutions"
                    className="font-sans text-[0.875rem] text-[var(--text-body)] hover:text-[var(--accent)] transition-colors"
                  >
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* By Service */}
          <div>
            <h3 className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)] mb-4">
              By Service
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="font-sans text-[0.875rem] text-[var(--text-body)] hover:text-[var(--accent)] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Panel */}
          <div className="bg-[#E60000] rounded-[var(--radius-md)] p-6 text-white flex flex-col justify-between shadow-[0_0_20px_rgba(230,0,0,0.2)]">
            <div>
              <h3 className="font-serif text-[1.5rem] font-bold mb-2">
                500+ Projects Across UAE
              </h3>
              <p className="font-sans text-[0.9rem] text-white/80">
                From Sheikh Hamdan Palace to Dubai Cricket Stadium.
              </p>
            </div>
            <a
              href="#projects"
              className="mt-6 inline-flex items-center gap-2 font-sans text-[0.875rem] font-medium text-white border border-white rounded-[var(--radius-sm)] px-4 py-2 hover:bg-white/10 transition-colors self-start"
            >
              See All Projects
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
