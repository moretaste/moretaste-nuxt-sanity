<script setup lang="ts">
import { PortableText } from "@portabletext/vue";

// Props
defineProps<{
    data: {
        heading?: string;
        content: any[];
    };
}>();
</script>

<template>
    <UCard class="mb-8">
        <h3 v-if="data.heading" class="text-2xl font-bold mb-4">
            {{ data.heading }}
        </h3>
        <div class="prose dark:prose-invert">
            <PortableText :value="data.content" />
        </div>
    </UCard>
</template>
