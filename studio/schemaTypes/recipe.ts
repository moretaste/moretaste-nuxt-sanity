import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { 
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short description for listing pages'
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'prepTime',
      title: 'Prep Time (minutes)',
      type: 'number'
    }),
    defineField({
      name: 'cookTime',
      title: 'Cook Time (minutes)',
      type: 'number'
    }),
    defineField({
      name: 'servings',
      title: 'Servings',
      type: 'number'
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }]
        }
      ]
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'ingredient',
              title: 'Ingredient',
              type: 'reference',
              to: [{ type: 'ingredient' }],
              validation: Rule => Rule.required()
            },
            {
              name: 'amount',
              title: 'Amount',
              type: 'string',
              placeholder: '2 cups, 100g, 1 tbsp, etc.',
              validation: Rule => Rule.required()
            },
            {
              name: 'notes',
              title: 'Notes',
              type: 'string',
              placeholder: 'diced, minced, optional, etc.'
            }
          ],
          preview: {
            select: {
              ingredient: 'ingredient.name',
              amount: 'amount',
              notes: 'notes'
            },
            prepare({ ingredient, amount, notes }) {
              return {
                title: ingredient,
                subtitle: `${amount}${notes ? ` (${notes})` : ''}`
              }
            }
          }
        }
      ]
    }),
    defineField({
      name: 'instructions',
      title: 'Instructions',
      type: 'array',
      of: [{ type: 'block' }]
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'excerpt'
    }
  }
})