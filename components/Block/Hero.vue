<script setup lang="ts">
import { PortableText } from "@portabletext/vue";

// Props
const props = defineProps<{
    data: {
        title: string;
        subtitle?: string;
        image?: any;
        ctaText?: string;
        ctaLink?: string;
    };
}>();

// Composables
const { urlFor } = useSanityImage();

// Computed properties
const imageUrl = computed(() => {
    return props.data.image ? urlFor(props.data.image).width(1200).url() : null;
});
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
        <div v-if="data.subtitle" class="mt-4 prose dark:prose-invert">
            <PortableText
                v-if="Array.isArray(data.subtitle)"
                :value="data.subtitle"
            />
            <p v-else>{{ data.subtitle }}</p>
        </div>
        <UButton v-if="data.ctaText" :to="data.ctaLink" class="mt-4">
            {{ data.ctaText }}
        </UButton>
    </UCard>
</template>
