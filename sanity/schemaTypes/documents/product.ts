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
    defineField({
      name: 'audioFiles',
      title: 'Audio Files',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'audioFile', title: 'Audio File', type: 'file' }),
          ],
          preview: {
            select: { title: 'title' },
            prepare({ title }) {
              return { title: title || 'Untitled Audio' }
            },
          },
        }),
      ],
      group: 'media',
    }),

    // ── Specs ────────────────────────────────────────────────────────────────
    defineField({
      name: 'specs',
      title: 'General Specs (Fallback)',
      type: 'array',
      description: 'Used only when no per-variant specs are set. For per-model specs, add them inside each Variant below.',
      of: [defineArrayMember({ type: 'specRow' })],
      group: 'specs',
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
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'string',
              description: 'e.g. "₹2,500" or "Request Quote"',
            }),
            defineField({
              name: 'link',
              title: 'Product Page Link',
              type: 'url',
              description: 'Optional — link to another product page',
            }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'price' },
            prepare({ title, subtitle }) {
              return { title: title || 'Unnamed Accessory', subtitle }
            },
          },
        }),
      ],
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
