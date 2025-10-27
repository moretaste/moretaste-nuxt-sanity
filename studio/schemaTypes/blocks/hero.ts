import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      type: 'text'
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'ctaText',
      type: 'string'
    }),
    defineField({
      name: 'ctaLink',
      type: 'string'
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
})