export const recipesListQuery = `
  *[_type == "recipe"] | order(title asc) {
    title,
    slug,
    excerpt,
    image,
    prepTime,
    cookTime,
    servings,
    "ingredientCount": count(ingredients),
    tags[]->{
      name,
      category
    }
  }
`

export const recipeDetailQuery = `
  *[_type == "recipe" && slug.current == $slug][0]{
    title,
    slug,
    excerpt,
    image,
    prepTime,
    cookTime,
    servings,
    ingredients[]{
      amount,
      notes,
      "ingredient": ingredient-> {
        name,
        slug,
        category,
        image
      }
    },
    instructions,
    "tags": tags[]-> {
      name,
      slug,
      category
    }
  }
`
