import type { Artist } from "$lib/types"

export async function load({ fetch }) {
  const response = await fetch("api/artists")
  const artists: Artist[] = await response.json()
  return { artists }
}
