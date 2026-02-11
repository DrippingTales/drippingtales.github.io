import type { Release } from "$lib/types"

export async function load({ fetch }) {
  const response = await fetch("/api/releases")
  const releases: Release[] = await response.json()
  return { releases }
}
