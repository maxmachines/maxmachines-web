import { defineField, defineType } from 'sanity'
import { ThListIcon } from '@sanity/icons'

export const specRow = defineType({
  name: 'specRow',
  title: 'Specification Row',
  type: 'object',
  icon: ThListIcon,
  fields: [
    defineField({
      name: 'parameter',
      title: 'Parameter',
      type: 'string',
      placeholder: 'e.g. Swing Over Bed',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      placeholder: 'e.g. 500mm',
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: 'parameter', subtitle: 'value' },
  },
})
