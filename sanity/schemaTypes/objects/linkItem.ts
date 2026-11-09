import { defineField, defineType } from 'sanity'
import { LinkIcon } from '@sanity/icons'

export const linkItem = defineType({
  name: 'linkItem',
  title: 'Link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Link text',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'href',
      title: 'Page address',
      description: 'Start with / for pages on our site, e.g. /products/bandsaw-machine',
      type: 'string',
      validation: (r) => r.required(),
    }),
  ],
  preview: { select: { title: 'label', subtitle: 'href' } },
})
