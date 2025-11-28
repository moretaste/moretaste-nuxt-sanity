<script setup lang="ts">
import { allPagesQuery } from '~/queries/pages'

// Composables
const { query: sanityQuery } = useSanityQuery()

// Data fetching
const { data: allPages } = await useAsyncData('all-pages', () =>
    sanityQuery(allPagesQuery)
)
</script>

<template>
    <div>
        <h1>All Pages in Sanity:</h1>
        <pre>{{ allPages }}</pre>
    </div>
</template>
