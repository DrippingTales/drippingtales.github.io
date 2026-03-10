export type SocialLinks = {
  apple_music?: string
  bandcamp?: string
  discord?: string
  deezer?: string
  email?: string
  facebook?: string
  instagram?: string
  soundcloud?: string
  soundcloud_embed?: string
  spotify?: string
  youtube?: string
}

export type Artist = {
  name: string
  slug: string
}

export type Release = {
  name: string
  kind: string
  date: string
  slug: string
  artist?: string
}

export type MetaInfo = {
  title?: string
  description?: string
  author?: string
  image?: string
  url?: string
  keywords?: string[]
}
