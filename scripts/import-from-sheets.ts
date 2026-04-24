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

const SHEET_ID = '1PymyVSGmjSvRgyg5n9wXyZNKgVExpHJ4T_XvyCanDWY'
const SHEET_BASE = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=`

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_TOKEN!,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// ── CSV Parser ───────────────────────────────────────────────────────────────

function parseCSV(raw: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ''
  let inQuotes = false

  for (let i = 0; i < raw.length; i++) {
    const ch = raw[i]
    const next = raw[i + 1]

    if (inQuotes) {
      if (ch === '"' && next === '"') {
        field += '"'
        i++
      } else if (ch === '"') {
        inQuotes = false
      } else {
        field += ch
      }
    } else {
      if (ch === '"') {
        inQuotes = true
      } else if (ch === ',') {
        row.push(field.trim())
        field = ''
      } else if (ch === '\n' || (ch === '\r' && next === '\n')) {
        if (ch === '\r') i++
        row.push(field.trim())
        rows.push(row)
        row = []
        field = ''
      } else {
        field += ch
      }
    }
  }
  if (field || row.length) {
    row.push(field.trim())
    rows.push(row)
  }
  return rows
}

async function fetchSheet(tabName: string): Promise<Record<string, string>[]> {
  const url = SHEET_BASE + encodeURIComponent(tabName)
  console.log(`  Fetching tab: ${tabName}`)
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to fetch tab "${tabName}": ${res.status} ${res.statusText}`)
  const text = await res.text()
  const rows = parseCSV(text)
  if (rows.length < 2) return []
  const headers = rows[0]
  return rows.slice(1).filter(r => r.some(c => c)).map(row => {
    const obj: Record<string, string> = {}
    headers.forEach((h, i) => { obj[h] = row[i] ?? '' })
    return obj
  })
}

// ── Sanity Helpers ───────────────────────────────────────────────────────────

async function fetchCategories(): Promise<Record<string, string>> {
  const cats = await client.fetch<{ _id: string; name: string }[]>(
    `*[_type == "category"]{ _id, name }`
  )
  const map: Record<string, string> = {}
  cats.forEach(c => { map[c.name] = c._id })
  return map
}

async function fetchSubcategories(): Promise<Record<string, { _id: string; categoryName: string }>> {
  const subs = await client.fetch<{ _id: string; name: string; category: { name: string } }[]>(
    `*[_type == "subcategory"]{ _id, name, category->{ name } }`
  )
  const map: Record<string, { _id: string; categoryName: string }> = {}
  subs.forEach(s => { map[s.name] = { _id: s._id, categoryName: s.category?.name ?? '' } })
  return map
}

