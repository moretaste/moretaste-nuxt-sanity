# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Nuxt 4** application with a **Sanity CMS** backend, using a modular page builder architecture. The project consists of two main parts:
- **Nuxt frontend** (root directory) - SSR/ISR-enabled website
- **Sanity Studio** (`/studio` directory) - CMS for content management

## Development Commands

### Nuxt Frontend (Root)
```bash
npm install              # Install dependencies
npm run dev             # Start dev server on localhost:3000
npm run build           # Build for production
npm run generate        # Generate static site
npm run preview         # Preview production build
```

### Sanity Studio (`/studio`)
```bash
cd studio
npm install             # Install Studio dependencies
npm run dev             # Start Sanity Studio (default: localhost:3333)
npm run build           # Build Studio
npm run deploy          # Deploy Studio to Sanity hosting
npm run deploy-graphql  # Deploy GraphQL API
```

## Architecture

### Code Structure & Conventions

All Vue files (pages and components) follow a standardized structure for consistency and maintainability:

**Page Structure** (`/pages/`):
```vue
<script setup lang="ts">
// 1. Imports (queries, external dependencies)
import { queryName } from '~/queries/...'

// 2. Route & Composables
const route = useRoute()
const { query: sanityQuery } = useSanityQuery()
const { urlFor } = useSanityImage()

// 3. Route params (for dynamic routes)
const currentSlug = computed(() => route.params.slug as string)

// 4. Data fetching
const { data } = await useAsyncData('unique-key', () =>
  sanityQuery(queryName, params)
)

// 5. Computed properties
const computed = computed(() => { ... })

// 6. Error handling (if needed)
if (!data.value) {
  throw createError({ statusCode: 404, message: 'Not found' })
}
</script>
```

**Component Structure** (`/components/`):
```vue
<script setup lang="ts">
// 1. Imports (if needed)

// 2. Props
defineProps<{ data: {...} }>()

// 3. Composables (if needed)
const { urlFor } = useSanityImage()

// 4. Computed properties (if needed)
const computed = computed(() => { ... })
</script>
```

**Key Conventions**:
- Use clear section comments to separate concerns
- Import queries from `/queries/` directory, never inline GROQ strings
- Use shared composables (`useSanityQuery`, `useSanityImage`) instead of direct imports
- Type component mappings as `Record<string, any>` for dynamic component resolution
- Always provide unique keys for `useAsyncData` calls

### Page Builder System

The application uses a **modular block-based page builder** pattern:

1. **Content Schema** (`/studio/schemaTypes/`):
   - `page.ts` - Main page document with `pageBuilder` array field
   - `/blocks/` - Individual block type definitions (hero, textBlock, etc.)
   - All blocks must be registered in `/studio/schemaTypes/index.ts`

2. **Frontend Components** (`/components/Block/`):
   - Each Sanity block type has a corresponding Vue component
   - Named as `Block{TypeName}.vue` (e.g., `BlockHero.vue` for `hero` type)
   - Components receive block data via `:data` prop

3. **Dynamic Rendering** (`/pages/[...slug].vue`):
   - Catch-all route fetches page by slug from Sanity
   - Maps block `_type` to component using `resolveComponent()`
   - Renders blocks dynamically with `<component :is="...">`

### Adding New Block Types

When adding a new block type (e.g., "gallery"):

**Backend (Sanity Studio)**:
1. Create schema: `/studio/schemaTypes/blocks/gallery.ts`
2. Register in `/studio/schemaTypes/index.ts`: `import gallery from './blocks/gallery'`
3. Add to `schemaTypes` array
4. Add to `page.ts` pageBuilder `of` array: `{ type: 'gallery' }`

**Frontend (Nuxt)**:
5. Create component: `/components/Block/Gallery.vue` following the component structure:
   ```vue
   <script setup lang="ts">
   // Props
   defineProps<{ data: {...} }>()

   // Composables (if needed)
   const { urlFor } = useSanityImage()
   </script>
   ```
