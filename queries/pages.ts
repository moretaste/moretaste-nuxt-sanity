export const pageQuery = `
  *[_type == "page" && slug.current == $slug][0]{
    title,
    slug,
    pageBuilder[]{
      ...,
      image{
        asset->{
          _id,
          url
        }
      }
    }
  }
`

export const navigationPagesQuery = `
  *[_type == "page"] | order(title asc) {
    title,
    slug
  }
`

export const allPagesQuery = `
  *[_type == "page"]{
    title,
    "slug": slug.current
  }
`
