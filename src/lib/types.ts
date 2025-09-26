export type Artist = {
  name: string
  slug: string
}

export type Release = {
  name: string
  kind: string
  date: string
  slug: string
}

export type MetaInfo = {
  title?: string
  description?: string
  author?: string
  image?: string
  url?: string
  keywords?: string[]
}
