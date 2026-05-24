import { defineField, defineType } from 'sanity'
import { ThListIcon } from '@sanity/icons'

export const specRow = defineType({
  name: 'specRow',
  title: 'Specification Row',
  type: 'object',
  icon: ThListIcon,
  fields: [
    defineField({
      name: 'specName',
      title: 'Spec Name',
      type: 'string',
      placeholder: 'e.g. Swing Over Bed',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'specValue',
      title: 'Spec Value',
      type: 'string',
      placeholder: 'e.g. 500mm',
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: 'specName', subtitle: 'specValue' },
  },
})
