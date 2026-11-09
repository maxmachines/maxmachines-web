import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Web address (slug)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      description: 'Shown on the blog list and at the top of the post. Wide photo works best (landscape).',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          description: 'Describe the photo in a few words, e.g. "Lathe machine cutting a steel shaft".',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Short description (for Google)',
      description: 'Maximum 160 characters. Plain words, no price, no phone number.',
      type: 'text',
      rows: 3,
      validation: (r) => r.required().max(160),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Buying Guide', 'How To', 'Maintenance', 'Industry'],
      },
      initialValue: 'Buying Guide',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published date',
      type: 'date',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Last updated (optional)',
      type: 'date',
    }),
    defineField({
      name: 'readTime',
      title: 'Read time',
      description: 'For example: 5 min read',
      type: 'string',
      initialValue: '5 min read',
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      rows: 5,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'blogSection' }],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs (optional)',
      type: 'array',
      of: [{ type: 'faqItem' }],
    }),
    defineField({
      name: 'related',
      title: 'Related machines (links)',
      type: 'array',
      of: [{ type: 'linkItem' }],
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
  ],
  orderings: [
    { title: 'Newest first', name: 'dateDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category' },
  },
})
