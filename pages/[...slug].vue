<script setup lang="ts">
import { pageQuery } from '~/queries/pages'

// Page meta
definePageMeta({
  key: (route) => route.fullPath
})

// Route & Composables
const route = useRoute()
const { $sanity } = useNuxtApp()

// Route params
const slugPath = computed(() =>
  route.params.slug
    ? Array.isArray(route.params.slug)
        ? route.params.slug.join("/")
        : route.params.slug
    : "home"
)

// Data fetching
const { data: page } = await useAsyncData(
  () => route.fullPath,
  () => $sanity.fetch(pageQuery, { slug: slugPath.value })
)

// Error handling
if (!page.value) {
    throw createError({
        statusCode: 404,
        message: "Page not found",
    })
}

// Component mapping
const components: Record<string, any> = {
  hero: resolveComponent('BlockHero'),
  textBlock: resolveComponent('BlockText')
}
</script>

<template>
    <UContainer class="py-12">
        <h1 class="text-4xl font-bold mb-8">{{ page.title }}</h1>
        <div v-if="page.pageBuilder">
            <component 
                v-for="(block, index) in page.pageBuilder"
                :key="index"
                :is="components[block._type]"
                :data="block"
            />
        </div>
    </UContainer>
</template>
