import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'erb67ama',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

export default defineEventHandler(async (event) => {
  const { query, params } = await readBody(event)

  // Set aggressive no-cache headers
  setHeader(event, 'Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
  setHeader(event, 'Pragma', 'no-cache')
  setHeader(event, 'Expires', '0')

  const data = await client.fetch(query, params)

  return data
})
