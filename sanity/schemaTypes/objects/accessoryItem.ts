import { defineField, defineType } from 'sanity'
import { AddCircleIcon } from '@sanity/icons'

export const accessoryItem = defineType({
  name: 'accessoryItem',
  title: 'Accessory',
  type: 'object',
  icon: AddCircleIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Accessory Name',
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
      description: 'e.g. "₹2,500" or leave empty for "Request Quote"',
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
  },
})
