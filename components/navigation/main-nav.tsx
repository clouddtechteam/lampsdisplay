"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { ProductsDropdown } from "./products-dropdown"
import { SolutionsDropdown } from "./solutions-dropdown"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products", hasDropdown: true, dropdownType: "products" },
  { href: "/#solutions", label: "Solutions", hasDropdown: true, dropdownType: "solutions" },
  { href: "/#projects", label: "Projects" },
  { href: "/#blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
]

export function MainNav() {
  const pathname = usePathname()
  const isDarkPage = true // Dark theme default
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('nav')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleDropdownEnter = (type: string) => {
    setActiveDropdown(type)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pt-4 md:pt-6 pointer-events-none">
        <nav 
          className={`pointer-events-auto transition-all duration-300 rounded-full w-[95%] max-w-7xl border ${
            isScrolled 
              ? "bg-black/60 backdrop-blur-lg border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
              : "bg-white/5 backdrop-blur-md border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="h-[70px] md:h-[80px] px-6 md:px-10 flex items-center justify-between w-full">
            {/* Logo */}
            <a href="/" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/lamps-plus-logo.svg"
                alt="Lamps plus Logo"
                width={36}
                height={36}
                className="w-9 h-9 object-contain flex-shrink-0"
              />
              <span className="font-sans text-[1.1rem] font-bold text-white tracking-tight">Lamps plus</span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative flex items-center"
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 font-sans text-[0.9rem] font-semibold tracking-wide transition-colors duration-200 relative group py-2 text-white/90 hover:text-white"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E60000] transition-all duration-200 group-hover:w-full" />
                  </a>
                  {link.hasDropdown && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        if (activeDropdown === link.dropdownType) {
                          setActiveDropdown(null);
                        } else {
                          setActiveDropdown(link.dropdownType!);
                        }
                      }}
                      className="ml-1 p-1 hover:bg-white/10 rounded-full transition-colors"
                      aria-label={`Toggle ${link.label} dropdown`}
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.dropdownType ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-[#E60000] text-white font-sans text-[0.85rem] font-bold tracking-wider uppercase rounded-full hover:bg-[#CC0000] hover:scale-105 transition-all duration-200 shadow-[0_0_15px_rgba(230,0,0,0.3)]"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mega Dropdowns */}
          {activeDropdown === "products" && (
            <div 
              className="hidden lg:block absolute left-0 right-0 top-full pt-[10px]"
            >
              <div 
                className="bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => {
                  if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).closest('a')) {
                    setActiveDropdown(null);
                  }
                }}
              >
                <ProductsDropdown />
              </div>
            </div>
          )}
          
          {activeDropdown === "solutions" && (
            <div 
              className="hidden lg:block absolute left-0 right-0 top-full pt-[10px]"
            >
              <div 
                className="bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => {
                  if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).closest('a')) {
                    setActiveDropdown(null);
                  }
                }}
              >
                <SolutionsDropdown />
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-[320px] bg-[#0A0A0A] z-[70] lg:hidden overflow-y-auto border-l border-white/10">
            <div className="p-6">
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-white hover:text-[#E60000] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-sans text-xl font-semibold text-white hover:text-[#E60000] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center justify-center px-6 py-4 bg-[#E60000] text-white font-sans text-sm tracking-widest uppercase font-bold rounded-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get in Touch
                </a>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  )
}
