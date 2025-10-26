<script setup lang="ts">
const { $sanity } = useNuxtApp();

const { data: allPages } = await useAsyncData("all-pages", () =>
    $sanity.fetch(`*[_type == "page"]{ title, "slug": slug.current }`),
);
</script>

<template>
    <div>
        <h1>All Pages in Sanity:</h1>
        <pre>{{ allPages }}</pre>
    </div>
</template>
