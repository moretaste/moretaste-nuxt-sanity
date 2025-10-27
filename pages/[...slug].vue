<script setup lang="ts">
import { PortableText } from "@portabletext/vue";

const route = useRoute();
const { $sanity } = useNuxtApp();

const slugPath = route.params.slug
    ? Array.isArray(route.params.slug)
        ? route.params.slug.join("/")
        : route.params.slug
    : "home";

const { data: page } = await useAsyncData(`page-${slugPath}`, () =>
  $sanity.fetch(`*[_type == "page" && slug.current == $slug][0]{
    title,
    slug,
    pageBuilder[]{
      ...,
      image{
        asset->{
          _id,
          url
        }
      }
    }
  }`, {
    slug: slugPath
  })
)

if (!page.value) {
    throw createError({
        statusCode: 404,
        message: "Page not found",
    });
}

// Component mapping
const components = {
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
