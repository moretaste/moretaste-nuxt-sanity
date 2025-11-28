export const ingredientsListQuery = `
  *[_type == "ingredient"] | order(name asc) {
    name,
    slug,
    category,
    image,
    "recipeCount": count(*[_type == "recipe" && references(^._id)])
  }
`

export const ingredientDetailQuery = `
  *[_type == "ingredient" && slug.current == $slug][0]{
    name,
    slug,
    category,
    image
  }
`

export const ingredientRecipesQuery = `
  *[_type == "recipe" && references(*[_type == "ingredient" && slug.current == $slug]._id)]{
    title,
    slug,
    excerpt,
    image,
    prepTime,
    cookTime,
    "tags": tags[]->name
  }
`
