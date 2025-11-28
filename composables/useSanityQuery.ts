export const useSanityQuery = () => {
  async function query(queryString: string, params: any = {}) {
    return await $fetch('/api/sanity-query', {
      method: 'POST',
      body: {
        query: queryString,
        params
      }
    })
  }
  
  return { query }
}