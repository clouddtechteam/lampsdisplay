"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const bentoClients = [
  // ROW 1 & 2
  { name: "ADNOC Headquarters", image: "/images/proj_adnoc_1774784409133.webp", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
  { name: "Parliament Palace Abu Dhabi", image: "/images/client_parliament_1778757765365.png", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { name: "RTA Dubai", image: "/images/client_rta_1778758835648.png", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { name: "Dubai Mall", image: "/images/portfolio_mall_1774782384373.webp", colSpan: "md:col-span-2", rowSpan: "md:row-span-1" },
  
  // ROW 3
  { name: "Wafi Mall", image: "/images/proj_wafi_1774784593202.webp", colSpan: "md:col-span-2", rowSpan: "md:row-span-1" },
  { name: "GEMS Schools", image: "/images/client_gems_1778758853354.png", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { name: "Oberoi Hotel", image: "/images/portfolio_hotel_1774782425884.webp", colSpan: "md:col-span-1", rowSpan: "md:row-span-2" },

  // ROW 4 & 5
  { name: "Dubai Cricket Stadium", image: "/images/client_stadium_1778757784263.png", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
  { name: "IBM Abu Dhabi", image: "/images/client_corporate_1778757807731.png", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { name: "Carrefour UAE", image: "/images/client_carrefour_1778758868134.png", colSpan: "md:col-span-2", rowSpan: "md:row-span-1" },

  // ROW 6
  { name: "Zulekha Hospital", image: "/images/client_zulekha_1778758885432.png", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { name: "CBD Bank", image: "/images/client_cbd_1778758910799.png", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { name: "Rove Hotels", image: "/images/client_rove_1778758925985.png", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { name: "Ajman Municipality", image: "/images/client_ajman_1778758943392.png", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },

  // ROW 7
  { name: "Deira City Centre", image: "/images/client_retail_1778757834323.png", colSpan: "md:col-span-4", rowSpan: "md:row-span-1", isWide: true },
]

export function ClientMarquee() {
  return (
    <section 
      id="clients"
      className="py-24 sm:py-32 bg-[#050505]"
      aria-label="Trusted by leading brands"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--section-pad-x)]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="font-sans text-[0.65rem] font-bold tracking-[0.25em] text-[#E60000] uppercase mb-4">
              Our Network
            </p>
            <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-light text-white leading-[1.1] tracking-tight">
              Trusted by the region&apos;s <br/><span className="font-medium italic text-white/90">top institutions.</span>
            </h2>
          </div>
          <div className="md:pb-2">
            <a href="#contact" className="inline-flex items-center gap-2 font-sans text-xs font-bold tracking-widest text-white hover:text-[#E60000] transition-colors uppercase">
              Join our network <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[160px]">
          {bentoClients.map((client, idx) => (
            <motion.div 
              key={client.name}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.04, ease: "easeOut" }}
              className={`relative flex items-end justify-start p-6 rounded-[20px] overflow-hidden group cursor-default bg-[#111] ${client.colSpan} ${client.rowSpan}`}
            >
              {/* Background Image */}
              <Image 
                src={client.image}
                alt={client.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-500" />
              
              {/* Label */}
              <span className={`relative z-10 font-sans font-bold text-white drop-shadow-lg tracking-wide ${client.isWide ? 'text-[1.5rem]' : 'text-[1rem]'}`}>
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
