import { ArrowRight } from "lucide-react"

const productCategories = [
  {
    title: "Control & LCD",
    products: [
      { name: "Matrix Controllers", href: "/?category=control&subcategory=matrix#products" },
      { name: "Keyboards", href: "/?category=control&subcategory=keyboards#products" },
      { name: "Decoders", href: "/?category=control&subcategory=decoders#products" },
      { name: "LED Display Control", href: "/?category=control&subcategory=led-display-control#products" },
      { name: "LCD Video Walls", href: "/?category=lcd-video-walls&subcategory=essential#products" },
      { name: "LCD Digital Signage", href: "/?category=lcd-digital-signage&subcategory=lite#products" },
    ],
  },
  {
    title: "LED Indoor",
    products: [
      { name: "Indoor Fine Pixel", href: "/?category=led-displays&subcategory=indoor-fine-pixel#products" },
      { name: "Indoor Fixed", href: "/?category=led-displays&subcategory=indoor-fixed#products" },
      { name: "Conference All-In-One", href: "/?category=led-displays&subcategory=conference-all-in-one#products" },
      { name: "Commercial LED", href: "/?category=led-displays&subcategory=commercial#products" },
    ],
  },
  {
    title: "LED Outdoor & Modules",
    products: [
      { name: "Outdoor Fixed", href: "/?category=led-displays&subcategory=outdoor-fixed#products" },
      { name: "Stadium LED", href: "/?category=led-displays&subcategory=stadium#products" },
      { name: "Rental LED Display", href: "/?category=led-displays&subcategory=rental-led-display#products" },
      { name: "LED Modules", href: "/?category=led-displays&subcategory=led-module#products" },
    ],
  },
]

export function ProductsDropdown() {
  return (
    <div className="px-[var(--section-pad-x)] py-8">
      <div className="max-w-[var(--container-max)] mx-auto">
        <div className="grid grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)] mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2.5">
                {category.products.map((product) => (
                  <li key={product.name}>
                    <a
                      href={product.href}
                      className="font-sans text-[0.875rem] text-[var(--text-body)] hover:text-[var(--accent)] transition-colors"
                    >
                      {product.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Featured card */}
        <div className="mt-8 p-5 bg-[var(--accent-light)] rounded-[var(--radius-md)] flex items-center justify-between">
          <p className="font-sans text-[0.9rem] text-[var(--text-body)]">
            Need help choosing? Our experts will recommend the right screen for your space.
          </p>
          <a
            href="#contact"
            className="flex items-center gap-2 font-sans text-[0.875rem] font-medium text-[var(--accent)] hover:underline whitespace-nowrap"
          >
            Talk to an Expert
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Featured products */}
        <div className="mt-8 grid grid-cols-2 gap-8">
          <a href="#products" className="group flex flex-col gap-3">
            <div className="relative aspect-[21/9] bg-[#1A1A1A] rounded-[var(--radius-md)] overflow-hidden">
              <img 
                src="/images/matrix_1.png" 
                alt="LP-CON2100-0410H" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div>
              <h4 className="font-sans text-[1rem] font-semibold text-[var(--text-heading)]">LP-CON2100-0410H</h4>
              <p className="font-sans text-[0.75rem] text-[var(--accent)] uppercase tracking-wider mt-1">LAMPS PLUS 1.5U EMBEDDED MULTI-SCREEN CONTROLLER</p>
            </div>
          </a>
          <a href="#products" className="group flex flex-col gap-3">
            <div className="relative aspect-[21/9] bg-[#1A1A1A] rounded-[var(--radius-md)] overflow-hidden">
              <img 
                src="/images/matrix_3.png" 
                alt="LP-CON3000-7U" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div>
              <h4 className="font-sans text-[1rem] font-semibold text-[var(--text-heading)]">LP-CON3000-7U</h4>
              <p className="font-sans text-[0.75rem] text-[var(--accent)] uppercase tracking-wider mt-1">MULTI-SCREEN CONTROLLER</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
