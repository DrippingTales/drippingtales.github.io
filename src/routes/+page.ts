import { error } from "@sveltejs/kit"
import type { Release } from "$lib/types"

export async function load({ fetch }) {
  try {
    const response = await fetch("api/releases")
    const releases: Release[] = await response.json()

    return { releases, pageTitle: "About Dripping Tales Records" }
  } catch (_error) {
    error(404, "Nothing here 🤔")
  }
}
