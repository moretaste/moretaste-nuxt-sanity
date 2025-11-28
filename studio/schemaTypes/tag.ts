import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { 
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Time of Day', value: 'timeOfDay' },
          { title: 'Meal Type', value: 'mealType' },
          { title: 'Cuisine', value: 'cuisine' },
          { title: 'Dietary', value: 'dietary' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category'
    }
  }
})