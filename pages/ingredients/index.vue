<script setup lang="ts">
import { ingredientsListQuery } from '~/queries/ingredients'

// Composables
const { $sanity } = useNuxtApp()
const { urlFor } = useSanityImage()

// Data fetching
const { data: ingredients } = await useAsyncData('ingredients', () =>
  $sanity.fetch(ingredientsListQuery)
)

// Computed properties
const groupedIngredients = computed(() => {
  if (!ingredients.value || !Array.isArray(ingredients.value)) return {}

  return ingredients.value.reduce((acc: Record<string, any[]>, ingredient: any) => {
    const category = ingredient.category || 'other'
    if (!acc[category]) acc[category] = []
    acc[category].push(ingredient)
    return acc
  }, {} as Record<string, any[]>)
})
</script>

<template>
  <UContainer class="py-12">
    <h1 class="text-4xl font-bold mb-8">Ingredients</h1>

    <div v-for="(items, category) in groupedIngredients" :key="category" class="mb-8">
      <h2 class="text-2xl font-bold mb-4 capitalize">{{ category }}</h2>

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <NuxtLink
          v-for="ingredient in items"
          :key="ingredient.slug.current"
          :to="`/ingredients/${ingredient.slug.current}`"
          class="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <img
            v-if="ingredient.image"
            :src="urlFor(ingredient.image).width(100).url()"
            :alt="ingredient.name"
            class="w-16 h-16 rounded-full object-cover mb-2"
          />
          <div class="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center" v-else>
            <span class="text-2xl">🥘</span>
          </div>
          <span class="text-sm font-medium text-center">{{ ingredient.name }}</span>
          <span class="text-xs text-gray-500">{{ ingredient.recipeCount }} recipes</span>
        </NuxtLink>
      </div>
    </div>
  </UContainer>
</template>
