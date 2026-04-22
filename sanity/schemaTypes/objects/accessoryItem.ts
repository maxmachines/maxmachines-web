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
      title: 'Price (leave empty for "Request Quote")',
      type: 'number',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'description' },
  },
})
