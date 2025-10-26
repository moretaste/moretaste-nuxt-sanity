export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false }, // Disable devtools

  modules: ["@nuxt/ui"],

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
  },

  // Exclude studio from watching
  ignore: ["studio/**"],
});
