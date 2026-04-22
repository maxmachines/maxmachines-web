import { defineField, defineType } from 'sanity'
import { ControlsIcon } from '@sanity/icons'

export const productVariant = defineType({
  name: 'productVariant',
  title: 'Variant / Size',
  type: 'object',
  icon: ControlsIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Size / Variant Name',
      type: 'string',
      placeholder: 'e.g. 6ft, 1500mm, Heavy Duty',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (leave empty for "Request Quote")',
      type: 'number',
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'string',
      initialValue: 'in_stock',
      options: {
        list: [
          { title: 'In Stock', value: 'in_stock' },
          { title: 'On Order', value: 'on_order' },
          { title: 'Discontinued', value: 'discontinued' },
        ],
        layout: 'radio',
      },
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'availability' },
  },
})
