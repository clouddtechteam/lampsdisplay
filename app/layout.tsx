import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Lamps plus | #1 LED Screen Supplier in Dubai | Indoor & Outdoor Displays",
  description: "Lamps plus — Dubai's premier LED screen supplier. Indoor LED displays, outdoor billboards, transparent LED & video walls. Get a free quote today.",
  keywords: "LED screen Dubai, LED display supplier UAE, outdoor LED billboard Dubai, indoor LED screen Dubai, video wall UAE, transparent LED display Dubai",
  authors: [{ name: "Lamps plus" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: "website",
    url: "https://aztechledscreens.com/",
    title: "Lamps plus | #1 LED Screen Supplier in Dubai",
    description: "Dubai's most trusted LED display company. Indoor, outdoor, transparent LED screens & video walls.",
    siteName: "Lamps plus",
    locale: "en_IN",
    images: [
      {
        url: "https://aztechledscreens.com/images/hero_led_wall_1774782256673.webp",
        width: 1200,
        height: 800,
        alt: "Large LED video wall display in a modern Dubai commercial space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lamps plus | #1 LED Screen Supplier in Dubai",
    description: "Dubai's most trusted LED display company. Indoor, outdoor & specialty LED screens.",
    images: ["https://aztechledscreens.com/images/hero_led_wall_1774782256673.webp"],
  },
  alternates: {
    canonical: "https://aztechledscreens.com/",
  },
  other: {
    'geo.region': 'AE-DU',
    'geo.placename': 'Alquoz industrial area 3 Near Audi Showroom Dubai',
    'geo.position': '25.1328;55.2341',
    'ICBM': '25.1328, 55.2341',
    'http-equiv-Content-Language': 'en',
  },
  formatDetection: {
    telephone: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`relative ${playfairDisplay.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Alquoz industrial area 3 Near Audi Showroom Dubai" />
        <meta name="geo.position" content="25.1328;55.2341" />
        <meta name="ICBM" content="25.1328, 55.2341" />
        <meta httpEquiv="Content-Language" content="en" />
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Lamps plus",
              "image": "https://aztechledscreens.com/images/hero_led_wall_1774782256673.webp",
              "@id": "https://aztechledscreens.com/",
              "url": "https://aztechledscreens.com/",
              "telephone": "+91 73567 80866",
              "priceRange": "AED 5,000 - AED 100,000+",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Alquoz industrial area 3 Near Audi Showroom",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.1328,
                "longitude": 55.2341
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [],
              "description": "Lamps plus is Dubai's premier LED screen supplier. We supply indoor displays, outdoor billboards, transparent LED, video walls and specialty screens.",
              "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "UAE"],
              "knowsAbout": ["LED Screen", "Digital Signage", "Outdoor Billboard", "Video Wall", "Indoor LED Display", "Transparent LED", "Architectural Lighting"]
            })
          }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Lamps plus",
              "url": "https://aztechledscreens.com/",
              "description": "Dubai's #1 LED screen supplier. Indoor, outdoor, specialty LED displays and video walls.",
              "publisher": {
                "@type": "Organization",
                "name": "Lamps plus",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://aztechledscreens.com/icon.svg",
                  "width": 512,
                  "height": 512
                }
              }
            })
          }}
        />
        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aztechledscreens.com/" },
                { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://aztechledscreens.com/#products" },
                { "@type": "ListItem", "position": 3, "name": "Solutions", "item": "https://aztechledscreens.com/#solutions" },
                { "@type": "ListItem", "position": 4, "name": "Projects", "item": "https://aztechledscreens.com/#projects" },
                { "@type": "ListItem", "position": 5, "name": "Contact", "item": "https://aztechledscreens.com/#contact" }
              ]
            })
          }}
        />
        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the price of an LED screen in Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "LED screen prices in Dubai vary based on size, pixel pitch and type. Contact Lamps plus for a free custom quote."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Lamps plus supply outdoor LED screens?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Lamps plus supplies weatherproof outdoor DIP and SMD LED displays rated up to 5000 nits, suitable for billboards, building facades, and roadside signage."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is pixel pitch and which one should I choose?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pixel pitch is the distance in millimetres between LED clusters. A smaller number (e.g. P1.2) means higher resolution suitable for close viewing indoors. A larger number (e.g. P6 or P10) is ideal for outdoor billboards viewed from a distance. Lamps plus stocks P1.2 to P10."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Lamps plus provide installation services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Lamps plus has a full in-house installation team that handles site survey, structural mounting, cable routing, screen assembly, controller configuration and final commissioning. No subcontractors are used."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer maintenance contracts for LED screens?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Lamps plus offers Annual Maintenance Contracts (AMC) covering preventive maintenance, emergency callouts, spare parts supply, remote monitoring and firmware updates with a 24-hour response SLA."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-white focus:rounded">
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
