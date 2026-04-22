import { defineField, defineType, defineArrayMember } from 'sanity'
import { SearchIcon } from '@sanity/icons'

export const seoMeta = defineType({
  name: 'seoMeta',
  title: 'SEO Meta',
  type: 'object',
  icon: SearchIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'SEO Title',
      type: 'string',
      validation: (r) => r.max(60).warning('Keep under 60 characters'),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: (r) => r.max(160).warning('Keep under 160 characters'),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: { layout: 'tags' },
    }),
  ],
})
