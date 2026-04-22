import { defineField, defineType } from 'sanity'
import { ComponentIcon } from '@sanity/icons'

export const subcategory = defineType({
  name: 'subcategory',
  title: 'Subcategory',
  type: 'document',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Subcategory Name',
      type: 'string',
      placeholder: 'e.g. All Geared Lathe',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'parentCategory',
      title: 'Parent Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first within the parent category',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Meta',
      type: 'seoMeta',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{ field: 'displayOrder', direction: 'asc' }],
    },
    {
      title: 'Name A–Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'parentCategory.name',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return { title, subtitle: subtitle ? `→ ${subtitle}` : '', media }
    },
  },
})
