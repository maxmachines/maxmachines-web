import { defineField, defineType, defineArrayMember } from 'sanity'
import { TagIcon } from '@sanity/icons'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: TagIcon,
  groups: [
    { name: 'basic', title: 'Basic Info', default: true },
    { name: 'media', title: 'Media' },
    { name: 'features', title: 'Features & Accessories' },
    { name: 'variants', title: 'Variants & Pricing' },
    { name: 'faqs', title: 'FAQs' },
    { name: 'seo', title: 'SEO & Visibility' },
  ],
  fields: [
    // ── Basic Info ──────────────────────────────────────────────────────────
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      placeholder: 'e.g. Heavy Duty Belt Lathe',
      validation: (r) => r.required(),
      group: 'basic',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (r) => r.required(),
      group: 'basic',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number = appears first in product listings',
      group: 'basic',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (r) => r.required(),
      group: 'basic',
    }),
    defineField({
      name: 'subcategory',
      title: 'Subcategory',
      type: 'reference',
      to: [{ type: 'subcategory' }],
      validation: (r) => r.required(),
      group: 'basic',
    }),
    defineField({
      name: 'brand',
      title: 'Brand Name',
      type: 'string',
      group: 'basic',
    }),
    defineField({
      name: 'country',
      title: 'Country of Manufacture',
      type: 'string',
      placeholder: 'e.g. India, Taiwan, Japan',
      group: 'basic',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'Used in product cards and search results',
      validation: (r) => r.max(300).warning('Keep under 300 characters'),
      group: 'basic',
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' }),
          ],
        }),
      ],
      group: 'basic',
    }),

    // ── Media ───────────────────────────────────────────────────────────────
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Describe the image for accessibility and SEO',
            }),
          ],
        }),
      ],
      group: 'media',
    }),
    defineField({
      name: 'youtubeUrls',
      title: 'YouTube URLs',
      type: 'array',
      of: [defineArrayMember({ type: 'url' })],
      group: 'media',
    }),
    defineField({
      name: 'pdfLabels',
      title: 'PDF Labels',
      type: 'array',
      description: 'Label for each PDF (e.g. "Datasheet", "Manual") — must match order of PDF URLs',
      of: [defineArrayMember({ type: 'string' })],
      options: { layout: 'tags' },
      group: 'media',
    }),
    defineField({
      name: 'pdfUrls',
      title: 'PDF URLs',
      type: 'array',
      description: 'Download link for each PDF — must match order of PDF Labels',
      of: [defineArrayMember({ type: 'url' })],
      group: 'media',
    }),

    // ── Features & Accessories ───────────────────────────────────────────────
    defineField({
      name: 'highlights',
      title: 'Special Highlights / Key Features',
      type: 'array',
      description: 'Key selling points — shown prominently on product page',
      of: [defineArrayMember({ type: 'string' })],
      options: { layout: 'tags' },
      group: 'features',
    }),
    defineField({
      name: 'accessories',
      title: 'Accessories & Add-ons',
      type: 'array',
      of: [defineArrayMember({ type: 'accessoryItem' })],
      group: 'features',
    }),

    // ── Variants ─────────────────────────────────────────────────────────────
    defineField({
      name: 'variants',
      title: 'Variants / Sizes',
      type: 'array',
      of: [defineArrayMember({ type: 'productVariant' })],
      group: 'variants',
    }),

    // ── FAQs & Downloads ────────────────────────────────────────────────────
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [defineArrayMember({ type: 'faqItem' })],
      group: 'faqs',
    }),
    // ── SEO & Visibility ─────────────────────────────────────────────────────
    defineField({
      name: 'seo',
      title: 'SEO Meta',
      type: 'seoMeta',
      group: 'seo',
    }),
    defineField({
      name: 'geoTags',
      title: 'Geo Tags',
      type: 'object',
      description: 'Cities and regions this product is relevant for (helps local SEO)',
      fields: [
        defineField({
          name: 'cities',
          title: 'Cities',
          type: 'array',
          of: [defineArrayMember({ type: 'string' })],
          options: { layout: 'tags' },
          description: 'e.g. Chennai, Ahmedabad, Mumbai, Coimbatore',
        }),
        defineField({
          name: 'country',
          title: 'Country',
          type: 'string',
          initialValue: 'India',
        }),
      ],
      group: 'seo',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      description: 'Show on homepage or featured sections',
      initialValue: false,
      group: 'seo',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Inactive products are hidden from the catalog',
      initialValue: true,
      group: 'seo',
    }),
  ],
  orderings: [
    {
      title: 'Name A–Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'name', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'subcategory.name',
      media: 'images.0',
      active: 'active',
      featured: 'featured',
    },
    prepare({ title, subtitle, media, active, featured }) {
      const badges = [featured ? '★ Featured' : '', !active ? '⊘ Inactive' : '']
        .filter(Boolean)
        .join(' · ')
      return {
        title,
        subtitle: [subtitle, badges].filter(Boolean).join(' — '),
        media,
      }
    },
  },
})
