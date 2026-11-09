import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const blogSection = defineType({
  name: 'blogSection',
  title: 'Section',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      description: 'Best as a question, e.g. "How do I choose the right lathe?"',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'paragraphs',
      title: 'Paragraphs',
      description: 'Normal text. One item = one paragraph.',
      type: 'array',
      of: [{ type: 'text', rows: 4 }],
    }),
    defineField({
      name: 'bullets',
      title: 'Bullet points (optional)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'steps',
      title: 'Numbered steps (optional)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: { select: { title: 'heading' } },
})
