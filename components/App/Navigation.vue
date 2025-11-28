<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { navigationPagesQuery } from '~/queries/pages'

// Route & Composables
const route = useRoute()
const { query: sanityQuery } = useSanityQuery()

// Data fetching
const { data: pages } = await useAsyncData('navigation-pages', () =>
  sanityQuery(navigationPagesQuery)
)

// Computed properties
const items = computed<NavigationMenuItem[]>(() => {
  // Filter out "home" page and create Pages dropdown with Home and dynamic Sanity pages
  const filteredPages = (pages.value || []).filter((page: any) => 
    page.slug.current !== 'home'
  )
  
  const pagesDropdown = {
    label: 'Pages',
    icon: 'i-lucide-file-text',
    children: [
      {
        label: 'Home',
        description: 'Welcome to moretaste',
        icon: 'i-lucide-home',
        to: '/'
      },
      ...filteredPages.map((page: any) => ({
        label: page.title,
        description: `Learn more about ${page.title.toLowerCase()}`,
        icon: 'i-lucide-file',
        to: `/${page.slug.current}`
      }))
    ]
  }

  return [
    pagesDropdown,
    {
      label: 'Recipes',
      icon: 'i-lucide-chef-hat',
      to: '/recipes',
      active: route.path.startsWith('/recipes')
    },
    {
      label: 'Ingredients',
      icon: 'i-lucide-carrot',
      to: '/ingredients',
      active: route.path.startsWith('/ingredients')
    },
    {
      label: 'Contact',
      icon: 'i-lucide-mail',
      to: '/contact',
      active: route.path.startsWith('/contact')
    }
  ]
})
</script>

<template>
  <UHeader>
    <template #title>
      <span class="text-2xl font-bold">moretaste</span>
    </template>

    <UNavigationMenu 
      :items="items" 
      :ui="{
        childList: 'grid-cols-1'
      }"
    />

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
