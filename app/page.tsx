import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { ClientMarquee } from "@/components/sections/client-marquee"
import { TrustedBrands } from "@/components/sections/trusted-brands"
import { AboutSection } from "@/components/sections/about"
import { ServicesSection } from "@/components/sections/services"
import { ProductsSection } from "@/components/sections/products"
import { SolutionsSection } from "@/components/sections/solutions"
import { PortfolioSection } from "@/components/sections/portfolio"
import { BlogSection } from "@/components/sections/blog"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main id="main" role="main" className="relative min-h-screen bg-[var(--bg-primary)]">
      <Navigation />
      <HeroSection />
      {/* <ClientMarquee /> */}
      <TrustedBrands />
      <AboutSection />
      <ServicesSection />
      <Suspense fallback={<div className="min-h-[100svh] bg-[#050505]" />}>
        <ProductsSection />
      </Suspense>
      <SolutionsSection />
      <PortfolioSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
