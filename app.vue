<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
</script>

<template>
    <div>
        <AppNavigation />
        <NuxtPage :transition="{
            name: 'page',
            mode: 'out-in'
        }" />
        <SpeedInsights />
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.2s ease;
}

.page-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.page-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
