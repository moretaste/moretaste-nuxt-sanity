import imageUrlBuilder from '@sanity/image-url'

export const useSanityImage = () => {
  const { $sanity } = useNuxtApp()
  const builder = imageUrlBuilder($sanity)

  function urlFor(source: any) {
    return builder.image(source)
  }

  return { urlFor }
}
