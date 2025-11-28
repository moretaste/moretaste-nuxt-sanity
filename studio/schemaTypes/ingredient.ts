import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'ingredient',
  title: 'Ingredient',
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
      }
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Vegetable', value: 'vegetable' },
          { title: 'Fruit', value: 'fruit' },
          { title: 'Meat', value: 'meat' },
          { title: 'Fish', value: 'fish' },
          { title: 'Dairy', value: 'dairy' },
          { title: 'Grain', value: 'grain' },
          { title: 'Spice', value: 'spice' },
          { title: 'Oil/Fat', value: 'oil' },
          { title: 'Other', value: 'other' }
        ]
      }
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image'
    }
  }
})