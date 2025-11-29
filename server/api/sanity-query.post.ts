import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'erb67ama',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    if (!body || !body.query) {
      throw createError({
        statusCode: 400,
        message: 'Query is required'
      })
    }

    const { query, params = {} } = body

    // Set aggressive no-cache headers
    setHeader(event, 'Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
    setHeader(event, 'Pragma', 'no-cache')
    setHeader(event, 'Expires', '0')

    const data = await client.fetch(query, params)

    // Ensure we always return valid JSON
    return data ?? null
  } catch (error) {
    console.error('Sanity query error:', error)
    throw createError({
      statusCode: 500,
      message: error instanceof Error ? error.message : 'Failed to fetch data'
    })
  }
})
