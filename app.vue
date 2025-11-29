<script setup lang="ts">
const route = useRoute()
</script>

<template>
    <div>
        <AppNavigation />
        <NuxtPage :key="route.fullPath" />
    </div>
</template>
