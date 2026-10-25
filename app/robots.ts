import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // All crawlers including GPTBot, ClaudeBot, PerplexityBot, Google-Extended
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
    ],
    sitemap: 'https://www.maxmachines.in/sitemap.xml',
  }
}
