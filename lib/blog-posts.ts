export interface BlogPost {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  category: string
  readTime: string
  date: string
  dateISO: string
  excerpt: string
  image: string
  imageAlt: string
  author: string
  sections: BlogSection[]
  relatedSlugs: string[]
}

export interface BlogSection {
  type: 'intro' | 'h2' | 'h3' | 'p' | 'ul' | 'ol' | 'table' | 'cta' | 'callout'
  heading?: string
  text?: string
  items?: string[]
  rows?: { col1: string; col2: string; col3?: string }[]
  thead?: string[]
}

export const blogPosts: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // POST 1
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'indoor-vs-outdoor-led-screens',
    title: 'Indoor vs Outdoor LED Screens: Which Do You Actually Need?',
    metaTitle: 'Indoor vs Outdoor LED Screens — Complete Buyer\'s Guide UAE | Aztech LED',
    metaDescription: 'Not sure whether you need an indoor or outdoor LED screen? This detailed guide compares brightness, pixel pitch, weatherproofing, and cost — written for UAE buyers by Aztech LED.',
    category: 'Buying Guide',
    readTime: '6 min read',
    date: 'January 2025',
    dateISO: '2025-01-15',
    excerpt: 'The choice between indoor and outdoor LED isn\'t just about weatherproofing. Brightness, pixel pitch, viewing distance, and content type all play a role. Here is how to decide.',
    image: '/images/blog_compare.webp',
    imageAlt: 'Side-by-side comparison of an indoor LED wall and outdoor LED billboard in Dubai',
    author: 'Aztech LED Team',
    relatedSlugs: ['pixel-pitch-explained', 'led-display-trends-dubai-2025'],
    sections: [
      {
        type: 'intro',
        text: 'Every week, procurement managers, fit-out contractors and business owners ask us the same question: "Do I need an indoor or outdoor screen?" It sounds simple, but getting it wrong can mean spending tens of thousands of dirhams on a display that is either too dim to see or high-precision enough to waste half your budget. This guide cuts through the confusion.',
      },
      {
        type: 'h2',
        heading: 'The Fundamental Difference Is Brightness',
        text: 'The single biggest technical difference between indoor and outdoor LED screens is brightness, measured in nits (cd/m²). Ambient light is the enemy of any display. Inside a mall or office, lighting averages around 300–500 lux. On a Dubai street in direct summer sun, ambient light routinely exceeds 100,000 lux. Your LED screen has to overpower whatever light surrounds it.',
      },
      {
        type: 'table',
        thead: ['Environment', 'Typical Ambient', 'Required Brightness'],
        rows: [
          { col1: 'Indoor — dim (cinema, lobby)', col2: '< 300 lux', col3: '800–1,500 nits' },
          { col1: 'Indoor — bright (retail, showroom)', col2: '300–2,000 lux', col3: '1,500–3,000 nits' },
          { col1: 'Semi-outdoor (covered parking, canopy)', col2: '2,000–10,000 lux', col3: '3,000–5,000 nits' },
          { col1: 'Outdoor — shaded', col2: '10,000–30,000 lux', col3: '5,000–7,000 nits' },
          { col1: 'Outdoor — direct UAE sunlight', col2: 'Up to 120,000 lux', col3: '7,000–10,000 nits' },
        ],
      },
      {
        type: 'p',
        text: 'Aztech\'s outdoor DIP LED displays are rated at up to 10,000 nits — enough to maintain full visibility even at peak UAE summer daylight hours. Our indoor screens typically range from 800 to 2,500 nits, which is more than enough for interior environments and far easier on the eye when viewed up close.',
      },
      {
        type: 'h2',
        heading: 'Pixel Pitch: Why Indoor Screens Need Higher Resolution',
        text: 'Pixel pitch is the distance in millimetres between LED clusters. A tighter pitch means more pixels per square metre — which means sharper images at close range. The typical minimum viewing distance for any LED screen is roughly 1 metre per millimetre of pixel pitch. So a P4 (4mm pitch) screen should be viewed from at least 4 metres.',
      },
      {
        type: 'ul',
        items: [
          'P1.2 – P2 (Ultra-fine indoor): Best for broadcast studios, hospitality, control rooms, and close-range corporate displays. Minimum viewing ~1.2 m.',
          'P2.5 – P3 (Standard indoor): Most popular for retail, boardrooms, lobbies. Viewing from 2.5–5 m.',
          'P4 – P5 (Indoor/semi-outdoor): Good for large atriums, exhibition halls, or covered outdoor canopies viewed from 4–8 m.',
          'P6 – P8 (Outdoor perimeter): Billboards and building-mounted displays viewed from 8–20 m.',
          'P10 – P16 (Large outdoor): Stadium screens, road-facing billboards, viewed from 15 m+.',
        ],
      },
      {
        type: 'p',
        text: 'Outdoor screens almost always use larger pixel pitches because audiences are far away. Specifying P1.86 for a rooftop billboard is an expensive mistake — you\'re paying for resolution no one can see. Conversely, installing P10 in your showroom means every visitor sees pixelated, low-quality content.',
      },
      {
        type: 'h2',
        heading: 'Weatherproofing: The UAE Climate Is Non-Negotiable',
        text: 'Dubai\'s weather is extreme: temperatures reaching 47°C in summer, sandstorms, high humidity from the Gulf, and the occasional torrential rain. Outdoor LED screens must meet IP65 or IP66 rating as a minimum — fully dust-tight and protected against water jets from any direction. The LED modules and the cabinet must both carry an IP rating; ask your supplier to confirm both.',
      },
      {
        type: 'callout',
        text: '⚠️ Important: Many low-cost suppliers use IP65-rated modules in IP54 cabinets. In the UAE, even small dust ingress causes long-term failures. Aztech only supplies outdoor systems where both the module and cabinet carry the correct IP rating.',
      },
      {
        type: 'p',
        text: 'Indoor screens typically carry IP30 or IP40 ratings, which is perfectly adequate for controlled interior environments. They also feature internal cooling systems optimised for air-conditioned spaces — running an indoor screen at outdoor temperatures will rapidly degrade its performance and lifespan.',
      },
      {
        type: 'h2',
        heading: 'Structure, Mounting and Planning Permission',
        text: 'Outdoor LED screens are significantly heavier than indoor screens of the same size, because they require robust steel or aluminium cabinets that can withstand wind loads. A 10m² outdoor billboard can weigh 400–600 kg. Structural calculations, anchor bolts, and in many cases a municipality permit or RTA/DM NOC are required before installation can begin.',
      },
      {
        type: 'p',
        text: 'Indoor screens are lighter and typically wall-mounted, hung from ceiling rigging or built into a bespoke frame. Installation is faster and cheaper. However, buildings classified as heritage or those within DIFC, ADGM, or certain free zones may have their own signage regulations to consider.',
      },
      {
        type: 'h2',
        heading: 'Cost Comparison: What to Budget',
        text: 'Outdoor screens cost more per square metre than indoor screens of equivalent quality. The premium pays for ruggedised construction, higher brightness LED chips, and stronger cabinets. As a general guide for UAE buyers:',
      },
      {
        type: 'table',
        thead: ['Screen Type', 'Approx. Cost (AED/m²)', 'Total for 10 m² Installation'],
        rows: [
          { col1: 'Indoor P2.5 (standard)', col2: '2,500 – 4,000', col3: '25,000 – 40,000' },
          { col1: 'Indoor P1.5 (premium fine pitch)', col2: '8,000 – 15,000', col3: '80,000 – 150,000' },
          { col1: 'Outdoor SMD P4–P6', col2: '3,500 – 5,500', col3: '35,000 – 55,000' },
          { col1: 'Outdoor DIP P8–P10', col2: '2,000 – 3,500', col3: '20,000 – 35,000' },
        ],
      },
      {
        type: 'p',
        text: 'Note: prices vary with panel brand tier, control system complexity, structural work, content management software, and warranty terms. Always request a full itemised quote that covers panels, control system, cabling, installation, commissioning, and warranty.',
      },
      {
        type: 'h2',
        heading: 'Quick Decision Guide',
      },
      {
        type: 'ul',
        items: [
          'Retail store or mall — Indoor P2.5 or P3. High brightness model if near natural light.',
          'Outdoor billboard or building facade — Outdoor DIP P8 or P10. Ensure IP65+ throughout.',
          'Restaurant feature wall — Indoor P2 or P2.5. Fine pitch for eating-distance viewing.',
          'Stadium or arena — Outdoor P6–P10 for perimeter, indoor P3–P4 for interior fascia.',
          'Hotel lobby or reception — Indoor P1.86 or P2 for premium, high-impact impression.',
          'Covered car park or shaded canopy — Semi-outdoor P4 with IP54 minimum.',
          'Government or command control room — Indoor P1.2 or P1.5. Fine pitch, 24/7 rated.',
        ],
      },
      {
        type: 'cta',
        text: 'Not sure which screen fits your space? Aztech LED offers free site surveys across Dubai, Abu Dhabi and Sharjah. Our engineers will assess ambient light, viewing distances, and structural constraints and deliver a written recommendation — no obligation.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // POST 2
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'pixel-pitch-explained',
    title: 'Pixel Pitch Explained: Choosing the Right Resolution for Your LED Screen',
    metaTitle: 'LED Screen Pixel Pitch Explained — P1.2, P2.5, P4, P10 Guide UAE | Aztech LED',
    metaDescription: 'What is pixel pitch and how does it affect your LED screen? This plain-English guide explains P1.2 to P10, viewing distance calculations, and which pitch to choose for your UAE project.',
    category: 'Technical Guide',
    readTime: '7 min read',
    date: 'December 2024',
    dateISO: '2024-12-10',
    excerpt: 'P1.86 vs P2.5 vs P4 — what do these numbers mean and how do they affect what your audience sees? A plain-English guide for procurement managers and fit-out contractors.',
    image: '/images/blog_pixel.webp',
    imageAlt: 'Close-up comparison of LED screen pixel pitches showing different resolutions',
    author: 'Aztech LED Team',
    relatedSlugs: ['indoor-vs-outdoor-led-screens', 'led-display-trends-dubai-2025'],
    sections: [
      {
        type: 'intro',
        text: 'When you receive an LED screen quotation, it will almost always mention a "pixel pitch" — written as P1.86, P2.5, P4 or similar. This single number has a bigger impact on image quality, cost, and suitability for your space than almost any other specification. Yet it is one of the most misunderstood topics in the entire LED display industry. This guide explains it clearly, once and for all.',
      },
      {
        type: 'h2',
        heading: 'What Is Pixel Pitch?',
        text: 'Pixel pitch is the distance, measured in millimetres, between the centre of one LED pixel and the centre of the adjacent LED pixel. In an SMD LED screen, one pixel typically contains a red, green and blue LED sub-pixel fused into a single component. The pitch number (e.g. "P2.5") simply means there are 2.5 mm from the centre of one pixel to the next.',
      },
      {
        type: 'p',
        text: 'A smaller pixel pitch number = more pixels in the same area = higher resolution = sharper image. A P1.2 screen has roughly 4.3× more pixels than a P2.5 screen of the same physical size. This is why fine-pitch screens cost significantly more — there are simply more LEDs, more driving ICs, and more manufacturing precision involved.',
      },
      {
        type: 'h2',
        heading: 'The Viewing Distance Rule',
        text: 'There is a practical rule of thumb used by LED display engineers worldwide: the minimum comfortable viewing distance (in metres) is approximately equal to the pixel pitch (in mm). So a P4 screen should be viewed from at least 4 metres. Any closer and individual pixels become visible, reducing the perception of image quality.',
      },
      {
        type: 'table',
        thead: ['Pixel Pitch', 'Min. Viewing Distance', 'Optimal Use Case'],
        rows: [
          { col1: 'P1.2', col2: '~1.2 m', col3: 'Broadcast studio, high-end boardroom, control room' },
          { col1: 'P1.5', col2: '~1.5 m', col3: 'Premium hotel lobby, luxury retail, VIP lounge' },
          { col1: 'P1.86', col2: '~1.9 m', col3: 'Corporate reception, upscale restaurant, showroom' },
          { col1: 'P2.5', col2: '~2.5 m', col3: 'General retail, conference rooms, indoor signage' },
          { col1: 'P3', col2: '~3 m', col3: 'Stage backdrops, exhibition stands, school hall' },
          { col1: 'P4', col2: '~4 m', col3: 'Large indoor halls, covered parking, event staging' },
          { col1: 'P6', col2: '~6 m', col3: 'Indoor/outdoor billboard, building-mounted, sports perimeter' },
          { col1: 'P8', col2: '~8 m', col3: 'Mid-range outdoor billboard, roadside signage' },
          { col1: 'P10', col2: '~10 m', col3: 'Large outdoor billboard, highway, stadium roof' },
        ],
      },
      {
        type: 'h2',
        heading: 'How to Calculate the Pitch You Need',
        text: 'Step 1: Measure the distance from the screen to where most of your audience will stand. If your retail LED display is across a 5-metre-wide aisle, your average viewer is 5 m away. A P4 or P5 screen is optimal. Step 2: Factor in the content. Static text with branding needs less resolution than video content with fine detail. Step 3: Account for edge cases. A lobby screen that is 3 m from most visitors but only 1 m from the reception desk needs to look good at 1 m — consider P1.86 or P2 instead of P3.',
      },
      {
        type: 'h2',
        heading: 'Resolution vs. Physical Size',
        text: 'One common misconception is that a larger screen automatically gives better resolution. In LED, the opposite is often true. A 3m × 2m P10 screen has fewer total pixels than a 1m × 1m P2 screen. Here\'s how to calculate total pixel count:',
      },
      {
        type: 'callout',
        text: 'Formula: Total pixels = (Width in mm ÷ Pitch) × (Height in mm ÷ Pitch)\n\nExample: 3,000mm wide × 2,000mm tall at P4 = 750 × 500 = 375,000 pixels (roughly 375K or 0.375 MP)\nVs: 1,000mm × 1,000mm at P1.5 = 667 × 667 = 444,889 pixels\n\nThe smaller P1.5 screen has more pixels despite being physically smaller.',
      },
      {
        type: 'h2',
        heading: 'DIP vs SMD: How LED Technology Affects Pitch',
        text: 'For pitches below P4, SMD (Surface Mounted Device) LEDs are the industry standard. For larger pitches (P6 and above), especially outdoors, DIP (Dual In-line Package) LEDs are often preferred because they are more durable and brighter in direct sunlight.',
      },
      {
        type: 'ul',
        items: [
          'SMD LEDs: Three sub-pixels (R, G, B) in one surface-mounted package. Enables fine pitch from P0.9 upward. Best for indoor and premium applications.',
          'DIP LEDs: Separate R, G, B LEDs in individual through-hole packages. More robust, brighter, better suited for outdoor P6+ screens in the UAE climate.',
          'COB (Chip-on-Board): Emerging technology that bonds LED chips directly to the PCB — eliminates individual pixel "dot" appearance, enables P0.6 and below. Used in ultra-premium applications.',
        ],
      },
      {
        type: 'h2',
        heading: 'Common Mistakes UAE Buyers Make When Specifying Pixel Pitch',
      },
      {
        type: 'ol',
        items: [
          'Over-specifying for outdoor: Ordering P2.5 for a car park facade viewed from 15 m. The extra resolution is invisible to every viewer and adds AED 30,000+ in unnecessary cost.',
          'Under-specifying for indoor: Ordering P6 for a reception area because it\'s cheaper. Every visitor notices pixelation at 2–3 m distance. First impressions suffer.',
          'Ignoring the content system: A P1.5 screen fed by a low-resolution media player or 480p content will look no better than a P4. Invest in the full system, not just the panel.',
          'Comparing pitches without comparing brightness: A P2.5 screen rated at 800 nits in a bright showroom will look dull. Always check nit levels alongside pitch.',
          'Buying the cheapest P2.5 without checking the brand tier: Pixel pitch is a spec, not a brand. A tier-3 P2.5 panel will exhibit colour inconsistencies and fail sooner than a tier-1 panel.',
        ],
      },
      {
        type: 'h2',
        heading: 'What Aztech Stocks: P1.2 to P10',
        text: 'Aztech LED maintains stock of 18 product lines covering pixel pitches from P1.2 (ultra-fine indoor) to P10 (large outdoor billboard). All panels are sourced from top-tier Chinese manufacturers — Novastar-controlled, with factory QC certificates available on request. For bespoke projects, we can source non-standard pitches with a 3–4 week lead time.',
      },
      {
        type: 'cta',
        text: 'Tell us your screen dimensions and viewing distance and we\'ll specify the exact pixel pitch, resolution, and total megapixel count your project needs — free of charge. Our technical team responds within one business day.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // POST 3
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'led-display-trends-dubai-2025',
    title: 'Top 5 LED Display Trends Dominating Dubai in 2025',
    metaTitle: 'Top 5 LED Display Trends in Dubai 2025 — What\'s Worth Investing In | Aztech LED',
    metaDescription: 'Transparent LED, fine pixel pitch, AI content management, kinetic screens — discover the 5 LED display trends shaping Dubai\'s commercial spaces in 2025 and which ones are worth your budget.',
    category: 'Industry Insight',
    readTime: '5 min read',
    date: 'February 2025',
    dateISO: '2025-02-20',
    excerpt: 'Transparent LED, kinetic screens, and AI-driven content management are reshaping how Dubai businesses use digital displays. What\'s worth investing in right now?',
    image: '/images/blog_trends.webp',
    imageAlt: 'Futuristic transparent LED display installed on a glass facade in Dubai',
    author: 'Aztech LED Team',
    relatedSlugs: ['indoor-vs-outdoor-led-screens', 'pixel-pitch-explained'],
    sections: [
      {
        type: 'intro',
        text: 'Dubai\'s appetite for cutting-edge visual technology has never been stronger. In 2024 alone, we at Aztech LED fulfilled projects ranging from transparent glass LED facades in DIFC to 200-square-metre fine-pitch video walls in federal government headquarters. In 2025, five trends are clearly pulling ahead of the pack — driven by falling hardware prices, maturing software, and increasingly ambitious clients across retail, hospitality, government and events.',
      },
      {
        type: 'h2',
        heading: 'Trend 1: Transparent LED — Stores, Hotels, and Offices Are Going See-Through',
        text: 'Transparent LED film and glass LED panels allow businesses to turn any glass surface into a display while maintaining the view from inside. In Dubai\'s retail landscape — where natural light and open-plan aesthetics are valued — this is a game-changer. A boutique in Dubai Mall can run promotional content on its glass frontage without blocking the merchandise behind.',
      },
      {
        type: 'p',
        text: 'Transparency rates have improved dramatically: today\'s best transparent LED panels achieve 85%+ transparency at P3.9 pitch. Hotels are using them for lobby partitions that play ambient visuals. Corporate offices are installing them on boardroom glass for brandable presentation backdrops that disappear when not in use. Entry cost has fallen roughly 40% since 2022, making the technology viable for mid-sized businesses.',
      },
      {
        type: 'callout',
        text: '📍 Where we\'re seeing it in Dubai: Mall of Emirates tenant facades, DIFC office lobbies, Bluewaters Island retail, JBR beachfront hospitality.',
      },
      {
        type: 'h2',
        heading: 'Trend 2: Fine Pixel Pitch Below P1.5 Going Mainstream',
        text: 'Two years ago, sub-P1.5 LED screens were the preserve of broadcast studios and presidential command centres. Today, falling COB (Chip-on-Board) LED prices mean P1.2 and P1.5 screens are appearing in five-star hotel lobbies, luxury automotive showrooms, and high-end retail throughout the UAE. These screens deliver TV-quality resolution at any size, with perfect colour rendering even at 30cm viewing distance.',
      },
      {
        type: 'p',
        text: 'The shift matters because it eliminates the last remaining quality advantage of LCD video walls (seamless joins, fine detail) while adding the advantages of LED (higher brightness, no backlight bleed, unlimited size). For clients who have traditionally purchased Samsung or LG video walls for premium indoor spaces, P1.2 LED is now a compelling alternative at comparable cost per square metre.',
      },
      {
        type: 'h2',
        heading: 'Trend 3: AI-Driven and Data-Connected Content Management',
        text: 'The screen is no longer a "push one message to everyone" medium. In 2025, sophisticated clients are connecting their LED screens to data pipelines: live stock levels, weather APIs, time-triggered promotions, and audience measurement cameras. AI-driven CMS platforms can now automatically select content based on the time of day, day of week, footfall density, or even demographic estimates from camera data.',
      },
      {
        type: 'ul',
        items: [
          'Retail: Screen shows cold drinks promotions when temperature exceeds 38°C, hot beverages in cooler months — triggered automatically from a weather API.',
          'Government: Variable Message Signs (VMS) on Sheikh Zayed Road update in real time based on traffic density data from RTA sensors.',
          'Hospitality: Hotel lobby screens display guest names on arrival, branded welcome messages synced with the property management system.',
          'Events: Sponsor logo rotations managed by a countdown timer linked to the event schedule, with fallback content if a sponsor\'s feed drops.',
        ],
      },
      {
        type: 'p',
        text: 'The hardware requirement for all of this is simply a reliable internet connection and a media player capable of running the CMS client. Most modern LED controllers from Novastar or Linsn support cloud-based content systems. The real investment is in the CMS platform and content creation — plan for this before you sign off on just the screen.',
      },
      {
        type: 'h2',
        heading: 'Trend 4: Kinetic and Creative-Shape LED Installations',
        text: 'Flat rectangular screens are increasingly viewed as baseline. The most talked-about digital installations in Dubai in 2024 and 2025 feature LED panels folded, curved, stacked, suspended, or animated mechanically. Flexible LED modules can now bend to radii as tight as 500mm, opening possibilities for cylindrical pillars, curved ceiling canopies, and wraparound stage sets.',
      },
      {
        type: 'p',
        text: 'At Expo City Dubai events and in several Jumeirah Group properties, we have seen spherical and semi-cylindrical LED installations that create immersive environments impossible to deliver with conventional flat screens. The challenge is content — creative-shape screens require custom-mapped content that is aware of the three-dimensional surface geometry. Budget for a content studio or agency alongside the hardware.',
      },
      {
        type: 'callout',
        text: '💡 Aztech can fabricate custom LED shapes — letters, logos, curves, and cylinders — on request. Lead time is typically 4–6 weeks from design sign-off.',
      },
      {
        type: 'h2',
        heading: 'Trend 5: AMC-First Purchasing — Clients Now Demand Built-In Maintenance',
        text: 'This is less a technology trend and more a purchasing maturity shift we have observed across the UAE market. In 2020, most clients bought LED screens and figured out maintenance later — or ignored it entirely. By 2025, sophisticated procurement managers at retailers, hotel groups, and government entities now include AMC (Annual Maintenance Contract) requirements in the original tender.',
      },
      {
        type: 'p',
        text: 'The reason is simple: an LED screen that is 30% dark due to failed modules is not just an aesthetic embarrassment — in many contracts it constitutes a service level breach. Brands that have invested AED 200,000 in a flagship retail LED wall cannot afford two weeks of downtime waiting for a technician who has to source parts. An AMC with a guaranteed 24-hour response SLA and spare parts availability is now considered standard for serious installations.',
      },
      {
        type: 'ul',
        items: [
          'Preventive maintenance: Quarterly inspection, module brightness calibration, controller firmware updates.',
          'Reactive maintenance: 24-hour emergency response for hardware failures, replacement module dispatch from local stock.',
          'Remote monitoring: 24/7 network-level monitoring with automated alerts for power faults, temperature spikes, or connectivity loss.',
          'Content support: Optional add-on for CMS management, template updates, and scheduled content changes.',
        ],
      },
      {
        type: 'h2',
        heading: 'What Is Worth Investing In Right Now?',
        text: 'If you are planning an LED screen purchase in Dubai in 2025, our honest recommendations are:',
      },
      {
        type: 'ol',
        items: [
          'Fine pitch (P1.5 or better) for any prestige indoor application viewed under 4 metres. The price premium over P2.5 has narrowed significantly.',
          'Transparent LED for glass facades where you want to retain visibility — but only if you have the content budget to make it compelling.',
          'A cloud-capable CMS from day one. Even if you start with simple static content, having the infrastructure for dynamic data-driven content pays off quickly.',
          'An AMC before you sign the supply contract. Insist on UAE-based response SLAs, not a China RMA process.',
          'Creative shapes only if you have committed content production budget. A bespoke cylindrical screen showing a static JPG is a wasted investment.',
        ],
      },
      {
        type: 'cta',
        text: 'Aztech LED has been tracking and delivering these trends since they emerged. If you\'d like to discuss which innovations make sense for your next project — without any sales pressure — call or WhatsApp our team for a straightforward conversation.',
      },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}
