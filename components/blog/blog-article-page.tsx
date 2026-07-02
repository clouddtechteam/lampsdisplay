"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { BlogPost, BlogSection, blogPosts } from "@/lib/blog-posts"
import Image from "next/image"

interface Props {
  post: BlogPost
}

export function BlogArticlePage({ post }: Props) {
  const related = blogPosts.filter((p) => post.relatedSlugs.includes(p.slug))

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Navigation />

      {/* ── Premium Hero ── */}
      <header className="relative bg-[var(--bg-dark)] pt-[140px] pb-[160px] px-[var(--section-pad-x)] overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-[10%] w-[600px] h-[600px] bg-[var(--accent)]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-[860px] mx-auto relative z-10 text-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 flex justify-center">
            <ol className="flex items-center gap-2 font-sans text-[0.8rem] font-medium tracking-wide text-white/50 uppercase">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true" className="opacity-50">/</li>
              <li>
                <Link href="/#blog" className="hover:text-white transition-colors">Blog</Link>
              </li>
            </ol>
          </nav>

          {/* Category + Meta */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <span className="inline-flex items-center gap-1.5 font-sans text-[0.7rem] font-bold px-4 py-1.5 bg-white/10 text-white backdrop-blur-md rounded-full border border-white/10 uppercase tracking-widest shadow-sm">
              <Tag className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
              {post.category}
            </span>
            <div className="flex items-center gap-4 font-sans text-[0.85rem] text-white/60">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 opacity-70" aria-hidden="true" />
                <time dateTime={post.dateISO}>{post.date}</time>
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 opacity-70" aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4.2rem)] font-bold leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/60 mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="font-sans text-[1.1rem] md:text-[1.25rem] font-light leading-[1.7] text-white/70 max-w-[760px] mx-auto">
            {post.excerpt}
          </p>
        </div>
      </header>

      {/* ── Seamless Hero Image ── */}
      <div className="px-[var(--section-pad-x)] -mt-[100px] relative z-20">
        <div className="max-w-[1000px] mx-auto">
          <div className="relative aspect-[2/1] md:aspect-[21/9] bg-[var(--bg-tertiary)] rounded-[24px] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] ring-1 ring-black/5">
            <Image
              src={post.image}
              alt={post.imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
              priority
              width={1200}
              height={600}
            />
          </div>
        </div>
      </div>

      {/* ── Article Body ── */}
      <main id="article-main" role="main" className="px-[var(--section-pad-x)] py-16 lg:py-24">
        <div className="max-w-[760px] mx-auto"> {/* Narrower column for editorial reading */}

          {/* Article content */}
          <article className="prose-aztech">
            {post.sections.map((section, i) => (
              <ArticleSection key={i} section={section} />
            ))}
          </article>

          {/* Author / CTA block (Premium redesign) */}
          <div className="mt-20 pt-16 border-t border-[var(--border-light)]">
            <div className="relative overflow-hidden bg-gradient-to-br from-[var(--bg-dark)] to-[#1a2130] rounded-3xl p-10 lg:p-12 text-white border border-gray-800 shadow-2xl">
              {/* Decorative accent glow */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[400px] h-[400px] bg-[var(--accent)]/20 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10">
                <p className="font-sans text-[0.75rem] font-bold uppercase tracking-[0.15em] text-white/50 mb-3">Written by the Experts</p>
                <p className="font-serif text-[1.8rem] font-bold tracking-tight mb-2 text-white">{post.author}</p>
                <p className="font-sans text-[1.05rem] font-light text-white/70 mb-8 max-w-[500px] leading-[1.6]">
                  Dubai's premier LED screen engineering team. Delivering cutting-edge display technology and bespoke installations across the UAE for over 20 years.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--bg-dark)] font-sans text-[0.95rem] font-bold rounded-xl hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300 shadow-lg"
                  >
                    Get a Free Quote
                  </a>
                  <a
                    href="https://wa.me/971561425339?text=Hello%2C%20I%20read%20your%20article%20and%20have%20a%20question."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-sans text-[0.95rem] font-bold rounded-xl hover:bg-[#1fbe5b] hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-[#25d366]/20"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ── Premium Related Articles ── */}
      {related.length > 0 && (
        <section
          aria-label="Related articles"
          className="px-[var(--section-pad-x)] pb-24 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)]"
        >
          <div className="max-w-[1000px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div>
                <h2 className="font-serif text-[2.2rem] lg:text-[2.6rem] font-bold tracking-tight text-[var(--text-primary)]">
                  Keep Reading
                </h2>
                <p className="font-sans text-[1.05rem] text-[var(--text-secondary)] mt-2">More insights from our LED experts.</p>
              </div>
              <Link
                href="/#blog"
                className="inline-flex items-center gap-2 font-sans text-[0.9rem] font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors group"
              >
                View all articles 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group flex flex-col bg-[var(--bg-secondary)] rounded-3xl border border-[var(--border-light)] overflow-hidden hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-1 transition-all duration-400"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[var(--bg-tertiary)]">
                    <Image
                      src={rel.image}
                      alt={rel.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-in-out"
                      loading="lazy"
                      width={800}
                      height={450}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-4">
                      <span className="inline-block font-sans text-[0.7rem] font-bold uppercase tracking-widest px-3 py-1.5 bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded-full">
                        {rel.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-[1.4rem] font-bold text-[var(--text-primary)] leading-[1.3] group-hover:text-[var(--accent)] transition-colors mb-4">
                      {rel.title}
                    </h3>
                    <div className="mt-auto pt-4 border-t border-[var(--border-light)] flex items-center justify-between">
                       <span className="font-sans text-[0.85rem] text-[var(--text-secondary)] font-medium">
                         {rel.readTime}
                       </span>
                       <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--bg-secondary)] group-hover:bg-[var(--accent)] group-hover:text-white text-[var(--text-primary)] transition-colors">
                         <ArrowRight className="w-4 h-4" />
                       </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}

// ── Section renderer ──────────────────────────────────────────────────────────

function ArticleSection({ section }: { section: BlogSection }) {
  switch (section.type) {
    case 'intro':
      return (
        <p className="font-sans text-[1.2rem] md:text-[1.3rem] font-normal leading-[1.8] text-[var(--text-primary)] mb-12 pb-10 border-b border-[var(--border-light)]">
          {section.text}
        </p>
      )

    case 'h2':
      return (
        <div className="mt-16 mb-6 relative">
          <div className="absolute -left-6 top-1 bottom-1 w-1.5 bg-[var(--accent)] rounded-r-full opacity-80 hidden md:block" />
          <h2 className="font-serif text-[2.2rem] lg:text-[2.4rem] tracking-tight font-bold leading-[1.2] text-[var(--text-primary)]">
            {section.heading}
          </h2>
          {section.text && (
             <p className="font-sans text-[1.125rem] leading-[1.85] tracking-[-0.01em] text-[var(--text-body)] mt-5">
              {section.text}
            </p>
          )}
        </div>
      )

    case 'h3':
      return (
        <div className="mt-10 mb-4">
          <h3 className="font-serif text-[1.5rem] tracking-tight font-bold text-[var(--text-primary)]">
            {section.heading}
          </h3>
          {section.text && (
            <p className="font-sans text-[1.125rem] leading-[1.85] tracking-[-0.01em] text-[var(--text-body)] mt-4">
              {section.text}
            </p>
          )}
        </div>
      )

    case 'p':
      return (
        <p className="font-sans text-[1.125rem] leading-[1.85] tracking-[-0.01em] text-[var(--text-body)] mb-6">
          {section.text}
        </p>
      )

    case 'ul':
      return (
        <ul className="mb-8 space-y-4 pl-0">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-4 font-sans text-[1.1rem] leading-[1.75] text-[var(--text-body)]">
              <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 shadow-sm" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )

    case 'ol':
      return (
        <ol className="mb-8 space-y-4 counter-reset-none">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-4 font-sans text-[1.1rem] leading-[1.75] text-[var(--text-body)]">
              <span className="font-sans text-[0.8rem] font-bold text-white bg-[var(--text-primary)] rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-[4px]">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      )

    case 'table':
      return (
        <div className="mb-10 overflow-hidden rounded-2xl border border-[var(--border-light)] shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full font-sans text-[0.95rem]">
              {section.thead && (
                <thead>
                  <tr className="bg-[var(--bg-secondary)] border-b border-[var(--border-light)]">
                    {section.thead.map((th, i) => (
                      <th key={i} className="text-left px-6 py-4 font-bold text-[var(--text-primary)] whitespace-nowrap tracking-wide">
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {section.rows?.map((row, i) => (
                  <tr key={i} className="bg-[var(--bg-primary)] border-b border-[var(--border-light)] last:border-0 hover:bg-[var(--bg-tertiary)] transition-colors">
                    <td className="px-6 py-4 text-[var(--text-primary)] font-semibold border-r border-[var(--border-light)]">{row.col1}</td>
                    <td className="px-6 py-4 text-[var(--text-secondary)] leading-relaxed border-r border-[var(--border-light)]">{row.col2}</td>
                    {row.col3 !== undefined && (
                      <td className="px-6 py-4 text-[var(--text-secondary)] leading-relaxed">{row.col3}</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )

    case 'callout':
      return (
        <div className="my-10 bg-gradient-to-r from-[var(--bg-secondary)] to-[var(--bg-tertiary)] border-l-4 border-[var(--accent)] rounded-r-2xl p-6 md:p-8 shadow-sm">
          <p className="font-sans text-[1.1rem] md:text-[1.15rem] leading-[1.8] font-medium text-[var(--text-primary)] whitespace-pre-line italic">
            "{section.text}"
          </p>
        </div>
      )

    case 'cta':
      return (
        <div className="my-12 bg-[var(--bg-secondary)] rounded-3xl border border-[var(--border-light)] p-8 md:p-10 text-center shadow-lg shadow-black/5">
          <p className="font-serif text-[1.6rem] font-bold leading-[1.4] tracking-tight text-[var(--text-primary)] mb-6 max-w-xl mx-auto">
            {section.text}
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--accent)] text-white font-sans text-[0.95rem] font-bold rounded-xl hover:bg-[var(--accent-hover)] hover:-translate-y-1 transition-all duration-300 shadow-md"
          >
            Consult with our Engineers
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      )

    default:
      return null
  }
}
