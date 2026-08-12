import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPost, getAllSlugs, BlogPost, BlogSection } from '@/lib/blog-posts'
import { BlogArticlePage } from '@/components/blog/blog-article-page'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  const BASE = 'https://aztechledscreens.com'

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: `${BASE}${post.image}`,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: BASE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lamps plus',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE}/images/hero_led_wall_1774782256673.png`,
      },
    },
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE}/blog/${post.slug}`,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/#blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE}/blog/${post.slug}` },
    ],
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: `LED screen Dubai, ${post.category}, LED display UAE, Lamps plus`,
    authors: [{ name: post.author }],
    robots: { index: true, follow: true },
    openGraph: {
      type: 'article',
      url: `${BASE}/blog/${post.slug}`,
      title: post.metaTitle,
      description: post.metaDescription,
      siteName: 'Lamps plus',
      locale: 'en_AE',
      publishedTime: post.dateISO,
      authors: [post.author],
      images: [
        {
          url: `${BASE}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [`${BASE}${post.image}`],
    },
    alternates: {
      canonical: `${BASE}/blog/${post.slug}`,
    },
    other: {
      'script:ld+json:article': JSON.stringify(articleSchema),
      'script:ld+json:breadcrumb': JSON.stringify(breadcrumbSchema),
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  return <BlogArticlePage post={post} />
}
