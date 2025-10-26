import { createClient } from "@sanity/client";

export default defineNuxtPlugin(() => {
  const client = createClient({
    projectId: "erb67ama", // From sanity.config.ts
    dataset: "production",
    useCdn: true,
    apiVersion: "2024-01-01",
  });

  return {
    provide: {
      sanity: client,
    },
  };
});