function normalizeName(name: string): string {
  return name.replace(/—/g, '-').replace(/\s+/g, ' ').trim().toLowerCase()
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function splitCSVField(val: string): string[] {
  return val.split(',').map(s => s.trim()).filter(Boolean)
}

function availabilityValue(raw: string): string {
  const map: Record<string, string> = {
    'in stock': 'in_stock',
    'out of stock': 'on_order',
    'on order': 'on_order',
  }
  return map[raw.toLowerCase().trim()] ?? 'in_stock'
}

function countryValue(raw: string): string {
  const map: Record<string, string> = {
    india: 'india', taiwan: 'taiwan', japan: 'japan', italy: 'italy', usa: 'usa',
  }
  return map[raw.toLowerCase().trim()] ?? ''
}

function parseBool(val: string): boolean {
  return ['yes', 'true', '1'].includes((val || '').toLowerCase().trim())
}

// ── Main Import ──────────────────────────────────────────────────────────────

async function main() {
  console.log('\n=== Max Machine Tools — Sanity Import ===\n')

  // Load all 4 tabs
  const [productsTab, variantsTab, highlightsTab, faqsTab] = await Promise.all([
    fetchSheet('Products'),
    fetchSheet('Variants & Specs'),
    fetchSheet('Highlights & Accessories'),
    fetchSheet('FAQs'),
  ])

  if (!productsTab.length) {
    console.error('ERROR: No products found in sheet. Check tab name is exactly "Products".')
    process.exit(1)
  }

  console.log(`\nFound: ${productsTab.length} products, ${variantsTab.length} variant rows, ${highlightsTab.length} highlight/accessory rows, ${faqsTab.length} FAQ rows\n`)

  // Spec headers start at column F (index 5), after: Product Name, Model Number, Size, Price, Availability
  const variantHeaders = variantsTab.length > 0 ? Object.keys(variantsTab[0]) : []
  const specHeaders = variantHeaders.slice(5)

  // Fetch Sanity refs
  console.log('Loading Sanity categories and subcategories...')
  const [categoryMap, subcategoryMap] = await Promise.all([fetchCategories(), fetchSubcategories()])
  console.log(`  Categories: ${Object.keys(categoryMap).length}, Subcategories: ${Object.keys(subcategoryMap).length}\n`)

  // Index variant/highlight/faq rows by product name
  const variantsByProduct: Record<string, Record<string, string>[]> = {}
  variantsTab.forEach(row => {
    const name = row['Product Name']
    if (!name) return
    const key = normalizeName(name)
    if (!variantsByProduct[key]) variantsByProduct[key] = []
    variantsByProduct[key].push(row)
  })

  const highlightsByProduct: Record<string, Record<string, string>[]> = {}
  highlightsTab.forEach(row => {
    const name = row['Product Name']
    if (!name) return
    const key = normalizeName(name)
    if (!highlightsByProduct[key]) highlightsByProduct[key] = []
    highlightsByProduct[key].push(row)
  })

  const faqsByProduct: Record<string, Record<string, string>[]> = {}
  faqsTab.forEach(row => {
    const name = row['Product Name']
    if (!name) return
    const key = normalizeName(name)
    if (!faqsByProduct[key]) faqsByProduct[key] = []
    faqsByProduct[key].push(row)
  })

  // Process each product
  let created = 0
  let updated = 0
  let errors = 0

  for (let i = 0; i < productsTab.length; i++) {
    const row = productsTab[i]
    const name = row['Product Name']?.trim()
    if (!name) continue

    console.log(`Importing product ${i + 1}/${productsTab.length}: ${name}...`)

    // Resolve subcategory
    const subName = row['Subcategory']?.trim()
    const subRef = subName ? subcategoryMap[subName] : null
    if (!subRef) {
      console.error(`  ERROR: Subcategory "${subName}" not found in Sanity. Skipping.`)
      errors++
      continue
    }

    // Build variants
    const variantRows = variantsByProduct[normalizeName(name)] ?? []
    const variants = variantRows.map(vRow => {
      const specs: object[] = []
      specHeaders.forEach(specName => {
        const value = vRow[specName]
        if (specName && value) {
          specs.push({ _type: 'specRow', _key: `spec-${Math.random().toString(36).slice(2,8)}`, parameter: specName, value })
        }
      })
      return {
        _type: 'productVariant',
        _key: `${slugify(vRow['Model Number'] || 'v')}-${Math.random().toString(36).slice(2,6)}`,
        name: vRow['Model Number'] || '',
        size: vRow['Size'] || '',
        price: vRow['Price'] || '',
        availability: availabilityValue(vRow['Availability'] || ''),
        specs,
      }
    })

    // Build highlights and accessories
    const haRows = highlightsByProduct[normalizeName(name)] ?? []
    const highlights: string[] = []
    const accessories: object[] = []
    haRows.forEach(hRow => {
      if (hRow['Type']?.toLowerCase() === 'highlight') {
        if (hRow['Name/Text']) highlights.push(hRow['Name/Text'])
      } else if (hRow['Type']?.toLowerCase() === 'accessory') {
        accessories.push({
          _type: 'accessoryItem',
          _key: `acc-${Math.random().toString(36).slice(2,8)}`,
          name: hRow['Name/Text'] || '',
          description: hRow['Description'] || '',
          price: hRow['Price'] || '',
          link: hRow['Link'] || undefined,
        })
      }
    })

    // Build FAQs
    const faqs = (faqsByProduct[normalizeName(name)] ?? []).map(fRow => ({
      _type: 'faqItem',
      _key: `faq-${Math.random().toString(36).slice(2,8)}`,
      question: fRow['Question'] || '',
      answer: fRow['Answer'] || '',
    }))

    // Build videos
    const youtubeUrls = (row['YouTube URLs'] || '').split(',').map((u: string) => u.trim()).filter(Boolean)
    console.log('YouTube URLs found:', youtubeUrls)
    const videos = youtubeUrls.map((url, idx) => ({
      _type: 'videoItem',
      _key: `vid-${Math.random().toString(36).slice(2,8)}`,
      title: idx === 0 ? `${name} — Main Video` : `${name} — Video ${idx + 1}`,
      type: 'youtube',
      youtubeUrl: url,
    }))

    console.log('Videos being saved:', JSON.stringify(videos, null, 2))

    // Build PDF downloads
    const pdfLabels = splitCSVField(row['PDF Labels'] || '')
    const pdfURLs = splitCSVField(row['PDF URLs'] || '')
    const downloads = pdfLabels.map((label, idx) => ({
      _type: 'pdfDownload',
      _key: `pdf-${Math.random().toString(36).slice(2,8)}`,
      label,
      url: pdfURLs[idx] ?? '',
    }))

    // Build SEO
    const keywords = splitCSVField(row['Keywords'] || '')
    const geoTags = splitCSVField(row['Geo Tags'] || '')

    // Build full description as portable text blocks
    const fullDescText = row['Full Description']?.trim() || ''
    const fullDescription = fullDescText
      ? fullDescText.split(/\n+/).map(para => ({
          _type: 'block',
          _key: `para-${Math.random().toString(36).slice(2,8)}`,
          style: 'normal',
          markDefs: [],
          children: [{ _type: 'span', _key: 'span0', text: para, marks: [] }],
        }))
      : []

    const doc = {
      _type: 'product',
      name,
      slug: { _type: 'slug', current: slugify(name) },
      subcategory: { _type: 'reference', _ref: subRef._id },
      brand: row['Brand']?.trim() || undefined,
      countryOfManufacture: countryValue(row['Country'] || ''),
      shortDescription: row['Short Description']?.trim() || undefined,
      fullDescription: fullDescription.length ? fullDescription : undefined,
      featured: parseBool(row['Featured'] || ''),
      active: row['Active'] ? parseBool(row['Active']) : true,
      variants: variants.length ? variants : undefined,
      highlights: highlights.length ? highlights : undefined,
      accessories: accessories.length ? accessories : undefined,
      faqs: faqs.length ? faqs : undefined,
      videos: videos.length ? videos : undefined,
      downloads: downloads.length ? downloads : undefined,
      seo: {
        _type: 'seoMeta',
        title: row['SEO Title']?.trim() || undefined,
        description: row['Meta Description']?.trim() || undefined,
        keywords: keywords.length ? keywords : undefined,
      },
      geoTags: {
        cities: geoTags.length ? geoTags : undefined,
        country: 'India',
      },
    }

    // Check if product already exists by slug
    try {
      const existing = await client.fetch<{ _id: string; name: string } | null>(
        `*[_type == "product" && slug.current == $slug][0]{ _id, name }`,
        { slug: slugify(name) }
      )

      if (existing) {
        console.log(`  Matched: "${name}" → "${existing.name}"`)
        await client.patch(existing._id).set(doc).commit()
        console.log(`  Updated existing product.`)
        updated++
      } else {
        await client.create(doc)
        console.log(`  Created new product.`)
        created++
      }
    } catch (err) {
      console.error(`  ERROR importing "${name}":`, err instanceof Error ? err.message : err)
      errors++
    }
  }

  console.log('\n=== Import Complete ===')
  console.log(`  Created : ${created}`)
  console.log(`  Updated : ${updated}`)
  console.log(`  Errors  : ${errors}`)
  console.log('')
}

main().catch(err => {
  console.error('\nFATAL ERROR:', err)
  process.exit(1)
})
