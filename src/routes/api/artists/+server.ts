import { json } from "@sveltejs/kit"
import type { Artist } from "$lib/types"

export const prerender = true

async function getArtists() {
  let artists: Artist[] = []

  const paths = import.meta.glob("/src/content/artists/*.md", { eager: true })

  for (const path in paths) {
    const file = paths[path]
    const slug = path.split("/").at(-1)?.replace(".md", "")

    if (file && typeof file === "object" && "frontmatter" in file && slug) {
      const metadata = file.frontmatter as Omit<Artist, "slug">
      const artist = { ...metadata, slug } satisfies Artist
      artists.push(artist)
    }
  }

  return artists
}

export async function GET() {
  const artists = await getArtists()
  return json(artists)
}
