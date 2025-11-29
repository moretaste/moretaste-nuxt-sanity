import { createClient } from "@sanity/client";

export default defineNuxtPlugin(() => {
  const client = createClient({
    projectId: "erb67ama",
    dataset: "production",
    useCdn: true,
    apiVersion: "2024-01-01",
    perspective: 'published',
    stega: {
      enabled: false,
    },
  });

  return {
    provide: {
      sanity: client,
    },
  };
});
