import * as fs from 'fs'
import * as path from 'path'
import { createClient } from '@sanity/client'

// Load .env.local without requiring dotenv package
const envPath = path.resolve(__dirname, '../.env.local')
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf-8').split('\n')
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eqIdx = trimmed.indexOf('=')
    if (eqIdx === -1) continue
    const key = trimmed.slice(0, eqIdx).trim()
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '')
    if (!process.env[key]) process.env[key] = val
  }
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_TOKEN!,
  apiVersion: '2024-01-01',
  useCdn: false,
})

type InPost = {
  slug: string
  title: string
  description: string
  category?: string
  date: string
  updated?: string
  readTime?: string
  intro: string
  sections?: { heading: string; paragraphs?: string[]; bullets?: string[]; steps?: string[] }[]
  faqs?: { q: string; a: string }[]
  related?: { label: string; href: string }[]
  keywords?: string[]
}

const key = (prefix: string, i: number) => `${prefix}${i}`

async function main() {
  const file = path.resolve(__dirname, 'blog-posts.json')
  const posts: InPost[] = JSON.parse(fs.readFileSync(file, 'utf-8'))
  console.log(`Found ${posts.length} post(s) in scripts/blog-posts.json`)

  let errors = 0
  for (const p of posts) {
    try {
      if (p.description.length > 160) {
        console.warn(`WARNING: description of "${p.slug}" is ${p.description.length} characters (max 160)`)
      }
      // Keep the cover image uploaded in Studio (createOrReplace would delete it)
      const id = `blogPost-${p.slug}`
      const existing = await client.fetch<{ coverImage?: unknown } | null>(
        `*[_id == $id][0]{ coverImage }`,
        { id }
      )
      const doc = {
        _id: id,
        ...(existing?.coverImage ? { coverImage: existing.coverImage } : {}),
        _type: 'blogPost',
        title: p.title,
        slug: { _type: 'slug', current: p.slug },
        description: p.description,
        category: p.category ?? 'Buying Guide',
        publishedAt: p.date,
        ...(p.updated ? { updatedAt: p.updated } : {}),
        readTime: p.readTime ?? '5 min read',
        intro: p.intro,
        sections: (p.sections ?? []).map((s, i) => ({
          _key: key('s', i),
          _type: 'blogSection',
          heading: s.heading,
          paragraphs: s.paragraphs ?? [],
          bullets: s.bullets ?? [],
          steps: s.steps ?? [],
        })),
        faqs: (p.faqs ?? []).map((f, i) => ({
          _key: key('f', i),
          _type: 'faqItem',
          question: f.q,
          answer: f.a,
        })),
        related: (p.related ?? []).map((r, i) => ({
          _key: key('r', i),
          _type: 'linkItem',
          label: r.label,
          href: r.href,
        })),
        keywords: p.keywords ?? [],
      }
      await client.createOrReplace(doc)
      console.log(`OK     ${p.slug}`)
    } catch (e) {
      errors++
      console.error(`ERROR  ${p.slug}:`, e instanceof Error ? e.message : e)
    }
  }
  console.log(`Done. Errors : ${errors}`)
}

main()
