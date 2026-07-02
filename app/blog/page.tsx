import type { Metadata } from 'next'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { blogPosts } from "@/lib/blog-posts"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog & Insights | Lamps plus UAE",
  description: "Read the latest guides, technical explainers, and industry insights about LED screens from Lamps plus's experts in Dubai.",
}

export default function BlogPage() {
  return (
    <main id="main" role="main" className="min-h-screen bg-[var(--bg-primary)]">
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 px-6 bg-[var(--bg-secondary)] border-b border-white/10">
        <div className="max-w-[var(--container-max)] mx-auto text-center">
          <p className="eyebrow mb-3 text-[var(--accent)]">LED KNOWLEDGE HUB</p>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] text-white mb-6">
            Insights & Guides
          </h1>
          <p className="font-sans text-[1.1rem] leading-[1.6] text-white/70 max-w-2xl mx-auto">
            Practical advice on LED screen selection, installation and maintenance — written for UAE buyers by our engineering team.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-[var(--bg-primary)]">
        <div className="max-w-[var(--container-max)] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.slug}
                className="bg-white/5 rounded-[var(--radius-md)] border border-white/10 overflow-hidden group hover:border-white/30 hover:bg-white/10 transition-all duration-300 flex flex-col"
              >
                {/* Blog Image */}
                <a href={`/blog/${post.slug}`} aria-label={`Read article: ${post.title}`} tabIndex={-1} className="block overflow-hidden relative aspect-[16/9] bg-[var(--bg-tertiary)]">
                  <Image 
                    src={post.image} 
                    alt={post.imageAlt || post.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={450}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </a>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="inline-block font-sans text-[0.7rem] font-medium px-[10px] py-[3px] bg-white/10 text-white border border-white/10 rounded-[var(--radius-full)]">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="font-sans text-[1.15rem] font-semibold text-white leading-[1.4] mb-3 line-clamp-2">
                    <a href={`/blog/${post.slug}`} className="hover:text-white/80 transition-colors">{post.title}</a>
                  </h2>
                  
                  <p className="font-sans text-[0.9rem] text-white/70 leading-[1.6] line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                    <span className="font-sans text-[0.8rem] text-white/50">
                      {post.date} · {post.readTime}
                    </span>
                    <a 
                      href={`/blog/${post.slug}`}
                      aria-label={`Read full article: ${post.title}`}
                      className="inline-flex items-center gap-1 font-sans text-[0.85rem] font-medium text-[var(--accent)] hover:text-[var(--accent)]/80 transition-colors"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
