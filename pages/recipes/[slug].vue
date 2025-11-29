<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import { recipeDetailQuery } from '~/queries/recipes'

// Page meta
definePageMeta({
  key: (route) => route.fullPath
})

// Route & Composables
const route = useRoute()
const { $sanity } = useNuxtApp()
const { urlFor } = useSanityImage()

// Data fetching
const { data: recipe } = await useAsyncData(
  () => route.fullPath,
  () => $sanity.fetch(recipeDetailQuery, { slug: route.params.slug })
)

// Error handling
if (!recipe.value) {
  throw createError({
    statusCode: 404,
    message: 'Recipe not found'
  })
}
</script>

<template>
  <UContainer class="py-12">
    <div class="max-w-4xl mx-auto">
      <img 
        v-if="recipe.image"
        :src="urlFor(recipe.image).width(1200).url()"
        :alt="recipe.title"
        class="w-full aspect-video object-cover rounded-lg mb-8"
      />
      
      <h1 class="text-4xl font-bold mb-4">{{ recipe.title }}</h1>
      <p class="text-xl text-gray-600 mb-6">{{ recipe.excerpt }}</p>
      
      <div class="flex flex-wrap gap-2 mb-6">
        <UBadge 
          v-for="tag in recipe.tags"
          :key="tag.slug.current"
          color="primary"
          variant="soft"
        >
          {{ tag.name }}
        </UBadge>
      </div>
      
      <div class="grid grid-cols-3 gap-4 mb-8 p-6 bg-gray-50 rounded-lg">
        <div v-if="recipe.prepTime">
          <div class="text-sm text-gray-500">Prep Time</div>
          <div class="text-lg font-semibold">{{ recipe.prepTime }} min</div>
        </div>
        <div v-if="recipe.cookTime">
          <div class="text-sm text-gray-500">Cook Time</div>
          <div class="text-lg font-semibold">{{ recipe.cookTime }} min</div>
        </div>
        <div v-if="recipe.servings">
          <div class="text-sm text-gray-500">Servings</div>
          <div class="text-lg font-semibold">{{ recipe.servings }}</div>
        </div>
      </div>
      
      <UCard class="mb-8">
        <template #header>
          <h2 class="text-2xl font-bold">Ingredients</h2>
        </template>
        
        <ul class="space-y-3">
          <li 
            v-for="(item, index) in recipe.ingredients"
            :key="index"
            class="flex items-center justify-between"
          >
            <NuxtLink 
              :to="`/ingredients/${item.ingredient.slug.current}`"
              class="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <img 
                v-if="item.ingredient.image"
                :src="urlFor(item.ingredient.image).width(50).url()"
                :alt="item.ingredient.name"
                class="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <span class="font-medium">{{ item.ingredient.name }}</span>
                <span v-if="item.notes" class="text-sm text-gray-500 ml-2">({{ item.notes }})</span>
              </div>
            </NuxtLink>
            <span class="text-gray-600">{{ item.amount }}</span>
          </li>
        </ul>
      </UCard>
      
      <UCard v-if="recipe.instructions">
        <template #header>
          <h2 class="text-2xl font-bold">Instructions</h2>
        </template>
        
        <div class="prose prose-lg max-w-none">
          <PortableText :value="recipe.instructions" />
        </div>
      </UCard>
    </div>
  </UContainer>
</template>