export const useSanityQuery = () => {
  async function query(queryString: string, params: any = {}) {
    // Use server API route to avoid CORS and caching issues
    return await $fetch('/api/sanity-query', {
      method: 'POST',
      body: { query: queryString, params },
      // Unique key per query to prevent $fetch caching
      key: `sanity-${Date.now()}-${Math.random()}`,
    })
  }

  return { query }
}