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
    { name: 'specs', title: 'Specifications' },
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
      name: 'countryOfManufacture',
      title: 'Country of Manufacture',
      type: 'string',
      options: {
        list: [
          { title: 'India', value: 'india' },
          { title: 'Taiwan', value: 'taiwan' },
          { title: 'Japan', value: 'japan' },
          { title: 'Italy', value: 'italy' },
          { title: 'USA', value: 'usa' },
        ],
        layout: 'radio',
      },
      group: 'basic',
    }),
    defineField({
      name: 'price',
      title: 'Price (₹)',
      type: 'number',
      description: 'Leave empty to show "Request Quote"',
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
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [defineArrayMember({ type: 'videoItem' })],
      group: 'media',
    }),

    // ── Specs ────────────────────────────────────────────────────────────────
    defineField({
      name: 'specs',
      title: 'Specification Table',
      type: 'array',
      description: 'Key-value pairs e.g. "Swing Over Bed → 500mm"',
      of: [defineArrayMember({ type: 'specRow' })],
      group: 'specs',
    }),

    // ── Variants & Accessories ───────────────────────────────────────────────
    defineField({
      name: 'variants',
      title: 'Variants / Sizes',
      type: 'array',
      of: [defineArrayMember({ type: 'productVariant' })],
      group: 'variants',
    }),
    defineField({
      name: 'accessories',
      title: 'Accessories',
      type: 'array',
      of: [defineArrayMember({ type: 'accessoryItem' })],
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
    defineField({
      name: 'downloads',
      title: 'PDF Downloads',
      description: 'Datasheets, manuals, brochures',
      type: 'array',
      of: [defineArrayMember({ type: 'pdfDownload' })],
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
