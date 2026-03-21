import type { Release } from "$lib/types"

export async function load({ fetch }) {
  const response = await fetch("/api/music")
  const releases: Release[] = await response.json()
  return { releases }
}
