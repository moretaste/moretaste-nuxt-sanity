export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/ui"],

  icon: {
    localApiEndpoint: "/_nuxt_icon",
  },

  devServer: {
    port: 3333,
  },

  css: ["~/assets/css/main.css"],

  typescript: {
    strict: true,
    typeCheck: false, // Disable during dev
  },

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
  },

  routeRules: {
    "/": { isr: 3600 },
    "/**": { isr: 3600 },
    "/contact": { isr: false },
  },

  // Reduce file watching
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 1000,
      },
    },
    build: {
      // Increase chunk size warning limit
      chunkSizeWarningLimit: 1000,
      // Manual chunks to optimize bundle size
      rollupOptions: {
        output: {
          manualChunks: {
            // Split Sanity client into its own chunk
            sanity: ["@sanity/client", "@sanity/image-url"],
            // Split PortableText into its own chunk
            "portable-text": ["@portabletext/vue"],
          },
        },
      },
      // Disable sourcemaps in production for smaller bundles
      sourcemap: false,
    },
  },

  // Exclude studio from watching
  ignore: ["studio/**"],
});
