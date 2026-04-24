import { defineField, defineType, defineArrayMember } from 'sanity'
import { ControlsIcon } from '@sanity/icons'

export const productVariant = defineType({
  name: 'productVariant',
  title: 'Variant / Model',
  type: 'object',
  icon: ControlsIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Model Number / Name',
      type: 'string',
      placeholder: 'e.g. HMM9R',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      placeholder: 'e.g. 225mm, 6ft, 1500mm',
      description: 'Physical size or capacity of this model',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      placeholder: 'e.g. ₹1,25,000',
      description: 'Leave empty to show "Request Quote"',
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
    defineField({
      name: 'specs',
      title: 'Specifications for this model',
      type: 'array',
      description: 'All technical specs specific to this model — used in the side-by-side comparison table',
      of: [defineArrayMember({ type: 'specRow' })],
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'size' },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: title || 'Unnamed Variant',
        subtitle: subtitle ?? '',
      }
    },
  },
})
