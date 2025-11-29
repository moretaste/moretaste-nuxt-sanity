<script setup lang="ts">
import { allPagesQuery } from '~/queries/pages'

// Composables
const { $sanity } = useNuxtApp()

// Data fetching
const { data: allPages } = await useAsyncData('all-pages', () =>
    $sanity.fetch(allPagesQuery)
)
</script>

<template>
    <div>
        <h1>All Pages in Sanity:</h1>
        <pre>{{ allPages }}</pre>
    </div>
</template>
