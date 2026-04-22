import { defineField, defineType } from 'sanity'
import { PlayIcon } from '@sanity/icons'

export const videoItem = defineType({
  name: 'videoItem',
  title: 'Video',
  type: 'object',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Video Title',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Video Type',
      type: 'string',
      initialValue: 'youtube',
      options: {
        list: [
          { title: 'YouTube URL', value: 'youtube' },
          { title: 'File Upload', value: 'file' },
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      hidden: ({ parent }) => parent?.type !== 'youtube',
      validation: (r) =>
        r.uri({ scheme: ['https', 'http'] }).custom((url, ctx) => {
          const parent = ctx.parent as { type?: string }
          if (parent?.type === 'youtube' && !url) return 'YouTube URL is required'
          return true
        }),
    }),
    defineField({
      name: 'file',
      title: 'Video File',
      type: 'file',
      options: { accept: 'video/*' },
      hidden: ({ parent }) => parent?.type !== 'file',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'type' },
    prepare({ title, subtitle }) {
      return { title: title || 'Untitled Video', subtitle }
    },
  },
})
