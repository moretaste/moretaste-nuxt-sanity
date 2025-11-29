<script setup lang="ts">
import { ingredientDetailQuery, ingredientRecipesQuery } from '~/queries/ingredients'

// Page meta
definePageMeta({
  key: (route) => route.fullPath
})

// Route & Composables
const route = useRoute()
const { query: sanityQuery } = useSanityQuery()
const { urlFor } = useSanityImage()

// Data fetching - use watch to force refetch on route change
const { data: ingredient } = await useAsyncData(
  `ingredient-${route.params.slug}`,
  () => sanityQuery(ingredientDetailQuery, { slug: route.params.slug }),
  {
    watch: [() => route.fullPath],
    server: true,
    lazy: false,
  }
)

const { data: recipes} = await useAsyncData(
  `ingredient-recipes-${route.params.slug}`,
  () => sanityQuery(ingredientRecipesQuery, { slug: route.params.slug }),
  {
    watch: [() => route.fullPath],
    server: true,
    lazy: false,
  }
)
</script>

<template>
  <UContainer class="py-12">
    <div class="max-w-4xl mx-auto">
      <!-- Ingredient Header -->
      <div class="flex items-center gap-6 mb-8">
        <img
          v-if="ingredient.image"
          :src="urlFor(ingredient.image).width(200).url()"
          :alt="ingredient.name"
          class="w-32 h-32 rounded-full object-cover"
        />
        <div>
          <h1 class="text-4xl font-bold mb-2">{{ ingredient.name }}</h1>
          <UBadge v-if="ingredient.category" color="primary" variant="soft">
            {{ ingredient.category }}
          </UBadge>
        </div>
      </div>

      <!-- Recipes using this ingredient -->
      <div>
        <h2 class="text-2xl font-bold mb-6">
          Recipes with {{ ingredient.name }} ({{ recipes?.length || 0 }})
        </h2>

        <div v-if="recipes && recipes.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NuxtLink
            v-for="recipe in recipes"
            :key="recipe.slug.current"
            :to="`/recipes/${recipe.slug.current}`"
          >
            <UCard class="hover:shadow-lg transition-shadow h-full">
              <img
                v-if="recipe.image"
                :src="urlFor(recipe.image).width(600).url()"
                :alt="recipe.title"
                class="w-full aspect-video object-cover rounded-lg mb-4"
              />

              <h3 class="text-xl font-bold mb-2">{{ recipe.title }}</h3>
              <p class="text-gray-600 text-sm mb-3">{{ recipe.excerpt }}</p>

              <div class="flex gap-4 text-sm text-gray-500 mb-3">
                <span v-if="recipe.prepTime">⏱️ {{ recipe.prepTime }}min</span>
                <span v-if="recipe.cookTime">🔥 {{ recipe.cookTime }}min</span>
              </div>

              <div class="flex flex-wrap gap-2">
                <UBadge
                  v-for="tag in recipe.tags"
                  :key="tag"
                  size="xs"
                  variant="soft"
                >
                  {{ tag }}
                </UBadge>
              </div>
            </UCard>
          </NuxtLink>
        </div>

        <div v-else class="text-center py-12 text-gray-500">
          No recipes found using {{ ingredient.name }} yet.
        </div>
      </div>
    </div>
  </UContainer>
</template>
