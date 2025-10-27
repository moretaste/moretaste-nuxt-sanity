<script setup lang="ts">
import imageUrlBuilder from '@sanity/image-url'

const props = defineProps<{
  data: {
    title: string
    subtitle?: string
    image?: any
    ctaText?: string
    ctaLink?: string
  }
}>()

const { $sanity } = useNuxtApp()

// Create image URL builder
const builder = imageUrlBuilder($sanity)

function urlFor(source: any) {
  return builder.image(source)
}

// Get optimized image URL
const imageUrl = computed(() => {
  const url = props.data.image 
    ? urlFor(props.data.image).width(1200).url()
    : null
  return url
})
</script>

<template>
  <UCard class="mb-8">
    <img 
      v-if="imageUrl" 
      :src="imageUrl" 
      :alt="data.title"
      class="w-full object-cover rounded-lg mb-4"
    />
    <h2 class="text-3xl font-bold">{{ data.title }}</h2>
    <p v-if="data.subtitle" class="mt-4 text-gray-600">{{ data.subtitle }}</p>
    <UButton v-if="data.ctaText" :to="data.ctaLink" class="mt-4">
      {{ data.ctaText }}
    </UButton>
  </UCard>
</template>