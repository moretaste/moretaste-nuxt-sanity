import { createClient } from '@sanity/client'

export default defineEventHandler(async (event) => {
  const { query, params } = await readBody(event)
  
  // Create Sanity client in server context
  const client = createClient({
    projectId: 'erb67ama', // Your project ID
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-01-01',
  })
  
  const data = await client.fetch(query, params)
  
  return data
})