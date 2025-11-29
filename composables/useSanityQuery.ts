export const useSanityQuery = () => {
  async function query(queryString: string, params: any = {}) {
    // Use server API route to avoid CORS and caching issues
    return await $fetch('/api/sanity-query', {
      method: 'POST',
      body: { query: queryString, params },
      headers: {
        'Cache-Control': 'no-cache',
      },
    })
  }

  return { query }
}