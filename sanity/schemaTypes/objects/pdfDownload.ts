import { defineField, defineType } from 'sanity'
import { DocumentPdfIcon } from '@sanity/icons'

export const pdfDownload = defineType({
  name: 'pdfDownload',
  title: 'PDF Download',
  type: 'object',
  icon: DocumentPdfIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      placeholder: 'e.g. Datasheet, Product Manual, Brochure',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'file',
      title: 'PDF File',
      type: 'file',
      options: { accept: '.pdf' },
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: 'label' },
  },
})
