import Image from 'next/image';

const logos = [
  "WhatsApp Image 2026-06-24 at 4.20.08 PM (1).jpeg",
  "WhatsApp Image 2026-06-24 at 4.20.08 PM.jpeg",
  "WhatsApp Image 2026-06-24 at 4.20.09 PM (1).jpeg",
  "WhatsApp Image 2026-06-24 at 4.20.09 PM (2).jpeg",
  "WhatsApp Image 2026-06-24 at 4.20.09 PM (3).jpeg",
  "WhatsApp Image 2026-06-24 at 4.20.09 PM.jpeg",
  "WhatsApp Image 2026-06-24 at 4.20.10 PM (1).jpeg",
  "WhatsApp Image 2026-06-24 at 4.20.10 PM (2).jpeg",
  "WhatsApp Image 2026-06-24 at 4.20.10 PM.jpeg",
  "WhatsApp Image 2026-06-24 at 4.20.11 PM (1).jpeg",
  "WhatsApp Image 2026-06-24 at 4.20.11 PM (2).jpeg",
  "WhatsApp Image 2026-06-24 at 4.20.11 PM (3).jpeg",
  "WhatsApp Image 2026-06-24 at 4.20.11 PM.jpeg",
  "WhatsApp Image 2026-06-24 at 4.20.12 PM (1).jpeg",
  "WhatsApp Image 2026-06-24 at 4.20.12 PM (2).jpeg",
  "WhatsApp Image 2026-06-24 at 4.20.12 PM.jpeg",
  "WhatsApp Image 2026-06-24 at 4.20.13 PM (1).jpeg",
  "WhatsApp Image 2026-06-24 at 4.20.13 PM (2).jpeg",
  "WhatsApp Image 2026-06-24 at 4.20.13 PM.jpeg"
];

export function TrustedBrands() {
  const row1 = logos.slice(0, 10);
  const row2 = logos.slice(10, 19);

  const rows = [
    { items: row1, duration: 30, direction: "left" },
    { items: row2, duration: 35, direction: "right" }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden" aria-label="Trusted Brands">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
      `}</style>
      
      <div className="max-w-[100vw] mx-auto">
        <h2 className="text-center text-sm md:text-base font-bold tracking-[0.2em] text-gray-400 uppercase mb-16 font-sans px-6">
          Trusted by UAE's Leading Brands
        </h2>
        
        <div className="flex flex-col gap-10">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative w-full flex overflow-hidden group">
              <div 
                className={`flex w-max shrink-0 gap-10 md:gap-16 pr-10 md:pr-16 group-hover:[animation-play-state:paused] ${row.direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
                style={{ animationDuration: `${row.duration}s` }}
              >
                {[...row.items, ...row.items].map((logo, idx) => (
                  <div 
                    key={idx} 
                    className="relative w-28 h-16 md:w-36 md:h-20 flex-shrink-0 flex items-center justify-center transition-transform hover:scale-105 duration-300"
                  >
                    <Image 
                      src={`/images/trustedbrands/${logo}`}
                      alt={`Trusted Brand ${rowIndex}-${idx}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 33vw, 20vw"
                      quality={75}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
