import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE = 'https://aztechledscreens.com'
  const now = new Date('2026-04-23')

  return [
    // ── Main page ─────────────────────────────────────────────
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    // ── Blog article pages ─────────────────────────────────────
    // NOTE: Google ignores fragment (#) URLs in sitemaps, so only
    // real standalone pages are listed here. Sections like
    // #products, #solutions are part of the homepage above.
    {
      url: `${BASE}/blog/indoor-vs-outdoor-led-screens`,
      lastModified: new Date('2026-01-15'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE}/blog/pixel-pitch-explained`,
      lastModified: new Date('2026-02-10'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE}/blog/led-display-trends-dubai-2025`,
      lastModified: new Date('2026-02-20'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ]
}

