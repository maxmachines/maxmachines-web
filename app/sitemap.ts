import { client } from '@/sanity/lib/client'

export default async function sitemap() {
  const baseUrl = 'https://www.maxmachines.in'

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/our-clients`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]

  const categories = await client.fetch(`
    *[_type == "category"] { "slug": slug.current }
  `)

  const categoryPages = categories.map((cat: any) => ({
    url: `${baseUrl}/products/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const subcategories = await client.fetch(`
    *[_type == "subcategory"] {
      "slug": slug.current,
      "categorySlug": parentCategory->slug.current
    }
  `)

  const subcategoryPages = subcategories.map((sub: any) => ({
    url: `${baseUrl}/products/${sub.categorySlug}/${sub.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const products = await client.fetch(`
    *[_type == "product" && active == true] {
      "slug": slug.current,
      "subcategorySlug": subcategory->slug.current,
      "categorySlug": subcategory->parentCategory->slug.current,
      _updatedAt
    }
  `)

  const productPages = products.map((product: any) => ({
    url: `${baseUrl}/products/${product.categorySlug}/${product.subcategorySlug}/${product.slug}`,
    lastModified: new Date(product._updatedAt),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  return [...staticPages, ...categoryPages, ...subcategoryPages, ...productPages]
}
