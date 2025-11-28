<script setup lang="ts">
import { recipesListQuery } from '~/queries/recipes'

// Composables
const { query: sanityQuery } = useSanityQuery()
const { urlFor } = useSanityImage()

// Data fetching
const { data: recipes } = await useAsyncData('recipes', () =>
  sanityQuery(recipesListQuery)
)

// Computed properties
const groupedRecipes = computed(() => {
  if (!recipes.value) return {}

  const grouped: Record<string, any[]> = { all: [] }

  recipes.value.forEach((recipe: any) => {
    if (grouped.all) {
      grouped.all.push(recipe)
    }

    if (recipe.tags && recipe.tags.length > 0) {
      recipe.tags.forEach((tag: any) => {
        if (tag.category === 'mealType') {
          const tagName = tag.name
          if (!grouped[tagName]) grouped[tagName] = []
          if (!grouped[tagName].find((r: any) => r.slug.current === recipe.slug.current)) {
            grouped[tagName].push(recipe)
          }
        }
      })
    }
  })

  return grouped
})
</script>

<template>
  <UContainer class="py-12">
    <h1 class="text-4xl font-bold mb-8">Recipes</h1>
    
    <div v-for="(items, category) in groupedRecipes" :key="category" class="mb-12">
      <h2 class="text-2xl font-bold mb-6 capitalize">{{ category }}</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="recipe in items"
          :key="recipe.slug.current"
          :to="`/recipes/${recipe.slug.current}`"
          class="flex flex-col rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div class="aspect-video bg-gray-200 relative">
            <img 
              v-if="recipe.image"
              :src="urlFor(recipe.image).width(400).height(300).url()"
              :alt="recipe.title"
              class="w-full h-full object-cover"
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <span class="text-6xl">🍽️</span>
            </div>
          </div>
          
          <div class="p-4 flex-1 flex flex-col">
            <h3 class="text-lg font-semibold mb-2">{{ recipe.title }}</h3>
            <p v-if="recipe.excerpt" class="text-sm text-gray-600 mb-4 line-clamp-2">
              {{ recipe.excerpt }}
            </p>
            
            <div class="mt-auto flex items-center gap-4 text-xs text-gray-500">
              <span v-if="recipe.prepTime">⏱️ {{ recipe.prepTime }} min</span>
              <span v-if="recipe.servings">👥 {{ recipe.servings }}</span>
              <span v-if="recipe.ingredientCount">🥘 {{ recipe.ingredientCount }} ingredients</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </UContainer>
</template>