6. Add to component mapping in `/pages/[...slug].vue`:
   ```typescript
   const components: Record<string, any> = {
     hero: resolveComponent('BlockHero'),
     textBlock: resolveComponent('BlockText'),
     gallery: resolveComponent('BlockGallery')  // Add this line
   }
   ```

### Sanity Integration

**Client Setup** (`/plugins/sanity.ts`):
- Provides `$sanity` via Nuxt plugin
- Project ID: `erb67ama`, Dataset: `production`
- CDN enabled for better performance

**Composables**:
- `useSanityQuery()` - Proxy for Sanity queries via API route (`/composables/useSanityQuery.ts`)
- `useSanityImage()` - Image URL builder helper (`/composables/useSanityImage.ts`)

**Query Organization** (`/queries/`):
- All GROQ queries are centralized in separate files by domain
- `queries/pages.ts` - Page builder queries
- `queries/recipes.ts` - Recipe list and detail queries
- `queries/ingredients.ts` - Ingredient list and detail queries
- Import and use queries in pages/components instead of inline GROQ strings

**Data Fetching Pattern**:
```typescript
import { recipeDetailQuery } from '~/queries/recipes'

const { query: sanityQuery } = useSanityQuery()
const { data } = await useAsyncData('unique-key', () =>
  sanityQuery(recipeDetailQuery, { slug })
)
```

### ISR Configuration

Incremental Static Regeneration configured in `nuxt.config.ts`:
- All routes: 3600s (1 hour) cache
- `/contact`: disabled (dynamic form submission)

## Key Configuration

**TypeScript**: Strict mode enabled, type checking disabled during dev for faster builds

**Tailwind**: Uses `@tailwindcss/typography` plugin for rich text rendering

**File Watching**: Polling enabled with 1s interval (configured for compatibility)

**Ignored Paths**: `/studio/**` excluded from Nuxt watching to prevent conflicts

## Environment Variables

Required in `.env`:
```
RESEND_API_KEY=your_key_here  # For contact form email functionality
```

Accessed via `useRuntimeConfig().resendApiKey` (private runtime config)

## Server API Routes

Located in `/server/api/`:
- `contact.post.ts` - Handles contact form submissions via Resend email API
- `sanity-query.post.ts` - Proxy endpoint for Sanity queries (used by `useSanityQuery`)
- API routes follow Nitro/h3 conventions

## Directory Structure

```
/
├── components/
│   ├── App/               # App-level components (Header, Footer, etc.)
│   └── Block/             # Page builder block components
│       ├── Hero.vue       # Hero block component
│       └── Text.vue       # Text block component
├── composables/
│   ├── useSanityQuery.ts  # Sanity query proxy composable
│   └── useSanityImage.ts  # Image URL builder composable
├── pages/
│   ├── ingredients/       # Ingredient pages
│   │   ├── index.vue      # List all ingredients
│   │   └── [slug].vue     # Single ingredient detail
│   ├── recipes/           # Recipe pages
│   │   ├── index.vue      # List all recipes
│   │   └── [slug].vue     # Single recipe detail
│   ├── contact.vue        # Contact form page
│   └── [...slug].vue      # Dynamic page builder pages
├── queries/
│   ├── ingredients.ts     # Ingredient GROQ queries
│   ├── recipes.ts         # Recipe GROQ queries
│   └── pages.ts           # Page builder GROQ queries
├── server/api/
│   ├── contact.post.ts    # Contact form handler
│   └── sanity-query.post.ts # Sanity query proxy
├── studio/                # Sanity Studio (separate app)
│   ├── schemaTypes/       # Content schemas
│   │   ├── blocks/        # Page builder block schemas
│   │   ├── ingredient.ts  # Ingredient schema
│   │   ├── recipe.ts      # Recipe schema
│   │   ├── tag.ts         # Tag schema
│   │   └── page.ts        # Page schema
│   └── package.json       # Studio dependencies
└── CLAUDE.md              # This file
```

## Notes

- The Studio is a separate application with its own `node_modules` and build process
- Both projects share the same Sanity project ID but have independent configurations
- When modifying schemas, Studio must be running for changes to be applied
- The frontend uses CDN mode for Sanity queries (cached, read-only)
